/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
/*import Header from "./components/Header";*/

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
    <div className="homepage backLayer">
      {/*<Header data={data.data.nav} />*/}
      {/*
      <Intro data={data.data.intro} data2={data.data.contact} />
      <Parcours data={data.data.parcours} />
      <Projets data={pDatas} />
      <CV data={data.data.cv} />
      <Contact data={data.data.contact} />
      */}
    </div>
  );
}

export default Homepage;
