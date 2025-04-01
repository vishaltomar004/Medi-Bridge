import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* {======Left Section ------------} */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore eos non animi placeat qui velit esse, reprehenderit voluptate suscipit rerum saepe tempora veniam asperiores.</p>
                </div>

                {/* {======Centre Section ------------} */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600' >
                        <li>HOME</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* {======right Section ------------} */}
                <div>
                    <p className='text-xl font-medium mb-5'> Get In Touch</p>
                    <ul  className='flex flex-col gap-2 text-gray-600' >
                        <li>+1 21 212 1212</li>
                        <li>vishaltomar004@gmail.com</li>
                    </ul>

                </div>
            </div>

            {/* {Copyright } */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'> Copyright 2024@ MediBridge - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer