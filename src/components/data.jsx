// src/components/data.jsx

// Make sure 'export' is here
export const userProfile = {
  name: "Isaac Wong",
  title: "Geospatial Developer and Analyst | GIS Enthusiast",
  email: "your.email@example.com",
  github: "https://github.com/ColdWongton",
  linkedin: "https://www.linkedin.com/in/isaac-wong-079b161b2/",
  about: `I am a passionate GIS developer and analyst with experience in geospatial data analysis/science, web mapping, and application development. 
  
  I hold a B.A. in Geography from McGill University, specializing in GIS & Remote Sensing and Economics. 
  Additionally, I have a strong foundation in programming languages such as JavaScript, R, and Python, and I enjoy leveraging these skills to create innovative geospatial solutions.
  
  Feel free to explore my experience and portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to connect or collaborate!`,

};

// And make sure 'export' is here
export const skillsList = [
  "JavaScript (ES6+) + HTML + CSS", "React.js", "Node.js", "Python", "R", "SQL (PostgreSQL + PostGIS)", "Git + GitHub", "REST APIs", "ESRI ArcGIS Pro + Enterprise + ArcPy", "QGIS", "Google Earth Engine", "ENVI", "FME Flow + Form", "AWS", "Tableau", "PowerBI", "Bash", "Cloud Compare", "Stata"
];

// And here
export const mockProjects = [
  {
    title: "McGill Biodiversity Atlas",
    description: `The McGill Biodiversity Atlas is a digital repository of biodiversity and environmental datasets and information about the University’s properties. The Atlas’ interactive map features species observation records, biodiversity-supporting spaces, as well as tree canopy and urban heat distribution. 
    
    The platform also documents McGill’s extensive biodiversity research, datasets, and a collection of multimedia stories—all aimed at supporting McGill’s goal of becoming a Nature Positive institution. Developed with open data and input from the community, the Atlas invites users to explore McGill's biodiversity and contribute to its monitoring and preservation.`,
    tags: ["ESRI ArcGIS Enterprise", "JavaScript", "HTML", "CSS", "Python", "ArcGIS Pro"],
    liveUrl: "https://arcgis.mcgill.ca/portal/apps/sites/#/mcgill-biodiversity-atlas",
    repoUrl: "#"
  },
  {
    title: "NCS Research Portal",
    description: `A web-based platform that visualizes the potential of natural climate solutions (NCS) globally. The portal features interactive maps and data visualizations that highlight areas suitable for NCS implementation, such as reforestation and wetland restoration. 
    
                  Developed using React.js, Leaflet.js, and D3.js for mapping and various other geospatial analysis tools, the platform aims to inform policymakers, researchers, and the public about the benefits and opportunities of NCS in mitigating climate change. The research was accomplished by researchers from The Nature Conservacy, McGill University, Panoma College, and LexUnit.`,
    tags: ["JavaScript", "HTML", "CSS", "Leaflet.js", "React.js", "ArcGIS Pro", "QGIS", "Python", "R"],
    liveUrl: "https://www.naturebasedsolutions.research.mcgill.ca/",
    repoUrl: "#"
  }
];

// And here
export const mockExperience = [
  {
    role: "Geospatial Research Assistant (Full-Time)",
    company: "Geographic Information Centre - McGill University",
    duration: "May 2025 - Present",
    description: `• Conducted geospatial consulting, research, and analytic services for different departments.

                  • Led and taught geospatial workshops for FME, Python, JavaScript, R (data visualization), ESRI (ArcGIS Pro, Online, and Enterprise apps such as Experience Builder and Sites), and QGIS. 
                  
                  • Developed, designed, and managed the McGill Biodiversity Atlas, an interactive geospatial web-based platform (ESRI Enterprise). 
                  
                  • Engineered the digitization/visualization of historical Montreal maps (1800s-2000s) with the ESRI Enterprise Image Server (Python), ArcGIS REST API, and ArcPy/Python Extension.`
  },
  {
    role: "Research Assisstant - ML Wealth Indexes",
    company: "Robinson Lab Group",
    duration: "Nov 2023 - Present",
    description: `• Spearheaded the end-to-end design creation, and development of an interactive online research portal leveraging JavaScript libraries such as React, Leaflet, D3.js, and AWS, enabling dynamic visualization and exploration of complex research findings.  Note: this project is awaiting research results before the complete website can be published.
                  
    • Performed statistical and data analysis between wealth indexes created through Machine Learning while also transforming data (GDAL, Rasterio, and Geopandas) and developing advanced interactive visualizations (ArcGIS Pro/ArcPy, Python, and R).`,
  },
  {
    role: "Learning Assistant - Data Science Workshops and Ateliers",
    company: "Computational and Data Systems Institute - McGill University",
    duration: "Nov 2023 - May 2025",
    description: `•	Provided live technical and analytical support during data science and machine learning workshops.
                  
                  •	Coding Ateliers Solutions Hub: investigated, analyzed, visualized, and provided consulting on hundreds of datasets and code (Python and R) for researchers and staff.

                  •	Taught and designed an introductory JavaScript workshops.`,
  },
  {
    role: "Front Desk Assistant",
    company: "Geographic Information Centre - McGill University",
    duration: "Aug 2024 - May 2025",
    description: `•	Provided concise and relatable customer service to clients regarding map printing, administrative requests for ArcGIS Enterprise, GNSS usage, and server/database access (SQL).
                  
                  •	Troubleshooted and provided consulting for GIS/Geospatial related inquiries and software problems.`,
  },

  {
    role: "Remote Sensing Data Intern",
    company: "GHGSat Inc.",
    duration: "May 2024 - Aug 2024",
    description: `•	Analyzed and interpreted thousands of satellite images to identify hundreds of methane emissions/plumes to further global environmental monitoring efforts.
                  
                  •	Precisely georeferenced hundreds of satellite images, ensuring high accuracy for pinpointing emissions and data mapping.`,
  },


];