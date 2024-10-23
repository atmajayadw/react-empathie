import React, { Component } from "react";
import { Thumbail1, Thumbail2, Thumbail3 } from "../../assets/img/img";
import Category from "./Category";
import axios from "axios";
import $ from "jquery";
import "../../lib/jqueryeasing/jquery.easing.1.3.js";

const Loader2 = () => (
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

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "kosong",
      categories: [],
      loading2: false,
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     category: event,
  //   });
  // };

  getData = (category) => {
    this.setState({
      category: category,
    });

    const URL = "https://empathie-rest-server.empathiephoto.site/api/client/";
    // const URL = "http://localhost/empathie-rest-server/api/client/";
    axios
      .get(URL, { params: { category: category } })
      .then((res) => {
        const categories = res.data;
        this.setState({ categories: categories.data });
        this.setLoaderOn();
      })
      .catch((error) => {
        console.log(error);
        alert("Data Not Found!");
      });
  };

  setLoaderOn = () => {
    const loader = document.querySelector("#loader2");
    loader.style.display = "flex";
    this.setState({
      loading2: true,
    });
    this.setLoaderOff();
  };

  setLoaderOff = () => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const loader = document.querySelector("#loader2");
      loader.style.display = "none";
      this.setState({
        loading2: false,
      });
      document.body.style.overflow = "auto";
      const panel = document.querySelector(".category-panel");
      panel.style.display = "block";
      this.showPanel();
    }, 1300);
  };

  showPanel = () => {
    const panel = $(".category-panel");
    $("html, body").animate(
      {
        scrollTop: panel.offset().top - 80,
      },
      1000,
      "easeInOutExpo"
    );
  };

  closePanel = () => {
    $("html, body").animate(
      {
        scrollTop: $(".menus").offset().top - 250,
      },
      1000,
      "easeInOutExpo"
    );

    setTimeout(() => {
      const panel = document.querySelector(".category-panel");
      panel.style.display = "none";
    }, 1000);
  };

  render() {
    return (
      <>
        <section id="menus">
          <div className="container" id="loader2">
            {this.state.loading2 ? <Loader2 /> : null}
            <p>
              <i>loading...</i>
            </p>
          </div>

          <div className="container menus">
            <div className="menu">
              <img
                src={Thumbail1}
                alt="engagement"
                onClick={(event) => this.getData("Engagement")}
              />
              <div
                className="btn btn-menu"
                onClick={(event) => this.getData("Engagement")}
              >
                Engagement
              </div>
            </div>
            <div className="menu">
              <img
                src={Thumbail2}
                alt="Pre-Wedding"
                onClick={(event) => this.getData("Pre-Wedding")}
              />
              <div
                className="btn btn-menu"
                onClick={(event) => this.getData("Pre-Wedding")}
              >
                PreWedding
              </div>
            </div>
            <div className="menu">
              <img
                src={Thumbail3}
                alt="Wedding"
                onClick={(event) => this.getData("Wedding")}
              />
              <div
                className="btn btn-menu"
                onClick={(event) => this.getData("Wedding")}
              >
                Wedding
              </div>
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
        </section>
        <Category
          {...this.state}
          showPanel={this.showPanel}
          closePanel={this.closePanel}
        />
      </>
    );
  }
}
