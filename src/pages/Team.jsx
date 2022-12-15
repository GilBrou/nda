/******TEAM Page******/

/***COMPONENT***/
export default function Team(data) {
  console.log(data.data.team.statuts);
  /*DOM*/
  return (
      <div id="team">
        <h1 className="TeamTitle">Page Actionnaires</h1>
        <h2 className="TeamSub">
          Bienvenue, vous retrouverez ici tous les documents liés à l'entreprise
          Noir d'Absinthe
        </h2>
        <div className="teamWrap">
          <div className="teamLeft">
            <h2>Statuts</h2>
            <a href={data.data.team.statuts} target="_blank">
              <p>Statuts au 10 juillet 2019</p>
            </a>
            <h2>Procès-verbaux d'Assemblées Générales</h2>
                    <a href={data.data.team.pv.pv1} target="_blank">
              <p>AG Augmentation Capital 29/12/2020</p>
            </a>
            <h2>Replay Assemblées Générales</h2>
          </div>
          <div className="teamRight">
            <h2>Documents comptables</h2>
          </div>
        </div>
    </div>
  );
}
