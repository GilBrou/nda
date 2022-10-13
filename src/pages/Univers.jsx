/******UNIVERS******/

/***COMPONENT***/
export default function Univers(data) {
  /*DOM*/
  return (
    <div className="univers">
      <div className="container">
        <div className="slideshow">


          <div id="slide-1" className="slide">
          <a className="linkToU" href="/accueil">
            <h1>MÉMORIA</h1>
          <p>Au fond du verre, découvrez Absinthia, la belle mais dangereuse fée verte . Laissez-la vous prendre par les sens, l'espace d'un instant, et elle vous mènera vers Memoria, terre des âges passés. Elle vous y contera, à demi-mot, des rêves emplis de Magie, dont vous ne voudrez jamais vous éveiller.</p>
            {/*<h2>Explorer</h2>*/}

            </a>
            <img className="img-responsive" src="/img/backgroundU1.webp" />
          </div>

          <div id="slide-2" className="slide">
            <img className="img-responsive" src="/img/backgroundU2.webp" />
          </div>

          {/*
          <div id="slide-3" className="slide">
            <a href="#slide-2" />
            <a href="#slide-4" />
                  <img className="img-responsive"
            src="/img/backgroundU3.webp" />
          </div>
          <div id="slide-4" className="slide">
            <a href="#slide-3" />
            <a href="#slide-5" />
                  <img className="img-responsive"
            src="/img/backgroundU4.webp" />
          </div>
          <div id="slide-5" className="slide">
            <a href="#slide-4" />
            <a href="#slide-6" />
                  <img className="img-responsive"
            src="/img/backgroundU5.webp" />
          </div>
          <div id="slide-6" className="slide">
            <a href="#slide-5" />
            <a href="#slide-7" />
                  <img className="img-responsive"
            src="/img/backgroundU6.webp" />
          </div>

          <div id="slide-7" className="slide">
            <a href="#slide-6" />
            <a href="#slide-8" />
                  <img className="img-responsive"
            src="/img/backgroundU7.webp" />
          </div>

          <div id="slide-8" className="slide">
            <a href="#slide-7" />
            <a href="#slide-9" />
                  <img className="img-responsive"
            src="/img/backgroundU8.webp" />
          </div>

                 <div id="slide-9" className="slide">
            <a href="#slide-8" />
            <a href="#slide-1" />
                  <img className="img-responsive"
            src="/img/backgroundU9.webp" />
          </div>
          */}
        </div>
        <div className="pagination">
          <a href="#slide-1">
            <span>1</span>
          </a>
          <a href="#slide-2">
            <span>2</span>
          </a>

          {/*
          <a href="#slide-3"><span>3</span></a>
          <a href="#slide-4"><span>4</span></a>
          <a href="#slide-5"><span>5</span></a>
          <a href="#slide-6"><span>6</span></a>
          <a href="#slide-7"><span>7</span></a>
          <a href="#slide-8"><span>8</span></a>
          <a href="#slide-9"><span>9</span></a>

          */}
        </div>
      </div>
    </div>
  );
}
