import React from "react";
import img from "../imgs/Design1.jpg";
import img1 from "../imgs/Design2.jpg";
import img2 from "../imgs/Layout4.jpg";
import { Link } from "react-router-dom";

function Choice() {
  return (
    <div className="w-full text-center px-8 py-8 bg-gray-100">
      <h1
        className="font-extrabold text-center sm:px-10 lg:mx-auto text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4 lg:w-4/5"
        style={{ fontFamily: "poppins" }}
      >
        Choose Your Template
      </h1>

      <div className="flex justify-center items-center flex-col lg:flex-row md:flex-col sm:flex-col w-full">
        <div className="box bg-gray-200 rounded-sm shadow-lg p-4 my-4 mx-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/2 hover:shadow-indigo-500/40">
          <img
            src={img}
            alt="Template 1"
            className="w-full h-auto mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <Link
            to="/resume1"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
          >
            Template 1 <i class="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="box bg-gray-200 rounded-sm shadow-md p-4 my-4 mx-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/2 hover:shadow-indigo-500/40">
          <img
            src={img1}
            alt="Template 2"
            className="w-full h-auto mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <Link
            to="/resume2"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
          >
           Template 2 <i class="ri-arrow-right-line"></i>
          </Link>
        </div>

       
        <div className="box bg-gray-200 rounded-sm shadow-lg p-4 my-4 mx-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/2 hover:shadow-indigo-500/40">
          <img
            src={img2}
            alt="Template 1"
            className="w-full h-auto mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <Link
            to="/resume3"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
          >
            Template 3 <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
         <div className="box bg-gray-200  rounded-sm shadow-md p-4 my-4 mx-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/2 hover:shadow-indigo-500/40">
          <img
            src={img}
            alt="Template 1"
            className="w-full h-auto mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <Link
            to="/resume4"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
          >
           Template 4 <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        {/*<div className="box bg-gray-200  rounded-sm shadow-md p-4 my-4 mx-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/2 hover:shadow-indigo-500/40">
          <img
            src={img}
            alt="Template 1"
            className="w-full h-auto mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <Link
            to="/resume1"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
          >
            Template 4 <i class="ri-arrow-right-line"></i>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Choice;
