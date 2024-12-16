import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const Average = () => {
  return (
    <>
      <div className="average">
        <div className="text">
        <IoMdInformationCircleOutline />

          <span>Save an average of 15% on thousands of flights when you are signed in</span>
        </div>
        <button className='btn'>Sign In</button>
      </div>
    </>


  )
}

export default Average