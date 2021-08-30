import React, { Component } from "react";
import { Thumbail1, Thumbail2, Thumbail3 } from "../../assets/img/img";
import Category from "./Category";
import axios from "axios";
import $ from "jquery";
import "../../lib/jqueryeasing/jquery.easing.1.3.js";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "kosong",
      categories: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      category: event,
    });
  };

  getData = (category) => {
    this.setState({
      category: category,
    });

    const URL = "https://jjphoto-rest-server.atmajayadw.site/api/client/";
    axios
      .get(URL, { params: { category: category } })
      .then((res) => {
        const categories = res.data;
        this.setState({ categories: categories.data });
        const panel = document.querySelector(".category-panel");
        panel.style.display = "block";
        this.showPanel();
      })
      .catch((error) => {
        console.log(error);
        alert("Data Not Found!");
      });
  };

  showPanel = () => {
    const panel = $(".category-panel");
    console.log(panel);
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
