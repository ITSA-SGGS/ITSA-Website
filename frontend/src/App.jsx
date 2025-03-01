import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Join from './pages/Join';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
