import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import Product from './pages/Product';
import { NavProvider } from './context/NavContext';
import { ModalProvider } from './context/ModalContext';
import { ToastContainer } from 'react-toastify';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <>
    <NavProvider>
    <ModalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Categories />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </ModalProvider>
    </NavProvider>
    </>
  )
}

export default App
