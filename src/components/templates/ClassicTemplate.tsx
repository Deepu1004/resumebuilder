import React from "react";
import { ResumeData } from "../../context/ResumeContext";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface ClassicTemplateProps {
  resumeData: ResumeData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certifications,
    achievements,
  } = resumeData;

  // Determine margin class based on data length
  const marginClass = "p-2";

  return (
    <div className={`bg-white ${marginClass}`}>
      {/* Header */}
      <div className="text-center border-b border-gray-300 pb-4 mb-2">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-gray-900 mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 mb-2">{personalInfo.title}</p>

        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Mail className="h-3 w-3 mr-1 text-gray-500" />
              <span>{personalInfo.email.replace("@gmail.com","")}</span>
            </a>
          )}
          {personalInfo.phone && (
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Phone className="h-3 w-3 mr-1 text-gray-500" />
              <span>{personalInfo.phone}</span>
            </a>
          )}
          {(personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-gray-500" />
              <span>
                {[personalInfo.city, personalInfo.state]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Globe className="h-3 w-3 mr-1 text-gray-500" />
              <span>{personalInfo.website}</span>
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="h-3 w-3 mr-1 text-gray-500" />
              <span>
                {personalInfo.linkedin.replace(
                  "https://www.linkedin.com/in/",
                  "",
                )}
              </span>
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Github className="h-3 w-3 mr-1 text-gray-500" />
              <span>
                {personalInfo.github.replace("https://github.com/", "")}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Professional Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                    <div className="text-gray-700 font-medium text-sm">
                      {exp.company}
                      {exp.location ? `, ${exp.location}` : ""}
                    </div>
                  </div>
                  <div className="text-gray-600 text-xs mt-1 md:mt-0 md:text-right">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <p className="mt-1 text-gray-700 text-sm">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {edu.institution}
                    </div>
                    <div className="text-gray-700 text-xs">
                      {edu.degree}{" "}
                      {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                    </div>
                  </div>
                  <div className="text-gray-600 text-xs mt-1 md:mt-0 md:text-right">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-xs mt-1 text-gray-600">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="border border-gray-300 text-gray-700 px-2 py-0.5 rounded text-xs"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && projects[0].title && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-sm">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 hover:underline text-xs"
                    >
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <div className="text-gray-700 text-xs italic">
                    {project.technologies}
                  </div>
                )}
                {project.description && (
                  <p className="mt-1 text-gray-700 text-sm">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && achievements[0].title && (
        <div className="mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 flex items-center">
            Achievements
          </h2>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 text-sm">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && certifications[0].name && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <div key={index}>
                <div className="font-medium text-gray-900 text-sm">
                  {cert.name}
                </div>
                <div className="text-gray-700 text-xs">{cert.issuer}</div>
                <div className="text-gray-600 text-xs">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
