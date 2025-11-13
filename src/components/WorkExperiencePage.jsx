import React from 'react';
import { Section } from './Section';
import { mockExperience } from './data';
import { BriefcaseIcon } from './Icons';

// --- PAGE SECTION COMPONENTS ---

const ExperienceItem = ({ item }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-indigo-400">
      {/* ... */}
      <h3 className="text-xl font-bold text-white">{item.role}</h3>
      <p className="text-indigo-300 text-md mb-1">{item.company}</p>
      <p className="text-gray-500 text-sm mb-3">{item.duration}</p>

      {/* --- ADD 'whitespace-pre-line' HERE --- */}
      <p className="text-gray-400 whitespace-pre-line">
        {item.description}
      </p>

    </div>
  );
};

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience" icon={<BriefcaseIcon className="w-8 h-8 text-indigo-400" />}>
      <div className="relative">
        {mockExperience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function WorkExperiencePage() {
  return (
    <>
      <Experience />
    </>
  );
}