import React from 'react'
import Navbar from '../(components)/navbar/page'
import Card from '../(components)/card/page'
import Button from '../(components)/button/page'

export default function Services() {
  return (
    <div>
      <Navbar/>
      <div className='server'>
        <Card heading="Services1" src="3.png"/>
        <div className='card21'>
        <Card heading="Services2" src="3.png"/>
        </div>
        <div className='card22'>
        <Card heading="Services3" src="3.png"/>
        </div>
        <div className='card23'>
        <Card heading="Services4" src="3.png"/>
        </div>
        <div className='card24'>
        <Card heading="Services5" src="3.png"/>
        </div>
        <div className='card25'>
        <Card heading="Services6" src="3.png"/>
        </div>
        
        
      </div>
     
    </div>
  )
}
