import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div class="navbar">
      <div className="navbar__wrapper">
        <h2 className="navbar__title">Where in the world?</h2>
        <h4 className="navbar__light--mode">
          {" "}
          <FaMoon /> Dark Mode
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
