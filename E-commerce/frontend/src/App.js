import React , {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Mans from './Components/Mans';
import Womans from './Components/Womans';
import Kids from './Components/Kids';
import Login from './Components/Login';
import AddToCart from './Components/AddToCartAndOrder';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
      try {
          const response = await fetch(`http://localhost:9000/api/product/search/${query}`);
          if (!response.ok) {
              throw new Error('Failed to fetch search results');
          }
          const data = await response.json();
          setSearchResults(data);
      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onSearch={handleSearch}/> 
        <Routes>
          <Route path='/' element={<Shop searchResults={searchResults} />} />
          <Route path='/man' element={<Mans />} />
          <Route path='/woman' element={<Womans />} />
          <Route path='/kid' element={<Kids />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/addToCart' element={<AddToCart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
