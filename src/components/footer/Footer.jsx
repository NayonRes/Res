import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    background: "white",
    padding: "8px 60px",
    borderTop: "1.3px solid #00000017",
    height:'100%',
  },
  muteColor: {
    color: "#19181666",
  },
  marginLeftStyle: {
    marginLeft: "25px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" className={classes.footerStyle}>
        <Grid item xs={6}>
          <Typography variant="body2" className={classes.muteColor}>
            Copyright (c) 2020-2021 GlobPay Services.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="flex-end">
            <Grid>
              <Typography
                variant="body2"
                className={`${classes.marginLeftStyle} ${classes.muteColor}`}
              >
                Terms
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="body2"
                className={`${classes.marginLeftStyle} ${classes.muteColor}`}
              >
                Privacy & Security
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="body2"
                className={`${classes.marginLeftStyle} ${classes.muteColor}`}
              >
                Contact Us
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
