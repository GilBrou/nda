/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import MaBrume from "../audio/MaBrume.wav";
import Data4 from "../data/story.json";
import Data5 from "../data/story2.json";

/***COMPONENT***/
export default function Story() {
  /*********IF/ELSE AND URL PARAMS ..........************************TO*DO*********************/

  /*define short story*/
  let data = Data4;
  let audio = MaBrume;

  /*********IF/ELSE AND URL PARAMS ..........************************TO*DO*********************/

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
    playIt.play();
    nextPage(data);
  }

  /*StoryTelling*/
  function StoryTelling(data) {
    /*Check if this is the first page*/
    if (page == 0) {
      return (
        <div className="storyText">
          <h1>{data.Titre}</h1>
          <h2 className="auteur">{"par " + data.Auteur}</h2>
          <button
            className="startButton"
            onClick={() => {
              firstClick(data);
            }}
          >
            Commencer la lecture
          </button>
        </div>
      );
    }
    /*All story pages*/
    if (page >= 1 && page < 21) {
      let refresh = document.getElementById("refresh");
      refresh.style.visibility = "visible";
      return (
        <div className="storyText ">
          {/*Page number*/}
          <p className="pageNum">{"Page " + page + " / 21"}</p>

          {(() => {
            if (page > 1) {
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
          {(() => {
            if (page == 1) {
              /*Dynamic display of every paragraph from Json according to page*/
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
          {/*Next button*/}
          <button
            className="next"
            onClick={() => {
              nextPage(data);
            }}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
    {
      /*Check if this is the last page*/
    }
    if (page == 21) {
      return (
        <div className="storyText ">
          {/*Previous button*/}
          <button
            className="previous"
            onClick={() => {
              previousPage(data);
            }}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          {/*Page number*/}
          <p className="pageNum">{"Page " + page + " / 21"}</p>
          {data.P21.map((P, i) => (
            /*Lasts paragraphs*/
            <h2 key={"P" + i}>{P}</h2>
          ))}
          {/*End buttons*/}
          {
            /*Author button*/
            <button
              className="fin1"
              onClick={() => {
                window.location = "/recherche#" + data.Auteur;
              }}
            >
              {"Découvrir d'autres textes de " + data.Auteur}
            </button>
          }

          {
            /*Back to short stories page*/
            <button
              className="fin2"
              onClick={() => {
                window.location = "/nouvelles";
              }}
            >
              Retour à l'accueil des nouvelles
            </button>
          }
        </div>
      );
    }
  }

  /*DOM*/
  return (
    <div className="story">
      <div className="storyWrap">
        {DustAnim()}
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
        {/*all texts part*/}
        {StoryTelling(data)}
        {/*Audio player*/}
        <div className="audioWrap">
          {/*radio antenna*/}
          <div className="antenna"></div>
          <div id="audio">
            {/*Woofers styling*/}
            <div className="Radio Radio1"></div>
            <div className="Radio Radio2"></div>
            <p>Ambiance sonore</p>
            <audio id="audioP" src={audio} autoPlay controls loop></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
