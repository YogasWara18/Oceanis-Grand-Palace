import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from '../src/Components/Pages/Index';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Footer/Copyright';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Rooms from './Components/Pages/Rooms';
import RoomsDetails from './Components/Pages/RoomsDetails';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomsDetails />} />
      </Routes>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;