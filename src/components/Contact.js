import React, { Component } from "react";
import Title from "./Title";
import logo from "../logo.png";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="contact" title="us" />
            <div className="row">
              <div className="col-12 mx-auto text-center">
                <img
                  src="https://source.unsplash.com/1000x200/?robot,machine,toy"
                  className="img-fluid"
                  alt="contact"
                />
              </div>
              <div className="col-10 mx-auto text-center pt-2">
                <img
                  src={logo}
                  alt="shop"
                  width="40px"
                  className="navbar-brand"
                />
              </div>
              <div className="col-10 mx-auto text-title text-center pt-2">
                <p>
                  <i className="fas fa-phone" /> 61+ 1234 5678
                </p>
                <p>
                  <i className="fas fa-envelope" /> robots@test.com
                </p>
                <p>
                  <i className="fas fa-map-marked" /> Brissy, OZ
                </p>
                <p>
                  <i className="far fa-lightbulb" /> Coding Addict
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
