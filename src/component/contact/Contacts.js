import React, { Component } from "react";
import { Call, Mail, Location, Instagram } from "../../assets/icons/icons";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <section id="contacts">
          <div className="container contacts">
            <div className="contact">
              <img src={Call} alt="" className="img-fluid" />
              <h4>+628561669961</h4>
            </div>
            <div className="contact">
              <img src={Mail} alt="" className="img-fluid" />
              <h4>empathiephoto@gmail.com</h4>
            </div>
            <div className="contact">
              <img src={Location} alt="" className="img-fluid" />
              <h4>Depok, Jawa Barat</h4>
            </div>
            <div className="contact">
              <img src={Instagram} alt="" className="img-fluid" />
              <h4>@empathie.photo</h4>
            </div>
          </div>
        </section>
      </>
    );
  }
}
