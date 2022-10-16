/******createurs******/

/***COMPONENT***/
export default function Createurs(data) {
  /*DOM*/
  return (
    <div id="createurs" className="text-center">
      <div className="container text-center">
        <h1 className="ediTitle">ÉDITRICES</h1>
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
                  <a
                    href={team.Lien}
                    target="_blank"
                    className="page-scroll"
                  ></a>
                </div>
              ))
            : "Loading..."}
        </div>

        <h1 className="authTitle">Auteurs et Autrices</h1>
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
                  <p className="Names" id={team.name + "H1"}>
                    {team.name + " " + team.name2}
                  </p>
                  <p className="Jobs" id={team.name + "P2"}>
                    {team.job}
                  </p>
                  <a
                    href={team.Lien}
                    target="_blank"
                    className="page-scroll"
                  ></a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
