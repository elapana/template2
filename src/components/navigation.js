import React, { Component, Fragment } from "react";
import building1 from "../images/building 1.jfif";
import building2 from "../images/building 2.jfif";
import building3 from "../images/building 3.jfif";
import Button from "@mui/material/Button";
class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="MM">
          <div className="main">
            <div className="left-main"></div>
            <div className="right-main"></div>
          </div>
          <div className="images">
            <img src={building1} className="building1" alt=""/>
            <img src={building2}  className="building2"  alt=""/>
            <img src={building3} className="building3"  alt=""/>
            <div className="ofc-content">
              <h1>WHAT WE DO</h1>
              <p className="ofc-con-1">
                Integrated design practice of architecture, landscape, interiors
              </p>
              <p className="ofc-con-2">
                image from <a href="#">Freepik</a>
              </p>

              <Button
                variant="contained"
                style={{
                  borderRadius: "100px",
                  width: "112px",
                  backgroundColor: "rgb(3, 7, 64)",
                  textTransform: "lowercase",
                  fontWeight: "bold",
                }}
              >
                learn more
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
