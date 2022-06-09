import axios from "axios";
import { useCallback, useEffect, useState } from "react";

axios.defaults.baseURL = "https://restcountries.com/v2/";

const useAxios = ({ url }) => {
  const [countriesAPIData, setCountriesAPIData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountriesData = useCallback(async () => {
    await axios
      .get(url)
      .then((res) => setCountriesAPIData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    getCountriesData();
  }, [getCountriesData]);

  return { countriesAPIData, error, loading };
};

export default useAxios;
