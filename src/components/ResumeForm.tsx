import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Eye } from "lucide-react";
import PersonalInfoSection from "./sections/PersonalInfo";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";
import LanguagesSection from "./sections/Languages";
import CertificationsSection from "./sections/Certificates";

const ResumeForm: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const { resumeData, updateResumeData } = useResumeContext();
  const [activeSection, setActiveSection] = useState<string>("personalInfo");

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    updateResumeData({
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    });
  };

  const handleEducationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    updateResumeData({ education: updatedEducation });
  };

  const handleExperienceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    updateResumeData({ experience: updatedExperience });
  };

  const handleSkillChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [name]: name === "level" ? parseInt(value, 10) : value,
    };
    updateResumeData({ skills: updatedSkills });
  };

  const handleProjectChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };
    updateResumeData({ projects: updatedProjects });
  };

  const handleLanguageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const updatedLanguages = [...resumeData.languages];
    updatedLanguages[index] = {
      ...updatedLanguages[index],
      [name]: value,
    };
    updateResumeData({ languages: updatedLanguages });
  };

  const handleCertificationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const updatedCertifications = [...resumeData.certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [name]: value,
    };
    updateResumeData({ certifications: updatedCertifications });
  };

  const addEducation = () => {
    updateResumeData({
      education: [
        ...resumeData.education,
        {
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    updateResumeData({ education: updatedEducation });
  };

  const addExperience = () => {
    updateResumeData({
      experience: [
        ...resumeData.experience,
        {
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    updateResumeData({ experience: updatedExperience });
  };

  const addSkill = () => {
    updateResumeData({
      skills: [...resumeData.skills, { name: "", level: 3 }],
    });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    updateResumeData({ skills: updatedSkills });
  };

  const addProject = () => {
    updateResumeData({
      projects: [
        ...resumeData.projects,
        {
          title: "",
          description: "",
          technologies: "",
          link: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects.splice(index, 1);
    updateResumeData({ projects: updatedProjects });
  };

  const addLanguage = () => {
    updateResumeData({
      languages: [...resumeData.languages, { language: "", proficiency: "" }],
    });
  };

  const removeLanguage = (index: number) => {
    const updatedLanguages = [...resumeData.languages];
    updatedLanguages.splice(index, 1);
    updateResumeData({ languages: updatedLanguages });
  };

  const addCertification = () => {
    updateResumeData({
      certifications: [
        ...resumeData.certifications,
        { name: "", issuer: "", date: "" },
      ],
    });
  };

  const removeCertification = (index: number) => {
    const updatedCertifications = [...resumeData.certifications];
    updatedCertifications.splice(index, 1);
    updateResumeData({ certifications: updatedCertifications });
  };

  const handlePreview = () => {
    navigate(`/preview/${templateId}`);
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Build Your Resume</h1>
        <button
          onClick={handlePreview}
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          <Eye className="h-5 w-5" />
          <span>Preview Resume</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
          <nav className="space-y-1">
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "personalInfo"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("personalInfo")}
            >
              Personal Information
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "education"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "experience"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "skills"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "projects"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "languages"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("languages")}
            >
              Languages
            </button>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeSection === "certifications"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("certifications")}
            >
              Certifications
            </button>
          </nav>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {activeSection === "personalInfo" && (
            <PersonalInfoSection
              resumeData={resumeData}
              handlePersonalInfoChange={handlePersonalInfoChange}
            />
          )}
          {activeSection === "education" && (
            <EducationSection
              resumeData={resumeData}
              handleEducationChange={handleEducationChange}
              addEducation={addEducation}
              removeEducation={removeEducation}
            />
          )}
          {activeSection === "experience" && (
            <ExperienceSection
              resumeData={resumeData}
              handleExperienceChange={handleExperienceChange}
              addExperience={addExperience}
              removeExperience={removeExperience}
            />
          )}
          {activeSection === "skills" && (
            <SkillsSection
              resumeData={resumeData}
              handleSkillChange={handleSkillChange}
              addSkill={addSkill}
              removeSkill={removeSkill}
            />
          )}
          {activeSection === "projects" && (
            <ProjectsSection
              resumeData={resumeData}
              handleProjectChange={handleProjectChange}
              addProject={addProject}
              removeProject={removeProject}
            />
          )}
          {activeSection === "languages" && (
            <LanguagesSection
              resumeData={resumeData}
              handleLanguageChange={handleLanguageChange}
              addLanguage={addLanguage}
              removeLanguage={removeLanguage}
            />
          )}
          {activeSection === "certifications" && (
            <CertificationsSection
              resumeData={resumeData}
              handleCertificationChange={handleCertificationChange}
              addCertification={addCertification}
              removeCertification={removeCertification}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
