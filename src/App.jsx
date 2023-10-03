import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Navbar/Nav';
import Contact from './components/Contact/Contact';

const DashBoard = () => {
  return (
    <div>
      {/* mini nav */}
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='#about' element={<About />} />
        <Route path='#contact' element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
};

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    </div>
  )
}

export default App;
