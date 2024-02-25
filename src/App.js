import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import { useState } from 'react';
import BlogList from './BlogList';

function App() {
  const [blogs, setBlogs] = useState([
    {id: 1, title: "title1", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
    {id: 2, title: "title2", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
    {id: 3, title: "title3", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime explicabo exercitationem distinctio iure sunt quam nihil rerum sint delectus esse, perferendis doloremque fugiat quisquam, vel eaque odit? Pariatur, ullam?", author: "Mark"},
  ])
  return (
    <Container>
      <Row><Col><Header /></Col></Row>
      <Row><Col><BlogList blogs={blogs}  /></Col></Row>
    </Container>
  );
}

export default App;
