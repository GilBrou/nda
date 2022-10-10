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
import JsonData from "./data/data.json";

/*Main app*/
function App() {
  /*Get datas*/
  const [allDatas, setAllDatas] = useState({});
  useEffect(() => {
    async function fetchDatas() {
      setAllDatas(JsonData);
    }
    fetchDatas();
  }, []);

  return (
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
  );
}

export default App;
