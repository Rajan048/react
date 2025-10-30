import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before update:", count);

    // Correct: use functional updates to get latest state
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);

    console.log("After update:", count);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1>Count: {count}</h1>
      <button 
        onClick={handleClick}
        style={{ padding: '10px 20px', fontSize: '18px' }}
      >
        Increase by 3
      </button>
    </div>
  )
}

export default App;
