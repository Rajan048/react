import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);


    setTitle("");
    setDetails("");

  }

  const deleteHandler = (index) => {
    const copyTask = [...task];

    copyTask.splice(index, 1);
    setTask(copyTask);
  };




  return (
    <div className='h-screen lg:flex  bg-black text-white '>


      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 items-start flex-col p-10  gap-4'>

        <h1 className='text-3xl font-bold'>Your Notes</h1>

        <input

          type="text"
          placeholder='Enter Notes Heading '
          className='px-5 w-full py-2 border-2 rounded outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />

        <textarea
          className='px-5 w-full h-32 py-2 border-2 rounded outline-none font-medium'
          type='text'
          placeholder='Enter Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className='bg-white text-black active:scale-95 w-full px-5 py-2 rounded outline-none font-medium'>Add Note</button>
      </form>


      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <div className='flex gap-4'>
          <h1 className='text-4xl font-bold'>Your Notes</h1>
          <img className='h-12' src="https://www.pngmart.com/files/7/Note-PNG-Clipart.png" alt="" />
        </div>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>

          {task.map((elem, idx) => (
            <div
              key={idx}
              className='relative w-48 rounded-2xl text-black p-4 bg-white overflow-auto '
            >
              <button
                onClick={() => deleteHandler(idx)}
                className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-all cursor-pointer'
              >
                <X size={16} />
              </button>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium'>{elem.details}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App