import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
