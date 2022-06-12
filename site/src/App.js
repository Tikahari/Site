import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
