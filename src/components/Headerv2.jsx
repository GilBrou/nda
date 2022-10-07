/***HEADER/NAV MODULE***/
function Header(props) {
  return (
    <nav id="navigation">
      <img
        src={props.data ? props.data.logo : "loading..."}
        className=" logo img-responsive page-scroll authorLogo"
        href="#page-top"
        alt={props.data ? props.data.nom : "loading..."}
      />{" "}
      <ul className="links">
        <li>
          <a href="#">Accueil</a>
        </li>

        <li className="dropdown">
          <a href="#" className="trigger-drop">
            Univers
            <i className="arrow" />
          </a>
          <ul className="drop">
            <li>
              <a href="#">Catalogue</a>
            </li>
            <li>
              <a href="#">Mémoria</a>
            </li>
            <li>
              <a href="#">Terra Urbana</a>
            </li>
            <li>
              <a href="#">Futuria</a>
            </li>

            <li>
              <a href="#">L'Antre de la Folie</a>
            </li>

            <li>
              <a href="#">Chrysalis</a>
            </li>

            <li>
              <a href="#">Onyria</a>
            </li>

            <li>
              <a href="#">Rouge d'Absinthe</a>
            </li>

            <li>
              <a href="#">Fleur d'Absinthe</a>
            </li>

            <li>
              <a href="#">Pousse d'Absinthe</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Créateurs</a>
        </li>

        <li>
          <a href="#">À propos</a>
        </li>

        <li className="dropdown">
          <a href="#" className="trigger-drop">
            Contact
            <i className="arrow" />
          </a>
          <ul className="drop">
            <li>
              <a href="#">Accompagnement</a>
            </li>
            <li>
              <a href="#">Nous contacter</a>
            </li>
            <li>
              <a href="#">Manuscrits</a>
            </li>
            <li>
              <a href="#">Service presse</a>
            </li>

            <li>
              <a href="#">Kit média</a>
            </li>

            <li>
              <a href="#">Appel à textes</a>
            </li>
            <li>
              <a href="#">D</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Boutique</a>
        </li>

        <li>
          <a href="#">Goodies</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
