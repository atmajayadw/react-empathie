import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                  <Link
                    to={{
                      pathname: "/portfolio/client/",
                      search: "?id=" + category.client_id,
                      state: category.category,
                    }}
                    rel="noopenner noreferrer"
                    className="thumbnail"
                  >
                    <img
                      src={
                        "https://empathie-rest-server.empathiephoto.site/uploads/thumbnail/" +
                        // "http://localhost/empathie-rest-server/uploads/thumbnail/" +
                        category.thumbnail
                      }
                      alt={category.thumbnail}
                      className="img-fluid"
                    />
                  </Link>

                  <Link
                    to={{
                      pathname: "/portfolio/client/",
                      search: "?id=" + category.client_id,
                      state: category.category,
                    }}
                    rel="noopenner noreferrer"
                    className="btn-detail"
                  >
                    <h3>{category.client}</h3>
                  </Link>
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
