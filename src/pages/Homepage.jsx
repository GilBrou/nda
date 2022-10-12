/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";

/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div className="homepage">
      <Intro data1={data.data1} data2={data.data2} />
    </div>
  );
}