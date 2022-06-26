import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import { PaginationContext } from "./contexts/PaginationContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let apiUrl = `/all`;
  const [searchTerm, setSearchTerm] = useState("");

  const { countriesAPIData, setCountriesAPIData, loading } = useAxios({
    url: apiUrl,
  });

  // console.log("data here", countriesAPIData)
  const switchLight = () => {
    setDarkMode((prevState) => !prevState);
  };

 

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? "darkMode" : ""}`}>
        <Navbar onClick={switchLight} darkMode={darkMode} />
        <PaginationContext.Provider
          value={{
            countriesAPIData,
            setCountriesAPIData,
            loading,
            searchTerm,
            setSearchTerm,
            darkMode,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route
              exact
              path="/country/:capital"
              element={<Country darkMode={darkMode} />}
            />
            <Route
              path="*"
              element={
                <main
                  style={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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
