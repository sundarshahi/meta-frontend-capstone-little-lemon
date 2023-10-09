import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "./assets/logo.png";
import "./Header.css";
import pages from "../utils/pages";

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Nav = () => {
  // const { pathname } = useLocation();
  const pathname = "";
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="container grid nav-bar">
      <Link className="nav-bar-logo" to={pages.get("home").path}>
        <img src={logoImage} alt="Little Lemon logo" />
      </Link>
      <button
        className="nav-bar-hamburger"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </button>
      <ul
        className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link
              className={pathname === navLink.path ? "current-location" : ""}
              to={navLink.path}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
