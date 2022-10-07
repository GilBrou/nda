import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";

/***PROJECTS MODULE***/
function Projets(props) {
  /*Tooltip*/
  function tTip() {
    const [tip, setTip] = useState(0);
    useEffect(() => {
      function incrementNum() {
        setTip(+1);
      }
      incrementNum();
    }, []);
    if (tip > 0) {
      return (
        <ReactTooltip
          id="techTip"
          place="bottom"
          textColor="#ffa101"
          arrowColor="#ffa101"
          border
          borderColor="#ffa101"
          effect="solid"
          backgroundColor="#222020"
        />
      );
    }
  }
  /*Main*/
  return (
    <section id="réalisations">
      <div className="réalisations">
        {/*Title*/}
        <h1 className="text-center">Réalisations</h1>
        <div className="container">
          {/*Tooltip template*/}
          {tTip()}
          {/*Project cards wrapper*/}
          <div className="row otherCardsFade">
            {/*Dynamic Project cards creation from Json data*/}
            {props.data.projets
              ? props.data.projets.map(
                  (d, i) => (
                    {
                      /*Project card*/
                    },
                    (
                      <div
                        key={d.pId}
                        className="projectCard thathCard col-md-3 "
                      >
                        {/*Project image*/}
                        <img
                          src={d.pImg}
                          loading="lazy"
                          className="img-responsive projectCardImg"
                          alt={d.pName}
                        />{" "}
                        {/*Project title*/}
                        <h2>{d.pName}</h2>
                        {/*Project description*/}
                        <h3>{d.pDescription}</h3>
                        {/*Project details*/}
                        <p>{d.pInfos}</p>
                        {/*Project techs wrapper*/}
                        <div className="techs">
                          {/*Dynamic tech icons creation from Json data*/}
                          {d.technos.map(
                            (technos) => (
                              {
                                /*Tech icons*/
                              },
                              (
                                <img
                                  key={technos.name}
                                  loading="lazy"
                                  src={technos.icon}
                                  alt={technos.name}
                                  data-tip={technos.name}
                                  data-for="techTip"
                                />
                              )
                            )
                          )}
                        </div>
                        {/*Buttons wrapper*/}
                        <div className="buttonW">
                          {/*Site demo link*/}
                          <a
                            href={d.pSite}
                            className={d.bClassName}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {/*Button*/}
                            <button>
                              {/*Buttons text*/}
                              {d.but1}
                            </button>
                          </a>

                          {/*Code repo link*/}
                          <a
                            href={d.pCode}
                            className={d.b2ClassName}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {/*Button*/}
                            <button>
                              {/*Buttons text*/}
                              {d.but2}
                            </button>
                          </a>
                        </div>
                      </div>
                    )
                  )
                )
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projets;
