import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { MyContext } from './MyContext'
import { ThemeContext } from './ThemeContext'

const BlogDetail = () => {
  const { id } = useParams() 
  const [blog, setBlog] = useState({})
  const first = useContext(MyContext)
  console.log(first)


  useEffect(()=>{
    try {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((data) => {
      console.log(data.data)
      setBlog(data.data)
    })
    } catch (error) {
      console.log(error)
    }


  }, [])
  return (
    <div>
      <Header />
      <Card>
            <Card.Header className="text-capitalize">{blog.title && blog.title}</Card.Header>
            <Card.Body>
              <Card.Title>Blog - {blog.id}</Card.Title>
              <Card.Text>{blog.body}</Card.Text>
            </Card.Body>
          </Card>

    </div>
  )
}

export default BlogDetail
