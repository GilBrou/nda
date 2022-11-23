/******MODALS******/

/*Hide target when modal is open*/
export function getModal(data, id) {
	/*Create mailto from Json*/
	const ThatMail = "mailto:" + data.data2.nda.mail;

	/*Mentions modal*/
	if (id.includes("4")) {
		return (
			<div>
				<div></div>
			</div>
		);
	}

	if (id.includes("5")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.mentions.titre : "loading..."}</h1>
				<div className="paraMentions">
					<p>{data.data1 ? data.data1.nom : "loading..."}</p>
					<p>{data.data2 ? data.data2.mentions.P1 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P2 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P3 : "loading..."}</p>
				</div>
				<div className="paraMentions">
					<a href={ThatMail}>
						<p>{data.data2 ? data.data2.nda.mail : "loading..."}</p>
					</a>
					<p>{data.data2 ? data.data2.nda.tel : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<p> {data.data2 ? data.data2.mentions.P4 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P5 : "loading..."}</p>
				</div>
				<div className="Pcenter2">
					<p> {data.data2 ? data.data2.mentions.P6 : "loading..."}</p>

					<span className="Pinline">
						<p className="">
							{" "}
							{data.data2 ? data.data2.mentions.P7 : "loading..."}
						</p>

						<a
							href={
								data.data2 ? data.data2.nda.Tiphs : "loading..."
							}
							target="_blank"
						>
							<p className="Tiphs">
								{data.data2
									? data.data2.mentions.P8
									: "loading..."}
							</p>
						</a>
					</span>
				</div>
			</div>
		);
	}
	/*Confidentiality modal*/
	if (id.includes("6")) {
		return (
			<div>
				<h1>
					{data.data2
						? data.data2.confidentiality.titre
						: "loading..."}
				</h1>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T1
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T1a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T1b
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T2
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T2a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2b
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2c
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2d
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2e
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2f
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2g
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T3
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T3a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T4
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T4a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T4b
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T4c
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T5
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T5a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T6
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T6a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T7
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T7a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T8
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T8a
							: "loading..."}
					</p>
				</div>
			</div>
		);
	}
	/*CGV modal*/
	if (id.includes("7")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.CGV.titre : "loading..."}</h1>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T1 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T1a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T1b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T2 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T2a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T3 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T3a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T4 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T4a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T4b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T5 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T5a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T6 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T6a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T7 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T7a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T7b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T8 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T8a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T8b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T9 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T9a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T10 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T10a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T10b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T11 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T11a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T12 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T12a : "loading..."}</p>
				</div>
			</div>
		);
		/*NO MATCH*/
	} else {
		console.log("No Modal Found");
		return <div></div>;
	}
}
