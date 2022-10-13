/******Background object toggling******/

/*Hide target when modal is open*/
export function HideThis() {
	if (thisToggle != null || thisToggle != undefined) {
		thisToggle.style.visibility = "hidden";
	}
}
/*Display target when modal is closed*/
export function DisplayThis() {
		if (thisToggle != null || thisToggle != undefined) {

		thisToggle.style.visibility = "visible";
	}
}
