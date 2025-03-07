import React from "react";
import { Plus, Trash2 } from "lucide-react";

interface ProjectsProps {
  resumeData: {
    projects: Array<{
      title: string;
      description: string;
      technologies: string;
      link: string;
    }>;
  };
  handleProjectChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
}

const ProjectsSection: React.FC<ProjectsProps> = ({
  resumeData,
  handleProjectChange,
  addProject,
  removeProject,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-md transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>

      {resumeData.projects.map((project, index) => (
        <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Project #{index + 1}
            </h3>
            {resumeData.projects.length > 1 && (
              <button
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technologies Used
              </label>
              <input
                type="text"
                name="technologies"
                value={project.technologies}
                onChange={(e) => handleProjectChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. React, Node.js, MongoDB"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="url"
                name="link"
                value={project.link}
                onChange={(e) => handleProjectChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/project"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, e)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe the project, your role, and achievements..."
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
