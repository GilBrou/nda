/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { Redirect } from "react-router";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import MaBrume from "../audio/MaBrume.wav";
import Lilith from "../audio/Lilith.flac";
import Somber from "../audio/Somber.wav";

import Data4 from "../data/story.json";
import Data5 from "../data/story2.json";
import Data6 from "../data/story3.json";

/*
  check effects and animations for text !!!!!!!!!!!!!!!!!!
  also check story  text !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/***COMPONENT***/
export default function Story() {
  /*define short story*/
  const [data, setData] = useState({});
  const [audio, setAudio] = useState({});
  useEffect(() => {
    function getStory() {
      if (window.location.href.includes("brume")) {
        setData(Data4);
        setAudio(MaBrume);
      } else if (window.location.href.includes("lilith")) {
        setData(Data5);
        setAudio(Lilith);
      } else if (window.location.href.includes("somber")) {
        setData(Data6);
        setAudio(Somber);
      } else {
        window.location = "/nouvelles";
      }
    }
    getStory();
  }, []);

  /*Page declaration*/
  const [page, setPage] = useState(0);
  /*Page incrementation*/
  function nextPage() {
    setPage(page + 1);
  }
  function previousPage() {
    setPage(page - 1);
  }
  /*Play music as story begins*/
  function firstClick(data) {
    let playIt = document.getElementById("audioP");
    /*playIt.play();*/
    nextPage(data);
  }

  /*DOM*/
  return (
    <div className="story">
      <div className="storyWrap">
        {DustAnim()}
        <div className="top">
          <div className="left0">
            {/*goBack button*/}
            <div className="goBack">
              <button
                id="goBack"
                className="goBack"
                onClick={() => {
                  window.location = "/nouvelles";
                }}
              >
                {" "}
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
            </div>
            {/*Refresh button*/}
            <div className="refresh">
              <button
                id="refresh"
                className="refresh"
                onClick={() => {
                  location.reload();
                }}
              >
                {" "}
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="top2">
            <div className="left">
              {(() => {
                if (page > 0) {
                  /*previous button*/
                  return (
                    <button
                      className="previous"
                      onClick={() => {
                        previousPage(data);
                      }}
                    >
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                  );
                }
              })()}
            </div>

            {/*all texts part*/}
            {StoryTelling(data)}

            <div className="right">
              {(() => {
                if (page > 0) {
                  /*Next button*/
                  return (
                    <button
                      className="next"
                      onClick={() => {
                        nextPage(data);
                      }}
                    >
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  );
                }
              })()}
            </div>
          </div>
        </div>

        {/*Audio player*/}
        <div className="bottom">
          {/*End buttons*/}
          <div className="buttonWrap">
            {/*Author button*/}
            <button
              className="fin1"
              onClick={() => {
                window.location = "/recherche#" + data.Auteur;
              }}
            >
              {"Découvrir d'autres textes de " + data.Auteur}
            </button>

            {/*Back to short stories page*/}
            <button
              className="fin2"
              onClick={() => {
                window.location = "/nouvelles";
              }}
            >
              Retour à l'accueil des nouvelles
            </button>
          </div>

          <div id="audio">
            {/*radio antenna*/}
            <div className="antenna"></div>
            {/*Woofers styling*/}
            <div className="Radio Radio1"></div>
            <div className="Radio Radio2"></div>
            <p>Ambiance Sonore</p>
            <audio id="audioP" src={audio} /*autoPlay*/ controls loop></audio>
          </div>
        </div>
      </div>
    </div>
  );

  /*StoryTelling*/
  function StoryTelling(data) {
    /*first page*/
    if (page == 0) {
      return (
        <div className="middle">
          <div className="storyText">
            <h1>{data.Titre}</h1>
            <h2 className="auteur">{data.Auteur}</h2>
            <button
              className="startButton"
              onClick={() => {
                firstClick(data);
              }}
            >
              <p>▶</p>
            </button>
          </div>
        </div>
      );
    }
    /*All story pages*/
    if (page >= 1 && page < 21) {
      return (
        <div className="middle">
          <div className="storyText ">
            {/*Page number*/}
            <p className="pageNum">{"Page " + page + " / 21"}</p>
            {/*Dynamic display of every paragraph from Json according to page*/}
            {(() => {
              if (page == 1) {
                return data.P1.map((P, i) => (
                  <h2 className="firstT" key={"P" + i}>
                    {P}
                  </h2>
                ));
              }
              if (page == 2) {
                return data.P2.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 3) {
                return data.P3.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 4) {
                return data.P4.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 5) {
                return data.P5.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 6) {
                return data.P6.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 7) {
                return data.P7.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 8) {
                return data.P8.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 9) {
                return data.P9.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 10) {
                return data.P10.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 11) {
                return data.P11.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 12) {
                return data.P12.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 13) {
                return data.P13.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 14) {
                return data.P14.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 15) {
                return data.P15.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 16) {
                return data.P16.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 17) {
                return data.P17.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 18) {
                return data.P18.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 19) {
                return data.P19.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
              if (page == 20) {
                return data.P20.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
              }
            })()}
          </div>
        </div>
      );
    }
    {
      /*Check if this is the last page*/
    }
    if (page == 21) {
      return (
        <div className="middle">
          {/*Page number*/}
          <p className="pageNum">{"Page " + page + " / 21"}</p>
          <div className="storyText ">
            {data.P21.map((P, i) => (
              /*Lasts paragraphs*/
              <h2 key={"P" + i}>{P}</h2>
            ))}
          </div>
          }
        </div>
      );
    }
  }
}
