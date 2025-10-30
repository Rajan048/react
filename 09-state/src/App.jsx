import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  function increase(){
    console.log("Increment");
    setCount(count+1);
  }

  function decrease(){
    console.log("Decrement");
    setCount(count-1);
  }

  function jumbBy5() {
    console.log("Jump by 5");
    setCount(count + 5);
  }

  return (
    <div className='parent'>
      <h1 className='count'>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jumbBy5}>Jump by 5</button>
    </div>
  )
}

export default App
