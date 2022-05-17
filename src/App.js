
import './App.css';
// import Countries from './components/Countries';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      {/* <Countries /> */}
      <Country/>

     </div>
  )
}

export default App;
