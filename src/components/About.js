import React, { Component } from "react";
import Title from "./Title";
import logo from "../logo.png";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="about" title="us" />
            <div className="row">
              <div className="col-12 mx-auto text-center">
                <img
                  src="https://source.unsplash.com/1000x200/?machine,toy"
                  className="img-fluid"
                  alt="about"
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
              <div className="col-10 mx-auto text-title pt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
                <p>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                  justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </p>
                <p>
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus.
                </p>
                <p>
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
