import React, { Component } from "react";
import { Logo } from "../assets/icons/icons.js";
import { NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    this.hamburger();
    this.customNav();
  }

  customNav = () => {
    const link = document.querySelector(".link.home");
    const navbar = document.querySelector(".navbar .links");
    if (link.classList.contains("active")) {
      navbar.style.background = "rgba(171,171,171, 0.1";
    } else {
      navbar.style.background = "transparent";
    }
  };

  hamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const span = document.querySelectorAll(".hamburger span");
    const sidebar = document.querySelector(".sidebar .links");

    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      span[0].classList.toggle("show1");
      span[1].classList.toggle("show2");
      span[2].classList.toggle("show3");
      if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  };

  deactivateSidebar = () => {
    const sidebar = document.querySelector(".sidebar .links");
    sidebar.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  render() {
    return (
      <section id="navbar">
        <div className="container">
          <div className="row navbar">
            <div className="logo">
              <Link to={"/"}>
                <img src={Logo} alt=""></img>
              </Link>
            </div>

            <div className="links">
              <ul>
                <li>
                  <NavLink
                    className="link home"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#home",
                    }}
                    exact
                  >
                    {" "}
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link portfolio"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/portfolio",
                    }}
                    exact
                  >
                    {" "}
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <img id="logo" src={Logo} alt=""></img>
                </li>
                <li>
                  <NavLink
                    className="link about"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/about",
                    }}
                    exact
                  >
                    {" "}
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link contact"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/contact",
                    }}
                    exact
                  >
                    {" "}
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="sidebar">
              <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <NavLink
                      className="link home"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#home",
                      }}
                      onClick={this.deactivateSidebar}
                      exact
                    >
                      {" "}
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link portfolio"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/portfolio",
                      }}
                      onClick={this.deactivateSidebar}
                      exact
                    >
                      {" "}
                      <span>Portfolio</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link about"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/about",
                      }}
                      onClick={this.deactivateSidebar}
                      exact
                    >
                      {" "}
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link contact"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/contact",
                      }}
                      onClick={this.deactivateSidebar}
                      exact
                    >
                      {" "}
                      <span>Contact</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
