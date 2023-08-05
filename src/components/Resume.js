import React from 'react';
// Import Resume
import ResumePDF from '../assets/PDF/Resume.pdf'

function Resume() {
    return(
        // TODO: Add style classes
        // First column
        <div>
            <div>
                <h2>My Resume</h2>
                <a 
                href={ResumePDF}
                download='CV-DSG-PDF'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <button>
                    {/* TODO: Add download icon */}
                    <span></span>
                    <span>Download Resume</span>
                    </button>
                </a>
            </div>
            {/* Second column */}
            <div>
                <h2>My Skills</h2>
                <ul>
                    <h3>Front-End</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>API</li>
                    <li>BootStrap</li>
                    <li>JQuery</li>
                    <h3>Back-End</h3>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>ORM</li>
                    <li>ODM</li>
                    <li>MVC</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                    <h3>Other Skills</h3>
                    <li>Progressive Web Applications (PWA)</li>
                    <li>React</li>
                    <li>MERN</li>
                    <li>State</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;