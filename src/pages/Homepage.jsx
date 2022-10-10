/***COMPONENTS***/
import Intro from "../components/Intro";

function Homepage(data) {
  return (
    <div className="homepage">
      <Intro data={data.data.intro} />
    </div>
  );
}

export default Homepage;
