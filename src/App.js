import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Search />

        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route exact path=":name" element={<Country />} />
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
