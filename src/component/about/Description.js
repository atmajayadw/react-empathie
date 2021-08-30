import React, { Component } from "react";
import { Logo } from "../../assets/img/img";

export default class Description extends Component {
  render() {
    return (
      <>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="logo">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
              <div className="description">
                <p>
                  Empathie.photo is a team of professional photographer owned by
                  Jay {"&"} Elfin. We offering service in Wedding, Pre-Wedding,
                  Engagement, etc in Jabodetabek.
                </p>

                <p>
                  As a team of professional photographers, we are also committed
                  to capture every meaningful moment expressed by our
                  photography results. Believing that every picture tells a
                  story, towards our creativity, team work, and sincerity on
                  customers’ satisfaction, we treasure our relationship with the
                  customers by giving everything we have.
                </p>

                <p>
                  In Depok where Empathie.photo established, we have witnessed
                  that happiness on each photograph is boundless. It is keeping
                  us encouraged that our job is to provide the best for our
                  customers, wherever and whenever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
