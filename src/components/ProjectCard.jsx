import { useState } from "react";
import placeHolderImage from "../images/101806.jpg"
import styles from "../styles/ProjectCard.module.css"

function ProjectCard({ title, description, imageURL }) {
    {/* Accept parameters to modify the Project card based on title and description */}

    const displayImage = imageURL ? imageURL : placeHolderImage;
    return (
        <div className={styles.ProjectCard}>
            <img 
                src={displayImage} 
                alt={title || "Project preview"} 
                className="project-image"
            />
            
            <div className="project-details">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard