import { useEffect, useState } from 'react';
import { MyContext } from './MyContext';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import BlogDetail from './BlogDetail';

function App() {
  const [first, setfirst] = useState(10)
  // const [blogs, setBlogs] = useState([
  //   {id: 1, title: "title1", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  //   {id: 2, title: "title2", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  //   {id: 3, title: "title3", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  // ])
  const [da, setda] = useState(['id'])
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </Router>

  );
}

export default App;
