import React from 'react'

const Header = ({initColor}) => {
  return (
    <div className='card mb-5 text-white bg-dark border-secondary'>
        <div className='card-header'>
            <p className='fs-1 text-center'>Test Entel</p>
            <p className='fs-3 text-center p-2'>Color actual : <span className='fw-bold' style={{ color: initColor }}>"{ initColor }"</span></p>
        </div>
    </div>
  )
}

export default Header