import { PaginationContext } from "../contexts/PaginationContext";
import { useContext } from "react";
const Search = ({ countriesRef, handleSearch }) => {
  const { darkMode } = useContext(PaginationContext);
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className={`search__input--wrapper ${darkMode ? "darkMode" : ""}`}>
          <input
            type="search"
            className={`search__input ${darkMode ? "darkMode" : ""}`}
            aria-label="Search"
            placeholder="Search..."
            ref={countriesRef}
            onChange={handleSearch}
          />
        </div>
        <div className={`select__input--wrapper ${darkMode ? "darkMode" : ""}`}>
          <select
            name="continents"
            id="continents"
            className={`search__select--options ${darkMode ? "darkMode" : ""}`}
          >
            <option value="filter">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
