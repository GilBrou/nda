/******STORY******/

/***COMPONENTs***/
import { DustAnim } from "../components/UniversAnim";
import MaBrume from "../audio/MaBrume.wav";





/***COMPONENT***/
export default function Story(data) {

function refresh(data) {
  location.reload();
}



  let Title = document.getElementById("Title");
  let Title2 = document.getElementById("Title2");
  let Title3 = document.getElementById("Title3");
  let Story1 = document.getElementById("Story1");
  let Story2 = document.getElementById("Story2");
  let Story3 = document.getElementById("Story3");
  let Story4 = document.getElementById("Story4");
  let Story5 = document.getElementById("Story5");
  let Story6 = document.getElementById("Story6");

  let break1 = document.getElementById("break1");
  let break2 = document.getElementById("break2");
  let break3 = document.getElementById("break3");

  function startReading(data) {
  let refresh = document.getElementById("refresh");

    Title.style.display = "none";
    Title2.style.display = "none";
    Title3.style.display = "none";
    Story1.style.display = "block";
    Story2.style.display = "block";
    break1.style.display = "block";
    refresh.style.visibility = "visible";
  }

  function next0(data) {
    break1.style.display = "none";
    break2.style.display = "block";
    Story1.style.display = "none";
    Story2.style.display = "none";
    Story3.style.display = "block";
    Story4.style.display = "block";
  }

  function next1(data) {
    break2.style.display = "none";
    break3.style.display = "block";
    Story3.style.display = "none";
    Story4.style.display = "none";
    Story5.style.display = "block";
    Story6.style.display = "block";
  }

  function next2(data) {
    break3.style.display = "none";
    /*break4.style.display = "block";*/
    Story5.style.display = "none";
    Story6.style.display = "none";
    /*Story7.style.display = "block";*/
    /*Story8.style.display = "block";*/
  }

  /*DOM*/
  return (
    <div className="story">
      <div className="storyWrap">
        {DustAnim()}
        <h1 id="Title">{data.data4.Titre}</h1>
        <h2 id="Title2" className="auteurText">
          {"par " + data.data4.Auteur}
        </h2>
        <h2 id="Story1" className="texte firstT">
          {data.data4.Texte.P1}
        </h2>
        <h2 id="Story2" className="texte secondT">
          {data.data4.Texte.P2} {data.data4.Texte.P3}
        </h2>
        <button
          id="break1"
          className="break"
          onClick={() => {
            next0(data);
          }}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        <h2 id="Story3" className="texte firstT">
          {data.data4.Texte.P4}
        </h2>{" "}
        <h2 id="Story4" className="texte secondT">
          {data.data4.Texte.P5}
        </h2>
        <button
          id="break2"
          className="break"
          onClick={() => {
            next1(data);
          }}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        <h2 id="Story5" className="texte firstT">
          {data.data4.Texte.P6}
        </h2>{" "}
        <h2 id="Story6" className="texte secondT">
          {data.data4.Texte.P7}
        </h2>
        <button
          id="break3"
          className="break"
          onClick={() => {
            next2(data);
          }}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        <button
          id="Title3"
          onClick={() => {
            startReading(data);
          }}
        >
          Commencer la lecture
        </button>
      </div>
      <div id="audio">
        <p>Ambiance sonore</p>
        <audio src={MaBrume} autoPlay controls loop></audio>
      </div>
      <div className="refresh">
        <button
          id="refresh"
          className="refresh"
          onClick={() => {
            refresh();
          }}
        >
          {" "}
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

