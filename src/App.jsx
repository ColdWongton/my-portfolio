import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // <-- 1. Import useLocation

// Import Pages
import HomePage from './components/HomePage';
import WorkExperiencePage from './components/WorkExperiencePage';
import ProjectsPage from './components/ProjectsPage';

// Import shared data and icons
import { userProfile } from './components/data';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, XIcon } from './components/Icons';

// --- (3) LAYOUT COMPONENTS ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
          {userProfile.name}
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


// --- (5) MAIN APP COMPONENT ---
export default function App() {
  const location = useLocation(); // <-- 2. Get the current route location

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header />
      <main>
        {/* 3. Add the key and the animation class here */}
        {/* The 'key' forces React to re-render this div when the path changes, triggering the animation */}
        <div key={location.pathname} className="animate-fade-in">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<WorkExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}