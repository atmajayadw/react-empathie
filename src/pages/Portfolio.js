import React, { Component } from "react";
import { Navbar } from "../component/index";
import JumbotronPortfolio from "../component/portfolio/JumbotronPortfolio";
import Menu from "../component/portfolio/Menu";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <Navbar />
        <JumbotronPortfolio />
        <Menu />
      </section>
    );
  }
}
