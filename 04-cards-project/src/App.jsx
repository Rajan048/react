import React from 'react'
import Card from './components/Card';
import jobData from './components/User';
import "./index.css";
// import "./App.css";
const App = () => {
  return (
    <div className='parent'>

      {jobData.map((elem, index) => (
        <Card
          key={index}
          img={elem.img}
          company={elem.company}
          day={elem.day}
          title={elem.title}
          spec1={elem.spec1}
          spec2={elem.spec2}
          salary={elem.salary}
          location={elem.location}
        />
      ))}

    </div>
  )
}

export default App
