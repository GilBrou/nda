/***HEADER/NAV MODULE***/
function Header(props) {
  return (
    <div>
      <nav role="navigation" className="top-nav primary-navigation">
        <div>
          <a href="/accueil">
            <img
              src={props.data ? props.data.logo : "loading..."}
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={props.data ? props.data.nom : "loading..."}
            />{" "}
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        <ul className="menu">
          <li>
            <a
              href={props.data ? props.data.Sec1Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec1 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec2Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec2 : "loading..."}
            </a>
            <ul className="subList">
              <li>
                <a href={props.data ? props.data.Sec2sub1L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub1 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub2L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub2 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub3L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub3 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub4L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub4 : "loading..."}
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.Sec2sub5L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub5 : "loading..."}
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.Sec2sub6L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub6 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub7L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub7 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec2sub8L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec2sub8 : "loading..."}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href={props.data ? props.data.Sec3Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec3 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec4Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec4 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec5Link : "loading..."}
              className="page-scroll"
            >
              {props.data ? props.data.Sec5 : "loading..."}
            </a>
                        <ul className="subList">

              <li>
                <a href={props.data ? props.data.Sec5sub1L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec5sub1 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec5sub2L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec5sub2 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec5sub3L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec5sub3 : "loading..."}
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.Sec5sub4L : "loading..."}>
                  {" "}
                  {props.data ? props.data.Sec5sub4 : "loading..."}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec6Link : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {props.data ? props.data.Sec6 : "loading..."}
            </a>
          </li>
          <li>
            <a
              href={props.data ? props.data.Sec7Link : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {props.data ? props.data.Sec7 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
