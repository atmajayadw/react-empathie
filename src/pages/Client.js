import React, { Component } from "react";
import { Navbar } from "../component/index";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

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

export default class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
    this.setLoaderOff();
  }

  componentDidUpdate() {
    this.showModal();
  }

  getData = () => {
    const authResult = new URLSearchParams(window.location.search);
    const code = authResult.get("id");

    const URL = "https://empathie-rest-server.empathiephoto.site/api/portfolio/";
    // const URL = "http://localhost/empathie-rest-server/api/portfolio/";
    axios
      .get(URL, { params: { client_id: code } })
      .then((res) => {
        const result = res.data;
        this.setState({ result: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  showModal = () => {
    const modal = document.getElementById("modal");
    const thumbs = document.querySelectorAll(".client img");
    const modal_img = document.getElementById("modal-img");
    const closemodal = document.getElementById("close-modal");
    const fixbar = document.querySelector(".navbar");

    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].addEventListener("click", function () {
        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        fixbar.style.display = "none";
        modal_img.src =
          "https://empathie-rest-server.empathiephoto.site/uploads/" + this.alt;
        if ($("#modal-img").height() > 500) {
          $("#modal-img").css({
            "max-width": "400px",
          });
        }
      });

      closemodal.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        fixbar.style.display = "flex";
        modal.classList.remove("wow", "animate__animated", "animate__fadeIn");
      };
    }
  };

  setLoaderOff = () => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const loader = document.querySelector("#loader");
      loader.style.display = "none";
      this.setState({
        loading: false,
      });
      document.body.style.overflow = "auto";
      const jumbotron = document.querySelector("#client");
      jumbotron.style.opacity = "1";
    }, 800);
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <div id="modal" className="modal">
          <span id="close-modal">x</span>
          <img className="modal-content" id="modal-img" alt="" />
          <div id="modal-caption"></div>
        </div>

        <Navbar />

        <div className="container" id="loader">
          {this.state.loading ? <Loader /> : null}
          <p>
            <i>loading...</i>
          </p>
        </div>

        <section id="client">
          <div className="container">
            <Link
              rel="noopenner noreferrer"
              to={{
                pathname: "/portfolio",
              }}
              className="back"
            >
              <h5> {"< "}back to portfolio</h5>
            </Link>
            <div className="clients">
              {result.map((res, index) => (
                <div className="client" key={index}>
                  <img
                    src={
                      "https://empathie-rest-server.empathiephoto.site/uploads/" +
                      // "http://localhost/empathie-rest-server/uploads/" +
                      res.photo
                    }
                    alt={res.photo}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
