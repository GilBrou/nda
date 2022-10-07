/***HEADER/NAV MODULE***/
function Header(props) {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <a className="page-scroll" href="#page-top">
          <img
            src={props.data ? props.data.logo : "loading..."}
            className="img-responsive page-scroll authorLogo"
            href="#page-top"
            alt={props.data ? props.data.nom : "loading..."}
          />{" "}
        </a>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        {/*Scrollable section title*/}

        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#a-propos" className="page-scroll one">
              {props.data ? props.data.sectionTitle1 : "loading..."}
            </a>
          </li>
          <li>
            <a href="#parcours" className="page-scroll two">
              <i className="fa fa-facebook"></i>
              {props.data ? props.data.sectionTitle2 : "loading..."}
            </a>
          </li>
          <li>
            <a href="#réalisations" className="page-scroll three">
              {props.data ? props.data.sectionTitle3 : "loading..."}
            </a>
          </li>
          <li>
            <a href="#cv" className="page-scroll four">
              {props.data ? props.data.sectionTitle4 : "loading..."}
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll five">
              {props.data ? props.data.sectionTitle5 : "loading..."}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
