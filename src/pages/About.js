import React, { Component } from "react";
import { Navbar } from "../component/index";
import JumbotronAbout from "../component/about/JumbotronAbout";
import Description from "../component/about/Description";

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <JumbotronAbout />
        <Description />
      </>
    );
  }
}
