import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BG1, BG2, BG3, BG4, BG5 } from "../assets/img/img.js";

export default class JumbotronHome extends Component {
  render() {
    return (
      <section id="slideshow">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel" data-slide-to="1">
              <span className="indicator"></span>
            </li>
            <li data-target="#carousel" data-slide-to="2"></li>
            <li data-target="#carousel" data-slide-to="3"></li>
            <li data-target="#carousel" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block vh-100" src={BG1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block vh-100" src={BG2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block vh-100" src={BG3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block vh-100" src={BG4} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block vh-100" src={BG5} alt="Fifth slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </section>
    );
  }
}
