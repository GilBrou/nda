/******NEWSLETTER MODULE******/

/***COMPONENT***/
export default function Newsletter() {
	/*DOM*/
	return (
		<div id="mc_embed_signup">
			<form
				action="https://noirdabsinthe.us17.list-manage.com/subscribe/post?u=0dd60cd0d2cf0c322bea5f56e&id=957c927284"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="validate"
				target="_blank"
				noValidate
			>
				<div id="mc_embed_signup_scroll">
					<label htmlFor="mce-EMAIL">
						Inscrivez-vous à notre liste de diffusion ne manquez
						aucune information.
					</label>
					<input
						type="email"
						defaultValue
						name="EMAIL"
						className="email"
						id="mce-EMAIL"
						placeholder="Adresse email"
						required
						value=""
					/>
					{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
					<div
						style={{ position: "absolute", left: "-5000px" }}
						aria-hidden="true"
					>
						<input
							type="text"
							name="b_0dd60cd0d2cf0c322bea5f56e_957c927284"
							tabIndex={-1}
							defaultValue
						/>
					</div>
					<div className="clear">
						<input
							type="submit"
							defaultValue="S'inscrire"
							name="S'inscrire"
							id="mc-embedded-subscribe"
							className="button"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
