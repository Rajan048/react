import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({users}) => {
  return (
    <div className='py-10 gap-10 flex items-center justify-between h-[90vh]  px-18'>
        <LeftContent />
        <RightContent users={users} />
    </div>
  )
}

export default Page1Content
