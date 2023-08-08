import React from 'react';
// Import Resume
import ResumePDF from '../assets/PDF/Resume.pdf'

function Resume() {
    return(
        <div className='p-3 m-2'>
            {/* Section Title */}
            <div>
                <h1 className='pb-1 border-bottom border-dark border-3' style={{color: '#1B263B'}}>My Resume</h1>
            </div>
            {/* Download button */}
            <div className='d-flex flex-wrap align-items-center'>
            <div className='flex-fill'>
                <div className='d-flex justify-content-center'>
                    <a 
                    href={ResumePDF}
                    download='CV-DSG-PDF'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <button type='download' className='btn btn-lg mx-2' style={{backgroundColor: '#1B263B', color: '#E0E1DD'}}>
                        <i className='bi bi-download pe-2'></i>
                        <span>Download Resume</span>
                        </button>
                    </a>
                </div>
            </div>
            {/* Skill list */}
            <div className='d-flex flex-wrap flex-fill flex-column align-items-center'>
            <h2 className='p-3'style={{color: '#1B263B'}} >My Skills</h2>
                <div>
                    <ul className='d-flex flex-fill'>
                        <div className='py-3 px-5 me-4' style={{backgroundColor: '#778DA9', border: '2px solid black'}}>
                            <h3>Front-End</h3>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>API</li>
                            <li>BootStrap</li>
                            <li>JQuery</li>
                        </div>
                        <div className='py-3 px-5 me-4' style={{backgroundColor: '#778DA9', border: '2px solid black'}}>
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
                        </div>
                        <div className='py-3 p-5 me-4' style={{backgroundColor: '#778DA9', border: '2px solid black'}}>
                            <h3>Other Skills</h3>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>React</li>
                            <li>MERN</li>
                            <li>React State</li>
                            <li>GraphQL</li>
                        </div>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Resume;