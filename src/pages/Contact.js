import React, { Component } from "react";
import { Navbar } from "../component/index";
import JumbotronContact from "../component/contact/JumbotronContact";
import Contacts from "../component/contact/Contacts";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <JumbotronContact />
        <Contacts />
      </>
    );
  }
}
