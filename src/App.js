import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import Contact from './components/Pages/Contact';
import Consulting from './components/Pages/Consulting';
import Marketing from './components/Pages/Marketing';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer/footer.js';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/services" element={<Services />}/>
         <Route path="/products" element={<Products />}/>
         <Route path="/consulting" element={<Consulting />}/>
         <Route path="/marketing" element={<Marketing />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/signup" element={<SignUp />} />
       </Routes>
    </Router>
    <Footer />
    </>
  );
};

export default App;
