import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Eye, Sparkles, Layers } from "lucide-react";
import PersonalInfoSection from "./sections/PersonalInfo";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";
import AchievementsSection from "./sections/Achievements";
import CertificationsSection from "./sections/Certifications";
import { motion, AnimatePresence } from "framer-motion";

const ResumeForm: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const { resumeData, updateResumeData } = useResumeContext();
  const [activeSection, setActiveSection] = useState<string>("personalInfo");
  const handlePreview = () => {
    navigate(`/preview/${templateId}`);
  };

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    updateResumeData({
      ...resumeData,
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

  const handleAchievementChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedAchievements = [...resumeData.achievements];
    updatedAchievements[index] = {
      ...updatedAchievements[index],
      [name]: value,
    };
    updateResumeData({ achievements: updatedAchievements });
  };

  const addAchievement = () => {
    updateResumeData({
      achievements: [
        ...resumeData.achievements,
        { title: "", description: "" },
      ],
    });
  };

  const removeAchievement = (index: number) => {
    const updatedAchievements = [...resumeData.achievements];
    updatedAchievements.splice(index, 1);
    updateResumeData({ achievements: updatedAchievements });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.1),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1),_transparent)]" />

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-float-slow">
          <Sparkles className="w-12 h-12 text-indigo-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-30 animate-float">
          <Layers className="w-16 h-16 text-purple-400" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-20 animate-pulse-soft">
          <div className="w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 opacity-20 animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative py-8 px-4 mt-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Resume Builder
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Create your professional resume step by step
            </p>
          </div>
          <button
            onClick={handlePreview}
            className="group flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all 
                     duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 
                     active:from-indigo-700 active:to-purple-700 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="md:hidden">
              <Eye className="h-8 w-8" />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Eye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Preview Resume</span>
            </div>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced sidebar with animations */}
          <motion.div
            className="w-full lg:w-72 shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden sticky top-24 transition-transform duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Resume Sections
                </h2>
              </div>
              <motion.nav
                className="p-4 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {[
                  {
                    id: "personalInfo",
                    label: "Personal Information",
                    icon: "👤",
                  },
                  { id: "education", label: "Education", icon: "🎓" },
                  { id: "experience", label: "Experience", icon: "💼" },
                  { id: "skills", label: "Skills", icon: "🛠️" },
                  { id: "projects", label: "Projects", icon: "🚀" },
                  { id: "achievements", label: "Achievements", icon: "🏆" },
                  { id: "certifications", label: "Certifications", icon: "📜" },
                ].map((section) => (
                  <motion.button
                    key={section.id}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-medium shadow-sm"
                        : "text-gray-600 hover:bg-gray-50/50"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <span>{section.label}</span>
                  </motion.button>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>

          {/* Enhanced form content with animations */}
          <motion.div
            className="flex-1 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 transition-transform duration-300 hover:scale-[1.01]"
              whileHover={{ scale: 1.01 }}
            >
              <div className="rounded-3xl p-6 border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-transparent">
                <motion.h3
                  className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {activeSection === "personalInfo" && "Personal Information"}
                  {activeSection === "education" && "Education"}
                  {activeSection === "experience" && "Experience"}
                  {activeSection === "skills" && "Skills"}
                  {activeSection === "projects" && "Projects"}
                  {activeSection === "achievements" && "Achievements"}
                  {activeSection === "certifications" && "Certifications"}
                </motion.h3>
              </div>
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <AnimatePresence mode="wait">
                    {activeSection === "personalInfo" && (
                      <motion.div
                        key="personalInfo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PersonalInfoSection
                          resumeData={resumeData}
                          handlePersonalInfoChange={handlePersonalInfoChange}
                        />
                      </motion.div>
                    )}
                    {activeSection === "education" && (
                      <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <EducationSection
                          resumeData={resumeData}
                          handleEducationChange={handleEducationChange}
                          addEducation={addEducation}
                          removeEducation={removeEducation}
                        />
                      </motion.div>
                    )}
                    {activeSection === "experience" && (
                      <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExperienceSection
                          resumeData={resumeData}
                          handleExperienceChange={handleExperienceChange}
                          addExperience={addExperience}
                          removeExperience={removeExperience}
                        />
                      </motion.div>
                    )}
                    {activeSection === "skills" && (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <SkillsSection
                          resumeData={resumeData}
                          handleSkillChange={handleSkillChange}
                          addSkill={addSkill}
                          removeSkill={removeSkill}
                        />
                      </motion.div>
                    )}
                    {activeSection === "projects" && (
                      <motion.div
                        key="projects"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectsSection
                          resumeData={resumeData}
                          handleProjectChange={handleProjectChange}
                          addProject={addProject}
                          removeProject={removeProject}
                        />
                      </motion.div>
                    )}
                    {activeSection === "achievements" && (
                      <motion.div
                        key="achievements"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AchievementsSection
                          resumeData={resumeData}
                          handleAchievementChange={handleAchievementChange}
                          addAchievement={addAchievement}
                          removeAchievement={removeAchievement}
                        />
                      </motion.div>
                    )}
                    {activeSection === "certifications" && (
                      <motion.div
                        key="certifications"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CertificationsSection
                          resumeData={resumeData}
                          handleCertificationChange={handleCertificationChange}
                          addCertification={addCertification}
                          removeCertification={removeCertification}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;