/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import Data4 from "../data/story.json";
import Data5 from "../data/story2.json";
import Data6 from "../data/story3.json";

/***COMPONENT***/
export default function Stories() {
  /*DOM*/
  return (
    <div className="story0">
      <div className="storyWrap2">
        {DustAnim()}
        <h1>Bibliothèque augmentée</h1>
        <img
          fetchpriority="high"
          src="img/wave.webp"
          className=" wave img-responsive"
          alt="image d'onde musicale analogique"
        />{" "}
        <h2>
          Retrouvez dans cette section des nouvelles gratuites agrémentées
          d'effets visuels et d'ambiances sonores favorisant l'immersion.
        </h2>
        <img
          fetchpriority="high"
          src="img/spark.webp"
          className=" spark img-responsive"
          alt="Image d'étincelle"
        />{" "}
        <img
          fetchpriority="high"
          src="img/spark.webp"
          className=" spark2 img-responsive"
          alt="Image d'étincelle"
        />{" "}
        <div className="cardWrapper">
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data5.Titre}</p>
            <p className="cardAuthor">{"par " + Data5.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data6.Titre}</p>
            <p className="cardAuthor">{"par " + Data6.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          <div className="StoryCard">
            <p className="cardTitle">{Data4.Titre}</p>
            <p className="cardAuthor">{"par " + Data4.Auteur}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
