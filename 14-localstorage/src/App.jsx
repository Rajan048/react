import React from "react";

const App = () => {

  // localStorage.clear()
  // localStorage.setItem()
  // localStorage.getItem()
  // localStorage.removeItem()

  const user = {
    username: "Rajan",
    age: 18,
    city: "UttarPradesh",
  }

  localStorage.setItem('user', JSON.stringify(user));

  const userA = JSON.parse(localStorage.getItem('user'));

  console.log(userA);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
