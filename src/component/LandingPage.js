import React from "react";
import img from "../imgs/demoresumeimages.png";
import img2 from '../imgs/resumebg.png';
import img3 from '../imgs/userRating.png';
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div className="w-full bg-gray-100 lg:px-20 py-12 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center">
        <div className="leftsidecontent text-center  lg:ps-10 lg:w-1/2 md:w-full sm:w-full px-2 lg:text-left">
          <h1
            className="font-extrabold text-center text-4xl lg:text-6xl lg:text-left sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4"
            style={{ fontFamily: "poppins" }}
          >
            The CV that gets the job (done)
          </h1>
          <p
            className="text-center lg:ps-10 py-5 md:py-10 leading-8 font-medium pe-5 lg:text-left text-gray-400"
            style={{ fontFamily: "poppins" }}
          >
            Build a new CV in minutes or improve your existing one.
          </p>
          <Link
            to="resumemaker"
            className="bg-gray-900 py-4  px-10 lg:ms-10 text-white rounded-full font-bold"
            style={{ fontFamily: "poppins" }}
          >
            Create Your CV <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="lg:w-1/2 md:w-2/2 sm:w-full flex justify-center items-center lg:text-center lg:justify-center mb-5 lg:mb-0">
          <img 
            src={img}
            className="h-64 sm:h-96 md:h-96 lg:h-auto llg:mt-10 sm:mt-10 mt-12 md:mt-1 lg:mt-1"
            alt="taxiimages"
          />
        </div>
      </div>

      <div className="w-full bg-gray-100 py-10 text-center">
        <h1
          className="font-extrabold text-center text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4"
          style={{ fontFamily: "poppins" }}
        >
          Templates to win recruiters over
        </h1>
        <h6
          className="font-medium text-center py-3 text-medium px-4 "
          style={{ fontFamily: "poppins" }}
        >
          Wide selection of designs. Carefully optimized for clarity and impact.
          One click layouts - no formatting required.
        </h6>

        <div className="parenyimg bg-gray-300 py-4 flex flex-wrap justify-center items-center w-full space-x-3">
    <img
        src="https://assets.livecareer.co.uk/lpnext/_next/image?url=https://assets.livecareer.co.uk/blobcontent/lcintl-lp/luk/lukindlp01/images/template-cv8.svg&w=1920&h=undefined&q=70"
        alt=""
        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 my-2"
    />
    <img
        src="https://cdn-images.zety.com/images/zety/landings/templates/cascade@3x.png"
        alt=""
        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 my-2"
    />
    <img
        src="https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-minimalist-white-and-grey-professional-resume-KjN0Z-p3Mo8.jpg"
        alt=""
        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 my-2"
    />
    <img
        src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"
        alt=""
        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 my-2"
    />
</div>
  <br />
        <Link
          to="resumemaker"
          className="bg-black py-4  px-10  my-10 lg:ms-10 text-white rounded-full font-bold"
          style={{ fontFamily: "poppins" }}
        >
          Build Your CV <i class="ri-arrow-right-line"></i>
        </Link>
      </div>

      <div className="w-full bg-gray-100 py-10 text-center">
      <h1
          className="font-extrabold text-center sm:px-10 lg:mx-auto text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4 lg:w-4/5"
          style={{ fontFamily: "poppins" }}
        >
         Easiest and most feature-packed
CV builder available
        </h1>

        <div className="parentvox flex flex-col lg:flex-row md:flex-col sm:flex-col my-5 justify-center items-center">
            <div className="lg:w-1/2 md:w-2/2  sm:w-full flex justify-center lg:justify-end mb-5 lg:mb-0">
                <img src={img2} className='h-64 sm:h-96 md:h-96 lg:96' alt="taxiimages" />
            </div>
            <div className="lg:w-1/2 md:w-full sm:w-full text-center sm:text-center px-2">
        <ol type="1" className='w-5/5 lg:w-4/5 md:w-full sm:w-full text-center md:text-left lg:text-left font-sans font-medium' style={{fontFamily:'poppins'}} >
            <li className='py-3 text-gray-400'>1. Pre-written content</li>
            <li className='py-3 text-gray-400'>2. CV and cover letter in one place</li>
            <li className='py-3 text-gray-400'>3. Professionally designed templates</li>
            <li className='py-3 text-gray-400'>4. Expert tips & guidance</li>
            <li className='py-3 text-gray-400'>5. CV writing services</li>
        </ol>
    </div>
            
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:px-20 py-12 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center">
      <div className="lg:w-1/2 md:w-2/2 sm:w-full flex justify-center lg:text-center lg:justify-center mb-5 lg:mb-0">
          <img
            src={img3}
            className="h-64 sm:h-96 md:h-96 lg:h-auto llg:mt-10"
            alt="taxiimages"
          />
        </div>
        <div className="leftsidecontent text-center  lg:ps-10 lg:w-1/2 md:w-full sm:w-full px-2 lg:text-left">
          <h1
            className="font-extrabold text-center sm:px-2 text-4xl lg:text-6xl lg:text-left sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4"
            style={{ fontFamily: "poppins" }}
          >
           Trusted by recruiters and job-seekers around the world.
          </h1>
          <div className="flex justify-center lg:justify-start lg:px-10 lg:py-2 md:py-3 sm:py-4" >
            <i class="ri-star-fill text-2xl"></i>
            <i class="ri-star-fill text-2xl"></i>
            <i class="ri-star-fill text-2xl"></i>
            <i class="ri-star-fill text-2xl"></i>
            <i class="ri-star-line text-2xl"></i>
        </div>
          <p
            className="text-center lg:ps-10  md:py-10 leading-8 font-medium pe-5 lg:text-left text-gray-400"
            style={{ fontFamily: "poppins" }}
          >
            ResumeBuilder customers got the job on average 48 days faster.*
          </p>
         
        </div>
        
      </div>
    </> 
  );
}

export default LandingPage;
