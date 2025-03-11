import React from "react";
import { ResumeData } from "../../context/ResumeContext";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface MinimalTemplateProps {
  resumeData: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    achievements,
    certifications,
  } = resumeData;

  return (
    <div className="p-8 bg-white">
      {/* Header */}
      <div className="border-b-2 border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600">{personalInfo.title}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-gray-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:underline"
              >
                {personalInfo.email.replace("@gmail.com", "")}
              </a>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-gray-400" />
              <a href={`tel:${personalInfo.phone}`} className="hover:underline">
                {personalInfo.phone}
              </a>
            </div>
          )}
          {(personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
              <span>
                {[personalInfo.city, personalInfo.state]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-gray-400" />
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {personalInfo.website}
              </a>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-gray-400" />
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {personalInfo.linkedin.replace(
                  "https://www.linkedin.com/in/",
                  "",
                )}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1 text-gray-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {personalInfo.github.replace("https://github.com/", "")}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Professional Summary
              </h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Experience</h2>
            <div className="space-y-5">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {exp.position}
                      </h3>
                      <div className="text-gray-600">
                        {exp.company}
                        {exp.location ? `, ${exp.location}` : ""}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm mt-1 md:mt-0">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Projects</h2>
              <div className="space-y-5">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-800">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 hover:underline text-sm"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="text-gray-600 text-sm">
                        {project.technologies}
                      </div>
                    )}
                    {project.description && (
                      <p className="mt-1 text-gray-700">
                        {project.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="font-bold text-gray-800">
                    {edu.institution}
                  </div>
                  <div>
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                  </div>
                  <div className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  {edu.description && (
                    <p className="text-sm mt-1 text-gray-600">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {achievements.length > 0 && achievements[0].title && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-800">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && certifications[0].name && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index}>
                    <div className="font-medium text-gray-800">{cert.name}</div>
                    <div className="text-gray-600">{cert.issuer}</div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;
