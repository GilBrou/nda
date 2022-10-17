/******This Universe******/
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import {
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";

/***COMPONENT***/
export default function ThisUniverse(data) {
  /*console.log(window.location.pathname);*/

  /*Style page according to universe selected*/
  const thisUniverse = document.getElementById("thisUniverse");
  /*let thisTitle = " Mémoria";*/

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
      }
    }
  }

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

  SetUniverse();

  return (
    <div id="thisUniverse" className="text-center">
      <div className="container text-center">
        {checkName(data.data2.univers)}
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.map((thatBook, i) => (
            <div
              key={`${thatBook.titre}-${i}`}
              className="col-sm-12 col-md-12 col-lg-12 book"
            >
              <div className="bookLeft">
                <Link to={"/livre/" + thatBook.lien}>
                  <img
                    className="img-responsive creatora"
                    src={"/img/Livres/" + thatBook.lien + ".webp"}
                    data-tip
                    data-for={"UtipBuy"}
                  />
                </Link>
              </div>

              <div className="bookRight">
                <h2>
                  {thatBook.titre} {thatBook.titre2}
                </h2>
                <h3 className="bAuthor">{thatBook.par + " "}</h3>
                <div className="subTitle">
                  <p>{thatBook.format}</p>
                  {thatBook.genres.map((tag, i) => (
                    <p className="tag" key={"tag" + i}>
                      {tag}
                    </p>
                  ))}
                </div>
                <p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
                <p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReactTooltip
        id={"UtipBuy"}
        place="bottom"
        animation="FadeIn"
        data-offset="{'top':5}"
        effect="solid"
        textColor="#fff"
        arrowColor="#222020"
        /*border="true"*/
        borderColor="#2CC78E"
        effect="solid"
        backgroundColor="#222020"
        key={"tipForBuy"}
      >
        Acheter
      </ReactTooltip>
    </div>
  );
}
