import React from 'react';
import img from '../imgs/resume1.jpg';
import img1 from '../imgs/resume2.jpg';
import img2 from '../imgs/resume3.jpg';
import img3 from '../imgs/resume4.jpg';
import { Link } from 'react-router-dom';

function Choice() {
  return (
    <div className="w-full text-center px-8 py-8 bg-gray-100">
      <h1 className="font-extrabold text-center sm:px-10 lg:mx-auto text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4 lg:w-4/5" style={{fontFamily:'poppins'}}>Choose Your Template</h1>
      {/* <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center">
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2 flex-1">
          <img src={img} alt="Template 1" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 1</button>
        </div>
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2 flex-1">
          <img src={img1} alt="Template 2" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 2</button>
        </div>
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2 flex-1">
          <img src={img2} alt="Template 3" className="w-full h-auto mb-4" style={{ maxHeight: '300px' ,objectFit:'contain'}} />
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 1</button>
        </div>
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2 flex-1">
          <img src={img3} alt="Template 4" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 1</button>
        </div>
      </div> */}
      <h1 className="font-bold text-center sm:px-10 lg:mx-auto text-4xl lg:text-4xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4 lg:w-4/5" style={{fontFamily:'poppins'}}>1.Select Freshers Resume</h1>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center">
      
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2  lg:w-1/4 md:2/4">
          <img src={img} alt="Template 1" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <Link to="/resume1" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 1</Link>
        </div>
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2  lg:w-1/4 md:2/4">
          <img src={img1} alt="Template 2" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <Link to="/resume1" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 2</Link>
        </div>
        </div>
        <h1 className="font-bold text-center sm:px-10 lg:mx-auto text-4xl lg:text-4xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4 lg:w-4/5" style={{fontFamily:'poppins'}}>2.Select Experienced People Resume</h1>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center">
      
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2  lg:w-1/4 md:2/4">
          <img src={img} alt="Template 1" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <Link to="/resume1" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 1</Link>
        </div>
        
        <div className="bg-white rounded-sm shadow-md p-4 my-4 mx-2  lg:w-1/4 md:2/4">
          <img src={img1} alt="Template 2" className="w-full h-auto mb-4" style={{ maxHeight: '300px',objectFit:'contain' }} />
          <Link to="/resume1" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm">Continue With Template 2</Link>
        </div>
        </div>
    </div>
  );
}

export default Choice;
