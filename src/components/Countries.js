// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useContext, useEffect, useState } from "react";
import Loader from "react-loader";
import Pagination from "./Pagination";
import { PaginationContext } from "../contexts/PaginationContext";

const Countries = () => {
  const {
    countriesAPIData: data,
    loading,
    searchTerm,
    setSearchTerm,
    darkMode,
    handleSearch,
    searchData,
  } = useContext(PaginationContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  if (loading) {
    return (
      <Loader
        loaded={loading}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={8}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />
    );
  }
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <div className={`countries ${darkMode ? "darkMode" : ""}`}>
        {currentItems
          .filter((searchValue) => {
            if (searchTerm === "") {
              return searchValue;
            } else if (
              searchValue.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return searchValue;
            }
            return console.log(searchValue);
          })
          .map(({ name, flag, capital, region, population }) => (
            <Link to={{ pathname: `/country/${capital}` }} key={name}>
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
          ))}
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
