import React from 'react'

import './button.css'
const button = ({onClick,link}) => {
  return (
    <div className='btns'>
        
        <button onCanPlay={onClick} className='regroup_btn'></button> 
        <button onClick={link} className='link_btn'></button>
    </div>
  )
}

export default button