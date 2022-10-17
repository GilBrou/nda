/******This Universe******/
import { Link } from "react-router-dom";

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
  /*console.log(thisUniverse);*/

  function SetUniverse() {
    if (thisUniverse != null || thisUniverse != undefined) {
      if (window.location.pathname.indexOf("memoria") != -1) {
        console.log("This is memoria !!!");
        thisUniverse.style.backgroundColor = "orange";
        thisUniverse.style.backgroundImage = 'url("' + {} + '")';
      } else if (window.location.pathname.indexOf("futuria") != -1) {
        console.log("This is futuria !!!");
        thisUniverse.style.backgroundColor = "lightblue";
      } else if (window.location.pathname.indexOf("onyria") != -1) {
        console.log("This is onyria !!!");
        thisUniverse.style.backgroundColor = "lightgreen";
      } else if (window.location.pathname.indexOf("urbana") != -1) {
        console.log("This is urbana !!!");
        thisUniverse.style.backgroundColor = "purple";
      } else if (window.location.pathname.indexOf("rouge") != -1) {
        console.log("This is rouge !!!");
        thisUniverse.style.backgroundColor = "red";
      } else if (window.location.pathname.indexOf("folie") != -1) {
        console.log("This is folie !!!");
        thisUniverse.style.backgroundColor = "cyan";
      } else if (window.location.pathname.indexOf("fleur") != -1) {
        console.log("This is fleur !!!");
        thisUniverse.style.backgroundColor = "lightpink";
      } else if (window.location.pathname.indexOf("chrysalis") != -1) {
        console.log("This is chrysalis !!!");
        thisUniverse.style.backgroundColor = "yellow";
      } else if (window.location.pathname.indexOf("pousse") != -1) {
        console.log("This is pousse !!!");
        thisUniverse.style.backgroundColor = "green";
      }
    }
  }

  return (
    <div id="thisUniverse" className="text-center">
      <div className="container text-center">
        {/*Editors Section*/}
        <h1 className="UTitle">Mémoria</h1>
        <p className="UP">
          Au fond du verre, découvrez Absinthia, la belle mais dangereuse fée
          verte . Laissez-la vous prendre par les sens, l'espace d'un instant,
          et elle vous mènera vers Memoria, terre des âges passés. Elle vous y
          contera, à demi-mot, des rêves emplis de Magie, dont vous ne voudrez
          jamais vous éveiller.
        </p>

        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {SetUniverse()}
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
    </div>
  );
}
