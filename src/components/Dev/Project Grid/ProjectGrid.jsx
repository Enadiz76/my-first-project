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
        repo: 'https://github.com/Enadiz76/my-first-project',
      },
,      {
        title: 'Task Tracker',
        preview: 'A productivity app for tracking daily tasks, priorities, and completion states.',
        image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=900&q=80',
        repo: '',
      },
      {
        title: 'Voting Prediction',
        preview: 'A data-driven web app predicting election outcomes based on historical trends and polling data.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        repo: 'https://github.com/CorporaCorporate/COMP-3610-Project',
      },
      {
        title: 'Children Speech Corpus',
        preview: 'A research project collecting and analyzing speech data from children for linguistic studies.',
        image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4ncyUyMGNsYXNzfGVufDB8fDB8fHww',
        repo: ''
      },
    ],
    [
      {
        title: 'Workout Companion',
        preview: 'A lightweight web app for workout plans, exercise tracking, and progress snapshots.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
        repo: '',
      },
      {
        title: 'e-Plant Shopping',
        preview: 'An e-commerce platform for buying and selling plants with user reviews and care tips.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        repo: 'https://github.com/Enadiz76/e-plantShopping',
      },
      {
        title: 'Spotify Clone',
        preview: 'An ongoing spotify clone project for delivering and streaming music to your device',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
        repo: '',
      },
      {
        title: 'Staff Allocation System',
        preview: 'A web application for managing staff allocation, schedules, and project assignments efficiently.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        repo: 'https://github.com/Unable-To-Can/StaffAllocationsA2',
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
              repo={project.repo}
              alt={project.title}
            />
          )}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;