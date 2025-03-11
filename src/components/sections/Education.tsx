import React from "react";
import { Plus, Trash2 } from "lucide-react";
import './Sections.css';

interface EducationProps {
  resumeData: {
    education: Array<{
      institution: string;
      degree: string;
      fieldOfStudy: string;
      startDate: string;
      endDate: string;
      description: string;
    }>;
  };
  handleEducationChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
}

const EducationSection: React.FC<EducationProps> = ({
  resumeData,
  handleEducationChange,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className="space-y-8">
      {/* Add Button */}
      <div className="flex justify-end">
        <button
          onClick={addEducation}
          className="group relative flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 
               text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all 
               duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
               active:bg-gradient-to-r active:from-blue-700 active:to-purple-700"
        >
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Add Education</span>
          <div
            className="absolute inset-0 bg-white/5 transition-transform duration-500 
                 group-hover:translate-x-full rounded-xl"
          />
        </button>
      </div>

      {/* Education Cards */}
      {resumeData.education.map((edu, index) => (
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
                Education {index + 1}
              </h3>
              <button
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-600 transition-colors duration-300 
                         transform hover:scale-110"
              >
                <Trash2 className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Institution */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Harvard University"
                />
              </div>

              {/* Degree */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Bachelor of Science"
                />
              </div>

              {/* Field of Study */}
              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                                 duration-300 group-focus-within:text-indigo-700"
                >
                  Field of Study
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             placeholder-gray-400 focus:placeholder-transparent 
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             transition-all duration-300"
                  placeholder="Computer Science"
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
                    value={edu.startDate}
                    onChange={(e) => handleEducationChange(index, e)}
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
                    value={edu.endDate}
                    onChange={(e) => handleEducationChange(index, e)}
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
                value={edu.description}
                onChange={(e) => handleEducationChange(index, e)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                          placeholder-gray-400 focus:placeholder-transparent 
                          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                          transition-all duration-300 resize-none"
                placeholder="Relevant coursework, achievements, or details..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;