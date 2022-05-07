import React, { Component, Fragment } from "react";
import building1 from "../images/construction-concept-with-engineering-tools.jpg"
import Button from "@mui/material/Button";
import { FormatQuote } from "@mui/icons-material";

class succes extends Component {
  render() {
    return (
      <Fragment>
        <div className="smilygirl">
          <div className="smimage"></div>
          <img src={building1} alt="" className="image7" />
          <div className="smimage-info">
            <h2>
              We belive design should have a positive impact on people's lives
              and the environment
            </h2>
            <p>
              Images from <a href="#">Freepik</a>
            </p>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "112px",
                backgroundColor: "rgb(2, 23, 72)",
                textTransform: "lowercase",
                fontWeight: "bold",
                color: "#fff",
                marginTop: "15px",
              }}
            >
              learn more
            </Button>
          </div>
          <div className="quote">
            <FormatQuote
              style={{
                fontSize: "40px",
                transform: "rotate(180deg)",
                marginBottom: "-30px",
              }}
            />
            <p className="quotation">
              Success is not final; failure is not fatal: it is the courage to
              continue that counts
            </p>
            <p className="author">- Winston Churchill</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default succes;

