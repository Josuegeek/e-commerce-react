import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import PageNotFound from './pages/pageNotFound';
import Layout from "./components/layout";

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>


  )
}

export default App
