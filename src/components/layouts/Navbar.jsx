import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = {
    color: "blue",
    cursor: "pointer"
  };

  return (
    <nav className="navbar">
      <div className={styles.nav_brand}>
        <Link to="/">Brand</Link>
      </div>
      <ul className="nav-lists">
        <li>
          <Link
            to="/"
            className={`nav-link ${styles.nav_link}`}
            style={{ cursor: "pointer", color: "red" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link ${styles.nav_link}`}
            style={navLinkStyles}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${styles.nav_link}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
