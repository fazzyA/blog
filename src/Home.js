import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import BlogList from "./BlogList"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
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
      <Row><Col><BlogList blogs={blogs}  /></Col></Row>
    </Container>

  )
}

export default Home