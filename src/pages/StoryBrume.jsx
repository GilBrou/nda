/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import audio from "../audio/MaBrume.wav";
import kidz from "../audio/kidz.wav";
import Bal from "../audio/Bal.mp3";
import Jazz from "../audio/Jazz.mp3";
import Lilith from "../audio/Lilith.flac";
import Somber from "../audio/Somber.wav";
import data from "../data/story1.json";

/*
  check effects and animations for text !!!!!!!!!!!!!!!!!!
  also check story  text !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/***COMPONENT***/

/*style and props this*/
export default function Story() {
  /*play secondary audio*/
  function playIt2(sound) {
    sound.volume = 0.06;
    setTimeout(() => {
      sound.play();
    }, 2000);
    setTimeout(() => {
      sound.pause();
    }, 10000);
  }

  function playIt3(sound) {
    let playIt = document.getElementById("audioP");
    playIt.volume = 0.7;
    sound.volume = 0.1;
    setTimeout(() => {
      sound.play();
    }, 300);
    setTimeout(() => {
      let playIt = document.getElementById("audioP");
      sound.play();
      playIt.volume = 0.5;
    }, 500);
    setTimeout(() => {
      let playIt = document.getElementById("audioP");
      sound.pause();
      playIt.volume = 1;
    }, 10000);
  }

  /*stop secondary audio*/
  function stopIt2(sound) {
    sound.volume = 0.03;
    setTimeout(() => {
      sound.volume = 0.01;
      sound.pause();
    }, 500);
  }

  /*stop secondary audio*/
  function fadeAll() {
    document.getElementById("storyWrap").style.filter = "brightness(0)";
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(10%)";
    }, 50);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(20%)";
    }, 75);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(30%)";
    }, 100);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(40%)";
    }, 125);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(50%)";
    }, 150);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 175);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(70%)";
    }, 200);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 225);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(90%)";
    }, 250);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(100%)";
    }, 275);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 300);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 325);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(40%)";
    }, 350);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 375);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 400);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(100%)";
    }, 425);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "unset";
    }, 450);
  }

  function flash() {
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "invert(100%)";
    }, 4000);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "unset";
    }, 4070);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "invert(100%)";
    }, 4095);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "unset";
    }, 4105);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "invert(100%)";
    }, 4120);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "unset";
    }, 4170);
  }

  /*Page declaration*/
  const [page, setPage] = useState(0);
  /*Page incrementation*/
  function nextPage() {
    if (page != "20") {
      setPage(page + 1);
    }
  }
  /*Play music as story begins*/
  function firstClick(data) {
    if (musicToggle) {
      console.log("music is on");
      let playIt = document.getElementById("audioP");
      playIt.play();
      nextPage(data);
    } else {
      console.log("music is off");
    }
  }

  /*toggle Music*/
  let [musicToggle, setmusicToggle] = useState(true);
  function toggleSoundIcon() {
    let soundButton = document.getElementById("soundButton");
    if (musicToggle && soundButton != null && soundButton != undefined) {
      soundButton.style.padding = "0 5px 0 0";
      soundButton.style.color = "var(--greenish)";
      return <i className="fa fa-music" aria-hidden="true"></i>;
    } else if (
      !musicToggle &&
      soundButton != null &&
      soundButton != undefined
    ) {
      soundButton.style.padding = "0";
      soundButton.style.color = "var(--whiteish)";
      return <i className="fa fa-times" aria-hidden="true"></i>;
    }
  }
  /*toggle Music Icon*/
  function toggleSound() {
    if (musicToggle) {
      setmusicToggle(false);
      console.log("Sound is off");
    } else {
      setmusicToggle(true);
      console.log("Sound is on");
    }
  }

  /*DOM*/
  return (
    <div className="story">
      <div className="storyWrap" id="storyWrap">
        {DustAnim()}
        <div className="top" id="thisToggle">
          <div className="left">
            {/*Refresh button*/}
            <div className="soundButton" data-tip data-for="TipSound">
              <button
                id="soundButton"
                className="soundButton music"
                onClick={() => {
                  toggleSound();
                }}
              >
                {" "}
                {/*Change icon depending on toggle*/}
                {toggleSoundIcon()}
              </button>
            </div>
            {/*Refresh button*/}
            <div className="refresh" data-tip data-for="TipRefresh">
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
            {/*goBack button*/}
            <div className="goBack" data-tip data-for="TipBiblio">
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
          </div>

          {/*all texts part*/}
          {StoryTelling(data)}

          <div className="right">
            {(() => {
              if (page > 0) {
                /*Next button*/
                return (
                  <button
                    id="next"
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
      <audio id="audioP" className="audio" src={audio} loop></audio>
      <audio className="hideAudio audio" id="kidz" src={kidz}></audio>
      <audio className="hideAudio" className="audio" id="Bal" src={Bal}></audio>
      <audio className="hideAudio audio" id="Jazz" src={Jazz}></audio>
      <ReactTooltip
        id="TipSound"
        place="bottom"
        animation="FadeIn"
        effect="solid"
        textColor="var(--blackish)"
        arrowColor="var(--greenish)"
        effect="solid"
        backgroundColor="var(--greenish)"
        key="TipForSound"
      >
        Activer / Désactiver le son
      </ReactTooltip>
      <ReactTooltip
        id="TipRefresh"
        place="bottom"
        animation="FadeIn"
        effect="solid"
        textColor="var(--blackish)"
        arrowColor="var(--greenish)"
        effect="solid"
        backgroundColor="var(--greenish)"
        key="TipForRefresh"
      >
        Reprendre depuis le début
      </ReactTooltip>
      <ReactTooltip
        id="TipBiblio"
        place="bottom"
        animation="FadeIn"
        effect="solid"
        textColor="var(--blackish)"
        arrowColor="var(--greenish)"
        effect="solid"
        backgroundColor="var(--greenish)"
        key="TipForBiblio"
      >
        Retour à la bibliothèque
      </ReactTooltip>
    </div>
  );

  /*StoryTelling*/
  function StoryTelling(data) {
    /*first page*/
    if (page == 0) {
      let endButton1 = document.getElementById("fin1");
      let endButton2 = document.getElementById("fin2");
      if (
        endButton1 != null ||
        (endButton1 != undefined && endButton2 != null) ||
        endButton2 != undefined
      ) {
        /*
        endButton1.style.visibility = "hidden";
        endButton2.style.visibility = "hidden";*/
      }

      return (
        <div className="middle">
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
      );
    }
    /*All story pages*/
    if (page >= 1 && page < 20) {
      return (
        <div className="middle" id="middle">
          {/*Page number*/}
          <p className="pageNum">{"Page " + page + " / 20"}</p>
          {/*Dynamic display of every paragraph from Json according to page*/}
          {(() => {
            if (page == 1) {
              return data.P1.map((P, i) => (
                <h2 className="blurIt" key={"P" + i}>
                  {P}
                </h2>
              ));
            }
            if (page == 2) {
              let sound = document.getElementById("kidz");
              playIt2(sound);
              return data.P2.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
            }
            if (page == 3) {
              let sound = document.getElementById("kidz");
              stopIt2(sound);
              return data.P3.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
            }
            if (page == 4) {
              return data.P4.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
            }
            if (page == 5) {
              return data.P5.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
            }
            if (page == 6) {
              fadeAll();
              return data.P6.map((P, i) => (
                <h2 className="fade" key={"P" + i}>
                  {P}
                </h2>
              ));
            }
            if (page == 7) {
              let sound = document.getElementById("Bal");
              let sound2 = document.getElementById("Jazz");
              playIt2(sound);
              playIt3(sound2);
              return data.P7.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
            }
            if (page == 8) {
              let sound = document.getElementById("Bal");
              let sound2 = document.getElementById("Jazz");
              stopIt2(sound);
              stopIt2(sound2);
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
              flash();
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
          })()}
        </div>
      );
    }
    {
      /*Check if this is the last page*/
    }
    if (page == 20) {
      let arrowright = document.getElementById("next");
      arrowright.style.display = "none";
      return (
        <div className="middle">
          {/*Page number*/}
          <p className="pageNum">{"Page " + page + " / 20"}</p>
          {data.P20.map((P, i) => (
            /*Lasts paragraphs*/
            <h2 key={"P" + i}>{P}</h2>
          ))}
          {/*End buttons*/}
          <div className="bottom">
            {/*Author button*/}
            <div
              id="fin1"
              className="fin"
              onClick={() => {
                window.location = "/recherche#" + data.Auteur;
              }}
            >
              {"Découvrir d'autres textes de " + data.Auteur}
            </div>
            {/*Back to short stories page*/}
            <div
              id="fin2"
              className="fin"
              onClick={() => {
                window.location = "/nouvelles";
              }}
            >
              Retour à l'accueil des nouvelles
            </div>
          </div>
        </div>
      );
    }
  }
}
