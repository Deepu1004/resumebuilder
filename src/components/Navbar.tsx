import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Home, Github } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const githubLink = "https://github.com/Deepu1004";

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-all duration-300"
          >
            <FileText className="h-7 w-7 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              ResumeAssemble
            </span>
          </Link>

          <div className="flex items-center space-x-2">
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
              isActive={location.pathname === "/templates"}
            />
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-indigo-50 text-indigo-600 font-medium"
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;
