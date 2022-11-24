/******COMMENT AND CLEAN !!!!!!!!!!!******/


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
  const [Loading, setLoading] = useState(true);
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});
  const [Data3, setData3] = useState({});

  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});
  const [allDatas3, setAllDatas3] = useState({});

  /*let Json1 = "https://raw.githubusercontent.com/GilBrou/nda/master/data.json";*/
  let Json1 = "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/data.json";
  let Json2 =
    "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/dataExt.json";
  let Json3 =
        "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/dataExt2.json";


  const requestOne = axios.get(Json1);
  const requestTwo = axios.get(Json2);
  const requestThree = axios.get(Json3);

  useEffect(() => {
    async function getDatas() {
      axios.all([requestOne, requestTwo, requestThree]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          setData1(responseOne.data);
          setData2(responseTwo.data);
          setData3(responesThree.data);
          setLoading(false);
          setAllDatas(Data1);
          setAllDatas2(Data2);
          setAllDatas3(Data3);
        })
      );
    }
    getDatas();
  }, []);

  /*
  console.log(Data1);
  console.log(Data2);
  console.log(Data3);
  console.log(Loading);
  */

  if (Loading) {
    return null;
  } else {
    /*DOM*/
    return (
      <Router>
        {/*BACKGROUND ANIMATION*/}
        {DustAnim()}
        {MainAnim()}
        {/*      <div>{Data1.nom}</div>
      <div>{Data2.nda.description}</div>
      <div>{Data3.Livres[0].titre}</div>*/}
        <Header data1={Data1} data2={Data2} />
        <div className="app">
          {/*ROUTES*/}
          <Switch>
            {/*HOMEPAGE*/}
            <Route exact path="/accueil">
              <Homepage data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*CREATEURS*/}
            <Route exact path="/createurs">
              <Createurs data1={Data1} data2={Data2} />
            </Route>
            {/*UNIVERS HOMEPAGE*/}
            <Route exact path="/nos-univers">
              <Univers data1={Data1} data2={Data2} />
            </Route>
            {/*UNIVERS*/}
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
                "/hors-collection",
              ]}
            >
              <ThisUniverse data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*SEARCH*/}
            <Route path="/recherche">
              <Search data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*REDIRECT*/}
            <Route>
              <Redirect to="/accueil" />
            </Route>
          </Switch>
        </div>
        <Footer data1={Data1} data2={Data2} />
      </Router>
    );
  }
}
