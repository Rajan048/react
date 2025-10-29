import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard({ user, index }) {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={user.img} alt="" />
      <RightCardContent
        intro={user.intro}
        tag={user.tag}
        index={index}
      />
    </div>
  )
}

export default RightCard
