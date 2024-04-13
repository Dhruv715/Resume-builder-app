import React, { useEffect, useState } from "react";
import html2pdf from 'html2pdf.js';
import Resume2 from "./Resume2";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Resume3 from "./Resume3";

const initialState = {
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

function ParentMain3() {
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
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col w-full " >
      <Form3 formData={formData} handleChange={handleChange} handleImageChange={handleImageChange} handleSubmit={handleSubmit} className="w-full sm:w-full md:w-full lg:w-1/2" />
      <Resume3 formData={generatedResume} handleDownload={handleDownload} className="w-full sm:w-full md:w-full lg:w-1/2"/>
    </div>
  );
}

export default ParentMain3;
