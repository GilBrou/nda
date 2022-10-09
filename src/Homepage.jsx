/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Intro from "./components/Intro";


/***DATAS***/
/*import projetsD from "./data/projetsD.json";*/

function Homepage(data) {
  /*Get projects datas*/
  /*
  const [pDatas, setPDatas] = useState({});
  useEffect(() => {
    async function fetchDatas() {
      setPDatas(projetsD);
    }
    fetchDatas();
  }, []);
*/

  /***PAGE***/
  return (
    <div className="homepage">
      <div className="hideback"></div>
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <div className="firefly" />
      <Intro data={data.data.intro} />

      
      {/*
      <Parcours data={data.data.parcours} />
      <Projets data={pDatas} />
      <CV data={data.data.cv} />
      <Contact data={data.data.contact} />
      */}
      
    </div>
  );
}

export default Homepage;
