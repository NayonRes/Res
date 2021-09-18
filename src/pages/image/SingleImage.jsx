import React, { useState } from "react";
import {

  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";
import NoImage from "../../assests/images/NoImage.jpg";
import moment from "moment";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));
const SingleImage = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(NoImage);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  const imageProcess = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.onload = (x) => {
        setImageFile(imageFile);
        setPreview(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImageFile(null);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    let formatedDate = moment(date).format("YYYY-MM-DD");
    const formdata = new FormData();
    formdata.append("name", name);

    formdata.append("date", formatedDate);
    formdata.append("image", imageFile);

    try {
      let res = await axios({
        url: "url",
        method: "POST",
        data: formdata,
      });
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Single Image</h3>
      <form onSubmit={handleCreate}>
        <Grid item md={12}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Book Title"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>

        <Grid item md={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifycontent="space-around">
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="dd-MMM-yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={12}>
          <div>
            <img
              src={preview}
              alt=""
              height="120px"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>

          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={imageProcess}
          />

          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              style={{ marginTop: "15px" }}
              fullWidth
            >
              <PhotoCamera /> Upload Image
            </Button>
          </label>
        </Grid>

     
      </form>
    </div>
  );
};

export default SingleImage;
