import React, { Component } from "react";
import Title from "./Title";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="about" title="us" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
