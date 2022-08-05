
import { useTheme } from '../contexts/ThemeContext';
const Search = ({
  countriesRef,
  handleSearch,
  handleSelectedRegion,
  regionsRef,
}) => {
  const { darkMode } = useTheme();
  return (
    <div className="search">
      <div className="search__wrapper">
        <div
          className={`search__input--wrapper ${darkMode ? 'darkMode' : ''
            }`}
        >
          <input
            aria-label="Search"
            className={`search__input ${darkMode ? 'darkMode' : ''}`}
            onChange={handleSearch}
            placeholder="Search..."
            ref={countriesRef}
            type="search"
          />
        </div>
        <div
          className={`select__input--wrapper ${darkMode ? 'darkMode' : ''
            }`}
        >
          <select
            aria-label="continents"
            className={`search__select--options ${darkMode ? 'darkMode' : ''
              }`}
            id="continents"
            name="continents"
            onChange={handleSelectedRegion}
            ref={regionsRef}
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
