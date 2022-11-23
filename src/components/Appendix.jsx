/******APPENDIX******/


  /******Background object toggling******/


  /*Hide target when modal is open*/
  export function HideThis() {

  	/*console.log(thisToggle)*/
  	/*background objects selection for toggling according to modals*/
  /*const thisToggle = document.getElementById("thisToggle");*/
    if (thisToggle != null || thisToggle != undefined) {
      thisToggle.style.visibility = "hidden";
    }
  }
  /*Display target when modal is closed*/
 export function DisplayThis() {
 		/*background objects selection for toggling according to modals*/
  /*const thisToggle = document.getElementById("thisToggle");*/
    if (thisToggle != null || thisToggle != undefined) {
      thisToggle.style.visibility = "visible";
    }
  }
