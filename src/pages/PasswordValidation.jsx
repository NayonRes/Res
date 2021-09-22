import React, { useState,useEffect } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Brightness1OutlinedIcon from "@material-ui/icons/Brightness1Outlined";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paddingBottomStyle: {
    paddingBottom: "8px",
  },
}));
const PasswordValidation = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [letter, setLetter] = useState(false);
  const [minCharacter, setMinCharacter] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [digit, setDigit] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const validatePassword=()=> {
    // var password = "",
    var errors = [];
    if (password.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one letter.");
      setLetter(false);
    } else {
      setLetter(true);
    }
    if (password.length < 8) {
      errors.push("Your password must be at least 8 characters");
      setMinCharacter(false);
    } else {
      setMinCharacter(true);
    }

    if (password.search(/[a-z]/) < 0) {
      errors.push("Your password must contain at least one lowercase letter.");
      setLowercase(false);
    } else {
      setLowercase(true);
    }

    if (password.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one uppercase letter.");
      setUppercase(false);
    } else {
      setUppercase(true);
    }
    if (password.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
      setDigit(false);
    } else {
      setDigit(true);
    }
    if (password.search(/[!@#$%^&*]/) < 0) {
      errors.push("Your password must contain at least one special character.");
      setSpecialCharacter(false);
    } else {
      setSpecialCharacter(true);
    }
    // if (errors.length > 0) {
    //   alert(errors.join("\n"));
    //   return false;
    // }
    // if (errors.length <= 0) {
    //   alert("Successful");
    //   return false;
    // }
    return true;
  }
  useEffect(() => {
     validatePassword();
  }, [password])
  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validatePassword}>Check</button>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{letter ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must contain at least one letter.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{minCharacter ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must be at least 8 characters.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{lowercase ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must contain at least one lowercase letter.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{uppercase ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must contain at least one uppercase letter.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{digit ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must contain at least one digit.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        className={classes.paddingBottomStyle}
      >
        <Grid>{specialCharacter ? <CheckIcon /> : <ClearIcon />}</Grid>
        <Grid>
          <Typography variant="body2">
          Your password must contain at least one special character.
          </Typography>
        </Grid>
      </Grid>
     
      
    </div>
  );
};

export default PasswordValidation;
