import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useContext, useEffect, useState, useRef } from "react";
import Pagination from "./Pagination";
import { PaginationContext } from "../contexts/PaginationContext";
import axios from "axios";

const Countries = () => {
  // useRef to get the values of input fields
  const countriesRef = useRef();
  const regionsRef = useRef();

  // data from context
  const {
    countriesAPIData: data,
    setCountriesAPIData,
    loading,
    darkMode,
  } = useContext(PaginationContext);
  const [currentItems, setCurrentItems] = useState([]);
  // pagination variables
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  // track page number changes
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  //handle user search input
  const handleSearch = () => {
    const searchTerm = countriesRef.current.value;
    if (searchTerm.trim()) {
      const fetchSearchData = async () => {
        await axios
          .get(`https://restcountries.com/v2/name/${searchTerm.toLowerCase()}`)
          .then((response) => setCountriesAPIData(response.data))
          .catch((error) => console.error(error));
      };
      fetchSearchData();
    } else {
      setCountriesAPIData(currentItems);
    }
  };
  // handle user region selection
  const handleSelectedRegion = () => {
    const selectedRegion = regionsRef.current.value;
    if (selectedRegion.trim()) {
      const fetchSelectedRegion = async () => {
        await axios
          .get(
            `https://restcountries.com/v2/region/${selectedRegion.toLowerCase()}`
          )
          .then((response) => setCountriesAPIData(response.data))
          .catch((error) => console.error(error));
      };
      fetchSelectedRegion();
    } else {
      setCountriesAPIData(currentItems);
    }
  };

  return (
    <>
      <Search
        handleSearch={handleSearch}
        handleSelectedRegion={handleSelectedRegion}
        countriesRef={countriesRef}
        regionsRef={regionsRef}
      />
      <div className={`countries ${darkMode ? "darkMode" : ""}`}>
        {currentItems ? (
          currentItems.map(({ name, flag, capital, region, population }) => (
            <Link to={{ pathname: `/country/${name}` }} key={name}>
              <div className={`countries__card ${darkMode ? "darkMode" : ""}`}>
                <img src={flag} alt={name} />
                <div className="countries__card--content">
                  <h4>{name}</h4>
                  <p>
                    <span>Population: </span>{" "}
                    {population.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>
                    <span>Region: </span> {region}
                  </p>
                  <p>
                    <span>Capital: </span> {capital}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No Countries Found!</p>
        )}
      </div>
      <Pagination
        pageCount={pageCount}
        data={data}
        itemsPerPage={itemsPerPage}
        setItemOffset={setItemOffset}
      />
    </>
  );
};

export default Countries;
