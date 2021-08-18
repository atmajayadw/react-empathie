import React, { Component } from "react";
import { Logo } from "../assets/icons/icons.js";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <section id="navbar">
        <div className="container">
          <div className="row navbar">
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
          </div>
        </div>
      </section>
    );
  }
}
