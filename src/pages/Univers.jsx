/******UNIVERS******/
import { Link } from "react-router-dom";

import {
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";

/***COMPONENT***/
export default function Univers(data) {
  /*DOM*/
  return (
    <div className="univers" id="noToggle">
      <div className="container">
        <div className="slideshow">
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*Universe Slides*/
              },
              (
                <div
                  id={"-" + univers.link}
                  className="slide"
                  key={univers.name + "S"}
                >
                  {/*Universe Link Wrapper*/},
                  <a className="linkToU" href={"/1" + univers.link}>
                    {/*Universe Title*/},
                    <h1 id={univers.link + "H1"}>{univers.name}</h1>
                    {/*Universe Description*/},<p>{univers.description}</p>
                    {/*Universe invitation button*/},<h2>{univers.accroche}</h2>
                  </a>
                  {/*Select Background Anim according to selected Universe*/}
                  {(() => {
                    if (
                      univers.name == "Mémoria" ||
                      univers.name == "Onyria" ||
                      univers.name == "Chrysalis" ||
                      univers.name == "Pousse d'Absinthe"
                    ) {
                      /*Firefly Anim*/
                      return MainAnim();
                    } else if (univers.name == "Terra Urbana") {
                      /*Rain Anim*/
                      return TerraAnim();
                    } else if (univers.name == "L'Antre de la Folie") {
                      /*Hypno spiral Anim*/
                      return FolieAnim();
                    } else if (
                      univers.name == "Fleur d'Absinthe" ||
                      univers.name == "Rouge d'Absinthe"
                    ) {
                      /*Bokeh Anim*/
                      return FleurRougeAnim();
                    } else if (univers.name == "Futuria") {
                      /*Sci-fy triangles Anim*/
                      return FuturiaAnim();
                    }
                  })()}
                  }{/*Universe Background*/},
                  <img
                    className="img-responsive"
                    src={"/img/" + univers.name + ".webp"}
                  />
                </div>
              )
            )
          )}
        </div>
        {/*Universes selector*/},
        <div className="pagination">
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*Universe slideshow links*/
              },
              (
                <a href={"#-" + univers.link} key={univers.name + "a"}>
                  <div className="aAnim">
                    <span></span>
                  </div>
                </a>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
