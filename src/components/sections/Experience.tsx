import React from "react";
import { Plus, Trash2 } from "lucide-react";

interface ExperienceProps {
  resumeData: {
    experience: Array<{
      company: string;
      position: string;
      location: string;
      startDate: string;
      endDate: string;
      description: string;
    }>;
  };
  handleExperienceChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  addExperience: () => void;
  removeExperience: (index: number) => void;
}

const ExperienceSection: React.FC<ExperienceProps> = ({
  resumeData,
  handleExperienceChange,
  addExperience,
  removeExperience,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-md transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>

      {resumeData.experience.map((exp, index) => (
        <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Experience #{index + 1}
            </h3>
            {resumeData.experience.length > 1 && (
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={exp.location}
                onChange={(e) => handleExperienceChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="MM/YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="MM/YYYY or Present"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe your responsibilities and achievements..."
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
