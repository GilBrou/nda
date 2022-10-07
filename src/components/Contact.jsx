/***CONTACT MODULE***/
function Contact(props) {
  return (
    <footer id="contact" className="contact">
      {/*Title*/}
      {/*
      <h1 className="text-center">
        {props.data ? props.data.title : "loading..."}
      </h1>
    */}
      <div className="container contact-text">
        {/*Paragraph*/}
        {/*
        <p>{props.data ? props.data.cParagraph : "loading..."} </p>
        */}
        {/*Icons/Links Wrapper*/}
        <div className="cInfos">
          {/*Mail Link*/}
          <div className="cInfosDiv cInfosDivFirst text-center">
            <a href="mailto:gillian.brousse@outlook.fr">
              <img
                src={props.data ? props.data.mailI : "loading..."}
                loading="lazy"
                alt={props.data ? props.data.mailA : "loading..."}
              />
              <p>{props.data ? props.data.mail : "loading..."} </p>
            </a>
          </div>
          {/*Github Link*/}
          <div className="cInfosDiv text-center">
            <a
              href={props.data ? props.data.GitLink : "loading..."}
              target="_blank"
            >
              <img
                src={props.data ? props.data.githubI : "loading..."}
                alt={props.data ? props.data.githubA : "loading..."}
              />
              <p>{props.data ? props.data.git : "loading..."} </p>
            </a>
          </div>
          {/*Linkedin Link*/}
          <div className="cInfosDiv text-center">
            <a
              href={props.data ? props.data.linkdLink : "loading..."}
              target="_blank"
            >
              <img
                src={props.data ? props.data.linkdnI : "loading..."}
                loading="lazy"
                alt={props.data ? props.data.linkdnA : "loading..."}
              />
              <p>{props.data ? props.data.linkdn : "loading..."} </p>
            </a>
          </div>
          {/*Telephone*/}
          {/*
          <div className="cInfosDiv cInfosDivtel text-center">
            <img
              src={props.data ? props.data.telI : "loading..."}
              loading="lazy"
              alt={props.data ? props.data.telA : "loading..."}
            />
            <p>{props.data ? props.data.tel : "loading..."} </p>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}

export default Contact;
