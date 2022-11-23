/******APPENDIX******/

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

/*Get all book's tags*/
export function getAllTags(data) {
	let allBookTags = [];
	let allThoseBooks = data.Livres;
	for (let i in allThoseBooks) {
		let thisOne = allThoseBooks[i];
		for (let i in thisOne.genres) {
			if (
				!allBookTags.includes(thisOne.genres[i]) &&
				!thisOne.genres[i] == "" &&
				!thisOne.genres[i].includes("12") &&
				!thisOne.genres[i].includes("Rétro") &&
				!thisOne.genres[i].includes("Point") &&
				!thisOne.genres[i].includes("ticle") &&
				!thisOne.genres[i].includes("views")
			) {
				allBookTags.push(thisOne.genres[i]);
			}
		}
	}
	console.log(allBookTags);
	/*
	Randomize array
	let newTagArray = allBookTags.sort(() => 0.5 - Math.random());
	console.log(newTagArray);
	*/
}
