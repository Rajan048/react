import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1 className='whitespace-nowrap'>{params.id} Course's Details</h1>
    </div>
  )
}

export default CourseDetail
