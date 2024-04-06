import React, { useState } from 'react';

const initialState={
    personalInformation: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dob: '',
    },
    professionalSummary: '',
    education: {
      degree: '',
      institution: '',
      datesAttended: '',
      fieldOfStudy: '',
      gpa: '',
    },
    workExperience: {
      jobTitle: '',
      companyName: '',
      yearsOfExperience: '',
    },
    skills: {
      technicalSkills: '',
      softSkills: '',
    },
    certifications: {
      certificationName: '',
      issuingOrganization: '',
      dateObtained: '',
    },
    languages: {
      languageSpoken: '',
      proficiencyLevel: '',
    },
    additionalInformation: {
      hobbies: '',
      achievementsAwards: '',
    },
  }
function Form() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event, category, fieldName) => {
    const value = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [fieldName]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialState)
  };

  return (
    <>
      <div className='formdata'>
        <h1 className='form-title-main'>Resume Builder</h1>
        <form onSubmit={handleSubmit}>
          <hr />
          <h1 className='form-title'>Personal Information:</h1>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" placeholder='First Name' value={formData.personalInformation.firstName} onChange={(e) => handleChange(e, 'personalInformation', 'firstName')} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" placeholder='Last Name' value={formData.personalInformation.lastName} onChange={(e) => handleChange(e, 'personalInformation', 'lastName')} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" placeholder='Contact Number..' value={formData.personalInformation.phoneNumber} onChange={(e) => handleChange(e, 'personalInformation', 'phoneNumber')} />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" value={formData.personalInformation.dob} onChange={(e) => handleChange(e, 'personalInformation', 'dob')} />
          </div>
          {/* Professional Summary */}
          <hr />
          <h2 className='form-title'>Professional Summary or Objective:</h2>
          <div>
            <label htmlFor="professionalSummary">Professional Objective</label>
            <input type="text" value={formData.professionalSummary} onChange={(e) => setFormData({ ...formData, professionalSummary: e.target.value })} placeholder='A brief overview of your career goals and professional background.' />
          </div>
          {/* Education */}
          <hr />
          <h2 className='form-title'>Education:</h2>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input type="text" value={formData.education.degree} onChange={(e) => handleChange(e, 'education', 'degree')} placeholder='Name of Degree' />
          </div>
          <div>
            <label htmlFor="institution">Institution:</label>
            <input type="text" value={formData.education.institution} onChange={(e) => handleChange(e, 'education', 'institution')} placeholder='Name of Institute' />
          </div>
          <div>
            <label htmlFor="datesAttended">Dates Attended:</label>
            <input type="text" value={formData.education.datesAttended} onChange={(e) => handleChange(e, 'education', 'datesAttended')} placeholder='Dates Attended' />
          </div>
          <div>
            <label htmlFor="fieldOfStudy">Field of Study:</label>
            <input type="text" value={formData.education.fieldOfStudy} onChange={(e) => handleChange(e, 'education', 'fieldOfStudy')} placeholder='Field of Study' />
          </div>
          <div>
            <label htmlFor="gpa">GPA:</label>
            <input type="text" value={formData.education.gpa} onChange={(e) => handleChange(e, 'education', 'gpa')} placeholder='GPA' />
          </div>
          {/* Work Experience */}
          <hr />
          <h2 className='form-title'>Work Experience:</h2>
          <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" value={formData.workExperience.jobTitle} onChange={(e) => handleChange(e, 'workExperience', 'jobTitle')} placeholder='Job Title' />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" value={formData.workExperience.companyName} onChange={(e) => handleChange(e, 'workExperience', 'companyName')} placeholder='Company Name' />
          </div>
          <div>
            <label htmlFor="yearsOfExperience">Years of Experience:</label>
            <input type="text" value={formData.workExperience.yearsOfExperience} onChange={(e) => handleChange(e, 'workExperience', 'yearsOfExperience')} placeholder='Years Of Experience' />
          </div>
          {/* Skills */}
          <hr />
          <h2 className='form-title'>Skills</h2>
          <div>
            <label htmlFor="technicalSkills">Technical Skills:</label>
            <input type="text" value={formData.skills.technicalSkills} onChange={(e) => handleChange(e, 'skills', 'technicalSkills')} placeholder='Technical Skills (e.g., Programming Languages)' />
          </div>
          <div>
            <label htmlFor="softSkills">Soft Skills:</label>
            <input type="text" value={formData.skills.softSkills} onChange={(e) => handleChange(e, 'skills', 'softSkills')} placeholder='Soft Skills (e.g., Communication, Leadership)' />
          </div>
          {/* Certifications */}
          <hr />
          <h2 className='form-title'>Certifications</h2>
          <div>
            <label htmlFor="certificationName">Certification Name:</label>
            <input type="text" value={formData.certifications.certificationName} onChange={(e) => handleChange(e, 'certifications', 'certificationName')} placeholder='Certification Name' />
          </div>
          <div>
            <label htmlFor="issuingOrganization">Issuing Organization:</label>
            <input type="text" value={formData.certifications.issuingOrganization} onChange={(e) => handleChange(e, 'certifications', 'issuingOrganization')} placeholder='Issuing Organization' />
          </div>
          <div>
            <label htmlFor="dateObtained">Date Obtained:</label>
            <input type="text" value={formData.certifications.dateObtained} onChange={(e) => handleChange(e, 'certifications', 'dateObtained')} placeholder='Date Obtained' />
          </div>
          {/* Languages */}
          <hr />
          <h2 className='form-title'>Languages</h2>
          <div>
            <label htmlFor="languageSpoken">Language Spoken:</label>
            <input type="text" value={formData.languages.languageSpoken} onChange={(e) => handleChange(e, 'languages', 'languageSpoken')} placeholder='Language Spoken' />
          </div>
          <div>
            <label htmlFor="proficiencyLevel">Proficiency Level:</label>
            <input type="text" value={formData.languages.proficiencyLevel} onChange={(e) => handleChange(e, 'languages', 'proficiencyLevel')} placeholder='Proficiency Level (e.g., Fluent, Intermediate)' />
          </div>
          {/* Additional Information */}
          <hr />
          <h2 className='form-title'>Additional Information:</h2>
          <div>
            <label htmlFor="hobbies">Hobbies:</label>
            <input type="text" value={formData.additionalInformation.hobbies} onChange={(e) => handleChange(e, 'additionalInformation', 'hobbies')} placeholder='Hobbies' />
          </div>
          <div>
            <label htmlFor="achievementsAwards">Achievements/Awards:</label>
            <input type="text" value={formData.additionalInformation.achievementsAwards} onChange={(e) => handleChange(e, 'additionalInformation', 'achievementsAwards')} placeholder='Achievements/Awards' />
          </div>
          <div>
            <button type="submit">✨Generate Resume</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
