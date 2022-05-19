import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <Link to="/">
          <h2 className="navbar__title">Where in the world?</h2>
        </Link>
        <h4 className="navbar__light--mode">
          {" "}
          <FaMoon /> Dark Mode
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
