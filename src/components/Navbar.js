import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="shop" width="40px" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            this.state.isOpen
              ? "collapse navbar-collapse hide"
              : "collapse navbar-collapse"
          }
          id="navbarCollapse"
        >
          <ul className="navbar-nav align-items-center ml-auto">
            <li className="nav-item ml-5">
              <Link
                to="/about"
                className="nav-link"
                onClick={this.handleToggle}
              >
                about
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link" onClick={this.handleToggle}>
                products
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link
                to="/contact"
                className="nav-link"
                onClick={this.handleToggle}
              >
                contact
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/cart" onClick={this.handleToggle}>
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fa fa-cart-arrow-down" /> cart
                  </span>
                </ButtonContainer>
              </Link>
            </li>
          </ul>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--main);
  .nav-link {
    color: var(--mainwhite) !important;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
