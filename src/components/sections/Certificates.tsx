import React from "react";
import { Plus, Trash2 } from "lucide-react";

interface CertificationsProps {
  resumeData: {
    certifications: Array<{
      name: string;
      issuer: string;
      date: string;
    }>;
  };
  handleCertificationChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  addCertification: () => void;
  removeCertification: (index: number) => void;
}

const CertificationsSection: React.FC<CertificationsProps> = ({
  resumeData,
  handleCertificationChange,
  addCertification,
  removeCertification,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
        <button
          onClick={addCertification}
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-md transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.certifications.map((cert, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-800">
                Certification #{index + 1}
              </h3>
              {resumeData.certifications.length > 1 && (
                <button
                  onClick={() => removeCertification(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Certification Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={cert.name}
                  onChange={(e) => handleCertificationChange(index, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  name="issuer"
                  value={cert.issuer}
                  onChange={(e) => handleCertificationChange(index, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  value={cert.date}
                  onChange={(e) => handleCertificationChange(index, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
