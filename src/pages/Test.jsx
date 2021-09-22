import React, { useState, useEffect } from "react";

const Test = () => {
  const [over, setOver] = useState(true);
  const [leave, setLeave] = useState(true);
  const [refresh, setrefresh] = useState(false);
  const dragLeave = (e) => (
    e.preventDefault(),
    console.log("dragLeave"),
    setOver(false)
    // setLeave(!leave),
    // setrefresh(!refresh)
  );


  // const dragOver = (e) => (
  //   e.preventDefault(),
  //   console.log("dragOver")
  //   // setOver(!over),
  //   // setLeave(!leave),
  //   // setrefresh(!refresh)
  // );

  
  const dragEnter = (e) => (
    e.preventDefault(),
    console.log("dragEnter"),
    setOver(true)
    // setLeave(!leave),
    // setrefresh(!refresh)
  );
  useEffect(() => {
  }, []);
  return (
    <div
      style={{
        height: "200px",
        border: "1px solid green",
        textAlign: "center",
      }}
      // onDragOver={(e) => dragOver(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragLeave={(e) => dragLeave(e)}


      // onDragOver={(e) => {
      //   over && dragOver(e);
      // }}
     
      // onDragLeave={(e) => dragLeave(e)}
      
      // onDragLeave={(e) => {
      //   leave && dragLeave(e);
      // }}
    >
      Drag And Drop Working
      <p>{over && "Over"}</p>
      <p>{leave && "leave"}</p>
    </div>
  );
};

export default Test;
