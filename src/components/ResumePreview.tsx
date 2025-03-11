import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Download, ArrowLeft } from "lucide-react";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CompactTemplate from "./templates/CompactTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import TechnicalTemplate from "./templates/TechnicalTemplate";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";
import { toast } from "react-hot-toast";

const ResumePreview: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const { resumeData } = useResumeContext();
  const pdfTargetRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const input = document.getElementById("pdfTarget");
      const options = {
        margin: 0,
        filename: `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true, // Ensure images from URLs are loaded
          logging: false,
        },
        jsPDF: {
          unit: "in",
          format: "letter",
          orientation: "portrait",
        },
      };

      // Show loading toast
      const toastId = toast.loading("Generating PDF...");

      // Generate PDF
      await html2pdf().set(options).from(input).save();

      // Update toast to success
      toast.success("PDF downloaded successfully!", { id: toastId });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.1),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1),_transparent)]" />

      {/* Floating Elements */}
      <div className="absolute right-20 top-20 opacity-20">
        <div className="w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-2xl" />
      </div>
      <div className="absolute left-20 bottom-20 opacity-20">
        <div className="w-40 h-40 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full blur-3xl" />
      </div>

      <div className="relative mt-20 py-8 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center space-x-4">
            {/* Back to Editor Button */}
            <button
              onClick={() => navigate(`/form/${templateId}`)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {/* Mobile View: Only Icon */}
              <div className="md:hidden">
                <ArrowLeft className="h-8 w-8 text-indigo-600" />
              </div>
              {/* Desktop View: Icon + Text */}
              <div className="hidden md:flex items-center space-x-3">
                <ArrowLeft className="h-6 w-6 text-indigo-600 transition-transform duration-300 hover:rotate-180" />
                <span className="font-medium">Back to Editor</span>
              </div>
            </button>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadPDF}
            className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all 
                       duration-300 hover:from-indigo-700 hover:to-purple-700 active:from-indigo-800 active:to-purple-800"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                {/* Mobile View: Only Icon */}
                <div className="md:hidden">
                  <Download className="h-8 w-8 text-white" />
                </div>
                {/* Desktop View: Icon + Text */}
                <div className="hidden md:flex items-center space-x-2">
                  <Download className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span>Download PDF</span>
                </div>
              </>
            )}
          </motion.button>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-4xl"
            style={{ minHeight: "1100px" }}
          >
            <div id="pdfTarget" ref={pdfTargetRef}>
              {renderTemplate()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
