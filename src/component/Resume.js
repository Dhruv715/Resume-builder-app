import React from "react";

function Resume({ formData, handleDownload }) {
  return (
    <div className="resume-container w-full  sm:w-full md:w-full lg:w-1/2">
      {formData && (
        <div className="w-11/12" >
          <div id="resumeContent">
            {/* Personal Information */}

            <h1 className=" bg-stone-400 text-black py-10 text-2xl px-10 text-center " style={{letterSpacing:'2px',textTransform:'uppercase'}}>

              {formData.personalInformation.firstName}{" "}
              {formData.personalInformation.lastName}
            </h1>
            <div className="parentdivflexy flex flex-row w-full">
              <div className="flex flex-col w-1/3">
                <div className="resume-section">
                  <h3 className="semi">
                    <strong><i class="ri-user-2-fill"></i> &nbsp;&nbsp;Personal
                    Information:</strong>
                  </h3>
                  <p className="semi" >
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
                  <hr />
                <div className="resume-section">
                  <h3 className="semi">
                   <strong> <i class="ri-building-2-fill"></i> &nbsp;&nbsp; Skills:</strong>
                  </h3>
                  <p className="semi">
                    <strong>Technical Skills:</strong>{" "}
                    {formData.skills.technicalSkills}
                  </p>
                  <p className="semi">
                    <strong>Soft Skills:</strong> {formData.skills.softSkills}
                  </p>
                </div>
                <hr />
                <div className="resume-section">
                  <h3 className="semi">
                    <strong>Languages:</strong>
                  </h3>
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
              <div className="Section-two flex flex-col w-2/3">
                <div className="resume-section">
                  <h3 className="semi">
                    <strong><i class="ri-profile-line"></i> &nbsp;&nbsp;Professional
                    Summary:</strong>
                  </h3>
                  <p className="semi w-full pe-2">{formData.professionalSummary.desc}</p>
                </div>
                {/* Education */}
               
                {/* 
 */}
  <hr />
                <div className="resume-section">
                  <h3 className="semi">
                   <strong> <i class="ri-school-line"></i> &nbsp;&nbsp;Education:</strong>
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
                <hr/>
                <div className="resume-section">
                  <h3 className="semi">
                   <strong> <i class="ri-file-cloud-line"></i> &nbsp;&nbsp;Work
                    Experience:</strong>
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
                <hr />
                <div className="resume-section">
                <h3 className="semi">
                  <strong><i class="ri-id-card-line"></i> &nbsp;&nbsp;Certifications:</strong>
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
              <hr />
              <div className="resume-section">
                <h2 className="semi">
                 <strong> <i class="ri-add-fill"></i> &nbsp; Additional
                  Information:</strong>
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

export default Resume;
