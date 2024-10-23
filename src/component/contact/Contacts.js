import React, { Component } from "react";
import { Call, Mail, Location, Instagram } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <section id="contacts">
          <div className="container contacts">
            <Link
              className="contact link"
              rel="noopenner noreferrer"
              to={{
                pathname:
                  "https://api.whatsapp.com/send?phone=628561669961&text=Halo,%20Empathie.photo!%20Boleh%20minta%20pricelistnya?",
              }}
              target="_blank"
            >
              {" "}
              <img src={Call} alt="" className="img-fluid" />
              <h4>+628561669961</h4>
            </Link>
            <div className="contact">
              <img src={Mail} alt="" className="img-fluid" />
              <h4>empathiephoto@gmail.com</h4>
            </div>
            <div className="contact">
              <img src={Location} alt="" className="img-fluid" />
              <h4>Depok, Jawa Barat</h4>
            </div>
            <Link
              className="contact link"
              rel="noopenner noreferrer"
              to={{
                pathname: "https://www.instagram.com/empathie.photo/",
              }}
              target="_blank"
            >
              <img src={Instagram} alt="" className="img-fluid" />
              <h4>@empathie.photo</h4>
            </Link>
          </div>
        </section>
      </>
    );
  }
}
