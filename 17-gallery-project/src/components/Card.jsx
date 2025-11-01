import React from 'react'

const Card = ({ elem }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <a
        href={elem.url}
        target='_blank'
        rel='noopener noreferrer'
        className='group'
      >
        <div className='h-44 w-48 rounded-2xl overflow-hidden bg-zinc-900 shadow-md shadow-zinc-800/40 hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105'>
          <img
            className='h-full w-full object-cover group-hover:opacity-90 transition-opacity duration-300'
            src={elem.download_url}
            alt={elem.author}
          />
        </div>

        <h2 className='font-semibold text-base mt-2 text-gray-200 group-hover:text-amber-400 transition-colors duration-300'>
          {elem.author}
        </h2>
      </a>
    </div>
  )
}

export default Card
