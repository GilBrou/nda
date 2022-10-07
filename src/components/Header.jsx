/***HEADER/NAV MODULE***/
function Header(props) {
  return (
    <div>
      <nav className="top-nav">
        <div>
          <img
            src={props.data ? props.data.logo : "loading..."}
            className=" logo img-responsive page-scroll authorLogo"
            href="#page-top"
            alt={props.data ? props.data.nom : "loading..."}
          />{" "}
        </div>

        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        <ul className="menu">
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec1 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec2 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec3 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec4 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec5 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec6 : "loading..."}
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              {props.data ? props.data.Sec7 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
