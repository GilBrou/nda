/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

/***COMPONENTS***/
import Header from "./components/Header";
import Footer from "./components/Footer";

/***PAGES***/
import Homepage from "./pages/Homepage";
import Createurs from "./pages/Createurs";
import Univers from "./pages/Univers";
import ThisUniverse from "./pages/ThisUniverse";
import ThisBook from "./pages/ThisBook";
import Error404 from "./pages/Error404";

/***DATAS***/
import Data1 from "./data/data.json";
import Data2 from "./data/dataExt.json";

/***APP***/
export default function App() {
  /*Get datas*/
  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});
  useEffect(() => {
    async function fetchDatas() {
      setAllDatas(Data1);
      setAllDatas2(Data2);
    }
    fetchDatas();
  }, []);

  /*DOM*/
  return (
    <Router>
      <Header data1={Data1} data2={Data2} />
      <div className="app">
        <div className="bg-animation">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars4" />
        </div>
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
        <Switch>
          <Route exact path="/accueil">
            <Homepage data1={Data1} data2={Data2} />
          </Route>
          <Route exact path="/createurs">
            <Createurs data1={Data1} data2={Data2} />
          </Route>
          <Route exact path="/nos-univers">
            <Univers data1={Data1} data2={Data2} />
          </Route>

          <Route
            exact
            path={[
              "/memoria",
              "/futuria",
              "/onyria",
              "/terra-urbana",
              "/rouge-d-absinthe",
              "/l-antre-de-la-folie",
              "/fleur-d-absinthe",
              "/chrysalis",
              "/pousse-d-absinthe",
            ]}
          >
            <ThisUniverse data1={Data1} data2={Data2} />
          </Route>
        {/*
          <Route exact path="/livre/:id">
            <ThisBook data1={Data1} data2={Data2} />
          </Route>
          */}
          <Route>
            <Redirect to="/accueil" />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
      <Footer data1={Data1} data2={Data2} />
    </Router>
  );
}
