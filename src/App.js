
import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Countries />
     </div>
  )
}

export default App;
