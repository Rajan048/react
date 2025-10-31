import React from 'react'

const App = () => {

  const formHandling = (e) => {
    e.preventDefault();
    console.log("Form Submit.");

  }
  return (
    <div>
      <form onSubmit={(e) => {
        formHandling(e);
      }} >
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
