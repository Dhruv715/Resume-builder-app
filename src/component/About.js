import React from 'react';
import img from '../imgs/resumebg.png';
import { Link } from "react-router-dom";
function About() {
  return (
    <>
     
     

      <div className="w-full bg-gray-100 lg:px-20 py-12 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center">
        <div className="leftsidecontent text-center  lg:ps-10 lg:w-1/2 md:w-full sm:w-full px-2 lg:text-left">
          <h1
            className="font-extrabold text-center text-4xl lg:text-6xl lg:text-left sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4"
            style={{ fontFamily: "poppins" }}
          >
            About Us
          </h1>
          <p
            className="text-center lg:ps-10 py-5 md:py-10 leading-8 font-medium pe-5 lg:text-left text-gray-400"
            style={{ fontFamily: "poppins" }}
          >
            Our mission at ResumeBuilder is to empower job-seekers worldwide by providing them with tools and resources to create professional resumes that stand out. We believe that everyone deserves a chance to showcase their skills and experiences effectively, and we're committed to helping individuals achieve their career goals.
          </p>
          {/* <Link to="/"
            className="bg-gray-900 py-4  px-10 lg:ms-10 text-white rounded-full font-bold"
            style={{ fontFamily: "poppins" }}
          >
            Read More <i class="ri-arrow-right-line"></i>
          </Link> */}
        </div>
        <div className="lg:w-1/2 md:w-2/2 sm:w-full flex justify-center lg:text-center lg:justify-center mb-5 lg:mb-0">
          <img
            src={img}
            className="h-64 sm:h-96 md:h-96 lg:h-auto lg:mt-10 mt-12"
            alt="taxiimages"
          />
        </div>
      </div>

      <div className="w-full bg-gray-100 lg:px-20 py-20 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-extrabold text-center text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4" style={{fontFamily:'poppins'}}>Why Choose Us?</h2>
          <p className="text-center lg:ps-10  md:py-4 leading-8 font-medium  lg:text-center text-gray-400">
            At ResumeBuilder, we strive for excellence in everything we do. Here are a few reasons why thousands of job-seekers trust us:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 lg:mx-auto lg:w-1/3 lg:text-left  px-5">
            <li className='text-gray-600 font-bold text-sm py-2 ' style={{fontFamily:'poppins'}}>Easy-to-use platform for creating professional resumes</li>
            <li className='text-gray-600 font-bold text-sm py-2 ' style={{fontFamily:'poppins'}}>Expertly designed templates to choose from</li>
            <li className='text-gray-600 font-bold text-sm py-2 ' style={{fontFamily:'poppins'}}>Guidance and tips to optimize your resume</li>
            <li className='text-gray-600 font-bold text-sm py-2 ' style={{fontFamily:'poppins'}}>Fast and efficient service to save you time</li>
            <li className='text-gray-600 font-bold text-sm py-2 ' style={{fontFamily:'poppins'}}>Customer support to assist you every step of the way</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
