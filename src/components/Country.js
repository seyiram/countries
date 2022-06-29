import { FaArrowLeft } from "react-icons/fa";
import { PaginationContext } from "../contexts/PaginationContext";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Country = ({ darkMode }) => {
  const { countriesAPIData: data } = useContext(PaginationContext);
  let params = useParams();
  let navigate = useNavigate();

  const response = data.filter((country) => country.name === params.name);

  const getBorderCountry = (code) => {
    return data.find((country) => country.alpha3Code === code);
  };

  return (
    <div className="country">
      <button
        className={`country__button ${darkMode ? "darkMode" : ""}`}
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        Back
      </button>

      {response?.map(
        ({
          name,
          nativeName,
          flag,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        }) => (
          <div className="country__wrapper" key={name}>
            <div className="country__img">
              <img src={flag} alt="" />
            </div>
            <div className="country__content--wrapper">
              <h4>{name}</h4>
              <div className="country__content">
                <div className="country__content--top">
                  <div className="country__content--left">
                    <p>
                      <span>Native Name:</span> {nativeName}
                    </p>
                    <p>
                      <span>Population:</span>{" "}
                      {population.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p>
                      <span>Region:</span> {region}
                    </p>
                    <p>
                      <span>Sub Region:</span> {subregion}
                    </p>
                    <p>
                      <span>Capital:</span> {capital ? capital : "Does not have a capital city"}
                    </p>
                  </div>
                  <div className="country__content--right">
                    <p>
                      <span>Top Level Domain: </span>
                      {topLevelDomain}
                    </p>
                    <p>
                      <span>Currencies: </span>{" "}
                      {currencies.map((currency) => currency.name)}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {languages.map((language) => language.name).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="country__content--bottom">
                  <div className="country__content--bottom-title">
                    <p>
                      <span>Border Countries:</span>
                    </p>
                  </div>
                  <div className="country__content--bottom-buttons">
                    {borders ? (
                      borders.map((border) => {
                        const countryName = getBorderCountry(border);
                        return <button key={border}>{countryName.name}</button>;
                      })
                    ) : (
                      <p>No border countries available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Country;
