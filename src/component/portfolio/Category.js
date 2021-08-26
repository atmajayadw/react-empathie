import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    if (this.props.categories) {
      const { categories } = this.props;
      return (
        <section id="category">
          <div className="container category-panel" style={{ display: "none" }}>
            <div className="row">
              <h2>{this.props.category}</h2>
              <h6 onClick={() => this.props.closePanel()}>Back to portfolio</h6>
            </div>
            <div className="contents">
              {categories.map((category, index) => (
                <div className="content" key={index}>
                  <img
                    src={
                      "https://jjphoto-rest-server.atmajayadw.site/uploads/thumbnail/" +
                      category.thumbnail
                    }
                    alt={category.thumbnail}
                    className="img-fluid"
                  />
                  <h3>{category.client}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}
