import React, { Component } from "react";
import { Navbar, JumbotronPortfolio } from "../component/index";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <Navbar />
        <JumbotronPortfolio />
      </section>
    );
  }
}
