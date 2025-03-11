import { useNavigate } from "react-router-dom";
import {
  FileText,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  DownloadCloud,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
    accent: "indigo",
    imageUrl: "/templates/Executive.png",
  },
  {
    id: "professional",
    name: "Professional Classic",
    description: "Traditional format with modern typography and spacing",
    features: ["Skills Matrix", "Work History", "Education"],
    accent: "indigo",
    imageUrl: "/templates/Professional.png",
  },
  {
    id: "technical",
    name: "Technical Specialist",
    description: "Optimized for technical roles with skills emphasis",
    features: ["Technical Skills Grid", "Project Highlights", "Certifications"],
    accent: "indigo",
    imageUrl: "/templates/Technical.png",
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description: "Contemporary design with perfect content balance",
    features: ["Clean Layout", "Achievement Focus", "Sectioned Content"],
    accent: "indigo",
    imageUrl: "/templates/Modern.png",
  },
  {
    id: "compact",
    name: "Compact Professional",
    description: "Efficient space utilization for extensive experience",
    features: ["Smart Space Usage", "Comprehensive Content", "Clear Hierarchy"],
    accent: "indigo",
    imageUrl: "/templates/Compact.png",
  },
  {
    id: "minimal",
    name: "Minimalist Chic",
    description:
      "Simple and clean design with a focus on essential information",
    features: ["Minimal Layout", "Essential Content", "Clear Structure"],
    accent: "indigo",
    imageUrl: "/templates/Minimalistic.png",
  },
  {
    id: "classic",
    name: "Classic Style",
    description: "Timeless design with a traditional resume structure",
    features: ["Classic Sections", "Work Experience", "Education"],
    accent: "indigo",
    imageUrl: "/templates/Classic.png",
  },
];

const TemplateSelection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".template-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden animate-fade-in">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.1),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1),_transparent)]" />

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/4 top-40 h-24 w-24 text-indigo-300 opacity-30"
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Sparkles />
        </motion.div>
        <motion.div
          className="absolute right-1/3 bottom-20 h-32 w-32 text-purple-300 opacity-30"
          animate={{ y: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Layers />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 h-20 w-20 text-indigo-200 opacity-20"
          animate={{ x: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <DownloadCloud />
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12 mb-20"
        >
          <h1
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text 
                       bg-gradient-to-r from-indigo-700 to-purple-700"
          >
            Choose Your Professional Template
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            All templates are ATS-friendly and automatically adapt to your
            content
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="template-card group relative bg-white rounded-3xl shadow-xl overflow-hidden 
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Dynamic Gradient Overlay */}
              <div
                className={`absolute inset-0 
                          opacity-10 blur-xl transition-opacity duration-500 
                          group-hover:opacity-20 group-hover:blur-none`}
              />

              {/* Content Container */}
              <div className="relative p-6 space-y-6 z-10">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div
                    className={`relative flex items-center justify-center w-14 h-14 rounded-xl 
                              bg-gradient-to-r from-${template.accent}-500 to-${template.accent}-600 
                              shadow-lg transition-transform duration-500 group-hover:scale-105`}
                  >
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h2
                    className="text-2xl font-extrabold text-indigo-600 
             group-hover:text-indigo-700 transition-colors duration-300"
                  >
                    {template.name}
                  </h2>
                </div>

                {/* Preview Image with loading animation */}
                <div
                  className="relative aspect-[210/297] rounded-lg overflow-hidden 
                             bg-gradient-to-br from-indigo-50 to-purple-50"
                >
                  <img
                    src={template.imageUrl}
                    alt={`${template.name} Preview`}
                    className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-105 animate-fade-in"
                  />
                </div>

                {/* Features List with animation */}
                <div className="space-y-3 mt-4 animate-fade-in">
                  {template.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 transition-colors duration-300 
                                "
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <Check
                        className={`h-5 w-5 text-${template.accent}-600 
                                   transition-transform duration-300 group-hover:rotate-12`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button with animation */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/form/${template.id}`)}
                  className="w-full relative flex items-center justify-center 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-semibold rounded-xl py-4 px-6 
                           transition-all duration-300 group-hover:shadow-xl 
                           hover:from-indigo-700 hover:to-purple-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-indigo-500 mt-6 animate-fade-in"
                  style={{ transitionDelay: `300ms` }}
                >
                  <span className="relative z-10 flex items-center">
                    Use Template
                    <ArrowRight
                      className="ml-3 h-5 w-5 transition-transform 
                             duration-300 group-hover:translate-x-2"
                    />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TemplateSelection;
