/*Form*/

export default function Form() {
  return (
    <form
      target="_blank"
      action="https://formsubmit.co/gillian.brousse@outlook.fr"
      method="POST"
    >
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nom"
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <textarea
          placeholder="Votre message"
          className="form-control"
          name="message"
          rows={10}
          required
          defaultValue={""}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-dark btn-block">
        Envoyer
      </button>
    </form>
  );
}
