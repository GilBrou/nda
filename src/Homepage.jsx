/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Header from "./components/Header";
import Intro from "./components/Intro";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import CV from "./components/CV";
import Contact from "./components/Contact";

/***DATAS***/
import projetsD from "./data/projetsD.json";

function Homepage(data) {
  /*Get projects datas*/
  const [pDatas, setPDatas] = useState({});
  useEffect(() => {
    async function fetchDatas() {
      setPDatas(projetsD);
    }
    fetchDatas();
  }, []);

  /***PAGE***/
  return (
    <div className="homepage">
      <Header data={data.data.nav} />
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
