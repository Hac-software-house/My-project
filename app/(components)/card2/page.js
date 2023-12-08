import React from 'react'

function Card21(props) {
  return (
    <div className='cardback1'>
        <div className='cardimg2'>
        <img
          src={props.src1}
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <br />
        <h1 className='cardless'>{props.heading5}</h1>
        </div>
    </div>
  )
}
export default Card21;