/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

/***PAGES***/
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Error404 from "./pages/Error404";

/***DATAS***/
import Data1 from "./data/data.json";
/*import Data2 from "./data/dataExt.json";*/

/*Main app*/
function App() {
  /*Get datas*/
  const [allDatas, setAllDatas] = useState({});
  /*const [allDatas2, setAllDatas2] = useState({});*/

  useEffect(() => {
    async function fetchDatas() {
      setAllDatas(Data1);
      /*setAllDatas2(Data2);*/
    }
    fetchDatas();
  }, []);


  console.log(Data1)
  /*console.log(Data2)*/


  return {
    <div></div>
    /*
    
    <Router>
      <Header data={allDatas.nav} />
      <div className="app">
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
            <Homepage data={allDatas} />
          </Route>
          <Route>
            <Redirect to="/accueil" />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
      <Footer data={allDatas.footer}/>
    </Router>
    */
  };
}

export default App;
