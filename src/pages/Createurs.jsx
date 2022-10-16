/******createurs******/
import ReactTooltip from "react-tooltip";

/***COMPONENT***/
export default function Createurs(data) {
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

  /*DOM*/
  return (
    <div id="createurs" className="text-center">
      <div className="container text-center">
        <h1 className="creaTitle">{data.data2.createurs.crea1}</h1>

        <div className="row text-center">
          {data.data2
            ? data.data2.teamEdi.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-4 col-md-2 col-lg-2 creator"
                >
                  <img
                    className="img-responsive creatora"
                    src={"/img/Photos/" + team.name + ".webp"}
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

        <h1 className="creaTitle">{data.data2.createurs.crea2}</h1>

        <div className="row text-center">
          {data.data2
            ? data.data2.teamAuth.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-4 col-md-2 col-lg-2 creator"
                >
                  <img
                    className="img-responsive creatora"
                    src={"/img/Photos/" + team.name + ".webp"}
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

        <h1 className="creaTitle">{data.data2.createurs.crea3}</h1>

        <div className="row text-center">
          {data.data2
            ? data.data2.teamIllus.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-4 col-md-2 col-lg-2 creator"
                >
                  <img
                    className="img-responsive creatora"
                    src={"/img/Photos/" + team.name + ".webp"}
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

        <h1 className="creaTitle">{data.data2.createurs.crea4}</h1>

        <div className="row text-center">
          {data.data2
            ? data.data2.teamOmbre.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-4 col-md-2 col-lg-2 creator"
                >
                  <img
                    className="img-responsive creatora"
                    src={"/img/Photos/" + team.name + ".webp"}
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
