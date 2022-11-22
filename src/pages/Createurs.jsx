/******CREATEURS******/
import ReactTooltip from "react-tooltip";
import Collapsible from "react-collapsible";
import { DustAnim, MainAnim } from "../components/UniversAnim";

/***COMPONENT***/
export default function Createurs(data) {
  /*Collapsible default position according to window width*/
  function checkWidth() {
    if (window.innerWidth >= "740") {
      return "true";
    }
  }

  /*Toggle link buttons*/
  function GetLink(props) {
    if (props >= "1") {
      return (
        <a
          href={props}
          target="_blank"
          className="page-scroll extLink"
          data-tip
          data-for="UtipLink"
        ></a>
      );
    }
  }

  /*Alphabetical sorting*/
  function alphabetical(a, b) {
    if (a.name2 < b.name2) {
      return -1;
    }
    if (a.name2 > b.name2) {
      return 1;
    }
    return 0;
  }

  function tryAuth(team, i) {
    if (team.job.includes("aut")) {
      if (team.name2 != "") {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator "
          >
            <a
              href={"/recherche#" + team.name + " " + team.name2}
              key={team.name + "Link"}
            >
              <img
                className="img-responsive creatora"
                src={
                  data.data1.UimgLinks.IL2 +
                  team.name2 +
                  data.data1.UimgLinks.IL1B
                }
                alt={"photo de " + team.name + " " + team.name2}
              />
            </a>
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
        );
      } else {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator "
          >
            <a
              href={"/recherche#" + team.name + " " + team.name2}
              key={team.name + "Link"}
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
            </a>
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
        );
      }
    } else {
      if (team.name2 != "") {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator"
          >
            <img
              className="img-responsive creatora"
              src={
                data.data1.UimgLinks.IL2 +
                team.name2 +
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
        );
      } else {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator"
          >
            <img
              className="img-responsive creatora"
              src={
                data.data1.UimgLinks.IL2 + team.name + data.data1.UimgLinks.IL1B
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
        );
      }
    }
  }

  /*DOM*/
  return (
    <div id="createurs" className="text-center">
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
      <div className="container text-center">
        {/*BACKGROUND ANIMATION*/}
        {DustAnim()}
        {MainAnim()}

        {/*Editors Section*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea1}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea1}</h1>
          }
        >
          {/*Editors's cards creation from Json data*/}
          <div className="row text-center justify-content-center">
            {data.data2
              ? data.data2.teamEdi.map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>

        {/*Authors Section*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea2}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea2}</h1>
          }
        >
          {/*Authors's cards creation from Json data*/}
          <div className="row text-center teamAuth">
            {data.data2
              ? data.data2.teamAuth
                  .sort(alphabetical)
                  .map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>

        {/*Illustrators Section*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea3}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea3}</h1>
          }
        >
          {/*Illustrators's cards creation from Json data*/}
          <div className="row text-center teamAuth">
            {data.data2
              ? data.data2.teamIllus
                  .sort(alphabetical)
                  .map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>

        {/*Support Section*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea4}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea4}</h1>
          }
        >
          {/*Supporters's cards creation from Json data*/}
          <div className="row text-center">
            {data.data2
              ? data.data2.teamOmbre.sort(alphabetical).map((team, i) => (
                  <div
                    key={`${team.name}-${i}`}
                    className="col-sm-3 col-md-2 col-lg-2 creator"
                  >
                    <img
                      className="img-responsive creatora"
                      src={
                        data.data1.UimgLinks.IL2 +
                        team.name2 +
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
            {/*</div>*/}
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
