/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";
import Back from "../style/background/background.webp";

/***COMPONENT***/
export default function Homepage(data) {

  /*background objects selection for toggling according to modals*/
  const thisToggle = document.getElementById("thisToggle");
  const thisOverlay = document.getElementById("thisOverlay");

  /*DOM*/
  return (
    <div className="homepage">
      {/*Background Img*/}
      <img
        src={Back}
        className="backgnd"
        alt={"Illustration de Noir D'absinthe"}
      />{" "}
      <Intro data1={data.data1} data2={data.data2} />
    </div>
  );
}
