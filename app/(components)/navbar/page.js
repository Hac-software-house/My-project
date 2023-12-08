import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/page'


function Navbar() {
    return (
        <div className='navbar'>
            <Image
                src="/155.png"
                width={50}
                height={60}
                alt="Picture of the author"
                className='ilogo'
            />
            <h2 className='logo2'>mtanan</h2>
            <ul>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About Me</p>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <p>Services</p>
                    </Link>
                </li>
                <li>
                    <Link href="/skill">
                        <p>Skill</p>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <p>Portfolio</p>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                </li>
                
            </ul>
         <div className='btn88'>
         <a href="/contact">
            <Button title="Hire me"/>
            </a>
         </div>
         
            
           

        </div>
    )
}

export default Navbar