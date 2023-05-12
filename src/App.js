import { Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";

const HomePage = () => {
  return <h1>This is a Home Page</h1>;
};
const AboutPage = () => {
  return <h1>This is a About Page</h1>;
};
const ContactPage = () => {
  return <h1>This is a Contact Page</h1>;
};

const App = () => {
  const navLinkStyles = {
    color: "blue",
    cursor: "pointer"
  };

  return (
    <>
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
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
