import React, { useState } from "react";
import OtpInput from "react-otp-input";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  newInputStyle: {
    background: "none",
    minWidth: "80px",
    minHeight: "80px",
    fontSize: "24px",
    borderRadius: "3px",
    border: "1px solid green",
  },
  newFocusStyle: {
    // background: "red",
    minWidth: "80px",
    minHeight: "80px",
    borderRadius: "3px",
    border: "2px solid red",
    outline: "none !important",
  },
}));
const OTP = () => {
  const classes = useStyles();
  const [myOTP, setMyOTP] = useState({ otp: "" });

  const handleChange = (otp) => {
    setMyOTP({ otp });
    console.log("otp", otp);
    console.log("myOTP", myOTP.otp);
  };

  let testingStyle = {
    background: "none",
    minWidth: "80px",
    minHeight: "80px",
    borderRadius: "3px",
    border: "1px solid green",
  };

  return (
    <>
      <div>
        <OtpInput
          value={myOTP.otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span>&nbsp; &nbsp; &nbsp;</span>}
          isInputNum={true}
          shouldAutoFocus={true}
          isInputSecure={true}
          // containerStyle={testingStyle}
          inputStyle={classes.newInputStyle}
          focusStyle={classes.newFocusStyle}
        />
      </div>
    </>
  );
};

export default OTP;
