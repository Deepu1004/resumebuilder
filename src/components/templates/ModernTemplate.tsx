import React from "react";
import { ResumeData } from "../../context/ResumeContext";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface ClassicProfessionalProps {
  resumeData: ResumeData;
}

const ModernProfessional: React.FC<ClassicProfessionalProps> = ({
  resumeData,
}) => {
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    achievements,
    certifications,
  } = resumeData;

  // Function to handle different types of image URLs
  const getImageUrl = (url: string): string => {
    if (!url) return "";

    try {
      // Try creating a URL object to validate the URL
      new URL(url);

      if (url.includes("drive.google.com")) {
        let fileId = "";

        if (url.includes("/file/d/")) {
          const match = url.match(/\/file\/d\/([^/]+)/);
          if (match && match[1]) fileId = match[1];
        } else if (url.includes("?id=")) {
          const match = url.match(/id=([^&]+)/);
          if (match && match[1]) fileId = match[1];
        } else if (url.includes("/d/")) {
          const match = url.match(/\/d\/([^/]+)/);
          if (match && match[1]) fileId = match[1];
        }

        if (fileId) {
          return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
      }

      if (url.includes("dropbox.com")) {
        return url.replace("?dl=0", "?raw=1");
      }

      return url;
    } catch (e) {
      // If URL is invalid, return empty string
      console.error("Invalid URL:", url);
      return "";
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {personalInfo.photoUrl && (
            <div className="bg-gray-800 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img
                src={getImageUrl(personalInfo.photoUrl)}
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.onerror = null; // Prevent infinite loop
                  img.src = "https://via.placeholder.com/150"; // Fallback image
                  img.style.opacity = "0.7";
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-xl mt-1 text-gray-300">{personalInfo.title}</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{ppersonalInfo.email.replace("@gmail.com", "")}</span>
                </a>
              )}
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
              {(personalInfo.city || personalInfo.state) && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
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
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span>{personalInfo.website}</span>
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
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
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span>
                    {personalInfo.github.replace("https://github.com/", "")}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 p-4">
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
                Professional Summary
              </h2>
              <p>{personalInfo.summary}</p>
            </div>
          )}

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="font-bold">{edu.institution}</div>
                  <div>
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  {edu.description && (
                    <p className="text-sm mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

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
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
                Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index}>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-gray-600">{cert.issuer}</div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-6">
          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{exp.position}</h3>
                      <div className="text-gray-600 font-medium">
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="text-gray-600">{exp.location}</div>
                      )}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  {exp.description && <p className="mt-2">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}/5</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-gray-800 h-2 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-3">
                Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:underline text-sm"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="text-gray-600 font-medium">
                        {project.technologies}
                      </div>
                    )}
                    {project.description && (
                      <p className="mt-2">{project.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernProfessional;
