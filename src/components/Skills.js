import React from "react";

function Skills() {
    // Array of skills - ES6 feature
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'];

    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;