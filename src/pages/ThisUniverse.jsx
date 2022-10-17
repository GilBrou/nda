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

  if (thisUniverse != null || thisUniverse != undefined) {
    if (window.location.pathname.indexOf("memoria") != -1) {
      console.log("This is memoria !!!");
      thisUniverse.style.backgroundColor = "orange";
      /*
      thisUniverse.style.backgroundImage = 'url("' + {  } + '")';
      */
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

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>

        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          <div
            /*key={`${team.name}-${i}`}*/
            className="col-sm-12 col-md-12 col-lg-12 book"
          >
            <div className="bookLeft">
              <Link to="/livre/Isulka">
                <img
                  className="img-responsive creatora"
                  src={"/img/Livres/Test.webp"}
                />
              </Link>
            </div>
            <div className="bookRight">
              <h2>Isulka La Mageresse</h2>
              <h3 className="bAuthor">Morgane Stankiewiez</h3>
              <p>
                Isulka est une mageresse marginale, un peu vénale, mais surtout
                très endettée, vivotant en donnant des spectacles de magie dans
                des cabarets parisiens. Scipione est un spadassin vénitien comme
                on n'en fait plus, un reliquat du passé exilé de la Sérénissime,
                trahi par ses pairs et en quête de Vendetta.
              </p>

              <p>
                Recrutés par un employeur anglais pour subtiliser une bague de
                rubis, la mission se révèle sous un tout autre jour lorsqu'ils
                découvrent la valeur du joyau. L'appât du gain les mènera de
                Paris au Caire, de coups bas en coupe-gorges, dans une
                course-poursuite avec des espions, des criminels et une
                inquiétante secte égyptienne...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
