import React, {useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, MenuItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import userImage from "../../assets/images/user4.png";
// import bell4 from "../../assets/images/bell4.png";
// import IconBackArrow from "../../assets/images/IconBackArrow.png";
// import red from "../../assets/images/red.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    paddingRight: 8,
    paddingLeft: 8,
    // width: "250px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      // backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },

    "&:hover": {
      background: "rgba(255, 235, 185, 0.7)",
    },
    margin: "5px 0",
    fontSize: "14px",

    // background:'white',
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  flexStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    height: "65px",
    padding: "0px 160px",
  },
  flexStyle2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "black",
    // marginTop: 22,
    height: "100%",
  },
  leftItemPadding: {
    padding: "0 40px 0 0",
  },
  rightItemPadding: {
    padding: "0 0 0 15px",
    cursor: "pointer",
  },
  bell: {
    padding: "10px 0 0 15px",
    cursor: "pointer",
    position: "relative",
  },
  red: {
    position: "absolute",
    top: 4,
    right: -7,
  },
  buttonItemPadding: {
    padding: "0 0 0 10px",
  },
  menuItem: {
    borderBottom: "1px solid #eee",
    cursor: "default",
  },
  backButton: {
    fontSize: "16px",
    textTransform: "capitalize",
    "&:hover": {
      background: "none",
    },
    color: "#19181699",
  },
  imageStyle: {
    borderRadius: "50%",
  },
  linkStyle:{
    textDecoration:'none',
    color:'black'
  }
}));
const Topbar = () => {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let path = location.pathname;
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMaterial, setAnchorElMaterial] = useState(null);
//===========================Image DropDown start==================================
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToSingleImage = () => {
    setAnchorEl(null);
    history.push("/single-image");
  };
  const redirectToMultiImage = () => {
    setAnchorEl(null);
    history.push("/multi-image");
  };
  const redirectToDropzoneImage = () => {
    setAnchorEl(null);
    history.push("/dropzone-image");
  };
//===========================Image DropDown End==================================
//===========================Material DropDown start==================================

  const handleClickMaterial = (event) => {
    setAnchorElMaterial(event.currentTarget);
  };
  const handleCloseMaterial = () => {
    setAnchorElMaterial(null);
  };

  const redirectToCollapseTable = () => {
    setAnchorElMaterial(null);
    history.push("/collapse-table");
  };
//===========================Material DropDown End==================================
  return (
    <div style={{ background: "#9ACD32" }}>
      <div className={classes.flexStyle}>
        <div style={{ flex: 1 }}>Item 1</div>

        {/* ========================================================================= */}
        <div style={{ flex: 1 }}>
          <div className={classes.flexStyle2}>
          <div className={`${classes.rightItemPadding}`}>
          <Link to="/password-validation" className={classes.linkStyle}>
          Password Validation
          </Link>
       
          </div>
            <div className={`${classes.flexStyle} ${classes.rightItemPadding}`}>
              <div className={classes.buttonItemPadding}>
                <Button
                  aria-controls="simple-menu-material"
                  aria-haspopup="true"
                  onClick={handleClickMaterial}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  Material
                  <ExpandMoreIcon style={{ color: "#666" }} />
                </Button>
                <StyledMenu
                  id="simple-menu-material"
                  anchorEl={anchorElMaterial}
                  keepMounted
                  open={Boolean(anchorElMaterial)}
                  onClose={handleCloseMaterial}
                >
                  <StyledMenuItem onClick={redirectToCollapseTable}>
                    Collapse Table
                  </StyledMenuItem>
                  {/* <StyledMenuItem onClick={redirectToMultiImage}>
                    Multiple Image
                  </StyledMenuItem>
                  <StyledMenuItem onClick={redirectToDropzoneImage}>
                    DropZone Image
                  </StyledMenuItem> */}
                </StyledMenu>
              </div>
            </div>
            <div className={`${classes.flexStyle} ${classes.rightItemPadding}`}>
              <div className={classes.buttonItemPadding}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {/* <img src={userImage} alt="" className={classes.imageStyle} />
                  <span
                    style={{
                      marginLeft: 15,
                      fontSize: "1.2rem",
                      color: "#666",
                      textTransform: "capitalize",
                    }}
                  >
                    Your Name
                  </span> */}
                  Image
                  <ExpandMoreIcon style={{ color: "#666" }} />
                </Button>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <StyledMenuItem onClick={redirectToSingleImage}>
                    Single Image
                  </StyledMenuItem>
                  <StyledMenuItem onClick={redirectToMultiImage}>
                    Multiple Image
                  </StyledMenuItem>
                  <StyledMenuItem onClick={redirectToDropzoneImage}>
                    DropZone Image
                  </StyledMenuItem>
                </StyledMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
