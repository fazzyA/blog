import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const BlogList = ({blogs}) => {
  return (
    <div>
      {blogs && blogs.map((item) => (
            <Card>
            <Card.Header className="text-capitalize">{item.title}</Card.Header>
            <Card.Body>
              <Card.Title>Blog - {item.id}</Card.Title>
              <Card.Text>{item.body.slice(0, 100)}...</Card.Text>
              <Button variant="primary">
                <Link to={`blogs/${item.id}`} className="text-light text-decoration-none ">Read More...</Link>
                </Button>
            </Card.Body>
          </Card>
        // <div>
        //     <h1>{item.title}</h1>
        //     <p>{item.detail}</p>
        //     <div>{item.author}</div>
        // </div>
      ))}
    </div>
  )
}

export default BlogList
