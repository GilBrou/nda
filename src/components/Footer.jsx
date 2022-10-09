/***HEADER/NAV MODULE***/
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Footer(props) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);

  return (
    <div>
      <footer>
        <ul className="menu">
          <li>
            <div>
              <button className="footButton" onClick={onOpenModal}>
                {" "}
                {props.data ? props.data.Sec1 : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open}
                onClose={onCloseModal}
                center
              >
                <h1> {props.data ? props.data.Sec1 : "loading..."}</h1>
                <p> {props.data ? props.data.Sec1P1 : "loading..."}</p>
                <p> {props.data ? props.data.Sec1P2 : "loading..."}</p>
                <p> {props.data ? props.data.Sec1P3 : "loading..."}</p>
                <p> {props.data ? props.data.Sec1P4 : "loading..."}</p>
                <p> {props.data ? props.data.Sec1P5 : "loading..."}</p>
                <p> {props.data ? props.data.Sec1P6 : "loading..."}</p>
              </Modal>
            </div>
          </li>
          {/*
          <li>
            <div>
              <button onClick={onOpenModal2}>
                {" "}
                {props.data ? props.data.Sec2 : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open2}
                onClose={onCloseModal2}
                center
              >
                <h1> {props.data ? props.data.Sec2 : "loading..."}</h1>
                <p> {props.data ? props.data.Sec2P1 : "loading..."}</p>
                <p> {props.data ? props.data.Sec2P2 : "loading..."}</p>
                <p> {props.data ? props.data.Sec2P3 : "loading..."}</p>
                <p> {props.data ? props.data.Sec2P4 : "loading..."}</p>
                <p> {props.data ? props.data.Sec2P5 : "loading..."}</p>
                <p> {props.data ? props.data.Sec2P6 : "loading..."}</p>
              </Modal>
            </div>
          </li>
          <li>
            <div>
              <button onClick={onOpenModal3}>
                {" "}
                {props.data ? props.data.Sec3 : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open3}
                onClose={onCloseModal3}
                center
              >
                <h1> {props.data ? props.data.Sec3 : "loading..."}</h1>
                <p> {props.data ? props.data.Sec3P1 : "loading..."}</p>
                <p> {props.data ? props.data.Sec3P2 : "loading..."}</p>
                <p> {props.data ? props.data.Sec3P3 : "loading..."}</p>
                <p> {props.data ? props.data.Sec3P4 : "loading..."}</p>
                <p> {props.data ? props.data.Sec3P5 : "loading..."}</p>
                <p> {props.data ? props.data.Sec3P6 : "loading..."}</p>
              </Modal>
            </div>
          </li>
          */}
          <li>
            <a
              href={props.data ? props.data.Sec4Link : "loading..."}
              target="_blank"
              className="fb"
            >
              <i
                className={props.data ? props.data.Sec4 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec5Link : "loading..."}
              target="_blank"
            >
              <i
                className={props.data ? props.data.Sec5 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec6Link : "loading..."}
              target="_blank"
            >
              <i
                className={props.data ? props.data.Sec6 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
                   <li>
            <a
              href={props.data ? props.data.Sec7Link : "loading..."}
              target="_blank"
            >
              <i
                className={props.data ? props.data.Sec7 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>

          <li>
            <img
              src={props.data ? props.data.Sec8 : "loading..."}
              className="img-responsive BretagneLogo"
              alt={props.data ? props.data.Sec8b : "loading..."}
            />{" "}
          </li>
          <li>
            <img
              src={props.data ? props.data.Sec9 : "loading..."}
              className="img-responsive"
              alt={props.data ? props.data.Sec9b : "loading..."}
            />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
