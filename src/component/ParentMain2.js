import React, { useEffect, useState } from "react";
import Form2 from "./Form2";
import Resume2 from "./Resume2";
import html2pdf from 'html2pdf.js';

const initialState = {
    resumeImages: [],
  personalInformation: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dob: '',
  },
  professionalSummary: {
    desc: ''
  },
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
};

function ParentMain2() {
  const [formData, setFormData] = useState(initialState);
  const [generatedResume, setGeneratedResume] = useState(null);

  useEffect(() => {
    setFormData(initialState);
  }, []);

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
  const handleImageChange = (event) => {
    const files = event.target.files;
    setFormData(prevState => ({
      ...prevState,
      resumeImages: files,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGeneratedResume(formData);
  };

  const handleDownload = () => {
    if (generatedResume) {
      const resumeHtml = document.getElementById('resumeContent');
      html2pdf().from(resumeHtml).save();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col w-full " >
    <Form2 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handleImageChange={handleImageChange} className="w-full sm:w-full md:w-full lg:w-1/2" />
    <Resume2 formData={generatedResume} handleDownload={handleDownload} className="w-full sm:w-full md:w-full lg:w-1/2" />
  </div>
  );
}

export default ParentMain2;

