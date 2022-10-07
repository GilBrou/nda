/***INTRO MODULE***/
function Intro(props) {
  return (
    <header id="a-propos">
      <div className="intro">
        <div className="container">
          <div className="row">
            {/*Left part*/}
            <div className="col intro-text text-center">
              {/*Title*/}
              <h1 className="text-center">
                {props.data ? props.data.title : "loading..."}
              </h1>
              {/*Paragraph*/}
              <p>{props.data ? props.data.paragraphIntro : "loading..."}</p>

              {/*Mail Link*/}
              <div className="cInfosDiv">
                <a href="mailto:gillian.brousse@outlook.fr">
                  <img
                    src={props.data2 ? props.data2.mailI : "loading..."}
                    loading="lazy"
                    alt={props.data2 ? props.data2.mailA : "loading..."}
                  />
                  <p>{props.data2 ? props.data2.mail : "loading..."} </p>
                </a>
              </div>
            </div>

            {/*Right part*/}
            <div className="col intro-img text-center">
              {/*Photo*/}
              <img
                src={props.data ? props.data.photoIntro : "loading..."}
                className="img-responsive page-scroll authorPhoto"
                href="#page-top"
                alt={props.data ? props.data.photoAlt : "loading..."}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Intro;
