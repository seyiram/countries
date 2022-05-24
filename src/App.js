import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Country from "./components/Country";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countriesAPIData, setCountriesAPIData] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://restcountries.com/v2/all";
  useEffect(() => {
    const getCountriesData = async () => {
      await axios
        .get(URL)
        .then((response) => {
          setCountriesAPIData(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getCountriesData();
  }, [URL]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Search />

        <Routes>
          <Route
            exact
            path="/"
            element={<Countries data={countriesAPIData} loading={loading} />}
          />
          <Route exact path="/:name" element={<Country data={countriesAPIData} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Sorry, there's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
