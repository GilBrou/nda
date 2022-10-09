/***HEADER/NAV MODULE***/
function Footer(props) {
  return (
    <div>
      <footer>
        {/*

        <div>
          <img
            src={props.data ? props.data.logo : "loading..."}
            className=" logo img-responsive page-scroll authorLogo"
            href="#page-top"
            alt={props.data ? props.data.nom : "loading..."}
          />{" "}
        </div>
        */}

        {/*

        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        */}

        <ul className="menu">
          <li>
            <a href={props.data ? props.data.Sec1Link : "loading..."}>
              {props.data ? props.data.Sec1 : "loading..."}
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.Sec2Link : "loading..."}>
              {props.data ? props.data.Sec2 : "loading..."}
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.Sec3Link : "loading..."}>
              {props.data ? props.data.Sec3 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec4Link : "loading..."}
              target="_blank"
              className="fb"
            >
              <i
                className={props.data ? props.data.Sec4 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec5Link : "loading..."}
              target="_blank"
            >
              <i
                className={props.data ? props.data.Sec5 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec6Link : "loading..."}
              target="_blank"
            >
              <i
                className={props.data ? props.data.Sec6 : "loading..."}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <img
              src={props.data ? props.data.Sec7 : "loading..."}
              className="img-responsive BretagneLogo"
              alt={props.data ? props.data.Sec7b : "loading..."}
            />{" "}
          </li>
          <li>
            <img
              src={props.data ? props.data.Sec8 : "loading..."}
              className="img-responsive"
              alt={props.data ? props.data.Sec8b : "loading..."}
            />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
