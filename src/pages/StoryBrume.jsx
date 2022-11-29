/******STORY******/

/*********************COMMENT AND CLEAN*******************************/

/***GENERAL***/
import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";

/***DATA***/
import data from "../data/story1.json";

/***COMPONENTS***/
import audio from "../audio/MaBrume.wav";
import kidz from "../audio/kidz.wav";
import Horn from "../audio/Horn.wav";
import Dread from "../audio/Dread.mp3";
import Drone from "../audio/Drone.mp3";
import Jazz from "../audio/Jazz.mp3";

/***COMPONENT***/
export default function Story() {
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
      /*console.log("music is on");*/
      let playIt = document.getElementById("audioP");
      playIt.play();
      nextPage(data);
    } else {
      /*console.log("music is off");*/
      nextPage(data);
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
      /*console.log("Sound is off");*/
      let Audio1 = document.getElementById("audioP");
      let Audio2 = document.getElementById("Kidz");
      let Audio3 = document.getElementById("Jazz");
      let Audio4 = document.getElementById("Drone");
      let Audio5 = document.getElementById("Horn");
      let Audio6 = document.getElementById("Dread");
      let Audio7 = document.getElementById("Dread2");
      let allMusic = [Audio1, Audio2, Audio3, Audio4, Audio5, Audio6, Audio7];
      /*console.log(allMusic);*/
      for (let i in allMusic) {
        if (allMusic[i] != null && allMusic[i] != undefined) {
          allMusic[i].pause();
        }
      }
    } else {
      setmusicToggle(true);
      /*console.log("Sound is on");*/
      let playIt = document.getElementById("audioP");
      playIt.play();
    }
  }

  /*play secondary audio*/
  function playIt2(sound) {
    sound.volume = 0.01;
    setTimeout(() => {
      sound.play();
    }, 500);
    setTimeout(() => {
      sound.volume = 0.03;
    }, 750);
    setTimeout(() => {
      sound.volume = 0.05;
    }, 1000);
    setTimeout(() => {
      sound.volume = 0.08;
    }, 1250);
    setTimeout(() => {
      sound.volume = 0.1;
    }, 1500);
    setTimeout(() => {
      sound.volume = 0.1;
      stopIt2(sound);
    }, 9000);
  }
  function playIt3(sound) {
    let sound0 = document.getElementById("audioP");
    sound.volume = 0.01;
    sound0.volume = 0.9;
    setTimeout(() => {
      sound0.volume = 0.8;
    }, 1000);
    setTimeout(() => {
      sound.volume = 0.03;
      sound.play();
      sound0.volume = 0.7;
    }, 1500);
    setTimeout(() => {
      sound.volume = 0.05;
      sound0.volume = 0.6;
    }, 2000);
    setTimeout(() => {
      sound.volume = 0.08;
      sound0.volume = 0.5;
    }, 2500);
    setTimeout(() => {
      sound.volume = 0.1;
    }, 3000);
    setTimeout(() => {
      sound.volume = 0.1;
      sound0.volume = 0.7;
      stopIt2(sound);
    }, 10000);
  }
  function playIt5(sound) {
    let sound0 = document.getElementById("audioP");
    sound.volume = 0.3;
    sound.play();
    setTimeout(() => {
      sound0.volume = 0.6;
    }, 1000);
    setTimeout(() => {
      sound0.volume = 0.3;
    }, 1500);
    setTimeout(() => {
      stopIt2(sound0);
    }, 2000);
  }

  /*stop secondary audio*/
  function stopIt2(sound) {
    let sound0 = document.getElementById("audioP");
    sound0.volume = 1;
    sound.volume = 0.07;
    setTimeout(() => {
      sound.volume = 0.04;
    }, 500);
    setTimeout(() => {
      sound.volume = 0.01;
    }, 750);
    setTimeout(() => {
      sound.volume = 0.01;
      sound.pause();
    }, 1000);
  }

  /*fade anim*/
  function fadeAll() {
    document.getElementById("storyWrap").style.filter = "brightness(0)";
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(10%)";
    }, 150);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(20%)";
    }, 175);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(30%)";
    }, 200);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(40%)";
    }, 225);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(50%)";
    }, 250);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 275);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(70%)";
    }, 300);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 325);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(90%)";
    }, 350);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(100%)";
    }, 375);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(10%)";
    }, 450);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(20%)";
    }, 500);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(30%)";
    }, 475);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(40%)";
    }, 500);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(50%)";
    }, 525);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 550);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(70%)";
    }, 575);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 600);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(90%)";
    }, 625);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(100%)";
    }, 650);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(10%)";
    }, 775);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(20%)";
    }, 785);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(30%)";
    }, 795);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(40%)";
    }, 805);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(50%)";
    }, 815);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(60%)";
    }, 825);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(70%)";
    }, 835);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(80%)";
    }, 845);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(90%)";
    }, 855);

    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "brightness(100%)";
    }, 865);
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "unset";
    }, 870);
  }

  /*Flash anim*/
  function flash() {
    setTimeout(() => {
      document.getElementById("storyWrap").style.filter = "invert(100%)";
      setTimeout(() => {
        document.getElementById("storyWrap").style.filter = "unset";
      }, 100);
      setTimeout(() => {
        document.getElementById("storyWrap").style.filter = "invert(100%)";
      }, 125);

      setTimeout(() => {
        document.getElementById("storyWrap").style.filter = "unset";
      }, 150);

      setTimeout(() => {
        document.getElementById("storyWrap").style.filter = "invert(100%)";
      }, 175);

      setTimeout(() => {
        document.getElementById("storyWrap").style.filter = "unset";
      }, 200);
    }, 4500);
  }

  /*Ending styling*/
  function Ending() {
    let arrowright = document.getElementById("next");
    arrowright.style.display = "none";
    document.getElementById("left").classList.add("fadeIt2");
    let sound = document.getElementById("Dread2");
    if (musicToggle) {
      playIt5(sound);
      let Audio1 = document.getElementById("Kidz");
      let Audio2 = document.getElementById("Jazz");
      let Audio3 = document.getElementById("Drone");
      let Audio4 = document.getElementById("Horn");
      let allMusic = [Audio1, Audio2, Audio3, Audio4];
      for (let i in allMusic) {
        if (allMusic[i] != null && allMusic[i] != undefined) {
          allMusic[i].pause();
        }
      }
    }
  }

  /*DOM*/
  return (
    <div className="story">
      {/*Wrapper*/}
      <div className="storyWrap" id="storyWrap">
        {/*Background general animation*/}
        {DustAnim()}
        <div className="top" id="thisToggle">
          {/*Left section with controls*/}
          <div id="left" className="left">
            {/*Sound button*/}
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
          {/*Main part : text*/}
          {(() => {
            /*Story HomePage*/
            if (page == 0) {
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
            /*All text pages except last one*/
            if (page >= 1 && page < 20) {
              return (
                <div className="middle" id="middle">
                  {/*Page number*/}
                  <p className="pageNum">{"Page " + page + " / 20"}</p>
                  {/*Dynamic display of every paragraph from Json according to page*/}
                  {(() => {
                    /*Page1*/
                    if (page == 1) {
                      return (
                        <div>
                          <h2 className="blurIt" key={"P" + 1}>
                            {data.P1[0]}
                          </h2>
                          <h2 className="blurIt" key={"P" + 2}>
                            {data.P1[1]}
                          </h2>
                        </div>
                      );
                    }
                    /*Page2*/
                    if (page == 2) {
                      let sound = document.getElementById("Kidz");
                      if (musicToggle) {
                        playIt2(sound);
                      }
                      return data.P2.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page3*/
                    if (page == 3) {
                      let sound = document.getElementById("Kidz");
                      stopIt2(sound);
                      return (
                        <div>
                          {data.P3.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}

                          <div className="fadeIt">
                            <div className="page3 backOverlay"></div>
                          </div>
                        </div>
                      );
                    }
                    /*Page4*/
                    if (page == 4) {
                      return data.P4.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page5*/
                    if (page == 5) {
                      return data.P5.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page6*/
                    if (page == 6) {
                      fadeAll();
                      return (
                        <div className="fadeIt">
                          {(() => {
                            return data.P6.map((P, i) => (
                              <h2 className="smoky" key={"P" + i}>
                                {P}
                              </h2>
                            ));
                          })()}
                        </div>
                      );
                    }
                    /*Page7*/
                    if (page == 7) {
                      let sound = document.getElementById("Jazz");
                      if (musicToggle) {
                        playIt3(sound);
                      }
                      return data.P7.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page8*/
                    if (page == 8) {
                      let sound = document.getElementById("Jazz");
                      stopIt2(sound);
                      return (
                        <div>
                          {data.P8.map((P, i) => (
                            <h2 className="page8p smoky" key={"P" + i}>
                              {P}
                            </h2>
                          ))}
                          <div className="fadeIt">
                            <div className="page8 backOverlay"></div>
                          </div>
                        </div>
                      );
                    }
                    /*Page9*/
                    if (page == 9) {
                      return data.P9.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page10*/
                    if (page == 10) {
                      return data.P10.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page11*/
                    if (page == 11) {
                      return data.P11.map((P, i) => (
                        <h2 className="smoky" key={"P" + i}>
                          {P}
                        </h2>
                      ));
                    }
                    /*Page12*/
                    if (page == 12) {
                      return (
                        <div>
                          {data.P12.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}
                          <div className="fadeIt">
                            <div className="page12 backOverlay"></div>
                          </div>
                        </div>
                      );
                    }
                    /*Page13*/
                    if (page == 13) {
                      flash();
                      return data.P13.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page14*/
                    if (page == 14) {
                      let sound2 = document.getElementById("Horn");
                      if (musicToggle) {
                        playIt2(sound2);
                      }
                      return data.P14.map((P, i) => <h2 key={"P" + i}>{P}</h2>);
                    }
                    /*Page15*/
                    if (page == 15) {
                      return (
                        <div>
                          {data.P15.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}
                          <div className="fadeIt">
                            <div className="page15 backOverlay"></div>
                          </div>
                        </div>
                      );
                    }
                    /*Page16*/
                    if (page == 16) {
                      return (
                        <div>
                          {data.P16.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}
                          <div className="page16 backOverlay"></div>
                        </div>
                      );
                    }
                    /*Page17*/
                    if (page == 17) {
                      let sound = document.getElementById("Dread");
                      if (musicToggle) {
                        playIt2(sound);
                      }
                      return (
                        <div>
                          {data.P17.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}
                          <div className=" fadeIt">
                            <div className="page17 backOverlay"></div>
                          </div>
                        </div>
                      );
                    }
                    /*Page18*/
                    if (page == 18) {
                      let sound = document.getElementById("Dread");
                      stopIt2(sound);
                      return data.P18.map((P, i) => (
                        <h2 className="smoky" key={"P" + i}>
                          {P}
                        </h2>
                      ));
                    }
                    /*Page19*/
                    if (page == 19) {
                      let sound = document.getElementById("Dread");
                      sound.pause();
                      return (
                        <div className="fadeIt">
                          {data.P19.map((P, i) => (
                            <h2 key={"P" + i}>{P}</h2>
                          ))}
                          <div className="page19 backOverlay"></div>
                        </div>
                      );
                    }
                  })()}
                </div>
              );
            }
            /*Page20  : last page*/
            if (page == 20) {
              /*Ending styling*/
              Ending();
              return (
                <div className="middle fadeIt">
                  {/*Page number*/}
                  <p className="pageNum fadeIt2">{"Page " + page + " / 20"}</p>
                  {data.P20.map((P, i) => (
                    /*Lasts paragraphs*/
                    <h2 key={"P" + i}>{P}</h2>
                  ))}
                  {/*End buttons*/}
                  <div className="bottom fadeIt2">
                    {/*Author's texts button*/}
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
                  <div className="page20 backOverlay"></div>
                </div>
              );
            }
          })()}
          {/*Right par : next button*/}
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
          <div className="backOverlay2"></div>
        </div>
      </div>
      {/*Audio players*/}
      <audio id="audioP" className="audio" src={audio} loop></audio>
      <audio className="hideAudio audio" id="Kidz" src={kidz}></audio>
      <audio className="hideAudio audio" id="Jazz" src={Jazz}></audio>
      <audio className="hideAudio audio" id="Drone" src={Drone}></audio>
      <audio className="hideAudio audio" id="Horn" src={Horn}></audio>
      <audio className="hideAudio audio" id="Dread" src={Dread}></audio>
      <audio className="hideAudio audio" id="Dread2" loop src={Dread}></audio>
      {/*Left part buttons tooltips*/}
      {/*Sound tooltip*/}
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
      {/*Refresh tooltip*/}
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
      {/*Library homepage tooltip*/}
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
}
