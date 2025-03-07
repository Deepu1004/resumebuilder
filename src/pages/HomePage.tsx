import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, CheckCircle } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex p-4 bg-indigo-50 rounded-2xl">
            <FileText className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Create Your Professional Resume{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ResumeAssemble helps you create stunning, ATS-friendly resumes that
            stand out from the crowd. Choose from beautiful templates, fill in
            your details, and download your perfect resume.
          </p>

          <Link
            to="/templates"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose ResumeAssemble?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Choose a Template",
    description:
      "Select from our professionally designed resume templates that match your style and career goals.",
  },
  {
    title: "Fill Your Details",
    description:
      "Enter your personal information, work experience, education, and skills with our easy-to-use form.",
  },
  {
    title: "Download Your Resume",
    description:
      "Preview your resume, make final adjustments, and download it as a PDF ready to send to employers.",
  },
];

const features = [
  {
    title: "Professional Templates",
    description:
      "Designed by HR professionals to help you stand out from the competition.",
  },
  {
    title: "ATS-Friendly",
    description:
      "Optimized to pass Applicant Tracking Systems and reach human recruiters.",
  },
  {
    title: "Easy to Use",
    description:
      "Simple interface with step-by-step guidance for a smooth experience.",
  },
  {
    title: "Instant PDF Download",
    description:
      "Get your polished resume in seconds, ready to send to potential employers.",
  },
];

export default HomePage;
