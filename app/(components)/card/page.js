import React from 'react'
import Button from '../button/page'

 function Card(props) {
  return (
    <div className='cardback'>
        <div className='cardimg'>
        <img
          src={props.src}
          width={90}
          height={90}
          alt="Picture of the author"
        />
        </div>
        <h1 className='cardheadinges'>{props.heading}</h1><br />
        <p className='cardpera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
        . A quae accusantium reiciendiss laboriosam, quo nisi asperna
        tur accusamus impedit voluptatem? Debitis, corrupti?</p>
        <br />
        <div className='btnbook'>
        <Button title="Book Now"/>
        </div>

      
    </div>
  )
}
export default Card
