// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import NavbarCustom from './components/NavbarCustom'

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarCustom />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
