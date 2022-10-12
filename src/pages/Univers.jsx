/***UNIVERS***/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import MyUniverses from "../components/MyUniverses";

/***COMPONENT***/
export default function Univers(data) {
  /*DOM*/
  return (
    <div id="uPage">
      <div className="univers">
        <MyUniverses />
      </div>
    </div>
  );
}
