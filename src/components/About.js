import React, { Component } from "react";
import Title from "./Title";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="about" title="us" />
            <div className="row">
              <div className="col-10 mx-auto text-center text-title text-capitalize pt-5">
                <p>[We Are Robots Online...]</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
