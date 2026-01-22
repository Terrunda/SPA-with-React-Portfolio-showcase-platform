import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    {/* Accept an array only */}
    {/*Project cards should be rendered inside here */}
    return (
       <div className="project-list-container">
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