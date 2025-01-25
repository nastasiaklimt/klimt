import React from "react";
import { motion } from "framer-motion";

// Import components
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-light text-gray-900 bg-white">
      {/* Smooth page transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Project Showcases */}
        <ProjectShowcase />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;