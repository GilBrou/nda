/******HEADER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

/***COMPONENTS***/
import Form from "./Form";

export default function Header(data) {
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

  /*Toggle modals*/
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);
  const [open4, setOpen4] = useState(false);
  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  /*Create mailto from Json*/
  const ThatMail = "mailto:" + data.data2.nda.mail;

  /*DOM*/
  return (
    <header id="header">
      <nav role="navigation" className="top-nav primary-navigation Hheader">
        <div>
          {/*Site Logo*/}
          <a href="/accueil">
            <img
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.logo1 +
                data.data1.UimgLinks.IL1B
              }
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={data.data1 ? data.data1.nom : "loading..."}
            />{" "}
          </a>
        </div>
        {/*Responsive Burger Menu*/}
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        {/*Menu*/}
        <ul className="menu">
          {/*1 - Accueil*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu1L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu1 : "loading..."}
            </a>
          </li>
          {/*2 - Univers*/}
          <li>
            {/*
            <a
              href={data.data1 ? data.data1.links.menu2L : "loading..."}
              className="page-scroll"
            >
          */}
            <p className="noClick">
              {data.data1 ? data.data1.menu.menu2 : "loading..."}
            </p>
            {/*
            </a>
          */}

            {/*2b - Univers sub menu2 */}
            <ul className="subList">
              {/*Dynamic creation from Json data*/}
              {data.data2.univers.map(
                (univers) => (
                  {
                    /*Univers subNav links*/
                  },
                  (
                    <li key={univers.link}>
                      <a href={univers.link} className="page-scroll">
                        {univers.name}
                      </a>
                    </li>
                  )
                )
              )}
            </ul>
          </li>
          {/*3 - Créateurs*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu3L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu3 : "loading..."}
            </a>
          </li>
          {/*4 - à propos + modal*/}
          <li>
            <button
              className="modalButton"
              onClick={() => {
                onOpenModal();
                HideThis();
              }}
            >
              {" "}
              <p>{data.data1 ? data.data1.menu.menu4 : "loading..."}</p>
            </button>
            <Modal
              id="aProposModal"
              className="myModal"
              open={open}
              onClose={() => {
                onCloseModal();
                DisplayThis();
              }}
              center
            >
              <h1>{data.data2 ? data.data2.apropos.titre : "loading..."}</h1>
              <p> {data.data2 ? data.data2.apropos.P1 : "loading..."}</p>
              <p> {data.data2 ? data.data2.apropos.P2 : "loading..."}</p>
              <p> {data.data2 ? data.data2.apropos.P3 : "loading..."}</p>
              <p> {data.data2 ? data.data2.apropos.P4 : "loading..."}</p>
              <p> {data.data2 ? data.data2.apropos.P5 : "loading..."}</p>
              <img
                src={
                  data.data1.UimgLinks.IL0 +
                  data.data1.ressources.logo1 +
                  data.data1.UimgLinks.IL1B
                }
                className=" logo img-responsive page-scroll modalImg aProposImg"
                href="#page-top"
                alt={"Logo de " + data.data1.nom}
              />{" "}
            </Modal>
          </li>
          {/*5 - Contact*/}

          <li>
            <p className="noClick">
              {data.data1 ? data.data1.menu.menu5 : "loading..."}
            </p>
            {/*5b - Contact sub menu2 */}
            <ul className="subList">
              {/*5b - 1 - Contact Form & Modal */}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal2();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5a : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open2}
                  onClose={() => {
                    onCloseModal2();
                    DisplayThis();
                  }}
                  center
                >
                  <img
                    src={
                      data.data1.UimgLinks.IL0 +
                      data.data1.ressources.logo1 +
                      data.data1.UimgLinks.IL1B
                    }
                    className=" logo img-responsive page-scroll authorLogo"
                    href="#page-top"
                    alt={data.data1.nom}
                  />{" "}
                  <h1>
                    {data.data2 ? data.data2.contact.titre : "loading..."}
                  </h1>
                  <Form />
                  <p>{data.data2 ? data.data2.contact.P1 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.contact.P2 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.contact.P3 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.contact.P4 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.contact.P5 : "loading..."}</p>
                  {/*Social Logo & Links*/}
                  <ul className="contactList">
                    <li>
                      <a
                        href={data.data2 ? data.data2.nda.FB : "loading..."}
                        target="_blank"
                        className="fb"
                      >
                        <i
                          className={
                            data.data1
                              ? data.data1.ressources.logoFB
                              : "loading..."
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
                            data.data1
                              ? data.data1.ressources.logoTW
                              : "loading..."
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
                            data.data1
                              ? data.data1.ressources.logoIG
                              : "loading..."
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
                            data.data1
                              ? data.data1.ressources.logoYT
                              : "loading..."
                          }
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </Modal>
              </li>
              {/*5b - 2 - Manuscripts & text submissions + modal*/}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal3();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5b : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open3}
                  onClose={() => {
                    onCloseModal3();
                    DisplayThis();
                  }}
                  center
                >
                  <h1>
                    {data.data2 ? data.data2.manuscrits.titre : "loading..."}
                  </h1>
                  <p className="Pcenter">
                    {data.data2 ? data.data2.manuscrits.P1 : "loading..."}
                  </p>
                  <p> {data.data2 ? data.data2.manuscrits.P2 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.manuscrits.P3 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.manuscrits.P4 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.manuscrits.P5 : "loading..."}</p>
                  <img
                    src={
                      data.data1.UimgLinks.IL0 +
                      data.data1.ressources.logo1 +
                      data.data1.UimgLinks.IL1B
                    }
                    className=" logo img-responsive page-scroll authorLogo modalImg"
                    href="#page-top"
                    alt={data.data1 ? data.data1.nom : "loading..."}
                  />{" "}
                </Modal>
              </li>
              {/*5b - 3 - Press + modal*/}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal4();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5c : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open4}
                  onClose={() => {
                    onCloseModal4();
                    DisplayThis();
                  }}
                  center
                >
                  <h1>{data.data2 ? data.data2.presse.titre : "loading..."}</h1>
                  <p>{data.data2 ? data.data2.presse.P1 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.presse.P2 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.presse.P3 : "loading..."}</p>
                  <a href={ThatMail}>
                    <p className="Pcenter">
                      {data.data2 ? data.data2.nda.mail : "loading..."}
                    </p>
                  </a>
                  <p> {data.data2 ? data.data2.presse.P4 : "loading..."}</p>
                  <p> {data.data2 ? data.data2.presse.P5 : "loading..."}</p>
                  <img
                    src={
                      data.data1.UimgLinks.IL0 +
                      data.data1.ressources.logo1 +
                      data.data1.UimgLinks.IL1B
                    }
                    className=" logo img-responsive page-scroll authorLogo modalImg"
                    href="#page-top"
                    alt={data.data1 ? data.data1.nom : "loading..."}
                  />{" "}
                </Modal>
              </li>
              {/*5b - 4 - Media kit download link (PDF)*/}
              <li>
                <Link
                  to={
                    data.data1 ? data.data1.ressources.kitMédia : "loading..."
                  }
                  target="_blank"
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5d : "loading..."}
                </Link>
              </li>
            </ul>
          </li>
          {/*6 Blog link*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.blog : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu6 : "loading..."}
            </a>
          </li>
          {/*7 Shop link*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.boutique : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu7 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
