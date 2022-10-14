/******createurs******/

/***COMPONENT***/
export default function Createurs(data) {
  /*DOM*/
  return (
    <div id="createurs" className="text-center">
      <div className="container text-center">
        <h1>ÉDITRICES</h1>
        <div className="row text-center">
          {data.data2
            ? data.data2.teamEdi.map((team, i) => (
                <div
                  key={`${team.name}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-3 creator"
                >
                  {/*
                    <img
                      className="img-responsive"
                      src={"/img/" + team.name + ".webp"}
                    />
                    */}
                  <div
                    id={"photoEd" + [i + 1]}
                    className="creator1 text-center"
                    style={{ backgroundImage:`url(${team.photo})` }}>
                  </div>

                  <div className="creator2 text-center">
                    <p id={team.name + "H1"}>{team.name + " " + team.name2}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
