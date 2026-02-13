import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from '../src/Components/Pages/Index';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;