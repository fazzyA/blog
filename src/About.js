import React, { useContext } from 'react'
import Header from './Header'
import { MyContext } from './MyContext'

const About = () => {
  const mydata = useContext(MyContext)
  console.log(mydata)
  return (
    <div>
        <Header />
      About page
    </div>
  )
}

export default About
