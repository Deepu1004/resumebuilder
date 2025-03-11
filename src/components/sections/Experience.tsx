import React from "react";
import { Plus, Trash2 } from "lucide-react";
import './Sections.css';
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
    <div className="space-y-8">
      {/* Add Button */}
      <div className="flex justify-end">
        <button
          onClick={addExperience}
          className="group relative flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 
               text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all 
               duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
               active:bg-gradient-to-r active:from-blue-700 active:to-purple-700"
        >
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Add Experience</span>
          <div
            className="absolute inset-0 bg-white/5 transition-transform duration-500 
                 group-hover:translate-x-full rounded-xl"
          />
        </button>
      </div>

      {/* Experience Cards */}
      {resumeData.experience.map((exp, index) => (
        <div
          key={index}
          className="glass-card group relative p-6 rounded-3xl overflow-hidden border-2 border-indigo-200 
                    hover:border-indigo-400 transition-all duration-300"
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 
                       blur-md opacity-0 transition-opacity duration-500 
                       group-hover:opacity-100"
          />

          {/* Card Content */}
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3
                className="text-xl font-semibold text-transparent bg-clip-text 
                           bg-gradient-to-r from-indigo-700 to-purple-700"
              >
                Experience {index + 1}
              </h3>
              {resumeData.experience.length > 1 && (
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-600 transition-colors duration-300 
                             transform hover:scale-110"
                >
                  <Trash2 className="h-6 w-6" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Google"
                />
              </div>

              {/* Position */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Software Engineer"
                />
              </div>

              {/* Location */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Mountain View, CA"
                />
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                   duration-300 group-focus-within:text-indigo-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="text"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(index, e)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                               placeholder-gray-400 focus:placeholder-transparent 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="relative group">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                   duration-300 group-focus-within:text-indigo-700"
                  >
                    End Date
                  </label>
                  <input
                    type="text"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(index, e)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                               placeholder-gray-400 focus:placeholder-transparent 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300"
                    placeholder="MM/YYYY or Present"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="relative group">
              <label
                className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                               duration-300 group-focus-within:text-indigo-700"
              >
                Description
              </label>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, e)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                          placeholder-gray-400 focus:placeholder-transparent 
                          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                          transition-all duration-300 resize-none"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;

