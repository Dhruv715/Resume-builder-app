import React from 'react';

function Form4({ formData, handleChange, handleSubmit ,handleImageChange}) {
  return (
    <>
      <div className='formdata w-full sm:w-full lg:h-screen lg:overflow-auto md:w-full lg:w-1/2 bg-gray-800' >
        <h1 className='text-4xl my-2 py-10 text-white px-4 underline'   style={{fontFamily:'poppins'}}>Resume Details Form</h1>
        <h2 className='text-white px-4 py-2 underline' style={{fontFamily:'poppins',color:'red'}}> * Indicates Required Fields </h2>
        <form onSubmit={handleSubmit}>
          
          <h2 className='text-white px-4 py-2 underline ' style={{fontFamily:'poppins'}}>*Personal Information:</h2>
          <div className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="firstName" className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>First Name:</label>
            <input type="file" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2'  onChange={(e) => handleImageChange(e)} />
          </div>
          <div className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="firstName" className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>First Name:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' placeholder='First Name' value={formData.personalInformation.firstName} onChange={(e) => handleChange(e, 'personalInformation', 'firstName')} />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="lastName"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Last Name:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2'  placeholder='Last Name' value={formData.personalInformation.lastName} onChange={(e) => handleChange(e, 'personalInformation', 'lastName')} />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="phoneNumber"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Phone Number:</label>
            <input type="tel" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' placeholder='Contact Number..' value={formData.personalInformation.phoneNumber} onChange={(e) => handleChange(e, 'personalInformation', 'phoneNumber')} />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="dob"   className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Date of Birth:</label>
            <input type="date" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.personalInformation.dob} onChange={(e) => handleChange(e, 'personalInformation', 'dob')} />
          </div>
          {/* Professional Summary */}
          
          <h2 className='text-white px-4 py-10 underline ' style={{fontFamily:'poppins'}}>*Professional Summary or Objective:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="professionalSummary"   className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Professional Objective</label>
          <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:5/5 lg:w-full p-2 me-2' value={formData.professionalSummary.desc} onChange={(e) => handleChange(e, 'professionalSummary','desc')} placeholder='A brief overview of your career goals and professional background.' />

          </div>
          {/* Education */}
          
          <h2 className='text-white px-4 py-10 underline ' style={{fontFamily:'poppins'}}>*Education:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="degree"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Degree:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.education.degree} onChange={(e) => handleChange(e, 'education', 'degree')} placeholder='Name of Degree' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="institution"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Institution:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.education.institution} onChange={(e) => handleChange(e, 'education', 'institution')} placeholder='Name of Institute' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="datesAttended"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Dates Attended:</label>
            <input type="date" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.education.datesAttended} onChange={(e) => handleChange(e, 'education', 'datesAttended')} placeholder='Dates Attended' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="fieldOfStudy"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Field of Study:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.education.fieldOfStudy} onChange={(e) => handleChange(e, 'education', 'fieldOfStudy')} placeholder='Field of Study' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="gpa"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>GPA:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.education.gpa} onChange={(e) => handleChange(e, 'education', 'gpa')} placeholder='GPA' />
          </div>
          {/* Work Experience */}
          
          <h2 className='text-white px-4 py-10 underline ' style={{fontFamily:'poppins'}}>Work Experience: (Optional - for freshers)</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="jobTitle"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Job Title:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.workExperience.jobTitle} onChange={(e) => handleChange(e, 'workExperience', 'jobTitle')} placeholder='Job Title' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="companyName"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Company Name:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.workExperience.companyName} onChange={(e) => handleChange(e, 'workExperience', 'companyName')} placeholder='Company Name' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="yearsOfExperience"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Years of Experience:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.workExperience.yearsOfExperience} onChange={(e) => handleChange(e, 'workExperience', 'yearsOfExperience')} placeholder='Years Of Experience' />
          </div>
          {/* Skills */}
          
          <h2 className='text-white px-4 py-10 underline ' style={{fontFamily:'poppins'}}>*Skills:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="technicalSkills"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Technical Skills:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.skills.technicalSkills} onChange={(e) => handleChange(e, 'skills', 'technicalSkills')} placeholder='Technical Skills (e.g., Programming Languages)' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="softSkills"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Soft Skills:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.skills.softSkills} onChange={(e) => handleChange(e, 'skills', 'softSkills')} placeholder='Soft Skills (e.g., Communication, Leadership)' />
          </div>
          {/* Certifications */}
          
          <h2 className='text-white px-4 py-10 underline' style={{fontFamily:'poppins'}}>*Certifications:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="certificationName"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Certification Name:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.certifications.certificationName} onChange={(e) => handleChange(e, 'certifications', 'certificationName')} placeholder='Certification Name' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="issuingOrganization"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Issuing Organization:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.certifications.issuingOrganization} onChange={(e) => handleChange(e, 'certifications', 'issuingOrganization')} placeholder='Issuing Organization' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="dateObtained"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Date Obtained:</label>
            <input type="date" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.certifications.dateObtained} onChange={(e) => handleChange(e, 'certifications', 'dateObtained')} placeholder='Date Obtained' />
          </div>
          {/* Languages */}
          
          <h2 className='text-white px-4 py-10 underline' style={{fontFamily:'poppins'}}>*Languages:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="languageSpoken"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Language Spoken:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.languages.languageSpoken} onChange={(e) => handleChange(e, 'languages', 'languageSpoken')} placeholder='Language Spoken' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="proficiencyLevel"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Proficiency Level:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.languages.proficiencyLevel} onChange={(e) => handleChange(e, 'languages', 'proficiencyLevel')} placeholder='Proficiency Level (e.g., Fluent, Intermediate)' />
          </div>
          {/* Additional Information */}
          
          <h2 className='text-white px-4 py-10 underline ' style={{fontFamily:'poppins'}}>*Additional Information:</h2>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="hobbies"  className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Hobbies:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2' value={formData.additionalInformation.hobbies} onChange={(e) => handleChange(e, 'additionalInformation', 'hobbies')} placeholder='Hobbies' />
          </div>
          <div  className='py-3 flex flex-col w-full  lg:flex-row justify-items-center items-center'>
            <label htmlFor="achievementsAwards" className='text-white px-4 py-2 me-2 w-full sm:w-full md:w-full lg:w-1/4'>Awards:</label>
            <input type="text" className='w-11/12 mx-auto rounded-sm sm:w-11/12 md:w-11/12 lg:w-full p-2 me-2'  value={formData.additionalInformation.achievementsAwards} onChange={(e) => handleChange(e, 'additionalInformation', 'achievementsAwards')} placeholder='Achievements/Awards' />
          </div>
          <div className='text-center'>
            <button type="submit" className='py-2 px-4 bg-orange-500 my-4 rounded-full  mx-auto'>✨Generate Resume</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form4;
