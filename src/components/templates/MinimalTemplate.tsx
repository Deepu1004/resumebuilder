import React from "react";
import { ResumeData } from "../../context/ResumeContext";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Trophy,
} from "lucide-react";

interface ResumeTemplateProps {
  resumeData: ResumeData;
}

const MinimalistTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
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
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-medium mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-gray-600 mb-2">{personalInfo.title}</p>

        <div className="flex justify-center gap-2 text-sm text-gray-600 flex-wrap">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{personalInfo.email.replace("@gmail.com", "")}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>{personalInfo.website}</span>
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
              <Github className="h-4 w-4 mr-1" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-4">
        {/* Experience */}
        <section>
          <h2 className="text-lg font-light uppercase tracking-wider mb-2 border-b pb-1">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                {exp.description && (
                  <p className="text-sm text-gray-700">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-light uppercase tracking-wider mb-3 border-b pb-1">
            Education
          </h2>
          <div className="space-y-1">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-600">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg font-light uppercase tracking-wider mb-3 border-b pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        {projects.length > 0 && projects[0].title && (
          <section>
            <h2 className="text-lg font-light uppercase tracking-wider mb-3 border-b pb-1">
              Projects
            </h2>
            <div className="space-y-2">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-medium">{project.title}</h3>
                  {project.technologies && (
                    <p className="text-sm text-gray-600 mb-1">
                      {project.technologies}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {achievements.length > 0 && achievements[0].title && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3 flex items-center">
              Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                  </div>
                  {achievement.description && (
                    <p className="mt-2">{achievement.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && certifications[0].name && (
          <section>
            <h2 className="text-lg font-light uppercase tracking-wider mb-3 border-b pb-1">
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalistTemplate;
