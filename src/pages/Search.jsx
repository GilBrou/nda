/******This Univers;e******/
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

/***COMPONENTS***/
import { MainAnim } from "../components/UniversAnim";
import {
  SetReviews,
  SetBuyLinks,
  SetPrize,
  SetSample,
  SetTags,
  SortBooks,
  SortTargetedBooks,
  dateSort,
  dateSortInvert
} from "../components/SortBooks";

/***COMPONENT***/
export default function Search(data) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      window.location.reload();
      window.scrollTo(0, 0);
    });
  }, [history]);

  /*Targeted info*/
  let url_string = window.location.href;
  let url = new URL(url_string);
  let target0 = url.hash.replace("#", "");
  let target1 = target0.replace(/%20/g, " ");
  let target = target1.replace(/%C3%A9/g, "é");

  function isThisBookFromLitUniverse(target, data) {
    if (target.includes("Univers") || target.includes("Séries") ) {
      return data.data3.Livres.sort(dateSortInvert).map((thatBook, i) =>
        SortTargetedBooks(thatBook, i, target, data)
      );
    } else {
      return data.data3.Livres.sort(dateSort).map((thatBook, i) =>
        SortTargetedBooks(thatBook, i, target, data)
      );
    }
  }

  return (
    <div id="thisSearch" className="text-center">
      <div className="container text-center">
        <div className="row text-center justify-content-center">
          <h1 className="targetH1">{target}</h1>
          {/*Dynamic creation from Json data*/}
          {isThisBookFromLitUniverse(target, data)}

          {/*
          {data.data3.Livres.sort(dateSort).map((thatBook, i) =>
            SortTargetedBooks(thatBook, i, target, data)
          )}
          */}
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
      {MainAnim()}
    </div>
  );
}
