/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim, MainAnim } from "../components/UniversAnim";
import story1 from "../data/story1.json";
import story2 from "../data/story2.json";
import story3 from "../data/story3.json";

/***COMPONENT***/
export default function Stories(data) {
  let thoseStories = [
    story1,
    story2,
    story3,
    story2,
    story1,
    story3,
    story3,
    story1,
    story2,
  ];

  /*DOM*/
  return (
    <div className="story0">
      <div className="storyWrap2">
        {DustAnim()}
        <div className="top1">
          <img
            fetchpriority="high"
            src="img/cog.webp"
            className=" cog img-responsive"
            alt="image d'onde musicale analogique"
          />{" "}
          <h1>Bibliothèque augmentée</h1>
          <img
            fetchpriority="high"
            src="img/wave.webp"
            className=" wave img-responsive"
            alt="image d'onde musicale analogique"
          />{" "}
        </div>
        <div className="top2">
          <h2>
            Retrouvez dans cette section des nouvelles gratuites agrémentées
            d'effets visuels et d'ambiances sonores. L'écoute au casque est
            conseillée pour une meilleure immersion.
          </h2>
        </div>

        <div className="cardWrapper">
          {thoseStories.map((story, i) => {
            return (
              <a href={"/" + story.Link} key={story.Titre + "Link" +i}>
                <div className="StoryCard">
                  <p className="cardTitle">{story.Titre}</p>
                  <p className="cardAuthor">{story.Auteur}</p>
                  <p className="readingTime">{"🕑 " + story.Time}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
