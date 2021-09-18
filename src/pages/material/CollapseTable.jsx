import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 450,
  },
  container: {
    maxHeight: 500,
    overflow: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  dialogButtonSection: {
    padding: "8px 20px",
    justifyContent: "space-between",
  },
  floatRight: {
    position: "absolute",
    top: 3,
    right: 3,
  },
  colTable: {
    "& > *": {
      borderBottom: "unset",
    },
    cursor: "pointer",
  },
  answerStyle: {
    background: "aliceblue",
    borderRadius: "5px",
    padding: "10px",
  },
}));

const CollapseTable = () => {
  const classes = useStyles();

  const [list, setList] = useState([
    {
      name: "jamal",
      title: "Animal",
      desciption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      status: true,
    },
    {
      name: "Tutul",
      title: "Bird",
      desciption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      status: false,
    },
    {
      name: "Tutul",
      title: "Fish",
      desciption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      status: true,
    },
  ]);
  const [detailViewItem, setDetailViewItem] = useState({});
  const [openDetailView, setOpenDetailView] = useState(false);
  const [editObj, setEditObj] = useState({});
  const [editIndexNo, setEditIndexNo] = useState(0);
  const [message, setMessage] = useState("There is no data");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [collapseId, setCollapseId] = useState(0);

  const handleClickOpenDetailView = () => {
    setOpenDetailView(true);
  };

  const handleCloseDetailView = () => {
    setOpenDetailView(false);
  };

  const handleClickView = (item) => {
    setDetailViewItem(item);
    handleClickOpenDetailView();
  };

  const getList = async (cId) => {
    setLoading(true);
    try {
      let response = await axios({
        url: `url`,
        method: "get",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      console.log("errorresponse", error.response);
    }
    setLoading(false);
  };

  const pageLoading = () => {
    let content = [];

    for (let i = 0; i < 5; i++) {
      content.push(
        <TableRow key={i}>
          <TableCell>
            <Skeleton></Skeleton>
          </TableCell>
          <TableCell>
            <Skeleton></Skeleton>
          </TableCell>
          <TableCell>
            <Skeleton></Skeleton>
          </TableCell>
        </TableRow>
      );
    }
    return content;
  };

  const collapseOpen = (id) => {
    setCollapseId(id);
    if (collapseId !== id) {
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };
  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={12}>
          <Typography variant="h6" gutterBottom>
            Collapsible Table
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "400px" }}>Title</TableCell>

                  <TableCell align="center" style={{ width: "80px" }}>
                    Status
                  </TableCell>
                  <TableCell align="center" style={{ width: "200px" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.length > 0
                  ? list.map((row, i) => (
                      <React.Fragment key={i}>
                        <TableRow className={classes.colTable}>
                          <TableCell>
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => collapseOpen(i)}
                            >
                              {i === collapseId && open ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </IconButton>
                            {row.title}
                          </TableCell>

                          <TableCell align="center">
                            {row.status ? <CheckIcon /> : <ClearIcon />}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="default"
                              onClick={() => handleClickView(row)}
                            >
                              <VisibilityIcon />
                            </IconButton>
                            <IconButton
                              color="primary"
                              onClick={() => {
                                setEditIndexNo(i);
                                setEditObj(row);
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton color="secondary">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={3}
                          >
                            <Collapse
                              in={i === collapseId && open}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box margin={1} className={classes.answerStyle}>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  component="div"
                                >
                                  {row.desciption}
                                </Typography>
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))
                  : null}
                {!loading && list.length < 1 ? (
                  <TableRow>
                    <TableCell colSpan="4" style={{ textAlign: "center" }}>
                      {message}
                    </TableCell>
                  </TableRow>
                ) : null}
                {loading && pageLoading()}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <div>
        <Dialog
          open={openDetailView}
          onClose={handleCloseDetailView}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <IconButton
              className={classes.floatRight}
              onClick={handleCloseDetailView}
            >
              <Clear />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            {detailViewItem ? (
              <div>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Title
                        </TableCell>
                        <TableCell align="right">
                          {detailViewItem.title}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Desciption
                        </TableCell>
                        <TableCell align="right">
                          {detailViewItem.desciption}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component="th" scope="row">
                          Status
                        </TableCell>
                        <TableCell align="right">
                          {detailViewItem.status ? (
                            <Typography variant="h6" style={{ color: "green" }}>
                              Available
                            </Typography>
                          ) : (
                            <Typography variant="h6" style={{ color: "red" }}>
                              Not Available
                            </Typography>
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CollapseTable;
