/******HOMEPAGE******/
/*import { LazyLoadImage } from "react-lazy-load-image-component";
import Back from "../style/background/background.jpg";
import PlaceholderImage from "../style/background/backgroundMini.jpg";
*/

/***COMPONENTS***/
import Intro from "../components/Intro";
/*
import {
  DustAnim,
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";
*/

/***COMPONENT***/
export default function Homepage(data) {
  /*background objects selection for toggling according to modals*/
  const thisToggle = document.getElementById("thisToggle");
  const thisOverlay = document.getElementById("thisOverlay");

  /*DOM*/
  return (
    <div className="homepage">
      {/*
      <LazyLoadImage
        src={Back}
        className="backgnd"
           PlaceholderSrc={PlaceholderImage}
        effect="blur"
        alt={"Illustration de Noir D'absinthe"}
      />{" "}
      */}
      {/*BACKGROUND ANIMATION*/}
      {/*
      {DustAnim()}
      {MainAnim()}
      */}
      <Intro data1={data.data1} data2={data.data2} data3={data.data3}/>
    </div>
  );
}
