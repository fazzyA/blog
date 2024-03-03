import { useEffect, useState } from 'react';
import { MyContext } from './MyContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import BlogDetail from './BlogDetail';
import { ThemeContext } from './ThemeContext';

function App() {
  const [data, setData] = useState({id:1, name:"faiza"})
  const [islight, setislight] = useState(true)
  return (
    <ThemeContext.Provider value={[islight, setislight]}>
    <MyContext.Provider value={data}>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<About />} />
      <Route exact path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
    </MyContext.Provider>
    
    </ThemeContext.Provider>
  );
}

export default App;
