/******HOMEPAGE******/
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../style/background/backgroundMini.webp";

/***COMPONENTS***/
import Intro from "../components/Intro";
import Back from "../style/background/background.webp";

/***COMPONENT***/
export default function Homepage(data) {
  /*
  console.log(window.innerHeight)
  console.log(window.innerWidth)
*/
  /*background objects selection for toggling according to modals*/
  const thisToggle = document.getElementById("thisToggle");
  const thisOverlay = document.getElementById("thisOverlay");

  /*DOM*/
  return (
    <div className="homepage">
      {/*Background Img*/}
      <LazyLoadImage
        src={Back}
        className="backgnd"
        width={1920}
        height={937}
        PlaceholderSrc={PlaceholderImage}
          effect="blur"
        alt={"Illustration de Noir D'absinthe"}
      />{" "}
      <Intro data1={data.data1} data2={data.data2} />
    </div>
  );
}
