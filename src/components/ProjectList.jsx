import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectList.module.css"

function ProjectList({ projects }) {
    {/* Accept an array only */}
    {/*Project cards should be rendered inside here */}
    return (
       <div className={styles.ProjectList}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageURL}
                />
            ))}
        </div>
    );
};

export default ProjectList