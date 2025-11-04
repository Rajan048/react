import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar2 from '../components/Navbar2';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>

      <Navbar2 />

      <h1>About</h1>
    </div>
  )
}

export default About
