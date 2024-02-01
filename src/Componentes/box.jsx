import React from 'react'
import Category from './category'
import './box.css'
const box = ({quoteData}) => {
  return (
    <div className='box'>
        <div className='title'> {quoteData ? (
        <>
          
           {quoteData.author}
        </>
      ) : (
        <p>Loading...</p>
      )}</div>
        <div className='categories'>
            <Category text={'Famous Quotes'}/>
        <Category text={'Inspirational'}/>
        </div>
        <div className='quote'>{quoteData ? (
        <>
          "{quoteData.content}"
        </>
      ) : (
        <p>Loading...</p>
      )}</div>

    </div>
  )
}

export default box