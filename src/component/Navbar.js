import React, { Component } from "react";
import { Logo } from "../assets/icons/icons.js";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  componentDidMount() {
    this.hamburger();
  }

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

  render() {
    return (
      <section id="navbar">
        <div className="container">
          <div className="row navbar">
            <div className="logo">
              <img src={Logo} alt=""></img>
            </div>

            <div className="links">
              <ul>
                <li>
                  <Link
                    className="link home"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#home",
                    }}
                  >
                    {" "}
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link portfolio"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/portfolio",
                    }}
                  >
                    {" "}
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li>
                  <img id="logo" src={Logo} alt=""></img>
                </li>
                <li>
                  <Link
                    className="link about"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/about",
                    }}
                  >
                    {" "}
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link contact"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/contact",
                    }}
                  >
                    {" "}
                    <span>Contact</span>
                  </Link>
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
                    <Link
                      className="link home"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#home",
                      }}
                    >
                      {" "}
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link portfolio"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/portfolio",
                      }}
                    >
                      {" "}
                      <span>Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link about"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/about",
                      }}
                    >
                      {" "}
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link contact"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/contact",
                      }}
                    >
                      {" "}
                      <span>Contact</span>
                    </Link>
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
