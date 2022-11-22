/******INTRO MODULE******/

import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { LastBooks, dateSortInvert } from "../components/SortBooks";

/***COMPONENT***/
export default function Intro(data) {
  /*Get all book's tags*/

  /*
  let allBookTags = [];
  let allThoseBooks = data.data3.Livres;
  for (let i in allThoseBooks) {
    let thisOne = allThoseBooks[i];
    for (let i in thisOne.genres) {
      if (
        !allBookTags.includes(thisOne.genres[i]) &&
        !thisOne.genres[i] == "" &&
        !thisOne.genres[i].includes("12") &&
        !thisOne.genres[i].includes("Rétro") &&
        !thisOne.genres[i].includes("Point" ) &&
        !thisOne.genres[i].includes("ticle") &&
        !thisOne.genres[i].includes("views") 
      ) {
        allBookTags.push(thisOne.genres[i]);
      }
    }
  }

  let newTagArray = allBookTags.sort(
    () => 0.5 - Math.random()
  ); 

  */ /*.splice(0, 5);*/
  /*console.log(newTagArray)*/

  /*Display last 3 books*/
  function sliceBookArray(data) {
    let ThoselastBooks = data.data3.Livres.sort(dateSortInvert).slice(-3);
    return (
      <div>
        <h2>Dernières Sorties </h2>
        <div className="introBooks">
          {ThoselastBooks.map((thatBook, i) => LastBooks(thatBook, i, data))}
        </div>
      </div>
    );
  }

  /*DOM*/
  return (
    <section id="intro">
      <div className="intro" id="thisToggle">
        <div className="introLeft">
          {/*Large Animated Logo*/}
          <img
            fetchpriority="high"
            src={
              data.data1.UimgLinks.IL0 +
              data.data1.ressources.logo2 +
              data.data1.UimgLinks.IL1B
            }
            className="img-responsive logoFull"
            alt={"Logo de " + data.data1.nom}
          />{" "}
          {/*Introduction Text*/}
          <h1 className="text-center">
            {data.data2 ? data.data2.nda.description : "loading..."}
          </h1>
        </div>

        <div className="introRightWrapper">
          <a
            href={data.data1 ? data.data1.links.menu2L : "loading..."}
            className="page-scroll IntroLink"
          >
            <h2 className="firsth2">Nos Univers</h2>
          </a>
          {/*Universes selector*/}
          <div className="pagination2">
            {/*Dynamic creation from Json data*/}
            {data.data2.univers.map(
              (univers, i) => (
                {
                  /*Universe slideshow links*/
                },
                (
                  <a
                    href={univers.link}
                    key={univers.name + "a"}
                    data-tip
                    data-for={"Utip-" + univers.link}
                  >
                    <div className="aAnim">
                      <span></span>
                    </div>
                  </a>
                )
              )
            )}
            {/*Dynamic creation from Json data*/}
            {data.data2.univers.map(
              (univers, i) => (
                {
                  /*Universe slideshow links tooltips*/
                },
                (
                  <ReactTooltip
                    id={"Utip-" + univers.link}
                    place="top"
                    animation="FadeIn"
                    data-offset="{'top':5}"
                    effect="solid"
                    textColor="#fff"
                    arrowColor="#222020"
                    /*border="true"*/
                    borderColor="#2CC78E"
                    effect="solid"
                    backgroundColor="#222020"
                    key={"tipFor-" + univers.link}
                  >
                    {univers.name}
                  </ReactTooltip>
                )
              )
            )}
          </div>
          <div className="introRight">
            {/*Dynamic creation from Json data*/}
            {sliceBookArray(data)}
          </div>
        </div>
      </div>
    </section>
  );
}
