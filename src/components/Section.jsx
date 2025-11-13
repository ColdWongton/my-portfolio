import React from 'react';

// Reverted: Removed 'text-left' so standard sections are centered again
export const Section = ({ id, title, icon, children, className = "max-w-4xl" }) => (
  <section id={id} className="py-20 bg-gray-800 odd:bg-gray-900">
    {/* Kept className prop so we can override width for specific sections */}
    <div className={`container mx-auto px-6 ${className}`}>
      <div className="flex items-center mb-8">
        {icon}
        <h2 className="text-3xl font-bold text-white ml-3">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;