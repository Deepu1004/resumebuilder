import React from "react";
import { ResumeData } from "../../context/ResumeContext";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Code,
} from "lucide-react";

interface ResumeTemplateProps {
  resumeData: ResumeData;
}

const TechnicalTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    languages,
    certifications,
  } = resumeData;

  // Group skills by category
  const skillCategories = {
    languages: skills.filter(
      (skill) => skill.category === "Programming Languages",
    ),
    frameworks: skills.filter((skill) => skill.category === "Frameworks"),
    tools: skills.filter((skill) => skill.category === "Tools"),
    other: skills.filter((skill) => !skill.category),
  };

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8">
      {/* Header */}
      <div className="border-b-2 border-indigo-600 pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-xl text-indigo-600 mt-1">{personalInfo.title}</p>
          </div>
          <div className="text-right text-sm">
            {personalInfo.email && (
              <div className="flex items-center justify-end mb-1">
                <Mail className="h-4 w-4 mr-2" />
                <span>{personalInfo.email.replace("@gmail.com", "")}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center justify-end mb-1">
                <Github className="h-4 w-4 mr-2" />
                <span>
                  {personalInfo.github.replace("https://github.com/", "")}
                </span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center justify-end">
                <Linkedin className="h-4 w-4 mr-2" />
                <span>
                  {personalInfo.linkedin.replace(
                    "https://www.linkedin.com/in/",
                    "",
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Education</h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="font-medium text-gray-900">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-gray-700">
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-indigo-600" />
              Technical Skills
            </h2>

            {Object.entries(skillCategories).map(
              ([category, categorySkills]) =>
                categorySkills.length > 0 && (
                  <div key={category} className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 capitalize">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${(skill.level / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm min-w-[80px]">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </section>

          {/* Certifications */}
          {certifications.length > 0 && certifications[0].name && (
            <section className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <div className="font-medium text-gray-900">{cert.name}</div>
                    <div className="text-sm text-gray-600">{cert.issuer}</div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Technical Profile
              </h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </section>
          )}
          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-4 mb-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-600 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Technical Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-indigo-600 pl-4"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-900">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline text-sm"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <p className="text-sm text-gray-600 mt-1">
                        {project.technologies}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-700 mt-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalTemplate;
