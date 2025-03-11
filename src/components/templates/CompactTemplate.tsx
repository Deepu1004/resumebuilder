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

const CompactTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certifications,
    achievements,
  } = resumeData;

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-6">
      {/* Header - Compact and efficient */}
      <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-gray-600">{personalInfo.title}</p>
        </div>
        <div className="text-right text-sm">
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-end gap-1 text-gray-600 hover:text-blue-600"
            >
              <Mail className="h-3 w-3" />
              <span>{personalInfo.email.replace("@gmail.com", "")}</span>
            </a>
          )}
          {personalInfo.phone && (
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-end gap-1 text-gray-600 hover:text-blue-600"
            >
              <Phone className="h-3 w-3" />
              <span>{personalInfo.phone}</span>
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-1 text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="h-3 w-3" />
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
              className="flex items-center justify-end gap-1 text-gray-600 hover:text-blue-600"
            >
              <Github className="h-3 w-3" />
              <span>
                {personalInfo.github.replace("https://github.com/", "")}
              </span>
            </a>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-1 text-gray-600 hover:text-blue-600"
            >
              <Globe className="h-3 w-3" />
              <span>{personalInfo.website}</span>
            </a>
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Main Content - 8 columns */}
        <div className="col-span-8 space-y-4">
          {/* Summary - Concise */}
          {personalInfo.summary && (
            <section className="text-sm text-gray-700">
              {personalInfo.summary}
            </section>
          )}

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp, index) => (
                <div key={index} className="text-sm">
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-900">
                      {exp.position}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <div className="text-gray-600">{exp.company}</div>
                  {exp.description && (
                    <p className="text-gray-700 mt-1 text-xs leading-normal">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects - If available */}
          {projects.length > 0 && projects[0].title && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                Key Projects
              </h2>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex justify-between">
                      <div className="font-medium text-gray-900">
                        {project.title}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-xs"
                        >
                          View
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="text-gray-600 text-xs">
                        {project.technologies}
                      </div>
                    )}
                    {project.description && (
                      <p className="text-gray-700 text-xs mt-1">
                        {project.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements - If available */}
          {achievements.length > 0 && achievements[0].title && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2 flex items-center">
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-sm">
                    <h3 className="font-medium text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 mt-1 text-xs leading-normal">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar - 4 columns */}
        <div className="col-span-4 space-y-4">
          {/* Skills - Compact list */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* Education - Minimal format */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-gray-900">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-gray-700">
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                  </div>
                  <div className="text-xs text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications - If available */}
          {certifications.length > 0 && certifications[0].name && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                Certifications
              </h2>
              <div className="space-y-1">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-xs">
                    <div className="font-medium text-gray-900">{cert.name}</div>
                    <div className="text-gray-600">
                      {cert.issuer} • {cert.date}
                    </div>
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

export default CompactTemplate;
