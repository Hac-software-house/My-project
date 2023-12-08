import React from 'react'
import Navbar from '../(components)/navbar/page'
import Button from '../(components)/button/page'

export default function about() {
  return (
    <div>
      <Navbar/>
      <div className='about1'>
       <img
          src="./../imtanan 6.jpg"
          width={290}
          height={420}
          alt="Picture of the author"
         />
        
      
      
         <h1 className='aboutlogo'>AutoCad Developer & <br /> 2D 3D Developer</h1><br />
         <p className='aboutpera'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt hic o
         fficiis tenetur dolorum corporis possimus, o
         mnis perspiciatis ea, amet ipsam a tempora architecto beatae vel dolor numquam ipsa doloribus dolores.</p>
         <br />
         <p className='aboutpera2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt hic o
         fficiis tenetur dolorum corporis possimus</p>
         <br />
         <div className='aboutbtn'>
         <a href="/skill"> <Button title="Read More ..."/></a>
         </div>
         
      </div>
    </div>
  )
}
 