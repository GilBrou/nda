/******This Book******/

import { Redirect } from "react-router";

/***COMPONENT***/
export default function ThisBook(data) {
  console.log(window.location.pathname);

  if (window.location.pathname.indexOf("isulka") != -1) {
    console.log("This is THIS BOOK Page !!");

    return (
      <div id="thisBook">
        <h1>This is THIS BOOK Page !!</h1>
      </div>
    );
  } else {
    /* return <Redirect to="/accueil" />;*/

    return <div id="thisBook"></div>;
  }
}
