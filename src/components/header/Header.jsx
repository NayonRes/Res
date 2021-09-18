//Checked 100%

import React from "react";
import Grid from "@material-ui/core/Grid";
import logo4 from "../../assets/images/logo4.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    fontSize: 20,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      background: "none",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    background: "white",
    padding: "5px 60px 0 30px",
    borderBottom: "1.3px solid #00000017",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [language, setLanguage] = React.useState(10);
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.headerStyle}
      >
        <Grid item>
          <Link to="/login">
            <img src={logo4} alt="" height="56px" />
          </Link>
        </Grid>
        <Grid item>
          <FormControl fullWidth>
            <Select
              labelId="language-select-label"
              id="language-customized-select"
              value={language}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Bangla</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
