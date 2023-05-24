import './App.css';
// import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dash from './components/Dash';
import Candles from './components/Candles'
import Bawlers from './components/Bawlers';
import About from './components/About';
import Podcast from './components/Podcast';

function App() {
  return (
    <div className="App bg-teal-800 font-custom">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />}></Route>
        <Route path='/candles' element={<Candles />}></Route>
        <Route path='/bawlers' element={<Bawlers />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/podcast' element={<Podcast />}></Route>
      </Routes>
    </div >
  );
}

export default App;
