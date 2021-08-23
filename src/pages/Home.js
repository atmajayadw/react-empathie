import React, { Component } from "react";
import { Navbar, JumbotronHome } from "../component/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <JumbotronHome />
      </>
    );
  }
}
