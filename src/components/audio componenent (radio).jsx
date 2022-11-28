audio component (radio)

jsx:
          <div id="audio">
            {/*Woofers styling*/}
            <div className="Radio Radio1"></div>
            <div className="Radio Radio2"></div>
            {<p>Ambiance Sonore</p>}
            <audio
              id="audioP"
              className="audio"
              src={audio}
              /*autoPlay*/ controls
              loop
            ></audio>
          </div>

css:
/*Audio player*/

#audio {
  position: relative;
  border-radius: 20px;
  padding: 20px 7px 7px 10px;
  margin-bottom: 3px;
  border: double 7px #24150c;
  background-position: center;
  background-attachment: fixed;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  box-shadow: -5px 5px 15px -3px var(--blackish);
  background: url("./background/wood.webp"), var(--blackish);
  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 2.5s both;
  -webkit-animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 2.5s both;
}
#audio p {
  font-size: 25px;
  padding-bottom: 5px;
  text-shadow: 1px 1px 1px var(--blackish);
  font-family: "Satisfy", cursive;
  color: var(--greenish);
}
.Radio {
  top: 5px;
  width: 50px;
  right: 10px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  border: double 2px #24150c;
  background-position: center;
  background-attachment: fixed;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background: url("./background/grid.webp"), var(--blackish);
}
.Radio1 {
  left: 10px;
  transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
}
audio::-webkit-media-controls-panel {
  background-size: cover !important;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat !important;
  background-color: var(--greenish);
  background: url("./background/wood2.webp"), #ad9e95;
}