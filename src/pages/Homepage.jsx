/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Intro from "../components/Intro";

/*Main app*/
function Homepage(data) {
  return (
    <div className="homepage">
      <Intro data1={data.data1} data2={data.data2} />
    </div>
  );
}

export default Homepage;
