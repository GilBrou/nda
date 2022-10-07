/***GENERAL***/
import { Link } from "react-router-dom";

/***CV MODULE***/
function CV(props) {
  return (
    <section id="cv">
      <div className="cv">
        <div className="container">
          <div className="row">
            {/*Left part*/}
            <div className="col cv-img text-center">
              {/*Skills image*/}
              <img
                src={props.data ? props.data.cvImg : "loading..."}
                className="img-responsive skillsPhoto"
                loading="lazy"
                alt={props.data ? props.data.cvImgAlt : "loading..."}
              />{" "}
            </div>
            {/*Right part*/}
            <div className="col cv-text text-center">
              {/*Title*/}
              <h1 className="text-center">Mon CV</h1>
              {/*Paragraph*/}
              <p>{props.data ? props.data.cvParagraph : "loading..."} </p>
              {/*Buttons wrapper*/}
              <div className="buttonWrap">
                {/*PDF consult link*/}
                <Link to="/CV_Gillian_Brousse_2022.pdf" target="_blank">
                  {/*Button*/}
                  <button className="cvConsult">
                    {/*Buttons text*/}
                    <h2 className="text-center">Consulter</h2>
                  </button>
                </Link>
                {/*PDF donwload link*/}
                <Link
                  to="/CV_Gillian_Brousse_2022.pdf"
                  target="_blank"
                  download
                >
                  {/*Button*/}
                  <button className="cvDownload">
                    {/*Buttons text*/}
                    <h2 className="text-center">Télécharger</h2>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
