/******INTRO MODULE******/
/***COMPONENTS***/
import { LastBooks, dateSortInvert } from "../components/SortBooks";

/***COMPONENT***/
export default function Intro(data) {


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

        <div className="introRight">
          {/*Dynamic creation from Json data*/}
          {sliceBookArray(data)}
        </div>
      </div>
    </section>
  );
}
