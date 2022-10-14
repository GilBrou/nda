/******createurs******/

/***COMPONENT***/
export default function Createurs(data) {
  console.log(data.data2.team);

  /*DOM*/
  return (
    <div className="createurs" id="noToggle">
      {/*Dynamic creation from Json data*/}
      {data.data2.teamEdi.map((team, i) => (
        <div className="creator">
          {/*Creators Titles*/}
          <img className="img-responsive" src={"/img/" + team.name + ".webp"} />
          <h1 id={team.name + "H1"}>{team.name}</h1>
        </div>
      ))}
    </div>
  );
}
