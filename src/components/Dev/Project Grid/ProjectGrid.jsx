import React from "react";
import './ProjectGrid.css';
import MarqueeRow from '../Marquee Row/MarqueeRow';
import ProjectCard from '../Project Card/ProjectCard';

const ProjectGrid = () => {
  const projectRows = [
    [
      {
        title: 'Portfolio Landing',
        preview: 'A responsive personal landing page with animated sections and project highlights.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Task Tracker',
        preview: 'A productivity app for tracking daily tasks, priorities, and completion states.',
        image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Weather Dashboard',
        preview: 'A dashboard that shows forecast, location data, and quick weather summaries.',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Recipe Finder',
        preview: 'Search and browse recipes with filters, favorites, and ingredient previews.',
        image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=900&q=80',
      },
    ],
    [
      {
        title: 'Fitness Coach',
        preview: 'A lightweight app for workout plans, exercise tracking, and progress snapshots.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Expense Dashboard',
        preview: 'A finance view with monthly spending trends and category breakdowns.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Music Library',
        preview: 'An immersive browsing experience for albums, playlists, and featured tracks.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Study Notes',
        preview: 'A clean notes workspace with tagging, search, and quick references.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      },
    ],
  ];

  return (
    <div className="project-grid">
      {projectRows.map((row, rowIndex) => (
        <MarqueeRow
          key={`project-row-${rowIndex}`}
          items={row}
          speed={rowIndex === 0 ? '28s' : '34s'}
          renderItem={(project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              image={project.image}
              title={project.title}
              preview={project.preview}
              alt={project.title}
            />
          )}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;