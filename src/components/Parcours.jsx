/***CARRER MODULE***/
function Parcours(props) {
  return (
    <section id="parcours">
      <div className="parcours">
        {/*Title*/}
        <h1 className="text-center">Parcours</h1>
        <div className="container">
          <div className="row">
            {/*Carreer cards wrapper*/}
            <div className="outer">
              {/*Dynamic Carreer cards creation from Json data*/}
              {props.data
                ? props.data.map(
                    (d, i) => (
                      {
                        /*Carreer card*/
                      },
                      (
                        <div key={d.number} className={d.cardClassName}>
                          <div className="info">
                            {/*Carreer title*/}
                            <h3 className="title">{d.parcoursTitle1}</h3>
                            {/*Possible link */}
                            <a
                              className={d.parcoursSubTitleClass}
                              target="_blank"
                              rel="noreferrer"
                              href={d.link}
                            >
                              {/*Carreer occupations/diplomas*/}
                              {d.parcoursSubTitle}
                            </a>
                            {/*Carreer subtitle*/}
                            <h3 className={d.parcoursTitle2Class}>
                              {d.parcoursTitle2}
                            </h3>

                            {/*Image & paragraph wrapper*/}
                            <div className="inContent">
                              {/*Carreer image*/}
                              <img
                                className={d.parcoursImgClass}
                                loading="lazy"
                                src={d.parcoursImg}
                                alt={d.parcoursImgAlt}
                              />{" "}
                              {/*Carreer paragraph*/}
                              <p>{d.parcoursParagraph}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  )
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
