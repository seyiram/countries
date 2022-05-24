// import { useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Countries = ({ data, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="countries">
      {data.map(({ name, flag, capital, region, population }) => (
        <Link to={{ pathname: `/${capital}` }} key={name}>
          <div className="countries__card">
            <img src={flag} alt="flag" />
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
      <div className="pagination__wrapper">
        <div className="pagination">
          <ReactPaginate />
        </div>
      </div>
    </div>
  );
};

export default Countries;
