/******This Universe******/
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import {
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";

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
        window.location.pathname.indexOf("hors") != -1
      ) {
        return MainAnim();
      } else if (window.location.pathname.indexOf("futuria") != -1) {
        return FuturiaAnim();
      } else if (window.location.pathname.indexOf("rbana") != -1) {
        /*
        console.log("This is URBANA !!! ");
        return <div className="TerraAnimWrapper">{TerraAnim()}</div>;
        */
        return MainAnim();
      } else if (
        window.location.pathname.indexOf("rouge") != -1 ||
        window.location.pathname.indexOf("fleur") != -1
      ) {
        return FleurRougeAnim();
      } else if (window.location.pathname.indexOf("folie") != -1) {
        return FolieAnim();
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

  /***Check if Reviews links are available and display them***/
  function SetReviews(props, i) {
    if (props != 0) {
      return (
        <a
          href={props}
          target="_blank"
          key={"aKey" + i}
          data-tip
          data-for={"UtipReview"}
        >
          <i className="fa fa-book" aria-hidden="true"></i>
        </a>
      );
    }
  }

  /***Check if Buy links are available and display them && Check if object is a book or a game***/
  function SetBuyLinks(props) {
    if (props.format === "Jeu PC") {
      if (props.buyPaper != 0 && props.buyEbook == 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyPaper} target="_blank">
              Achat
            </a>
          </div>
        );
      } else if (props.buyEbook != 0 && props.buyPaper == 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyEbook} target="_blank">
              Démo
            </a>
          </div>
        );
      } else if (props.buyEbook != 0 && props.buyPaper != 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyPaper} target="_blank">
              Achat
            </a>
            <a href={props.buyEbook} target="_blank">
              Démo
            </a>
          </div>
        );
      }
    } else if (props.format === "Nouvelle") {
      if (props.buyPaper != 0 && props.buyEbook == 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyPaper} target="_blank">
              Télécharger
            </a>
          </div>
        );
      } else if (props.buyEbook != 0 && props.buyPaper == 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyEbook} target="_blank">
              Télécharger
            </a>
          </div>
        );
      } else if (props.buyEbook != 0 && props.buyPaper != 0) {
        return (
          <div className="buyLinks">
            <a href={props.buyPaper} target="_blank">
              Télécharger
            </a>
            <a href={props.buyEbook} target="_blank">
              Télécharger
            </a>
          </div>
        );
      }
    } else {
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
  }

  /***Check if Litterary Proze are available and display them***/
  function SetPrize(props, i) {
    if (props.sousTitre != 0) {
      return <h2 className="sousTitre">{props.sousTitre}</h2>;
    }
  }

  /***Check if tags are available and display them***/
  function SetTags(props, i) {
    if (props != 0) {
      return (
        <p className="tag" key={"tag" + i}>
          {props}
        </p>
      );
    }
  }

  /***Sort books from Json according to selected Universe and display them***/
  function SortBooks(thatBook, i) {
    let target0 = window.location.pathname;
    let targetB = target0.replace(new RegExp(/[-]/g), " ");
    let targetBa = thatBook.univers.toLowerCase();
    let targetBb = "/" + targetBa;
    let targetBb2 = targetBb.replace(new RegExp(/[']/g), " ");
    let targetBc = targetBb2.replace(new RegExp(/[èéêë]/g), "e");
    if (targetBc === targetB) {
      return (
        <div
          key={`${thatBook.titre}-${i}`}
          className="col-sm-12 col-md-12 col-lg-12 book"
        >
          <div className="bookLeft">
            <img
              className="img-responsive creatora"
              src={
                data.data1.UimgLinks.IL3 +
                thatBook.lien +
                data.data1.UimgLinks.IL1B
              }
              alt={"Couverture de " + thatBook.titre}
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
            <div className="authorList">
              {thatBook.par.map((par, i) => (
                <h3 className="bAuthor" key={"author" + i}>
                  {par}
                </h3>
              ))}
            </div>
            {SetPrize(thatBook)}

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

  /***Randomize Book position in universe***/
  function randomize(a, b) {
    return Math.random() - 0.5;
  }

  /***Check Selected Universe***/
  SetUniverse();

  return (
    <div id="thisUniverse" className="text-center">
      {SetBackground()}
      <div className="container text-center">
        {checkName(data.data2.univers)}
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.sort(randomize).map((thatBook, i) =>
            SortBooks(thatBook, i)
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
        key={"tipForReview"}
      >
        Avis
      </ReactTooltip>
    </div>
  );
}
