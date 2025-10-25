import React from "react";

// Reusable Project Card Component
function ProjectCard(props) {
    return (
        <div className="project-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
}

function Projects() {
    // Array of projects
    const projectList = [
        {
            id: 1,
            title: 'Todo App',
            description: 'A simple todo application built with React',
            link: '#'
        },
        {
            id: 2,
            title: 'Weather App',
            description: 'Weather forecast application using API',
            link: '#'
        },
        {
            id: 3,
            title: 'Recipe Finder',
            description: 'Find and save your favorite recipes',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="section">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projectList.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                     />
                ))}
            </div>
        </section>
    );
}

export default Projects;