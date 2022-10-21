/******CREATEURS******/
import ReactTooltip from "react-tooltip";
/*
import { LazyLoadImage } from "react-lazy-load-image-component";
import Back from "../style/background/background2.jpg";
import {
  DustAnim,
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";
*/

/***COMPONENT***/
export default function Createurs(data) {
  /*Toggle link buttons*/
  function GetLink(props) {
    if (props >= "1") {
      return (
        <a
          href={props}
          target="_blank"
          className="page-scroll"
          data-tip
          data-for="UtipLink"
        ></a>
      );
    }
  }

  function randomize(a, b) {
    return Math.random() - 0.5;
  }

  /*DOM*/
  return (
    <div id="createurs" className="text-center">
      <div className="container text-center">
    {/*
        <LazyLoadImage
          src={Back}
          className="backgnd"
          effect="blur"
          alt={"Illustration de Noir D'absinthe"}
        />{" "}
      */}


        {/*BACKGROUND ANIMATION*/}
      {/*
        {DustAnim()}
        {MainAnim()}
        */}
        {/*Editors Section*/}
        <h1 className="creaTitle">{data.data2.createurs.crea1}</h1>
        {/*Editors's cards creation from Json data*/}
        <div className="row text-center justify-content-center">
          {data.data2
            ? data.data2.teamEdi.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-3 col-md-2 col-lg-2 creator"
                >
                  <img
                    className="img-responsive creatora"
                    src={
                      data.data1.UimgLinks.IL2 +
                      team.name +
                      data.data1.UimgLinks.IL1B
                    }
                    alt={"photo de " + team.name + " " + team.name2}
                  />
                  <p className="Names" id={team.name + "P1"}>
                    {team.name + " " + team.name2}
                  </p>
                  <p className="Jobs" id={team.name + "P2"}>
                    {team.job}
                  </p>
                  <p className="Credits" id={team.name + "P2"}>
                    {team.credits}
                  </p>
                  {GetLink(team.Lien)}
                </div>
              ))
            : "Loading..."}
        </div>
        {/*Authors Section*/}
        <h1 className="creaTitle">{data.data2.createurs.crea2}</h1>
        {/*Authors's cards creation from Json data*/}
        <div className="row text-center">
          {data.data2
            ? data.data2.teamAuth.sort(randomize).map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-3 col-md-2 col-lg-2 creator creator2"
                >
                  <img
                    className="img-responsive creatora"
                    src={
                      data.data1.UimgLinks.IL2 +
                      team.name +
                      data.data1.UimgLinks.IL1B
                    }
                    alt={"photo de " + team.name + " " + team.name2}
                  />
                  <p className="Names" id={team.name + "P1"}>
                    {team.name + " " + team.name2}
                  </p>
                  <p className="Credits" id={team.name + "P2"}>
                    {team.credits}
                  </p>
                  {GetLink(team.Lien)}
                </div>
              ))
            : "Loading..."}
        </div>
        {/*Illustrators Section*/}
        <h1 className="creaTitle">{data.data2.createurs.crea3}</h1>
        {/*Illustrators's cards creation from Json data*/}
        <div className="row text-center">
          {data.data2
            ? data.data2.teamIllus.sort(randomize).map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-3 col-md-2 col-lg-2 creator creator2"
                >
                  <img
                    className="img-responsive creatora"
                    src={
                      data.data1.UimgLinks.IL2 +
                      team.name +
                      data.data1.UimgLinks.IL1B
                    }
                    alt={"photo de " + team.name + " " + team.name2}
                  />
                  <p className="Names" id={team.name + "P1"}>
                    {team.name + " " + team.name2}
                  </p>
                  <p className="Jobs" id={team.name + "P2"}>
                    {team.job}
                  </p>
                  {GetLink(team.Lien)}
                </div>
              ))
            : "Loading..."}
        </div>
        {/*Support Section*/}
        <h1 className="creaTitle">{data.data2.createurs.crea4}</h1>
        {/*Supporters's cards creation from Json data*/}
        <div className="row text-center">
          <div className="subRow">
            {data.data2
              ? data.data2.teamOmbre.sort(randomize).map((team, i) => (
                  <div
                    key={`${team.name}-${i}`}
                    className="col-sm-3 col-md-2 col-lg-2 creator"
                  >
                    <img
                      className="img-responsive creatora"
                      src={
                        data.data1.UimgLinks.IL2 +
                        team.name +
                        data.data1.UimgLinks.IL1B
                      }
                      alt={"photo de " + team.name + " " + team.name2}
                    />
                    <p className="Names" id={team.name + "P1"}>
                      {team.name + " " + team.name2}
                    </p>
                    <p className="Jobs" id={team.name + "P2"}>
                      {team.job}
                    </p>
                    {GetLink(team.Lien)}
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      {/*Tooltips parameters for hover links*/}
      <ReactTooltip
        id="UtipLink"
        place="bottom"
        animation="FadeIn"
        effect="solid"
        textColor="#fff"
        arrowColor="#222020"
        /*border="true"*/
        borderColor="#2CC78E"
        effect="solid"
        backgroundColor="#222020"
        key="tipForLinks"
      >
        En savoir plus
      </ReactTooltip>
    </div>
  );
}
