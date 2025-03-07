import React from "react";
import { Plus, Trash2 } from "lucide-react";

interface LanguagesProps {
  resumeData: {
    languages: Array<{
      language: string;
      proficiency: string;
    }>;
  };
  handleLanguageChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  addLanguage: () => void;
  removeLanguage: (index: number) => void;
}

const LanguagesSection: React.FC<LanguagesProps> = ({
  resumeData,
  handleLanguageChange,
  addLanguage,
  removeLanguage,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Languages</h2>
        <button
          onClick={addLanguage}
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-md transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.languages.map((lang, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-800">
                Language #{index + 1}
              </h3>
              {resumeData.languages.length > 1 && (
                <button
                  onClick={() => removeLanguage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  value={lang.language}
                  onChange={(e) => handleLanguageChange(index, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. English, Spanish, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proficiency
                </label>
                <select
                  name="proficiency"
                  value={lang.proficiency}
                  onChange={(e) => handleLanguageChange(index, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select proficiency level</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
