import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, preview, alt = '' }) => {
	return (
		<div className="card-overlay">
			<img src={image} alt={alt || title} />
			<div className="card-overlay__text">
				<h3>{title}</h3>
				<p>{preview}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
