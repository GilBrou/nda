/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";

/***COMPONENT***/
export default function Homepage(data) {
  /*background objects selection for toggling according to modals*/
  const thisToggle = document.getElementById("thisToggle");
  const thisOverlay = document.getElementById("thisOverlay");

  /*DOM*/
  return (
    <div className="homepage">
      <Intro data1={data.data1} data2={data.data2} />
    </div>
  );
}
