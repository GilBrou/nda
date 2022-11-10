/******Sort Books******/

/***Check if Reviews links are available and display them***/
export function SetReviews(props, i) {
	if (props != 0) {
		return (
			<a
				href={props}
				target="_blank"
				key={"aKey" + i}
				data-tip
				data-for={"UtipReview"}
			>
				<i className="fa fa-book" aria-hidden="true"></i>
			</a>
		);
	}
}

/***Check if Buy links are available and display them && Check if object is a book or a game***/
export function SetBuyLinks(props) {
	if (props.format === "Jeu PC") {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Achat
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						Démo
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Achat
					</a>
					<a href={props.buyEbook} target="_blank">
						Démo
					</a>
				</div>
			);
		}
	} else if (props.format === "Nouvelle") {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Télécharger
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						Télécharger
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Télécharger
					</a>
					<a href={props.buyEbook} target="_blank">
						Télécharger
					</a>
				</div>
			);
		}
	} else {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Version papier
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						E-book
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						Version papier
					</a>
					<a href={props.buyEbook} target="_blank">
						E-book
					</a>
				</div>
			);
		}
	}
}

/***Check if Litterary Proze are available and display them***/
export function SetPrize(props, i) {
	if (props.sousTitre != 0) {
		return <h2 className="sousTitre">{props.sousTitre}</h2>;
	}
}

/***Check if  Sample is available and display it***/
export function SetSample(props, i) {
	if (props.extrait != 0) {
		return (
			<a className="AExtrait" href={props.extrait} target="_blank">
				<div className="extrait">
					<p>➔ Extrait</p>
				</div>
			</a>
		);
	}
}

/***Check if tags are available and display them***/
export function SetTags(props, i) {
	if (props != 0) {
		return (
			<a
				href={"/recherche#" + props}
				className="page-scroll"
				key={props + "Link"}
			>
				<p className="tag" key={"tag" + i}>
					{props}
				</p>
			</a>
		);
	}
}

/***Sort Book position***/
export function dateSort(props) {
	/*console.log(props.date)*/
	/************/
	/*
const arr1 = [
  {id: 3, date: new Date(2022, 1, 24)},
  {id: 5, date: new Date(2027, 1, 24)},
  {id: 2, date: new Date(2023, 1, 24)},
];


const sortedDesc = arr1.sort(
  (objA, objB) => Number(objB.date) - Number(objA.date),
);


console.log(sortedDesc);
*/

	/************/
	if (props.date != 0) {
		let date: string = props.date;
		let d: string = date.split("-");
		let convertedDate = new Date(+d[0], +d[1] - 1); //(year:number, month:number)

		console.log(date);
		console.log(convertedDate);
	} else {
		console.log("pas de date pour " + props.titre);
	}
}

function SetSecondary(thatBook) {
	if (thatBook.prix != 0 && thatBook.pages != 0 && thatBook.ISBN != 0) {
		return (
			<div className="secondaryInfos">
				<p>
					{thatBook.prix + " € - "}
					{thatBook.pages + " pages"}
				</p>
				<p>{"ISBN : " + thatBook.ISBN}</p>
			</div>
		);
	} else {
		console.log("info's missing in " + thatBook.titre);
	}
}

/***Sort books from Json according to selected Universe and display them***/
export function SortBooks(thatBook, i, data) {
	let target0 = window.location.pathname;
	let targetB = target0.replace(new RegExp(/[-]/g), " ");
	let targetBa = thatBook.univers.toLowerCase();
	let targetBb = "/" + targetBa;
	let targetBb2 = targetBb.replace(new RegExp(/[']/g), " ");
	let targetBc = targetBb2.replace(new RegExp(/[èéêë]/g), "e");
	if (targetBc === targetB) {
		return (
			<div
				key={`${thatBook.titre}-${i}`}
				className="col-sm-12 col-md-12 col-lg-12 book"
			>
				<div className="bookLeft">
					<div className="imgWrap">
						<img
							className="img-responsive creatora"
							src={
								data.data1.UimgLinks.IL3 +
								thatBook.lien +
								data.data1.UimgLinks.IL1B
							}
							alt={"Couverture de " + thatBook.titre}
						/>
						{SetSample(thatBook)}
					</div>

					<div className="ReviewLinks">
						{thatBook.reviews.map((R, i) => SetReviews(R, i))}
					</div>
					{/*******************EN COURS*************************/}
					{SetSecondary(thatBook)}
					{/*******************EN COURS*************************/}

					{SetBuyLinks(thatBook)}
				</div>

				<div className="bookRight">
					<h2>
						{thatBook.titre} {thatBook.titre2}
					</h2>
					<div className="authorList">
						{thatBook.par.map((par, i) => (
							<h3 className="bAuthor" key={"author" + i}>
								{par}
							</h3>
						))}
					</div>
					{SetPrize(thatBook)}

					<div className="subTitle">
						<a
							href={"/recherche#" + thatBook.format}
							className="page-scroll"
							key={thatBook.format + "Link"}
						>
							<p>{thatBook.format}</p>
						</a>
						{thatBook.genres.map((tag, i) => SetTags(tag, i))}
					</div>
					<p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
					<p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
				</div>
			</div>
		);
	}
}

/***Sort books from Json according to target and display them***/
export function SortTargetedBooks(thatBook, i, target, data) {
	if (
		thatBook.genres.includes(target) ||
		thatBook.par.includes(target) ||
		thatBook.format.includes(target)
	) {
		return (
			<div
				key={`${thatBook.titre}-${i}`}
				className="col-sm-12 col-md-12 col-lg-12 book"
			>
				<div className="bookLeft">
					<div className="imgWrap">
						<img
							className="img-responsive creatora"
							src={
								data.data1.UimgLinks.IL3 +
								thatBook.lien +
								data.data1.UimgLinks.IL1B
							}
							alt={"Couverture de " + thatBook.titre}
						/>
						{SetSample(thatBook)}
					</div>

					<div className="ReviewLinks">
						{thatBook.reviews.map((R, i) => SetReviews(R, i))}
					</div>
					{/*******************EN COURS*************************/}
					{SetSecondary(thatBook)}
					{/*******************EN COURS*************************/}

					{SetBuyLinks(thatBook)}
				</div>

				<div className="bookRight">
					<h2>
						{thatBook.titre} {thatBook.titre2}
					</h2>
					<div className="authorList">
						{thatBook.par.map((par, i) => (
							<h3 className="bAuthor" key={"author" + i}>
								{par}
							</h3>
						))}
					</div>
					{SetPrize(thatBook)}

					<div className="subTitle">
						<a
							href={"/recherche#" + thatBook.format}
							className="page-scroll"
							key={thatBook.format + "Link"}
						>
							<p>{thatBook.format}</p>
						</a>
						{thatBook.genres.map((tag, i) => SetTags(tag, i))}
					</div>
					<p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
					<p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
				</div>
			</div>
		);
	}
}
