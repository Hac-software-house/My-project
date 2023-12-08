import React from 'react'
import Button from '../button/page'

function Home1() {
  return (
    <div class='home2'>
      <h3 class='ok2'>
        <span className='col2'><h2>Hi, It's me</h2></span>
        <span className='col1'><h1>IMTANAN JAVED</h1></span>
        <span><h2 className='col1'>And I'm a <span class='col2'>Autocad Developer</span></h2></span>
      </h3> <br />

      <p className='pera'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur nostrum placeat aut blanditiis </p>
      <div className='contactbtn'>
        <a href="/contact">
          <button>Contact us</button>
        </a>

        <div className='pro'>
          <img
            src="./../3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>



    </div>

  )
}
export default Home1