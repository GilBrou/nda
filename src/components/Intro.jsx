/******INTRO MODULE******/

/***COMPONENT***/
export default function Intro(data) {
/*DOM*/
  return (
    <section id="intro">
      <div className="intro" id="thisToggle">
        <img
          src={data.data1 ? data.data1.ressources.logo2 : "loading..."}
          className="img-responsive logoFull"
          alt={data.data1 ? data.data1.ressources.logo2Alt : "loading..."}
        />{" "}
        <h1 className="text-center">
          {data.data2 ? data.data2.nda.description : "loading..."}
        </h1>
      </div>
    </section>
  );
}
