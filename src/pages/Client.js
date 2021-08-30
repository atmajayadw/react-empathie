import React, { Component } from "react";
import { Navbar } from "../component/index";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

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
  }

  componentDidUpdate() {
    this.showModal();
  }

  getData = () => {
    const authResult = new URLSearchParams(window.location.search);
    const code = authResult.get("id");

    const URL = "https://jjphoto-rest-server.atmajayadw.site/api/portfolio/";
    axios
      .get(URL, { params: { client_id: code } })
      .then((res) => {
        const result = res.data;
        this.setState({ result: result.data });
        console.log(this.state.result);
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
          "https://jjphoto-rest-server.atmajayadw.site/uploads/" + this.alt;
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
                      "https://jjphoto-rest-server.atmajayadw.site/uploads/" +
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
