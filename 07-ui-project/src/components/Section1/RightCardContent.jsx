import React from 'react'

function RightCardContent({ intro, tag, index }) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-medium rounded-full h-11 w-11 flex justify-center items-center'>
        {index}
      </h2>
      <div className='mt-60'>
        <p className='text-lg text-white leading-normal'>{intro}</p>
      </div>
      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg'>
          {tag}
        </button>
        <button className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full text-lg'>
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  )
}

export default RightCardContent
