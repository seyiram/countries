import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ onClick, darkMode }) => {
  return (
    <div className={`navbar ${darkMode ? "darkMode" : ""}`}>
      <div className="navbar__wrapper">
        <Link to="/">
          <h2 className={`navbar__title ${darkMode ? "darkMode" : ""}`}>
            Where in the world?
          </h2>
        </Link>

        <h4 className="navbar__light--mode" onClick={onClick}>
          {`${
            darkMode ? (
              <>
                <span>Light Mode</span> <FaSun />{" "}
              </>
            ) : (
              <>
                <span>Dark Mode</span> <FaMoon />
              </>
            )
          }`}
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
