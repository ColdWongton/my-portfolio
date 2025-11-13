import React, { useState, useEffect } from 'react'; 
import { Section } from './Section';
import { userProfile, skillsList } from './data';
import { UserIcon, StarIcon, MailIcon, GithubIcon, LinkedinIcon } from './Icons';
import WorldMapBackground from './WorldMapBackground'; 

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = `Hi, I'm ${userProfile.name}`;
  const splitIndex = "Hi, I'm ".length;

  useEffect(() => {
    setTypedText(''); 
    setIsTyping(true);
    let index = 1; 
    let intervalId = null; 

    const timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 100); 
    }, 500); 

    return () => {
      clearTimeout(timerId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fullText]);

  const part1 = typedText.substring(0, splitIndex);
  const part2 = typedText.substring(splitIndex);

  const smoothScrollTo = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let startTime = null;
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = timeElapsed / duration;
      const ease = run < 0.5 ? 4 * run * run * run : 1 - Math.pow(-2 * run + 2, 3) / 2;
      const newPosition = startPosition + distance * ease;
      window.scrollTo(0, newPosition);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const handleScroll = (e) => {
    e.preventDefault(); 
    smoothScrollTo('about');
  };

  return (
    <section className="relative bg-gray-900 text-white min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      <WorldMapBackground />
      <div className="relative z-10 container mx-auto px-6 py-20 text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 min-h-[86px] md:min-h-[112px]">
          {part1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            {part2}
          </span>
          <span className={`inline-block w-1 ml-1 bg-indigo-400 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}>
            &nbsp;
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{userProfile.title}</p>
        <div className="flex justify-center space-x-4 pointer-events-auto">
          <a 
            href="#about"
            onClick={handleScroll}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      icon={<UserIcon className="w-8 h-8 text-indigo-400" />}
      className="max-w-7xl" 
    >
      <div className="flex flex-col md:flex-row items-center gap-24">
        
        {/* PROFILE PICTURE */}
        <div className="relative shrink-0 group">
          <div className="absolute inset-[-10px] rounded-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#818cf8_360deg)] opacity-70 blur-sm"></div>
          <div className="absolute inset-[-10px] rounded-full animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_0_300deg,#c084fc_360deg)] opacity-70 blur-sm"></div>
          <div className="absolute inset-[-10px] rounded-full animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_300deg,#22d3ee_360deg)] opacity-60 blur-md"></div>
          
          <div className="relative w-64 h-64 p-2 rounded-full overflow-hidden border-4 border-gray-900 z-10 bg-gray-900">
            <img 
              src={`${import.meta.env.BASE_URL}profile.png`} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>

        <div className="flex-1 text-left">
           <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p className="whitespace-pre-line">
              {userProfile.about}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="Skills" icon={<StarIcon className="w-8 h-8 text-indigo-400" />}>
      <div className="flex flex-wrap gap-3"> 
        {skillsList.map((skill) => (
          <span key={skill} className="bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" icon={<MailIcon className="w-8 h-8 text-indigo-400" />}>
      <p className="text-gray-300 text-lg mb-6 text-center"> 
        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-8 mt-10"> 
          <a href={userProfile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex flex-col items-center">
            <GithubIcon className="w-8 h-8 mb-1" />
            GitHub
          </a>
          <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex flex-col items-center">
            <LinkedinIcon className="w-8 h-8 mb-1" />
            LinkedIn
          </a>
        </div>
    </Section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
}