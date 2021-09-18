import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
// import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Topbar from "./Topbar";
import logo from "../../assets/images/logo4.png";
import cashDelivery4 from "../../assets/images/cashDelivery4.png";
import help4 from "../../assets/images/help4.png";
import history4 from "../../assets/images/history4.png";
import HomeIcon4 from "../../assets/images/HomeIcon4.png";
import logout4 from "../../assets/images/logout4.png";
import transferMoneyIcon4 from "../../assets/images/transferMoneyIcon4.png";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../route/Navigation";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menu_item: {
    minWidth: 45,
    paddingLeft: 8,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  listStyle: {
    padding: "8px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },

  logo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  listItemStyle: {
    marginBottom: "10px",
    borderRadius: "8px",
    "&:hover": {
      background: "rgba(255, 235, 185, 0.7)",
    },
  },
  active: {
    background: "rgba(255, 235, 185, 1)",
    marginBottom: "10px",
    borderRadius: "8px",
    "&:hover": {
      background: "rgba(255, 235, 185, 1)",
    },
  },
  appBarColor: {
    backgroundColor: "#FAFAFC",
    boxShadow: "0 0 0 0",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let location = useLocation();
  let path = location.pathname;

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  if (
    path === "/" ||
    path === "/login" ||
    path === "/forgot-password" ||
    path === "/reset-password" ||
    path === "/reset-successful" ||
    path === "/email-sent"
  ) {
    return <Navigation />;
  }else{
  return (
<div className={classes.root}>
          <CssBaseline />

          <AppBar
            position="fixed"
            className={clsx(classes.appBar, classes.appBarColor, {
              [classes.appBarShift]: open,
            })}
          >
            <Topbar />
          </AppBar>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <Link to="/home" className={classes.logo}>
                <img src={logo} alt="" />
              </Link>
              {/* <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton> */}
            </div>

            <List className={classes.listStyle}>
              <Link to="/home">
                <ListItem
                  button
                  className={
                    path === "/home" ? classes.active : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={HomeIcon4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/transfer-money">
                <ListItem
                  button
                  className={
                    path === "/transfer-money" ||
                    path === "/money-transfer" ||
                    path === "/money-picked" ||
                     path === "/money-deposited"
                      ? classes.active
                      : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={transferMoneyIcon4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Transfer Money" />
                </ListItem>{" "}
              </Link>
              <Link to="/cash-delivery">
                <ListItem
                  button
                  className={
                    path === "/cash-delivery" ||
                    path === "/transfer-receipt" ||
                    path === "/receiver-authentication" ||
                    path === "/confirm-delivery"
                      ? classes.active
                      : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={cashDelivery4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Cash Delivery" />
                </ListItem>{" "}
              </Link>
              <Link to="/transactions">
                <ListItem
                  button
                  className={
                    path === "/transactions"||
                    path === "/transaction-details"
                      ? classes.active
                      : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={history4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Transactions" />
                </ListItem>{" "}
              </Link>
              <Link to="/help-center">
                <ListItem
                  button
                  className={
                    path === "/help-center"
                      ? classes.active
                      : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={help4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Help Center" />
                </ListItem>
              </Link>
              <Link to="/login">
                <ListItem
                  button
                  className={
                    path === "/login" ? classes.active : classes.listItemStyle
                  }
                >
                  <ListItemIcon className={classes.menu_item}>
                    <img src={logout4} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </Link>
            </List>
          </Drawer>

          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Navigation />
          </main>
        </div>
  )}
};

export default Sidebar;
