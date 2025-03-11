import React from "react";

interface PersonalInfoProps {
  resumeData: {
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      title: string;
      photoUrl: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
      website: string;
      linkedin: string;
      github: string;
      summary: string;
    };
  };
  handlePersonalInfoChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  resumeData,
  handlePersonalInfoChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {/* First Name */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={resumeData.personalInfo.firstName}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 "
          placeholder="John"
        />
      </div>

      {/* Last Name */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={resumeData.personalInfo.lastName}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="Doe"
        />
      </div>

      {/* Email */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={resumeData.personalInfo.email}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="john.doe@example.com"
        />
      </div>

      {/* Phone */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={resumeData.personalInfo.phone}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Professional Title */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Professional Title
        </label>
        <input
          type="text"
          name="title"
          value={resumeData.personalInfo.title}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="Frontend Developer"
        />
      </div>

      {/* Photo URL */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Photo URL
        </label>
        <input
          type="text"
          name="photoUrl"
          value={resumeData.personalInfo.photoUrl}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      {/* Address */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          value={resumeData.personalInfo.address}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="123 Main St"
        />
      </div>

      {/* City */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          City
        </label>
        <input
          type="text"
          name="city"
          value={resumeData.personalInfo.city}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="New York"
        />
      </div>

      {/* State */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          State
        </label>
        <input
          type="text"
          name="state"
          value={resumeData.personalInfo.state}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="NY"
        />
      </div>

      {/* Zip Code */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Zip Code
        </label>
        <input
          type="text"
          name="zipCode"
          value={resumeData.personalInfo.zipCode}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="10001"
        />
      </div>

      {/* Country */}
      <div className="relative group">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Country
        </label>
        <input
          type="text"
          name="country"
          value={resumeData.personalInfo.country}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="United States"
        />
      </div>

      {/* Website */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Website
        </label>
        <input
          type="url"
          name="website"
          value={resumeData.personalInfo.website}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="https://yourwebsite.com"
        />
      </div>

      {/* LinkedIn */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          LinkedIn
        </label>
        <input
          type="url"
          name="linkedin"
          value={resumeData.personalInfo.linkedin}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="linkedin.com/in/johndoe"
        />
      </div>

      {/* GitHub */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          GitHub
        </label>
        <input
          type="url"
          name="github"
          value={resumeData.personalInfo.github}
          onChange={handlePersonalInfoChange}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                     placeholder-gray-400 focus:placeholder-transparent 
                     focus:border-indigo-700 focus:bg-white 
                     transition-all duration-300 rounded-lg 
                     w-full px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          placeholder="github.com/johndoe"
        />
      </div>

      {/* Summary */}
      <div className="relative group md:col-span-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-2 transition-colors 
                         duration-300 group-focus-within:text-indigo-700"
        >
          Professional Summary
        </label>
        <textarea
          name="summary"
          value={resumeData.personalInfo.summary}
          onChange={handlePersonalInfoChange}
          rows={4}
          className="bg-white/70 backdrop-blur-lg border border-gray-300 
                    placeholder-gray-400 focus:placeholder-transparent 
                    focus:border-indigo-700 focus:bg-white 
                    transition-all duration-300 rounded-lg 
                    w-full px-4 py-3 resize-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Write a brief summary of your professional background..."
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
