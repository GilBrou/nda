/******FOOTER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

/***COMPONENT***/
export default function Footer(data) {
  /******Background object toggling******/
  /*background objects selection for toggling according to modals*/
  const thisToggle = document.getElementById("thisToggle");

  /*Hide target when modal is open*/
  function HideThis() {
    if (thisToggle != null || thisToggle != undefined) {
      thisToggle.style.visibility = "hidden";
    }
  }
  /*Display target when modal is closed*/
  function DisplayThis() {
    if (thisToggle != null || thisToggle != undefined) {
      thisToggle.style.visibility = "visible";
    }
  }

  /*Toggle modal*/
  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);
  const [open6, setOpen6] = useState(false);
  const onOpenModal6 = () => setOpen6(true);
  const onCloseModal6 = () => setOpen6(false);
  const [open7, setOpen7] = useState(false);
  const onOpenModal7 = () => setOpen7(true);
  const onCloseModal7 = () => setOpen7(false);

  /*Create mailto from Json*/
  const ThatMail = "mailto:" + data.data2.nda.mail;

  /*DOM*/
  return (
    <div>
      <footer id="footer">
        <ul className="menuF">
          {/*Mentions button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footMentions"
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
                  <p>{data.data1 ? data.data1.nom : "loading..."}</p>
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

          {/*Confidentiality button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footConf"
                onClick={() => {
                  onOpenModal6();
                  HideThis();
                }}
              >
                {data.data2
                  ? data.data2.confidentiality.abrtitre
                  : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open6}
                onClose={() => {
                  onCloseModal6();
                  DisplayThis();
                }}
                center
              >
                <h1>
                  {data.data2 ? data.data2.confidentiality.titre : "loading..."}
                </h1>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T1 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T1a : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T1b : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T2 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2a : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2b : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2c : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2d : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2e : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2f : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T2g : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T3 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T3a : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T4 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T4a : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T4b : "loading..."}
                  </p>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T4c : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T5 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T5a : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T6 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T6a : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T7 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T7a : "loading..."}
                  </p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.confidentiality.T8 : "loading..."}
                  </h2>
                  <p>
                    {data.data2 ? data.data2.confidentiality.T8a : "loading..."}
                  </p>
                </div>
              </Modal>
            </div>
          </li>

          {/*CGV button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footcgv"
                onClick={() => {
                  onOpenModal7();
                  HideThis();
                }}
              >
                {data.data2 ? data.data2.CGV.abrtitre : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open7}
                onClose={() => {
                  onCloseModal7();
                  DisplayThis();
                }}
                center
              >
                <h1>{data.data2 ? data.data2.CGV.titre : "loading..."}</h1>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T1 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T1a : "loading..."}</p>
                  <p>{data.data2 ? data.data2.CGV.T1b : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T2 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T2a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T3 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T3a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T4 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T4a : "loading..."}</p>
                  <p>{data.data2 ? data.data2.CGV.T4b : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T5 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T5a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T6 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T6a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T7 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T7a : "loading..."}</p>
                  <p>{data.data2 ? data.data2.CGV.T7b : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T8 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T8a : "loading..."}</p>
                  <p>{data.data2 ? data.data2.CGV.T8b : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T9 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T9a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T10 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T10a : "loading..."}</p>
                  <p>{data.data2 ? data.data2.CGV.T10b : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T11 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T11a : "loading..."}</p>
                </div>

                <div className="paraMentions">
                  <h2 className="leftTitle">
                    {data.data2 ? data.data2.CGV.T12 : "loading..."}
                  </h2>
                  <p>{data.data2 ? data.data2.CGV.T12a : "loading..."}</p>
                </div>
              </Modal>
            </div>
          </li>

          {/*Socials buttons & links*/}
          {/*Facebook*/}
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
          {/*Twitter*/}
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
          {/*Instagram*/}
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
          {/*YouTube*/}
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
          {/*Sponsor logos*/}
          <li>
            <img
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.sponso1 +
                data.data1.UimgLinks.IL1B
              }
              className="img-responsive BretagneLogo"
              alt="Sponsor 1"
            />{" "}
          </li>

          <li>
            <img
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.sponso2 +
                data.data1.UimgLinks.IL1B
              }
              className="img-responsive"
              alt="Sponsor 2"
            />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
}
