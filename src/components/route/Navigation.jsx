import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SingleImage from "../../pages/image/SingleImage";
import MultiImage from "../../pages/image/MultiImage";
import NotFound from "../../pages/NotFound";
import Topbar from "../header/Topbar";
import DropZoneImage from "../../pages/image/DropZoneImage";
import CollapseTable from "../../pages/material/CollapseTable";



const Navigation = () => {
  return (
    <>
      <Topbar />
      <div
        style={{
          width: "980px",
          // background: "red",
          margin: "auto",
          padding: "50px",
        }}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/single-image">
            <SingleImage />
          </Route>
          <Route exact path="/multi-image">
            <MultiImage />
          </Route>
          <Route exact path="/dropzone-image">
            <DropZoneImage />
          </Route>
          <Route exact path="/collapse-table">
            <CollapseTable />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navigation;
