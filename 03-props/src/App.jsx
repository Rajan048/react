import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Amit' dis="Hello, I am an Intern at Zodix." img="https://images.unsplash.com/photo-1733758839991-a750b4ae0e7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user='Rajan' dis="Hello, I am Rajan for Muxaffarnagar." img="https://images.unsplash.com/photo-1759505041005-6c75a1399f4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" />
      <Card user="Aditya" dis="Hello, I am aditya from Varansi." img="https://plus.unsplash.com/premium_photo-1745529078769-14f550bb6858?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" />
    </div>
  )
}

export default App
