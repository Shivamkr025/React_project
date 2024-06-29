import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import mans_banner from './Components/Assets/mans_banner01.webp'
import kids_banner from './Components/Assets/kids_banner.webp'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mans' element={<Shopcategory banner={mans_banner} category="man" />} />
          <Route path='/womans' element={<Shopcategory banner={mans_banner}  category="woman" />} />
          <Route path='/kids' element={<Shopcategory  banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Nested route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
