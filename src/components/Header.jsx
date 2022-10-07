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
          <li>Accueil</li>
          <li>Univers</li>
          <li>Créateurs</li>
          <li>À propos</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Boutique</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
