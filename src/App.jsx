/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { DustAnim, MainAnim } from "./components/UniversAnim";

/***COMPONENTS***/
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getAllTags } from "./components/Appendix";

/***PAGES***/
import Homepage from "./pages/Homepage";
import Createurs from "./pages/Createurs";
import ThisUniverse from "./pages/ThisUniverse";
import Univers from "./pages/Univers";
import Search from "./pages/Search";

/***DATAS***/
/*
import Data1 from "./data/data.json";
import Data2 from "./data/dataExt.json";
import Data3 from "./data/dataExt2.json";
*/

/***APP***/
export default function App() {
  /*Get datas*/

  /*
  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});
  const [allDatas3, setAllDatas3] = useState({});

  useEffect(() => {
    async function fetchDatas() {
      setAllDatas(Data1);
      setAllDatas2(Data2);
      setAllDatas3(Data3);
    }
    fetchDatas();
  }, []);
  */

  /****************IF NEEDED******************************/
  /*Get all books tags*/
  /*getAllTags(Data3);*/
  /*******************************************************/

  /*DOM*/
  return (
    <Router>
      {/*BACKGROUND ANIMATION*/}
      {DustAnim()}
      {MainAnim()}
      <Header data1={Data1} data2={Data2} />     
    </Router>
  );
}
