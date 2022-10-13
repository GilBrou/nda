/******FOOTER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

/***COMPONENT***/
export default function Footer(data) {
  /*Toggle modules according to modals*/
  const thisToggle = document.getElementById("thisToggle");

  function HideThis() {
    if (thisToggle != null) {
      thisToggle.style.visibility = "hidden";
    }
  }

  function DisplayThis() {
    if (thisToggle != null) {
      thisToggle.style.visibility = "visible";
    }
  }

  /*Toggle modal*/
  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);

  /*Create mailto from Json*/
  const ThatMail = "mailto:" + data.data2.nda.mail;

  /*DOM*/
  return (
    <div>
      <footer>
        <ul className="menu">
          <li>
            <div>
              <button
                className="modalButton footB"
                onClick={() => {
                  onOpenModal5();
                  HideThis();
                }}
              >
                {data.data2 ? data.data2.mentions.titre : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open5}
                onClose={() => {
                  onCloseModal5();
                  DisplayThis();
                }}
                center
              >
                <h1>{data.data2 ? data.data2.mentions.titre : "loading..."}</h1>
                <div className="paraMentions">
                  <p>{data.data1 ? data.data1.info.nom : "loading..."}</p>
                  <p>{data.data2 ? data.data2.mentions.P1 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.mentions.P2 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.mentions.P3 : "loading..."}</p>
                </div>
                <div className="paraMentions">
                  <a href={ThatMail}>
                    <p>{data.data2 ? data.data2.nda.mail : "loading..."}</p>
                  </a>
                  <p>{data.data2 ? data.data2.nda.tel : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <p> {data.data2 ? data.data2.mentions.P4 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.mentions.P5 : "loading..."}</p>
                </div>
                <div className="Pcenter2">
                  <p> {data.data2 ? data.data2.mentions.P6 : "loading..."}</p>

                  <span className="Pinline">
                    <p className="">
                      {" "}
                      {data.data2 ? data.data2.mentions.P7 : "loading..."}
                    </p>

                    <a
                      href={data.data2 ? data.data2.nda.Tiphs : "loading..."}
                      target="_blank"
                    >
                      <p className="Tiphs">
                        {data.data2 ? data.data2.mentions.P8 : "loading..."}
                      </p>
                    </a>
                  </span>
                </div>
              </Modal>
            </div>
          </li>

          <li>
            <a
              href={data.data2 ? data.data2.nda.FB : "loading..."}
              target="_blank"
              className="fb"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoFB : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>

          <li>
            <a
              href={data.data2 ? data.data2.nda.TW : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoTW : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>

          <li>
            <a
              href={data.data2 ? data.data2.nda.IG : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoIG : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>

          <li>
            <a
              href={data.data2 ? data.data2.nda.YT : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoYT : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>

          <li>
            <img
              src={
                data.data1 ? data.data1.ressources.logoBretagne : "loading..."
              }
              className="img-responsive BretagneLogo"
              alt={data.data1 ? data.data1.logoBretagneAlt : "loading..."}
            />{" "}
          </li>

          <li>
            <img
              src={data.data1 ? data.data1.ressources.logoRennes : "loading..."}
              className="img-responsive"
              alt={data.data1 ? data.data1.logoRennesAlt : "loading..."}
            />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
}
