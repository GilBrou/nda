/******COMMENT AND CLEAN !!******/


/******This Universe******/
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { DustAnim, MainAnim } from "../components/UniversAnim";

import {
  SetReviews,
  SetBuyLinks,
  SetPrize,
  SetSample,
  SetTags,
  SortBooks,
  SortTargetedBooks,
  SetUniverse,
  dateSort,
} from "../components/SortBooks";

/***COMPONENT***/
export default function ThisUniverse(data) {
  /*Style page according to universe selected*/
  const thisUniverse = document.getElementById("thisUniverse");

  /***Select background image according to selected universe***/
  function SetUniverse() {
    if (thisUniverse != null || thisUniverse != undefined) {
      if (window.location.pathname.indexOf("memoria") != -1) {
        thisUniverse.classList.add("MemoriaU");
      } else if (window.location.pathname.indexOf("futuria") != -1) {
        thisUniverse.classList.add("FuturiaU");
      } else if (window.location.pathname.indexOf("onyria") != -1) {
        thisUniverse.classList.add("OnyriaU");
      } else if (window.location.pathname.indexOf("urbana") != -1) {
        thisUniverse.classList.add("UrbanaU");
      } else if (window.location.pathname.indexOf("rouge") != -1) {
        thisUniverse.classList.add("RougeU");
      } else if (window.location.pathname.indexOf("folie") != -1) {
        thisUniverse.classList.add("FolieU");
      } else if (window.location.pathname.indexOf("fleur") != -1) {
        thisUniverse.classList.add("FleurU");
      } else if (window.location.pathname.indexOf("chrysalis") != -1) {
        thisUniverse.classList.add("ChrysalisU");
      } else if (window.location.pathname.indexOf("pousse") != -1) {
        thisUniverse.classList.add("PousseU");
      } else if (window.location.pathname.indexOf("hors") != -1) {
        thisUniverse.classList.add("HorsCollecU");
      }
    }
  }

  /***Select background animation according to selected universe***/
  function SetBackground() {
    if (thisUniverse != null || thisUniverse != undefined) {
      if (
        window.location.pathname.indexOf("memoria") != -1 ||
        window.location.pathname.indexOf("onyria") != -1 ||
        window.location.pathname.indexOf("chrysalis") != -1 ||
        window.location.pathname.indexOf("pousse") != -1 ||
        window.location.pathname.indexOf("hors") != -1 ||
        window.location.pathname.indexOf("urbana") != -1 ||
        window.location.pathname.indexOf("folie")
      ) {
        return (
          <div>
            {DustAnim()}
            {MainAnim()}
          </div>
        );
      } else if (window.location.pathname.indexOf("futuria") != -1) {
        return (
          <div>
            {DustAnim()}
            {FuturiaAnim()}
          </div>
        );
      } else if (
        window.location.pathname.indexOf("rouge") != -1 ||
        window.location.pathname.indexOf("fleur") != -1
      ) {
        return (
          <div>
            {DustAnim()}
            {FleurRougeAnim()}
          </div>
        );
      }
    }
  }

  /***Select Title and Intro paragraph according to selected universe***/
  function checkName(props) {
    for (let i in props) {
      let thisUL = props[i].link;
      let thisUD = props[i].description;
      let targetU = window.location.pathname;
      if ("/" + thisUL === targetU) {
        let thisU = props[i].name;
        let thisTitle = thisU;
        let thisIntro = thisUD;
        return (
          <div>
            <h1 className="UTitle">{thisTitle}</h1>
            <p className="UP">{thisIntro}</p>
          </div>
        );
      }
    }
  }

  /***Check Selected Universe***/
  SetUniverse();

  
  /***Get all book tags***/
  let allBooks = data.data3.Livres;
  let allTags = [];
  for (let i in allBooks) {
    let thoseTags = allBooks[i].genres;
    for (let i in thoseTags) allTags.push(thoseTags[i]);
  }
  let allTags2 = [...new Set(allTags)];
  /***Get all book tags***/
  let allBooks2 = allBooks.sort(dateSort);
  /*console.log(allBooks2);*/
  /*****************************************************************************************/

  return (
    <div id="thisUniverse" className="text-center">
      {SetBackground()}
      <div className="container text-center">
        {checkName(data.data2.univers)}
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.sort(dateSort).map((thatBook, i) =>
            SortBooks(thatBook, i, data)
          )}
        </div>{" "}
      </div>
      {/*Stylize Tooltips for Reviews*/}
      <ReactTooltip
        id={"UtipReview"}
        place="left"
        animation="FadeIn"
        effect="solid"
        textColor="var(--greenish)"
        arrowColor="var(--blackish)"
        borderColor="var(--greenish)"
        effect="solid"
        backgroundColor="black"
        key={"tipReview"}
      >
        Avis
      </ReactTooltip>
    </div>
  );
}
