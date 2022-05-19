import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Countries = () => {
  const [countriesAPIData, setCountriesAPIData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastPage = currentPage * countriesPerPage;
  const indexOfFirstPage = indexOfLastPage - countriesPerPage;
  const currentCountries = countriesAPIData.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  let params = useParams();
  

  const getCountriesData = async () => {
    await axios
      .get(
        `https://restcountries.com/v2/all
  `
      )
      .then((response) => {
        setCountriesAPIData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="countries">
      {countriesAPIData.map((country, name) => (
        <Link to={{pathname: `/${params.name}`}} key={name}>
        <div className="countries__card" >
          <img src={country.flag} alt="flag" />
          <div className="countries__card--content">
            <h4>{country.name}</h4>
            <p>
              <span>Population: </span> {(country.population).toLocaleString(undefined, {maximumFractionDigits: 2})}
            </p>
            <p>
              <span>Region: </span> {country.region}
            </p>
            <p>
              <span>Capital: </span> {country.capital}
            </p>
          </div>
        </div>
      </Link>
      ))}
      
    </div>
  );
};

export default Countries;
