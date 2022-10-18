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
  /*console.log(data.data3.Livres[0].buy[0])*/
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
      } else if (window.location.pathname.indexOf("hors") != -1) {
        thisUniverse.classList.add("HorsCollecU");
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

  function SetReviews(props, i) {
    if (props != 0) {
      return (
        <a
          href={props}
          target="_blank"
          key={"aKey" + i}
          data-tip
          data-for={"UtipBuy"}
        >
          <i className="fa fa-book" aria-hidden="true"></i>
        </a>
      );
    }
  }

  function SetBuyLinks(props) {
    if (props.buyPaper != 0 && props.buyEbook == 0) {
      return (
        <div className="buyLinks">
          <a href={props.buyPaper} target="_blank">
            Version papier
          </a>
        </div>
      );
    } else if (props.buyEbook != 0 && props.buyPaper == 0) {
      return (
        <div className="buyLinks">
          <a href={props.buyEbook} target="_blank">
            E-book
          </a>
        </div>
      );
    } else if (props.buyEbook != 0 && props.buyPaper != 0) {
      return (
        <div className="buyLinks">
          <a href={props.buyPaper} target="_blank">
            Version papier
          </a>
          <a href={props.buyEbook} target="_blank">
            E-book
          </a>
        </div>
      );
    }
  }

  function SetPrize(props, i) {
    if (props.sousTitre != 0) {
      return <h2 className="sousTitre">{props.sousTitre}</h2>;
    }
  }

  function SetTags(props, i) {
    if (props != 0) {
      return (
        <p className="tag" key={"tag" + i}>
          {props}
        </p>
      );
    }
  }

  function SortBooks(thatBook, i) {
    /*console.log(thatBook.univers)*/
    let target0 = window.location.pathname;
    let targetB = target0.replace(new RegExp(/[-]/g), " ");
    /*console.log(targetB);*/
    let targetBa = thatBook.univers.toLowerCase();
    /*console.log(targetBa)*/
    let targetBb = "/" + targetBa;
    /*console.log(targetBb)*/
    let targetBb2 = targetBb.replace(new RegExp(/[']/g), " ");
    let targetBc = targetBb2.replace(new RegExp(/[èéêë]/g), "e");
    /*console.log(targetBc);*/
    if (targetBc === targetB) {
      return (
        <div
          key={`${thatBook.titre}-${i}`}
          className="col-sm-12 col-md-12 col-lg-12 book"
        >
          <div className="bookLeft">
            <img
              className="img-responsive creatora"
              src={"/img/Livres/" + thatBook.lien + ".webp"}
            />

            <div className="ReviewLinks">
              {thatBook.reviews.map((R, i) => SetReviews(R, i))}
            </div>

            {SetBuyLinks(thatBook)}
          </div>

          <div className="bookRight">
            <h2>
              {thatBook.titre} {thatBook.titre2}
            </h2>
            {SetPrize(thatBook)}
            <div className="authorList">
              {thatBook.par.map((par, i) => (
                <h3 className="bAuthor" key={"author" + i}>
                  {par}
                </h3>
              ))}
            </div>

            <div className="subTitle">
              <p>{thatBook.format}</p>
              {thatBook.genres.map((tag, i) => SetTags(tag, i))}
            </div>
            <p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
            <p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
          </div>
        </div>
      );
    }
  }

  SetUniverse();

  return (
    <div id="thisUniverse" className="text-center">
      <div className="container text-center">
        {checkName(data.data2.univers)}
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.map((thatBook, i) => SortBooks(thatBook, i))}
        </div>{" "}
      </div>
      <ReactTooltip
        id={"UtipBuy"}
        place="left"
        animation="FadeIn"
        effect="solid"
        textColor="var(--greenish)"
        arrowColor="var(--blackish)"
        borderColor="var(--greenish)"
        effect="solid"
        backgroundColor="black"
        key={"tipForBuy"}
      >
        Avis
      </ReactTooltip>
    </div>
  );
}
