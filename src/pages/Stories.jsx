/******STORY******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import { DustAnim } from "../components/UniversAnim";
import Data4 from "../data/story.json";
import Data5 from "../data/story2.json";

/***COMPONENT***/
export default function Stories() {
  /*DOM*/
  return (
    <div className="story">
      <div className="storyWrap">
        {DustAnim()}
        <h1>*Titre Nouvelles gratuites en ligne</h1>
        <div className="cardWrapper">
          <h2>*Cards des nouvelles from Json</h2>
          <h2>*Cards des nouvelles from Json</h2>
          <h2>*Cards des nouvelles from Json</h2>
          <h2>*Cards des nouvelles from Json</h2>
        </div>
      </div>
    </div>
  );
}
