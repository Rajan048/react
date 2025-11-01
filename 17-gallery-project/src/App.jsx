import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className='text-gray-400 text-sm font-semibold text-center mt-20 animate-pulse'>
      Loading beautiful photos...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => (
      <div key={idx}>
        <Card elem={elem} />
      </div>
    ));
  }

  return (
    <div className='bg-gradient from-zinc-900 via-black to-zinc-800 min-h-screen text-white flex flex-col justify-between p-6'>
      
      <h1 className='text-center text-3xl font-extrabold tracking-wide mb-6 text-amber-400 drop-shadow-md'>
        Photo Gallery
      </h1>

      <div className='flex flex-wrap justify-center gap-6 overflow-y-auto h-[75vh] px-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center mt-6 gap-6'>
        <button
          disabled={index === 1}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            index === 1
              ? 'bg-zinc-600 cursor-not-allowed text-gray-300'
              : 'bg-amber-400 text-black hover:bg-amber-300 active:scale-95 shadow-md'
          }`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <h4 className='text-lg font-semibold tracking-wide text-gray-200'>
          Page <span className='text-amber-400'>{index}</span>
        </h4>

        <button
          className='px-5 py-2 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 active:scale-95 shadow-md transition-all duration-200'
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
