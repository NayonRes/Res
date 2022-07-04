import React, { useState } from "react";
import OtpInput from "react-otp-input";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  contactParent: {
    height: "50px",
    width: "100%",
    background: "wheat",
    position: "absolute",
    top: "0px",
    // transition: "1s",
    background: "black",
  },
  main: {
    width: "50px",
    height: "50px",
    border: "1px solid #76D7C4",
    background: "rgba(255,255,255,0)",
    borderRadius: "50%",
    margin: "auto",
    position: "relative",
  },
  contactStyle: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    position: "absolute",
    top: "0px",
    background: "none",
    overflow: "hidden",
    zIndex: -1,
    // visibility: "hidden",
    // display: "none",
    transition: "0.5s",

    // "&:hover": {
    //   top: "-50px",
    // },
  },
  detail: {
    color: "#fff",
    overflowX: "hidden",
    whiteSpace: "nowrap",
    height: "100%",
    display: "flex",
    alignItems: "center",
    background: "#76D7C4",
    borderRadius: "5px",
  },
  leftArrow: {
    color: "#76D7C4",
    fontSize: "60px",
    position: "absolute",
    bottom: "-20px",
    left: "-7px",
    visibility: "hidden",
    transition: "0.5s",
  },
}));
const ContactAnimate = () => {
  const classes = useStyles();

  let myDesign;
  let myDesign2;
  function myStopFunction() {
    console.log("myStopFunction");
    clearTimeout(myDesign);
    clearTimeout(myDesign2);
  }
  function myStopFunction2() {
    console.log("myStopFunction");

    clearTimeout(myDesign2);
  }
  const showAnimate = (id, arrow, position) => {
    console.log("showAnimate", position);

    // document.getElementById(id).style.visibility = "visible";
    // document.getElementById(id).style.display = "block";
    // document.getElementById(id).style.border = "3px solid rgba(255,255,255,0)";
    document.getElementById(id).style.top = "-70px";

    myDesign = setTimeout(() => {
      document.getElementById(id).style.borderRadius = "5px";
      document.getElementById(id).style.width = "200px";
      if (position === "center") {
        document.getElementById(id).style.left = "calc(100% - 127px)";
      }
    }, 500);

    myDesign2 = setTimeout(() => {
      console.log(arrow);
      document.getElementById(id).style.overflow = "inherit";
      document.getElementById(arrow).style.visibility = "visible";
      document.getElementById(arrow).style.bottom = "-30px";
    }, 1000);
  };
  const hideAnimate = (id, arrow) => {
    console.log("hideAnimate");
    myStopFunction();
    myStopFunction2();
    // ======================     Arrow   =================

    document.getElementById(arrow).style.visibility = "hidden";
    document.getElementById(arrow).style.bottom = "-20px";
    // ======================     Child   =================

    // document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.width = "50px";
    document.getElementById(id).style.borderRadius = "50%";
    document.getElementById(id).style.top = "0px";
    document.getElementById(id).style.overflow = "hidden";
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container style={{ background: "none" }}>
        <Grid item xs={4}>
          <div
            className={classes.main}
            onMouseOver={() => showAnimate("emailChild", "emailArrow")}
            onMouseLeave={() => hideAnimate("emailChild", "emailArrow")}
          >
            <div className={classes.contactStyle} id="emailChild">
              <div className={classes.detail}>
                <MailOutlineIcon
                  style={{ padding: "0 15px", fontSize: "20px" }}
                />
                <span style={{ marginTop: "-5px" }}> nayon@gmail.com </span>
              </div>
              <ExpandMoreIcon id="emailArrow" className={classes.leftArrow} />
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            className={classes.main}
            onMouseOver={() => showAnimate("phone", "phoneArrow", "center")}
            // onMouseLeave={() => hideAnimate("phone", "phoneArrow", "center")}
          >
            <div className={classes.contactStyle} id="phone">
              <div className={classes.detail} style={{ textAlign: "center" }}>
                <PhoneIphoneIcon
                  style={{ padding: "0 15px", fontSize: "20px" }}
                />
                <span style={{ marginTop: "-5px" }}>+8801793661517 </span>
              </div>
              <ExpandMoreIcon
                id="phoneArrow"
                className={classes.leftArrow}
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div
            onClick={() => hideAnimate("phone", "phoneArrow", "center")}
            style={{
              width: "50px",
              height: "50px",
              background: "green",
              borderRadius: "50%",
            }}
          ></div>
        </Grid>
      </Grid>
      {/* <div
        style={{ position: "relative", height: "50px", border: "1px solid" }}
      >
      <div className={classes.emailChild} id="emailChild"></div> 
       <div className={classes.contactParent}></div>
      </div> */}
    </>
  );
};

export default ContactAnimate;
