import { useCallback, useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from "../contexts/ThemeContext"


const Country = ({ countriesAPIData: data, loading }) => {

  let params = useParams();
  let navigate = useNavigate();
  const { darkMode } = useTheme();
 
  const getCountriesData = useMemo(() => data?.filter(
    (country) => country.name.toLowerCase() === params.name.toLowerCase()
  ), [params.name, data]);



  // wrapping this on a useMemo is a good idea since it's a relatively heavy computation
  const getBorderCountry = useCallback((code) => {
    return data?.find((country) => country.alpha3Code === code);
  }, [data]);
  console.log("border countries:", getBorderCountry)

  if (loading) {
    return <h3>Loading...</h3>
  }

  // you should return something if the country doest exist, like http://localhost:3000/country/boiaefafa

  return (
    <div className="country">
      <button
        className={`country__button ${darkMode ? 'darkMode' : ''}`}
        onClick={() => navigate(-1)} // lol this the correct approach to react-router-dom v6, it's weird... but it's recommended
      >
        <FaArrowLeft />
        Back
      </button>

      {getCountriesData?.map(
        // destructuring is good, but if you're having so many props when destructuring, it's better not to
        ({
          borders,
          capital,
          currencies,
          flag,
          languages,
          name,
          nativeName,
          population,
          region,
          subregion,
          topLevelDomain,
        }) => (
          <div className="country__wrapper" key={name}>
            <div className="country__img">
              <img alt="" src={flag} />
            </div>
            <div className="country__content--wrapper">
              <h4>{name ? name : ""}</h4>
              <div className="country__content">
                <div className="country__content--top">
                  <div className="country__content--left">
                    <p>
                      <span>Native Name:</span> {nativeName ? nativeName : ""}
                    </p>
                    <p>
                      <span>Population:</span>{' '}
                      {population.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p>
                      <span>Region:</span> {region ? region : "Does not have a retion"}
                    </p>
                    <p>
                      <span>Sub Region:</span> {subregion ? subregion : "Does not have a subregion"}
                    </p>
                    <p>
                      <span>Capital:</span>{' '}
                      {capital
                        ? capital
                        : 'Does not have a capital city'}
                    </p>
                  </div>
                  <div className="country__content--right">
                    <p>
                      <span>Top Level Domain: </span>
                      {topLevelDomain ? topLevelDomain : 'Does not have a top level domain'}
                    </p>
                    <p>
                      <span>Currencies: </span>{' '}
                      {currencies ? currencies.map((currency) => currency.name) : "No currencies found"}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {languages
                        ?.map((language) => language.name)
                        .join(', ')}
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
                        return (
                          <button key={border}>
                            {countryName.name}
                          </button>
                        );
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
