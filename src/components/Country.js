import { FaArrowLeft } from "react-icons/fa";
import germanFlag from "../img/Flag_of_Germany.svg";

const Country = () => {
  return (
    <div className="country">
      <button className="country__button">
        <FaArrowLeft />
        Back
      </button>
      <div className="country__wrapper">
        <div className="country__img">
          <img src={germanFlag} alt="" />
        </div>
        <div className="country__content--wrapper">
          <h4>Germany</h4>
          <div className="country__content">
            <div className="country__content--top">
              <div className="country__content--left">
                <p>
                  <span>Native Name:</span> Deutchland
                </p>
                <p>
                  <span>Population:</span> 101,000,000
                </p>
                <p>
                  <span>Region:</span> Europe
                </p>
                <p>
                  <span>Sub Region:</span> Western Europe
                </p>
                <p>
                  <span>Capital:</span> Berlin
                </p>
              </div>
              <div className="country__content--right">
                <p>
                  <span>Top Level Domain: </span>.de
                </p>
                <p>
                  <span>Currencies: </span> Euro
                </p>
                <p>
                  <span>Languages: </span>German, English
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
                <button>France</button>
                <button>Germany</button>
                <button>Netherlands</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
