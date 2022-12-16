/******TEAM Page******/

/***DATA***/
import data from "../data/Team.json";

/***COMPONENT***/
export default function Team() {

/*islogged useffect ?*


  function Log() {
    let pass = document.getElementById("pass");
    if (pass != null && pass != undefined) {
      document.getElementById("pass").addEventListener("input", () => {
        let thisPass = pass.value;
        if (thisPass == data.team.in) {
          let logger = document.getElementById("team0");
          team0.style.display = "none";
          let onceLogged = document.getElementById("team");
          onceLogged.style.display = "block";
        }
      });
    }
  }
  /*DOM*/

  return (
    <div>
      <div id="team0">
        <div className="login-wrapper">
          <label>
            {<p>Merci de rentrer votre mot de passe</p>}
            <input type="text" id="pass" />
            {Log()}
          </label>
        </div>
      </div>
      <div id="team">
        <h1 className="TeamTitle">Page Actionnaires</h1>
        <h2 className="TeamSub">
          Bienvenue, vous retrouverez ici tous les documents liés à l'entreprise
          Noir d'Absinthe
        </h2>
        <div className="teamWrap">
          <div className="teamLeft">
            <h2 className="secTitle">🗍 Statuts</h2>
            <a href={data.team.statuts} target="_blank">
              <p>Statuts au 10 juillet 2019</p>
            </a>
            <h2 className="secTitle">
              🖹 Procès-verbaux d'Assemblées Générales
            </h2>
            <a href={data.team.pv1} target="_blank">
              <p>AG Augmentation Capital 29/12/2020</p>
            </a>
            <a href={data.team.pv2} target="_blank">
              <p>AG Rémunération dirigeante 21/12/2020</p>
            </a>
            <h2 className="secTitle">📼 Replay Assemblées Générales</h2>
            <a href={data.team.replay3} target="_blank">
              <p>AG Ordinaire 09/12/2022</p>
            </a>
            <a href={data.team.replay2} target="_blank">
              <p>AG Ordinaire 18/11/2021</p>
            </a>
            <a href={data.team.replay1} target="_blank">
              <p>AG Extraordinaire 29/12/2020</p>
            </a>
          </div>
          <div className="teamRight">
            <h2 className="secTitle">🗐 Documents comptables</h2>
            <a href={data.team.doc1} target="_blank">
              <p>Liasse fiscale 2020-2021 </p>
            </a>

            <a href={data.team.doc2} target="_blank">
              <p>Liasse fiscale 2019-2020 </p>
            </a>

            <a href={data.team.doc3} target="_blank">
              <p>Liasse fiscale 2018-2019 </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
