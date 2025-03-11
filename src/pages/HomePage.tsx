import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
  DownloadCloud,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background gradients remain unchanged */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center space-y-12 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            {/* FileText icon animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-20 animate-pulse"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative inline-flex p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-20 w-20 text-indigo-700 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                />
              </motion.svg>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -right-2 -top-2"
              >
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 animate-spin-slow" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent animate-gradient"
          >
            Create Your Professional Resume in Minutes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl sm:text-2xl text-gray-700 mx-auto leading-relaxed max-w-3xl"
          >
            SnapResume helps you create stunning, ATS-friendly resumes that
            stand out from the crowd. Choose from beautiful templates, fill in
            your details, and download your perfect resume.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            <Link
              to="/templates"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-700 to-purple-700 
                       text-white rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 
                       transition-all duration-300 overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="relative flex items-center">
                Get Started
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2 animate-tailwind" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="px-4 sm:px-6 lg:px-8 mb-20 mt-10"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 2.0 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl transform transition-transform duration-500 group-hover:scale-105" />
                <div className="relative bg-white rounded-3xl shadow-xl p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500 animate-pulse">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300 animate-tailwind">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300 animate-fade-in">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.0 }}
        className="px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-12 sm:p-16 shadow-inner backdrop-blur-xl">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-800 mb-12 text-center animate-gradient"
              >
                Why Choose SnapResume?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 3.6 }}
                    className="group relative bg-white/50 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:bg-white/80 hover:shadow-xl"
                  >
                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
                          <CheckCircle className="relative h-8 w-8 text-indigo-700 transition-transform duration-300 group-hover:scale-110 animate-spin-slow" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300 animate-tailwind">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 animate-fade-in">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob animations */}
        <motion.div
          className="absolute -left-48 top-96 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute -right-48 top-96 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-48 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10, delay: 4 }}
        />
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute left-1/4 top-40 h-24 w-24 text-indigo-300 opacity-30 animate-spin-slow" />
        <Layers className="absolute right-1/3 bottom-20 h-32 w-32 text-purple-300 opacity-30 animate-float" />
        <div className="absolute -left-48 top-96 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -right-48 top-96 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-48 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
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
