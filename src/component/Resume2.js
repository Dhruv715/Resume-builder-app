import React from "react";

function Resume2({ formData, handleDownload }) {
  return (
    <div className="resume-container w-full  sm:w-full md:w-full lg:w-1/2">
      {formData && (
        <div className="w-11/12" >
          <div id="resumeContent">
            {/* Personal Information */}

            <h1 className=" bg-stone-600 text-white py-6 text-2xl px-10">
              {formData.personalInformation.firstName}{" "}
              {formData.personalInformation.lastName}
            </h1>
            <div className="parentdivflexy flex flex-row w-full">
              <div className="bg-stone-300 flex flex-col w-2/5">
               
                <div className="resume-section">
                {formData.resumeImages && formData.resumeImages.length > 0 && (
                    <div className="flex flex-col items-center">
                      {formData.resumeImages.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Resume Image ${index + 1}`}
                          className="w-32 h-32 my-2 rounded-full"
                        />
                      ))}
                    </div>
                  )}

                  <h3 className="semi">
                    <i class="ri-user-2-fill"></i> &nbsp;&nbsp;Personal
                    Information:
                  </h3>
                  <p className="semi">
                    <strong>
                      <i class="ri-phone-fill"></i> &nbsp;&nbsp;
                    </strong>{" "}
                    {formData.personalInformation.phoneNumber}
                  </p>
                  <p className="semi">
                    <strong>
                      <i class="ri-calendar-2-line"></i> &nbsp;&nbsp;
                    </strong>{" "}
                    {formData.personalInformation.dob}
                  </p>
                </div>
                
                <div className="resume-section">
                  <h3 className="semi">
                    <i class="ri-building-2-fill"></i> &nbsp;&nbsp; Skills:
                  </h3>
                  <p className="semi">
                    <strong>Technical Skills:</strong>{" "}
                    {formData.skills.technicalSkills}
                  </p>
                  <p className="semi">
                    <strong>Soft Skills:</strong> {formData.skills.softSkills}
                  </p>
                </div>
                
                <div className="resume-section">
                  <h3 className="semi">Languages:</h3>
                  <p className="semi">
                    <strong>Language Spoken:</strong>{" "}
                    {formData.languages.languageSpoken}
                  </p>
                  <p className="semi">
                    <strong>Proficiency Level:</strong>{" "}
                    {formData.languages.proficiencyLevel}
                  </p>
                </div>
              </div>
              <div className="Section-two">
                <div className="resume-section">
                  <h3 className="semi">
                    <i class="ri-profile-line"></i> &nbsp;&nbsp;Professional
                    Summary:
                  </h3>
                  <p className="semi">{formData.professionalSummary.desc}</p>
                </div>
                {/* Education */}
               
                {/* 
 */}
                <div className="resume-section">
                  <h3 className="semi">
                    <i class="ri-school-line"></i> &nbsp;&nbsp;Education:
                  </h3>
                  <p className="semi">
                    <strong>Degree:</strong> {formData.education.degree}
                  </p>
                  <p className="semi">
                    <strong>Institution:</strong>{" "}
                    {formData.education.institution}
                  </p>
                  <p className="semi">
                    <strong>Dates Attended:</strong>{" "}
                    {formData.education.datesAttended}
                  </p>
                  <p className="semi">
                    <strong>Field of Study:</strong>{" "}
                    {formData.education.fieldOfStudy}
                  </p>
                  <p className="semi">
                    <strong>GPA:</strong> {formData.education.gpa}
                  </p>
                </div>
                <div className="resume-section">
                  <h3 className="semi">
                    <i class="ri-file-cloud-line"></i> &nbsp;&nbsp;Work
                    Experience:
                  </h3>
                  <p className="semi">
                    <strong>Job Title:</strong>{" "}
                    {formData.workExperience.jobTitle}
                  </p>
                  <p className="semi">
                    <strong>Company Name:</strong>{" "}
                    {formData.workExperience.companyName}
                  </p>
                  <p className="semi">
                    <strong>Years of Experience:</strong>{" "}
                    {formData.workExperience.yearsOfExperience}
                  </p>
                </div>
                <div className="resume-section">
                <h3 className="semi">
                  <i class="ri-id-card-line"></i> &nbsp;&nbsp;Certifications:
                </h3>
                <p className="semi">
                  <strong>Certification Name:</strong>{" "}
                  {formData.certifications.certificationName}
                </p>
                <p className="semi">
                  <strong>Issuing Organization:</strong>{" "}
                  {formData.certifications.issuingOrganization}
                </p>
                <p className="semi">
                  <strong>Date Obtained:</strong>{" "}
                  {formData.certifications.dateObtained}
                </p>
              </div>
              <div className="resume-section">
                <h2 className="semi">
                  <i class="ri-add-fill"></i> &nbsp; Additional
                  Information:
                </h2>
                <p className="semi">
                  <strong>Hobbies:</strong>{" "}
                  {formData.additionalInformation.hobbies}
                </p>
                <p className="semi">
                  <strong>Achievements/Awards:</strong>{" "}
                  {formData.additionalInformation.achievementsAwards}
                </p>
              </div>
              </div>
              
             
            </div>

            {/* Professional Summary */}

            {/* Work Experience */}

            {/* Skills */}

            {/* Certifications */}

            {/* Languages */}

            {/* Additional Information */}
          </div>
        </div>
      )}
      {formData && (
        <div className="download-button-container">
          <button onClick={handleDownload} className="download-button">
            ✨Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default Resume2;
