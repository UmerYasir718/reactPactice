import "./App.css";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import MyResume from "./MyComponents/MyResume";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Home/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/MyResume" element={<MyResume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
