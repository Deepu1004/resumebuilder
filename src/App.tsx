import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TemplateSelection from "./components/TemplateSelection";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import { ResumeProvider } from "./context/ResumeContext";


function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/templates" element={<TemplateSelection />} />
              <Route path="/form/:templateId" element={<ResumeForm />} />
              <Route path="/preview/:templateId" element={<ResumePreview />} />

            </Routes>
          </div>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
