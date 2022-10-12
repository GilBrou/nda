/***MY UNIVERSES***/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/

/***COMPONENT***/
export default function MyUniverses(data) {
  /*DOM*/
  return (
    <div className="myUniverses">
      <div className="section full-height over-hide px-4 px-sm-0">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
              <div className="section mx-auto text-center slider-height-padding">
                <input
                  className="checkbox frst"
                  type="radio"
                  id="slide-1"
                  name="slider"
                  defaultChecked
                />
                <label htmlFor="slide-1" />

                <input
                  className="checkbox scnd"
                  type="radio"
                  name="slider"
                  id="slider-2"
                />
                <label htmlFor="slider-2" />

                <input
                  className="checkbox thrd"
                  type="radio"
                  name="slider"
                  id="slider-3"
                />
                <label htmlFor="slider-3" />
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-4"
                />
                <label htmlFor="slider-4" />

                <input
                  className="checkbox fiv"
                  type="radio"
                  name="slider"
                  id="slider-5"
                />
                <label htmlFor="slider-5" />

                <input
                  className="checkbox six"
                  type="radio"
                  name="slider"
                  id="slider-6"
                />
                <label htmlFor="slider-6" />

                <input
                  className="checkbox sev"
                  type="radio"
                  name="slider"
                  id="slider-7"
                />
                <label htmlFor="slider-7" />

                <input
                  className="checkbox eght"
                  type="radio"
                  name="slider"
                  id="slider-8"
                />
                <label htmlFor="slider-8" />
                <input
                  className="checkbox nin"
                  type="radio"
                  name="slider"
                  id="slider-9"
                />
                <label htmlFor="slider-9" />

                <ul>
                  <li>
                    <span>MÉMORIA</span>
                  </li>
                  <li>
                    <span>FUTURIA</span>
                  </li>
                  <li>
                    <span>ONYRIA</span>
                  </li>
                  <li>
                    <span>TERRA URBANA</span>
                  </li>
                  <li>
                    <span>ROUGE D'ABSINTHE</span>
                  </li>
                  <li>
                    <span>L'ANTRE DE LA FOLIE</span>
                  </li>

                  <li>
                    <span>FLEUR D'ABSINTHE</span>
                  </li>
                  <li>
                    <span>CHRYSALIS</span>
                  </li>
                  <li>
                    <span>POUSSE D'ABSINTHE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
