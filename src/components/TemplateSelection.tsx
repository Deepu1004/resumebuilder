import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Check } from "lucide-react";

const templates = [
  {
    id: "executive",
    name: "Executive Brief",
    description:
      "Clean, focused layout emphasizing leadership and achievements",
    features: [
      "Leadership Summary",
      "Key Achievements",
      "Professional Experience",
    ],
    accent: "bg-blue-600",
    imageUrl: "/templates/Executive.png",
  },
  {
    id: "professional",
    name: "Professional Classic",
    description: "Traditional format with modern typography and spacing",
    features: ["Skills Matrix", "Work History", "Education"],
    accent: "bg-gray-800",
    imageUrl: "/templates/Professional.png",
  },
  {
    id: "technical",
    name: "Technical Specialist",
    description: "Optimized for technical roles with skills emphasis",
    features: ["Technical Skills Grid", "Project Highlights", "Certifications"],
    accent: "bg-indigo-600",
    imageUrl: "/templates/Technical.png",
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description: "Contemporary design with perfect content balance",
    features: ["Clean Layout", "Achievement Focus", "Sectioned Content"],
    accent: "bg-emerald-600",
    imageUrl: "/templates/Modern.png",
  },
  {
    id: "compact",
    name: "Compact Professional",
    description: "Efficient space utilization for extensive experience",
    features: ["Smart Space Usage", "Comprehensive Content", "Clear Hierarchy"],
    accent: "bg-purple-600",
    imageUrl: "/templates/Compact.png",
  },
  {
    id: "minimal",
    name: "Minimalist Chic",
    description:
      "Simple and clean design with a focus on essential information",
    features: ["Minimal Layout", "Essential Content", "Clear Structure"],
    accent: "bg-yellow-600",
    imageUrl: "/templates/Minimalistic.png",
  },
  {
    id: "classic",
    name: "Classic Style",
    description: "Timeless design with a traditional resume structure",
    features: ["Classic Sections", "Work Experience", "Education"],
    accent: "bg-red-600",
    imageUrl: "/templates/Classic.png",
  },
];

function TemplateSelection() {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Choose Your Professional Resume Template
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All templates are ATS-friendly and automatically adjust to your
            content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className={`h-2 ${template.accent}`} />
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <FileText
                    className={`h-6 w-6 ${template.accent.replace(
                      "bg-",
                      "text-",
                    )}`}
                  />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {template.name}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {template.description}
                </p>

                <div className="relative aspect-[210/297] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={template.imageUrl}
                    alt={`${template.name} Preview`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check
                        className={`h-5 w-5 ${template.accent.replace(
                          "bg-",
                          "text-",
                        )}`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/form/${template.id}`)}
                  className={`w-full ${template.accent} text-white py-3 px-6 rounded-xl
                    font-semibold shadow-lg hover:opacity-90 transform hover:scale-105 
                    transition-all duration-300`}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateSelection;
