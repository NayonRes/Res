import React from "react";
import "./header2.css";

const Header2 = () => {
  return (
    <div>
      <div className="main_container">
        <div className="left_container">
          <div className="nav_item">Left Item 1</div>
          <div className="nav_item">Left Item 2</div>
        </div>
        <div className="center_container">
          <div className="nav_item dropdown1">
            <div>Center Item 1</div>
            <div className="dropdown_content1">
              <div className="dropdown_content1_container">
                <div className="dropdown_content1_container_item">
                  <h4>Head line 1</h4>
                  <div className="dropdown_content1_container_subitem ">11111111111111</div>
                  <div className="dropdown_content1_container_subitem ">22222222222222</div>
                  <div className="dropdown_content1_container_subitem ">333333333333333</div>
                  <div className="dropdown_content1_container_subitem ">444444444444444</div>
                </div>
                <div className="dropdown_content1_container_item">
                  <h4>Head line 2</h4>
                  <div className="dropdown_content1_container_subitem ">11111111111111</div>
                  <div className="dropdown_content1_container_subitem ">22222222222222</div>
                  <div className="dropdown_content1_container_subitem ">333333333333333</div>
                  <div className="dropdown_content1_container_subitem ">444444444444444</div>
                </div>
                <div className="dropdown_content1_container_item">
                  <h4>Head line 3</h4>
                  <div className="dropdown_content1_container_subitem ">11111111111111</div>
                  <div className="dropdown_content1_container_subitem ">22222222222222</div>
                  <div className="dropdown_content1_container_subitem ">333333333333333</div>
                  <div className="dropdown_content1_container_subitem ">444444444444444</div>
                </div>
                <div className="dropdown_content1_container_item">
                  <h4>Head line 4</h4>
                  <div className="dropdown_content1_container_subitem ">11111111111111</div>
                  <div className="dropdown_content1_container_subitem ">22222222222222</div>
                  <div className="dropdown_content1_container_subitem ">333333333333333</div>
                  <div className="dropdown_content1_container_subitem ">444444444444444</div>
                </div>
              </div>
            </div>
          
          
          
          </div>
          <div className="nav_item">Center Item 2</div>
          <div className="nav_item">Center Item 3</div>
        </div>
        <div className="right_container">
          <div className="nav_item">Right Item 1</div>
          <div className="nav_item">Right Item 2</div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
