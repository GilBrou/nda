/******This Universe******/
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { MainAnim } from "../components/UniversAnim";

/***COMPONENT***/
export default function Search(data) {
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

  /***Check if  Sample is available and display it***/
  function SetSample(props, i) {
    if (props.extrait != 0) {
      return (
        <a className="AExtrait" href={props.extrait} target="_blank">
          <div className="extrait">
            <p>➔ Extrait</p>
          </div>
        </a>
      );
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

  /***Sort books from Json according to target and display them***/
  function SortBooks(thatBook, i) {
    let target = "Louise Le Bars";
    if (thatBook.genres.includes(target) || thatBook.par.includes(target)) {
      return (
        <div
          key={`${thatBook.titre}-${i}`}
          className="col-sm-12 col-md-12 col-lg-12 book"
        >
          <div className="bookLeft">
            <div className="imgWrap">
              <img
                className="img-responsive creatora"
                src={
                  data.data1.UimgLinks.IL3 +
                  thatBook.lien +
                  data.data1.UimgLinks.IL1B
                }
                alt={"Couverture de " + thatBook.titre}
              />
              {SetSample(thatBook)}
            </div>

            <div className="ReviewLinks">
              {thatBook.reviews.map((R, i) => SetReviews(R, i))}
            </div>
            {/*******************EN COURS*************************/}
            <div className="secondaryInfos">
              <p>
                {thatBook.prix + " € - "}
                {thatBook.pages + " pages"}
              </p>
              <p>{"ISBN : " + thatBook.ISBN}</p>
            </div>
            {/*******************EN COURS*************************/}

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

  /***Sort Book position***/
  function dateSort(a, b) {
    /*
    return Math.random() - 0.5;
    */
  }

  return (
    <div id="thisSearch" className="text-center">
      <div className="container text-center">
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.sort(dateSort).map((thatBook, i) =>
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
        key={"tipReview"}
      >
        Avis
      </ReactTooltip>
    </div>
  );
}
