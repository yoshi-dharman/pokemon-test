import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import tw from 'twin.macro';
// import './App.css';

// Pages
import Home from './pages/Home';
import PokeDetails from './pages/PokeDetails';
import MyPoke from './pages/MyPoke';
import NotFound from './pages/NotFound';

// Components
import NavbarCustom from './components/NavbarCustom'

const Container = tw.div`pt-24 `

function App() {
  return (
    <Container>
      <Router>
      <NavbarCustom />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/mypokemon" element={<MyPoke />}>
          </Route>
          <Route path="/pokemon/:name" element={<PokeDetails />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
