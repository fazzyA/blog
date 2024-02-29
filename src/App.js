import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import axios from 'axios';

function App() {
  // const [blogs, setBlogs] = useState([
  //   {id: 1, title: "title1", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  //   {id: 2, title: "title2", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  //   {id: 3, title: "title3", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  // ])
  const [blogs, setBlogs] = useState([])
  useEffect(() =>{
    //http request get
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((data) =>{
      console.log(data.data)
      setBlogs(data.data)
    })
  }, [])
  return (
    <Container>
      <Row><Col><Header /></Col></Row>
      <Row><Col><BlogList blogs={blogs}  />dfdf</Col></Row>
      {/* <button onClick={() => setnum(20)}>HII</button>
      <button onClick={() => setnum1(20)}>vee</button> */}
    </Container>
  );
}

export default App;
