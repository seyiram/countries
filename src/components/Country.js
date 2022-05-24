import { FaArrowLeft, FaBorderStyle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const Country = ({ data }) => {
  let params = useParams();
  let navigate = useNavigate();

  const response = data.filter((country) => country.capital === params.name);

  return (
    <div className="country">
      <button className="country__button" onClick={() => navigate("/")}>
        <FaArrowLeft />
        Back
      </button>
      {response && response.map(
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
          borders
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
                      <span>Capital:</span> {capital}
                    </p>
                  </div>
                  <div className="country__content--right">
                    <p>
                      <span>Top Level Domain: </span>
                      {topLevelDomain}
                    </p>
                    <p>
                      <span>Currencies: </span> {currencies.map((currency) => currency.name)}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {languages.map((language) => (language.name).split(' ').join(" ,")) }
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
                    {/* {borders.map(border => border)} */}
                    <button>France</button>
                    {/* <button>Germany</button>
                    <button>Netherlands</button> */}
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
