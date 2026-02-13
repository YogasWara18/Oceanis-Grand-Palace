import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from '../src/Components/Pages/Index';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Footer/Copyright';
import About from './Components/Pages/About';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;