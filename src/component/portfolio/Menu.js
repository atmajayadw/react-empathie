import React, { Component } from "react";
import { Thumbail1, Thumbail2, Thumbail3 } from "../../assets/img/img";

export default class Menu extends Component {
  render() {
    return (
      <>
        <section id="menus">
          <div className="container menus">
            <div className="menu">
              <img src={Thumbail1} alt="Engagement" />
              <div className="btn btn-menu">Engagement</div>
            </div>
            <div className="menu">
              <img src={Thumbail2} alt="Pre-Wedding" />
              <div className="btn btn-menu">PreWedding</div>
            </div>
            <div className="menu">
              <img src={Thumbail3} alt="Wedding" />
              <div className="btn btn-menu">Wedding</div>
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
        </section>
      </>
    );
  }
}
