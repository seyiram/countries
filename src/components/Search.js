const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__input--wrapper">
          <input
            type="search"
            className="search__input"
            aria-label="Search"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            value={searchTerm}
          />
        </div>
        <div className="select__input--wrapper">
          <select
            name="continents"
            id="continents"
            className="search__select--options"
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
