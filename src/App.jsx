/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***COMPONENTS***/
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DustAnim, MainAnim } from "./components/UniversAnim";
import { getAllTags } from "./components/Appendix";

/***PAGES***/
import Homepage from "./pages/Homepage";
import Createurs from "./pages/Createurs";
import ThisUniverse from "./pages/ThisUniverse";
import Univers from "./pages/Univers";
import Search from "./pages/Search";

/***APP***/
export default function App() {
  /*Get datas*/

  /****************IF NEEDED******************************/
  /*Get all books tags*/
  /*getAllTags(Data3);*/
  /*******************************************************/
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});
  const [Data3, setData3] = useState({});

  async function getDatas() {
    axios
      .get("https://raw.githubusercontent.com/GilBrou/nda/master/data.json")
      .then((response) => {
        setData1(response.data);
      });
    axios
      .get("https://raw.githubusercontent.com/GilBrou/nda/master/dataExt.json")
      .then((response) => {
        setData2(response.data);
      });
    axios
      .get("https://raw.githubusercontent.com/GilBrou/nda/master/dataExt2.json")
      .then((response) => {
        setData3(response.data);
      });
  }

  useEffect(() => {
    getDatas();
  }, []);

  console.log(Data1);
  console.log(Data2);
  console.log(Data3);

  /*DOM*/
  return (
    <Router>
      {/*BACKGROUND ANIMATION*/}
      {DustAnim()}
      {MainAnim()}
      <div>{Data1.nom}</div>
      <div>{Data2.nda.description}</div>
      <div>{Data3.Livres[0].titre}</div>
    </Router>
  );
}
