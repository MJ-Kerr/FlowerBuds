import './App.css';
// import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dash from './components/Dash';
import Candles from './components/Candles'
import Bawlers from './components/Bawlers';
import About from './components/About';

function App() {
  return (
    <div className="App bg-slate-900">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />}></Route>
        <Route path='/candles' element={<Candles />}></Route>
        <Route path='/bawlers' element={<Bawlers />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div >
  );
}

export default App;
