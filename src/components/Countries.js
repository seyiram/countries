
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Pagination from './Pagination';
import { useTheme } from '../contexts/ThemeContext';


const Countries = ({ countriesAPIData: data, loading }) => {


  // useRef to get the values of input fields
  const countriesRef = useRef();
  const regionsRef = useRef();

  // data from context
  const {
    darkMode,
  } = useTheme();
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


  //handle user search input

  const handleSearch = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    const searchTerm = countriesRef.current.value.trim().toLowerCase();

    const searchedCountries = data.filter((country) => country.name.toLowerCase().includes(searchTerm))
    setCurrentItems(searchedCountries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchedCountries.length / itemsPerPage))

  }, [data, itemOffset]);


  // handle user region selection
  const handleSelectedRegion = useCallback(() => {
    const selectedRegion = regionsRef?.current.value.trim().toLowerCase();
    if (selectedRegion) {
      const selectedCountriesByRegion = data.filter((country) => country.region.toLowerCase() === selectedRegion)
      setCurrentItems(selectedCountriesByRegion);
    }
    else {
      setCurrentItems(data);
    }

  }, [data]);


  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Search
        countriesRef={countriesRef}
        handleSearch={handleSearch}
        handleSelectedRegion={handleSelectedRegion}
        regionsRef={regionsRef}
      />
      <div className={`countries ${darkMode ? 'darkMode' : ''}`}>
        {currentItems ? (
          currentItems.map(
            ({ capital, flag, name, population, region }) => (
              <Link key={name} to={{ pathname: `/country/${name}` }}>
                <div
                  className={`countries__card ${darkMode ? 'darkMode' : ''
                    }`}
                >
                  <img alt={name} src={flag} />
                  <div className="countries__card--content">
                    <h4>{name}</h4>
                    <p>
                      <span>Population: </span>{' '}
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
            )
          )
        ) : (
          <p
            style={{
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '4rem',
            }}
          >
            No Countries Found!
          </p>
        )}
      </div>
      <Pagination
        data={data}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        setItemOffset={setItemOffset}
      />
    </>
  );
};

export default Countries;
