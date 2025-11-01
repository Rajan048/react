import axios from 'axios';
import { useState } from 'react';
const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const data = await response.json()

  //   console.log(data);
  // }

  // const getData = async() =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response.data);
    
  // }

  const [data, setData] = useState([]);

  const getData = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list");
    
    setData(response.data);
    
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){

          return <h3 key={idx}>Hello {elem.author} {idx}</h3>

        })}
      </div>
    </div>
  )
}

export default App
