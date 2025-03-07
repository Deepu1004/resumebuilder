import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Download, ArrowLeft } from "lucide-react";
import { usePDF } from "react-to-pdf";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CompactTemplate from "./templates/CompactTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import TechnicalTemplate from "./templates/TechnicalTemplate";

const ResumePreview: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const { resumeData } = useResumeContext();
  const { toPDF, targetRef } = usePDF({
    filename: `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`,
  });

  const renderTemplate = () => {
    switch (templateId) {
      case "modern":
        return <ModernTemplate resumeData={resumeData} />;
      case "professional":
        return <CreativeTemplate resumeData={resumeData} />;
      case "compact":
        return <CompactTemplate resumeData={resumeData} />;
      case "minimal":
        return <MinimalTemplate resumeData={resumeData} />;
      case "technical":
        return <TechnicalTemplate resumeData={resumeData} />;
      case "executive":
        return <ExecutiveTemplate resumeData={resumeData} />;
      default:
        return <ClassicTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(`/form/${templateId}`)}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Editor</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Resume Preview</h1>
        </div>
        <button
          onClick={() => toPDF()}
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          <Download className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="flex justify-center">
        <div
          ref={targetRef}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
          style={{ minHeight: "1100px" }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
