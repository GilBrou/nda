/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import MaBrume from "../audio/MaBrume.wav";

/***COMPONENT***/
export default function Story(data) {

  /*Page declaration*/
  const [page, setPage] = useState(0);
  /*Page incrementation*/
  function nextPage() {
    setPage(page + 1);
    console.log(page);
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
        {/*Text part*/}
        <div className="storyText">
          <h1 id="Title">{data.data4.Titre}</h1>
          <h2 id="Title2" className="auteurText">
            {"par " + data.data4.Auteur}
          </h2>
          <button
            id="Title3"
            onClick={() => {
              nextPage(data);
            }}
          >
            Commencer la lecture
          </button>
        </div>
        {/*Audio player*/}
        <div className="audioWrap">
          <div id="audio">
            <p>Ambiance sonore</p>
            <audio src={MaBrume} autoPlay controls loop></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
