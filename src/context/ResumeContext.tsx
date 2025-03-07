import React, { createContext, useState, useContext } from 'react';

// Define types for our resume data
export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

export interface ResumeData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    title: string;
    summary: string;
    photoUrl: string;
    website: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  languages: { language: string; proficiency: string }[];
  certifications: { name: string; issuer: string; date: string }[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  resetForm: () => void;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    title: '',
    summary: '',
    photoUrl: '',
    website: '',
    linkedin: '',
    github: '',
  },
  education: [
    {
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  experience: [
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  skills: [{ name: '', level: 3 }],
  projects: [
    {
      title: '',
      description: '',
      technologies: '',
      link: '',
    },
  ],
  languages: [{ language: '', proficiency: '' }],
  certifications: [{ name: '', issuer: '', date: '' }],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');

  const updateResumeData = (data: Partial<ResumeData>) => {
    setResumeData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const resetForm = () => {
    setResumeData(defaultResumeData);
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResumeData,
        selectedTemplate,
        setSelectedTemplate,
        resetForm,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};