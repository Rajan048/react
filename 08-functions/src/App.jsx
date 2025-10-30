import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);

  const handleClick = () => {
    const name = inputRef.current.value;
    console.log(`Hello, ${name || 'Guest'}!`);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome!</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        ref={inputRef}
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button 
        onClick={handleClick}
        style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
      >
        Greet Me
      </button>
    </div>
  )
}

export default App
