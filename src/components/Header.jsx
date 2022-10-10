/***HEADER/NAV MODULE***/
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

function Header(props) {
  const [open4, setOpen4] = useState(false);
  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);
  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);

  return (
    <header>
      <nav role="navigation" className="top-nav primary-navigation">
        <div>
          <a href="/accueil">
            <img
              src={props.data ? props.data.logo : "loading..."}
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={props.data ? props.data.nom : "loading..."}
            />{" "}
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        <ul className="menu">
          <li>
            <a
              href={props.data ? props.data.Sec1Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec1 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec2Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec2 : "loading..."}
            </a>
            <ul className="subList">
              <li>
                <a href={props.data ? props.data.Sec2sub1L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub1 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub2L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub2 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub3L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub3 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub4L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub4 : "loading..."}
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.Sec2sub5L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub5 : "loading..."}
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.Sec2sub6L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub6 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub7L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub7 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub8L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub8 : "loading..."}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href={props.data ? props.data.Sec3Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec3 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec4Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec4 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec5Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec5 : "loading..."}
            </a>
            <ul className="subList">
              <li>
                <a href={props.data ? props.data.Sec5sub1L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec5sub1 : "loading..."}
                </a>
              </li>

              <div>
                <button
                  className="modalButton modalPress"
                  onClick={onOpenModal5}
                >
                  {" "}
                  {props.data ? props.data.Sec5sub2 : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open5}
                  onClose={onCloseModal5}
                  center
                >
                  <h1>{props.data ? props.data.Sec5sub2 : "loading..."}</h1>
                  <p className="manuCenter">
                    {" "}
                    {props.data ? props.data.ManuscritP1 : "loading..."}
                  </p>
                  <p> {props.data ? props.data.ManuscritP2 : "loading..."}</p>
                  <img
                    src={props.data ? props.data.logo : "loading..."}
                    className=" logo img-responsive page-scroll authorLogo modalImg"
                    href="#page-top"
                    alt={props.data ? props.data.nom : "loading..."}
                  />{" "}
                </Modal>
              </div>

              <div>
                <button
                  className="modalButton modalPress"
                  onClick={onOpenModal4}
                >
                  {" "}
                  {props.data ? props.data.Sec5sub3 : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open4}
                  onClose={onCloseModal4}
                  center
                >
                  <h1> {props.data ? props.data.Sec5sub3 : "loading..."}</h1>
                  <p> {props.data ? props.data.pressP1 : "loading..."}</p>
                  <p> {props.data ? props.data.pressP2 : "loading..."}</p>
                  <a href="mailto:contact@noirdabsinthe.com">
                    <p className="CenterMail">
                      {props.data ? props.data.pressMail : "loading..."}
                    </p>
                  </a>
                  <p> {props.data ? props.data.pressP3 : "loading..."}</p>
                  <p> {props.data ? props.data.pressP4 : "loading..."}</p>
                  <img
                    src={props.data ? props.data.logo : "loading..."}
                    className=" logo img-responsive page-scroll authorLogo modalImg"
                    href="#page-top"
                    alt={props.data ? props.data.nom : "loading..."}
                  />{" "}
                </Modal>
              </div>

              <li>
                <a href={props.data ? props.data.Sec5sub3L : "loading..."}> </a>
              </li>

              <li>
                <Link to="/Kit_Media_Noir_d'Absinthe.pdf" target="_blank">
                  {props.data ? props.data.Sec5sub4 : "loading..."}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec6Link : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {props.data ? props.data.Sec6 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec7Link : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {props.data ? props.data.Sec7 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
