import { PaginationContext } from "../contexts/PaginationContext";
import { useContext } from "react";
const Search = ({
  countriesRef,
  regionsRef,
  handleSearch,
  handleSelectedRegion,
}) => {
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
            aria-label="continents"
            className={`search__select--options ${darkMode ? "darkMode" : ""}`}
            ref={regionsRef}
            onChange={handleSelectedRegion}
          >
            <option value="filter">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">Americas</option>
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
