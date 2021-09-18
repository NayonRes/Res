// Checked

import React, { useState, useMemo, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles(() => ({
  marginBottomStyle: {
    marginBottom: "30px",
  },

  inputStyle: {
    borderRadius: "8px",
  },
  inputStyle2: {
    borderRadius: "8px",
    // "& .MuiInputBase-input": {
    //   color: "#A2A2A2",
    // },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      fontSize: "14px",
      padding: 13,
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "#fff",
    },
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
  selectStyle: {
    textAlign: "left",

    "& img": {
      position: "relative",
      top: "2px",
      marginRight: "5px",
    },
  },
  selectItemStyle: {
    fontWeight: 600,
  },
  muteColor: {
    color: "#19181666",
  },
  inputRoot: {
    "& .MuiOutlinedInput-input": {
      // color: "green",
      // fontWeight: 600,
    },
    "& .MuiInputLabel-root": {
      // color: "green",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: "#eee",
      // backgroundColor: "#eee",
      color: "#333",
    },
    "&:hover .MuiOutlinedInput-input": {
      // color: "red",
    },
    "&:hover .MuiInputLabel-root": {
      // color: "red",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: "red",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      // color: "purple",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      // color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      // borderColor: "purple",
    },
  },
  flag: {
    marginRight: 10,
  },
  select: {
    "& .MuiSelect-select:focus": {
      backgroundColor: "#fff",
      borderWidth: 0,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    padding: "5px",
    height: 45,
    borderRadius: 8,
  },
  buttonStyle: {
    border: "1px solid #19181666",
    background: "rgba(0,0,0,0)",
    padding: "10px 20px",
    fontSize: "14px",
    color: "#19181666",
    // fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: "8px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      background: "rgba(0,0,0,0)",
      border: "1px solid black",
    },
  },

  textStyle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));
const DropZoneImage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  //=========================Drop Zone======================================
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    // width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  const baseStyle = {
    // flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // padding: "20px",
    // borderWidth: 2,
    // borderRadius: 2,

    // backgroundColor: "#fafafa",
    // color: "#bdbdbd",
    borderColor: "rgba(0,0,0,0)",
    borderStyle: "dashed",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    // borderColor: "#2196f3",
    borderColor: "blue",
  };

  const acceptStyle = {
    // borderColor: "#00e676",
    borderColor: "#FEBF03",
    backgroundColor: "#ddd",
  };

  const rejectStyle = {
    // borderColor: "#ff1744",
    borderColor: "red",
  };
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    // accept: 'image/jpeg,image/jpg, image/png',
    // accept:  "application/pdf",
    // maxFiles: 1,
    onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  console.log("style", isDragActive);
  const filesDetail = acceptedFiles.map((file) => (
    <label key={file.path}>
      {file.path} - {file.size} bytes &nbsp;&nbsp; &nbsp;
    </label>
  ));
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  const testing = () => {
    console.log("acceptedFiles", acceptedFiles);
    console.log("files", files);
  };
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [acceptedFiles]);
  // ==================================================================
  return (
    <>
      <button onClick={testing}>testing</button>
      <div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
       

          <Typography variant="h4" className={classes.marginBottomStyle}>
            Drop Zone
          </Typography>

          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={9}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Button
                    onClick={open}
                    variant="contained"
                    className={classes.buttonStyle}
                  >
                    Drag & Drop or Browse
                  </Button>
                </Grid>
                <Grid item xs={8} className={classes.textStyle}>
                  <label>
                    {acceptedFiles.length > 0 ? <>{filesDetail}</> : "No file chosen"}
                  </label>{" "}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      {thumbs}
    </>
  );
};

export default DropZoneImage;
