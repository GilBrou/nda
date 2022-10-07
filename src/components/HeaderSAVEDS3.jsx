/***HEADER/NAV MODULE***/
function Header(props) {
  return (
      <div>
        <section className="top-nav">

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
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </section>   
      </div>
   
  );
}

export default Header;
