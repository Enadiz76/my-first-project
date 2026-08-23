import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, preview, alt = '', repo }) => {
	return (
		<div className="card-overlay">
			<img src={image} alt={alt || title} />
			<div className="card-overlay__text">
				<h3>{title}</h3>
				<p>{preview}</p>
				{repo && (
					<a href={repo} className="card-overlay_link" target="_blank" rel="noopener noreferrer">
					View Project
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
