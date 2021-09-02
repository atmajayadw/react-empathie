import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BG1, BG2, BG3, BG4, BG5 } from "../assets/img/img.js";
import { NavLink } from "react-router-dom";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#7E8075"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

export default class JumbotronHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setLoaderOff();
  }

  setLoaderOff = () => {
    const link = document.querySelector(".link.home");
    if (link.classList.contains("active")) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const loader = document.querySelector("#loader");
        loader.style.display = "none";
        this.setState({
          loading: false,
        });
        document.body.style.overflow = "auto";
        const jumbotron = document.querySelector("#slideshow");
        jumbotron.style.opacity = "1";
      }, 800);
    }
  };

  render() {
    return (
      <>
        <div className="container" id="loader">
          {this.state.loading ? <Loader /> : null}
          <p>
            <i>loading...</i>
          </p>
        </div>

        <section id="slideshow">
          <div
            id="carousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
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
                <img
                  className="d-block min-vh-100 min-vw-100"
                  src={BG1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block min-vh-100 min-vw-100"
                  src={BG2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block min-vh-100 min-vw-100"
                  src={BG3}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block min-vh-100 min-vw-100"
                  src={BG4}
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block min-vh-100 min-vw-100"
                  src={BG5}
                  alt="Fifth slide"
                />
              </div>
            </div>
          </div>

          <NavLink
            className="btn btn-explore"
            rel="noopenner noreferrer"
            to={{
              pathname: "/portfolio",
            }}
          >
            {" "}
            <span>More Portfolio</span>
          </NavLink>
        </section>
      </>
    );
  }
}
