/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import story1 from "../data/story.json";
import story2 from "../data/story2.json";
import story3 from "../data/story3.json";

/***COMPONENT***/
export default function Stories() {
  let thoseStories = [story1, story2, story3];

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
          {thoseStories.map((story, i) => {
            return (
              <a href={"/nouvelle#" + story.Link} key={story.Titre + "Link"}>
                <div className="StoryCard">
                  <p className="cardTitle">{story.Titre}</p>
                  <p className="cardAuthor">{"par " + story.Auteur}</p>
                  <p className="readingTime">
                    {"🕑 " + story.Time}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
