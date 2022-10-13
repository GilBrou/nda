/******UNIVERS******/

/***COMPONENT***/
export default function Univers(data) {
  /*CHECK MODAL TOGGLE AND UNIVERSES BEHIND !!!!!!!*/

  /*Rain Anim (Folie)*/
  var makeItRain = function () {
    //clear out everything
    $(".rain").empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops +=
        '<div class="drop" style="left: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
    }

    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
  };

  $(".splat-toggle.toggle").on("click", function () {
    $("body").toggleClass("splat-toggle");
    $(".splat-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  $(".back-row-toggle.toggle").on("click", function () {
    $("body").toggleClass("back-row-toggle");
    $(".back-row-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  $(".single-toggle.toggle").on("click", function () {
    $("body").toggleClass("single-toggle");
    $(".single-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  makeItRain();

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
                    } else if (univers.name == "Terra Urbana") {
                      return (
                        <div className="TerraAnim">
                          <div className="rain front-row" />
                          <div className="rain back-row" />
                        </div>
                      );
                    } else if (univers.name == "Fleur d'Absinthe"  || univers.name == "Rouge d'Absinthe") {
                      return (
                        <div className="FleurRougeAnim">
                          <div className="background">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
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
