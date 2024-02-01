import React from 'react'
import './category.css'
const category = ({text,onClik}) => {
  return (
    <button onClick={onClik} className='category'>{text}</button>
  )
}

export default category