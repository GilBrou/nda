/***INTRO MODULE***/
function Intro(props) {
  return (
    <section id="intro">
          <div className="intro">
        {/*Photo*/}
            <img
              src={props.data ? props.data.logoFull : "loading..."}
              className="img-responsive logoFull"
              alt={props.data ? props.data.photoAlt : "loading..."}
            />{" "}
        {/*Title*/}
        <h1 className="text-center">
          {props.data ? props.data.introP : "loading..."}
        </h1>
      </div>
    </section>
  );
}

export default Intro;
