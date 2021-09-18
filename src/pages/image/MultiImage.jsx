import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  rightAlign: {
    textAlign: "right",
  },

  buttonStyle: {
    padding: "10px 32px",
    fontSize: "16px",
    color: "white",
    fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: "8px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  uploadButtonStyle: {
    padding: "10px 32px",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: "8px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  backButton: {
    fontSize: "16px",
    textTransform: "capitalize",
    "&:hover": {
      background: "none",
    },
    color: "#19181699",
  },

  marginRightStyle: {
    marginRight: 15,
  },

  textField: {
    [`& fieldset`]: {
      borderRadius: 8,
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: 13,
    },
  },
  imageStyle: {
    borderRadius: "50%",
  },
  imageDivStyle: {
    margin: "30px 0 20px",
  },
  divMarginStyle: {
    margin: "40px 0",
  },
}));

const MultiImage = () => {
  const classes = useStyles();
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState();
  const [allFiles, setAllFiles] = useState([]);
  const [allImagePreview, setAllImagePreview] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [load, setLoad] = useState(false);

  const showPreview = async (e) => {
    console.log("showPreview");
    if (e.target.files) {
      console.log("if");
      let files = e.target.files;
      console.log("imageFile", files);
      if (files.length > 0) {
        const joined = Array.from(allFiles).concat(Array.from(files));
        setAllFiles(joined);
      } else {
        setAllFiles(allFiles);
      }

      await Array.prototype.forEach.call(files, function (file) {
        const reader = new FileReader();
        reader.onload = (x) => {
          console.log("x", x);
          let imageObj = {
            name: file.name,
            size: file.size,
            preview: x.target.result,
          };
          console.log("imageObj", imageObj);
          allImagePreview.push(imageObj);
          // allImagePreview.push(x.target.result);
          setRefresh(!refresh);
        };
        reader.readAsDataURL(file);
      });
    } else {
      console.log("else");
      setImageFile(allFiles);
      setPreview(allImagePreview);
    }

    setTimeout(function () {
      setLoad(!load);
    }, 300);
  };

  const clickUpload = () => {
    document.getElementById("imageUpload").click();
  };
  const Check = () => {
    console.log("image", allFiles);
    console.log("allImagePreview", allImagePreview);
  };
  const removeImage = (i) => {
    console.log("removeImage");
    allImagePreview.splice(i, 1);
    allFiles.splice(i, 1);
    setRefresh(!refresh);
  };
  return (
    <>
      <button onClick={Check}>Check</button>
      <button onClick={showPreview}>Run</button>
      <button onClick={() => setLoad(!load)}>Refresh</button>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {allImagePreview &&
          allImagePreview.map((e, i) => (
            <div
              key={i}
              style={{
                margin: "30px 30px 30px 0",
                width: "200px",
                border: "2px solid green",
                padding: "10px",
              }}
            >
              <img src={e.preview} alt="" height="120px" width="120px" />
              <hr />
              <p>Name : {e.name}</p>
              <p>Size : {e.size} kb</p>
              <span
                style={{
                  cursor: "pointer",
                  background: "#ddd",
                  padding: "5px 7px",
                }}
                onClick={() => removeImage(i)}
              >
                X
              </span>
            </div>
          ))}
      </div>
      <input
        type="file"
        name="file"
        id="imageUpload"
        hidden
        accept="image/*"
        onChange={showPreview}
        multiple
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.uploadButtonStyle}
        onClick={clickUpload}
      >
        Upload Picture
      </Button>{" "}
      <label>
        {allFiles.length > 0 ? (
          <>
            {allFiles.length} Image{allFiles.length > 1 && "s"} uploaded
          </>
        ) : (
          "No image chosen"
        )}
      </label>
    </>
  );
};

export default MultiImage;
