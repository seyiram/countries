import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import axios from "axios";
import { PaginationContext } from "./contexts/PaginationContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let apiUrl = `/all`;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  const { countriesAPIData, loading } = useAxios({ url: apiUrl });

  const switchLight = () => {
    setDarkMode((prevState) => !prevState);
  };
  // console.log("url here", url)

  const handleSearch = async () => {
    return await axios
      .get(apiUrl)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? "darkMode" : ""}`}>
        <Navbar onClick={switchLight} darkMode={darkMode} />
        <PaginationContext.Provider
          value={{
            countriesAPIData,
            loading,
            searchTerm,
            setSearchTerm,
            handleSearch,
            searchData,
            darkMode
          }}
        >
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route exact path="/country/:name" element={<Country darkMode={darkMode} />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Sorry, there's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </PaginationContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
