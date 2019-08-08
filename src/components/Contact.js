import React, { Component } from "react";
import Title from "./Title";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="contact" title="us" />
            <div className="row">
              <div className="col-10 mx-auto text-center text-title text-capitalize pt-5">
                <p>[We Are ...]</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
