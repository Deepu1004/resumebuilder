import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Home, Github, Sparkles, Menu, X } from "lucide-react";

interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const githubLink = "https://github.com/Deepu1004";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-100/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl 
                     font-extrabold text-gray-900 group relative z-10 
                     hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            onClick={handleMobileLinkClick}
          >
            <div className="relative">
              <FileText
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-indigo-600 
                         transition-all duration-500 group-hover:scale-110 
                         group-hover:rotate-6"
              />
              <div
                className="absolute -inset-2 bg-gradient-to-r from-indigo-400/40 
                         to-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 
                         blur-xl transition-all duration-500 -z-10 animate-pulse"
              />
            </div>
            <span className="relative overflow-hidden inline-flex flex-col">
              SnapResume
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r 
                         from-indigo-600 via-purple-500 to-indigo-600 scale-x-0 
                         group-hover:scale-x-100 transition-transform duration-500 
                         origin-left rounded-full shadow-lg"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <NavLink
              to="/"
              label="Home"
              icon={<Home className="h-5 w-5" />}
              isActive={location.pathname === "/"}
            />
            <NavLink
              to="/templates"
              label="Templates"
              icon={<FileText className="h-5 w-5" />}
              isActive={location.pathname.startsWith("/templates")}
            />
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-2 px-5 py-2.5 
                       rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 
                       text-white font-medium transition-all duration-300 
                       hover:from-indigo-600 hover:to-purple-600
                       hover:shadow-lg hover:shadow-indigo-500/25
                       active:scale-95 transform-gpu"
            >
              <Github
                className="h-5 w-5 lg:h-5 lg:w-5 transition-transform 
                         duration-500 group-hover:rotate-12"
              />
              <span className="relative">
                GitHub
                <span
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 
                           bg-white/30 scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500 origin-left"
                />
              </span>
              <div
                className="absolute inset-0 rounded-full opacity-0 
                         group-hover:opacity-50 transition-opacity duration-300
                         bg-gradient-to-r from-white/10 to-transparent"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2.5 rounded-full text-gray-700 
                     hover:bg-indigo-50 active:bg-indigo-100
                     transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                     focus:ring-offset-2 z-10 transform-gpu
                     hover:shadow-md hover:shadow-indigo-100/50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 transform transition-all duration-500 
                         ${
                           isMobileMenuOpen
                             ? "rotate-180 scale-105"
                             : "rotate-0"
                         }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-indigo-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-2xl 
                   transition-all duration-500 ease-in-out border-t border-indigo-50
                   ${
                     isMobileMenuOpen
                       ? "opacity-100 translate-y-0 shadow-xl shadow-indigo-100/20"
                       : "opacity-0 -translate-y-full"
                   }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col p-6 space-y-4">
          <MobileNavLink
            to="/"
            label="Home"
            icon={<Home className="h-6 w-6 sm:h-7 sm:w-7" />}
            onClick={handleMobileLinkClick}
            isActive={location.pathname === "/"}
          />
          <MobileNavLink
            to="/templates"
            label="Templates"
            icon={<FileText className="h-6 w-6 sm:h-7 sm:w-7" />}
            onClick={handleMobileLinkClick}
            isActive={location.pathname.startsWith("/templates")}
          />
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 p-4 rounded-2xl 
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:from-indigo-600 hover:to-purple-600 
                     transition-all duration-300 transform-gpu
                     active:scale-[0.98] shadow-lg shadow-indigo-100/20"
            onClick={handleMobileLinkClick}
          >
            <Github
              className="h-7 w-7 text-white/90 transition-transform 
                       duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
            <span
              className="text-lg font-medium text-white/90
                       group-hover:text-white transition-colors duration-300"
            >
              GitHub
            </span>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <Sparkles
        className="absolute right-8 top-1/2 -translate-y-1/2 
                 h-8 w-8 sm:h-10 sm:w-10 text-indigo-400/30 opacity-50 
                 animate-pulse z-0"
      />
      <div
        className="absolute left-1/4 top-full w-64 h-64 bg-gradient-to-r 
                 from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl -z-10
                 animate-pulse"
      />
      <div
        className="absolute right-1/4 top-0 w-96 h-96 bg-gradient-to-r 
                 from-purple-300/5 to-indigo-300/5 rounded-full blur-3xl -z-10
                 animate-pulse"
      />
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon, isActive }) => (
  <Link
    to={to}
    className={`group relative flex items-center space-x-2 px-4 py-2.5 
             rounded-full font-medium transition-all duration-300
             hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50/80
             active:scale-95 transform-gpu
             ${
               isActive
                 ? "bg-gradient-to-r from-indigo-50 to-purple-50/80 text-indigo-700"
                 : "text-gray-700 hover:text-indigo-700"
             }`}
  >
    <span className="flex items-center space-x-2">
      <span
        className={`transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-3
                  ${isActive ? "text-indigo-600" : ""}`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </span>
    <div
      className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 
               via-purple-100/50 to-indigo-100/50 rounded-full opacity-0 
               group-hover:opacity-50 transition-opacity duration-300 -z-10"
    />
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  icon,
  onClick,
  isActive,
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`group flex items-center space-x-4 p-4 rounded-2xl 
             transition-all duration-300 transform-gpu
             active:scale-[0.98] hover:shadow-lg hover:shadow-indigo-100/20
             ${
               isActive
                 ? "bg-gradient-to-r from-indigo-50 to-purple-50/80 text-indigo-700"
                 : "bg-white/50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50/80"
             }`}
  >
    <span
      className={`transition-all duration-500 
                group-hover:scale-110 group-hover:rotate-3
                ${isActive ? "text-indigo-600" : "text-gray-700"}`}
    >
      {icon}
    </span>
    <span
      className={`text-lg font-medium transition-colors duration-300
                ${
                  isActive
                    ? "text-indigo-700"
                    : "text-gray-700 group-hover:text-indigo-700"
                }`}
    >
      {label}
    </span>
  </Link>
);

export default Navbar;
