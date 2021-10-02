import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    border: "1px solid green",
    width: "80%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  divStyle: {
    background: "blue",
    height: "80%",
    width: "20%",
    position: "absolute",
    left: "0%",
  },
  leftDiv: {
    background: "blue",
    height: "80%",
    width: "20%",
    position: "absolute",
    left: "0%",
  },
  centerDiv: {
    background: "Yellow",
    height: "80%",
    width: "20%",
    position: "absolute",
    left: "40%",
  },
  rightDiv: {
    background: "green",
    height: "80%",
    width: "20%",
    position: "absolute",
    left: "80%",
  },
}));

const Header1 = () => {
  const classes = useStyles();
  const [divSize, setDivSize] = useState(20);
  const [centerPosition, setCenterPosition] = useState(50 - divSize / 2);

  const [divID, setDivID] = useState([]);
  const mydivs = [
    { name: "10" },
    { name: "20" },
    { name: "30" },
    { name: "40" },
    { name: "50" },
    { name: "60" },
  ];
  console.log("centerPosition", centerPosition);

  const fnRight = () => {
    console.log("fnRight");
    // let newLeftDivPosition = leftDivPosition - centerPosition;
    // setLeftDivPosition(newLeftDivPosition);
    console.log("divID.length", divID.length);
    divID.forEach((element, i) => {
      console.log("index", i);
      console.log(element.id, element.position);

      let newPosition;
      if (element.position <= 0) {
        newPosition = (divID.length - 1) * centerPosition;
        console.log("If");
        document.getElementById(`${element.id}`).style.left = newPosition + "%";
        document.getElementById(`${element.id}`).style.transition =
          "all 0.3s ease";
      } else {
        newPosition = element.position - centerPosition;
        console.log("Else");
        document.getElementById(`${element.id}`).style.left = newPosition + "%";
        document.getElementById(`${element.id}`).style.transition =
          "all 0.3s ease";
      }

      console.log("newPosition", newPosition);

      // ===============For Zoom Center Div Start=============================
      if (element.position === centerPosition * 2) {
        console.log("element.position", element.position);
        document.getElementById(`${element.id}`).style.transform = "scale(1.2)";
      } else {
        document.getElementById(`${element.id}`).style.transform = "scale(1.0)";
      }
      // ===============For Zoom Center Div End=============================
      divID[i] = { id: element.id, position: parseInt(newPosition) };
    });

    // document.getElementById("slider0").style.left = "-40%";
    // document.getElementById("slider0").style.transition = "all 0.3s ease";
  };

  const check = () => {
    console.log("DivId", divID);
  };
  const ClickFunction = (item) => {
    console.log("item", item);
  };
  return (
    <div>
      <button onClick={check}>Cheak</button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{flex:1}}> Left</div>
        <div style={{flex:8}} className={classes.main}>
          {mydivs &&
            mydivs.map((item, i) => {
              let divPosition = i * centerPosition;
              let newId = "slider" + divPosition;

              console.log("newId", newId);
              divID.push({ id: newId, position: divPosition });
              return (
                <div
                  key={i}
                  id={newId}
                  style={{
                    background: "blue",
                    cursor: "pointer",
                    height: "80%",
                    width: "20%",
                    position: "absolute",
                    left: `${divPosition}%`,
                    transform: centerPosition === divPosition && "scale(1.2)",
                  }}
                  onClick={() => {
                    ClickFunction(item);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
        </div>
        <div style={{flex:1}} onClick={fnRight}>Right</div>
      </div>
    </div>
  );
};

export default Header1;
