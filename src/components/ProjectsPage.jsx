import React from 'react';
import { Section } from './Section';
import { mockProjects } from './data';
import { CodeIcon, ExternalLinkIcon, GithubIcon } from './Icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-400 mb-4 whitespace-pre-line">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-700 text-indigo-300 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center"
          >
            Live Demo <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Projects" icon={<CodeIcon className="w-8 h-8 text-indigo-400" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};


// MAIN PAGE COMPONENT
export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}