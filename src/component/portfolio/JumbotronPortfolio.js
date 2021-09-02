import React, { Component } from "react";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#7E8075"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

export default class JumbotronPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setLoaderOff();
  }

  setLoaderOff = () => {
    const link = document.querySelector(".link.portfolio");
    if (link.classList.contains("active")) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const loader = document.querySelector("#loader");
        loader.style.display = "none";
        this.setState({
          loading: false,
        });
        document.body.style.overflow = "auto";
        const jumbotron = document.querySelector("#jumbotron-portfolio");
        jumbotron.style.opacity = "1";
      }, 800);
    }
  };

  render() {
    return (
      <>
        <div className="container" id="loader">
          {this.state.loading ? <Loader /> : null}
          <p>
            <i>loading...</i>
          </p>
        </div>

        <section id="jumbotron-portfolio">
          <div className="container jumbotron">
            <div className="row">
              <h1>PORTFOLIO</h1>
            </div>
          </div>
        </section>
      </>
    );
  }
}
