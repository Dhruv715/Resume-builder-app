import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around items-center py-9 bg-gray-900 text-white overflow-hidden'>
            <div className='text-4xl flex flex-row justify-around items-center cursor-pointer' style={{ fontFamily: "Whisper"}}>
            <i class="ri-article-line"></i> 
                  Resume Builder
            </div>
            <ul className=' space-x-2 flex w-full  lg:w-4/12 flex-row sm:flex-row sm:font-medium  font-medium pt-5 pb-1 sm:py-4 md:flex-row lg:flex-row font-sans text-medium  justify-center md:py-2 ' style={{ fontFamily: 'poppins' }}>
                <li className='md:px-2 sm:px-2 cursor-pointer text-gray-300 px-2 '>
                    <Link to="/" className="menu-item">Home</Link>
                </li>
                <li className='md:px-2 sm:px-2 cursor-pointer text-gray-300 px-2 '>
                    <Link to="about" className="menu-item">About</Link>
                </li>
                <li className='md:px-2 sm:px-2 cursor-pointer text-gray-300 px-2 '>
                    <Link to="resumemaker" className="menu-item">Generate Resume <i class="ri-arrow-right-line"></i></Link>
                </li>
               
            </ul>
           
        </div>
    );
}

export default Navbar;
