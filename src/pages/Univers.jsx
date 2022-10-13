/******UNIVERS******/

/***COMPONENT***/
export default function Univers(data) {
  /*CHECK MODAL TOGGLE AND UNIVERSES BEHIND !!!!!!!*/

  /*DOM*/
  return (
    <div className="univers">
      <div className="container">
        <div className="slideshow">
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*univers slideshow links*/
              },
              (
                <div
                  id={"slide-" + [i + 1]}
                  className="slide"
                  key={univers.name + "S"}
                >
                  <a className="linkToU" href={univers.link}>
                    <h1>{univers.name}</h1>
                    <p>{univers.description}</p>
                  </a>
                  {(() => {
                    if (
                      univers.name == "Mémoria" ||
                      univers.name == "Onyria" ||
                      univers.name == "Chrysalis" ||


                      univers.name == "Pousse d'Absinthe"
                    ) {
                      /*console.log(univers.name);
              console.log("this is firefly anim");*/

                      return (
                        <div>
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                          <div className="firefly" />
                        </div>
                      );
                    }
                             else if (
                      univers.name == "Futuria"
                    ) {
                      console.log(univers.name);
                      return (
                        <div className="FuturiaAnim">  
                        


                        </div>
                      );
                    }

                  })()}
                  }
                  <img
                    className="img-responsive"
                    src={"/img/" + univers.name + ".webp"}
                  />
                </div>
              )
            )
          )}
        </div>

        <div className="pagination">
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*univers slideshow links*/
              },
              (
                <a href={"#slide-" + [i + 1]} key={univers.name + "a"}>
                  <span>{[i + 1]}</span>
                </a>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
