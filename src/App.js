import "./App.css";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import useAxios from "./hooks/useAxios";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();


  //data from axios hook
  const { countriesAPIData, setCountriesAPIData, loading } = useAxios({
    url: `/all`,
  });



  return (

    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <Navbar darkMode={darkMode} onClick={toggleDarkMode} />
      <Routes>
        <Route exact path="/" element={<Countries countriesAPIData={countriesAPIData} loading={loading} setCountriesAPIData={setCountriesAPIData} />} />
        <Route
          exact
          path="/country/:name"
          element={<Country countriesAPIData={countriesAPIData} loading={loading} />}
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
    </div >

  );
}

export default App;
