import React from 'react';

function Portfolio({ projects }) {
    return(
            <div className='container'>
                {/* Define as grid */}
                <div className='row gap-3'>
                    {/* Render each Project from "ProjectList" */}
                {projects.map((project) =>(
                            // Render each project as a card element
                            <div key= {project.id} className='col-lg-5 card'>
                                {/* Image thumbnail */}
                                <div className='card-img-top'>
                                    <a href={project.deployment}>
                                    <img src={project.image} className='pt-3 img-fluid' alt='Project cover'></img>
                                    </a>
                                </div>
                                {/* Project information */}
                                <div className='card-body'>
                                    <h3 className='card-title'>{project.title}</h3>
                                    <p className='card-text'>{project.description}</p>
                                    <h4 className='card-text'>Languages & Packages used</h4>
                                    <p className='card-text'>{project.framework}</p>
                                </div>
                                {/* Button links */}
                                <div className='d-flex justify-content-evenly pb-3'>
                                    <a href={project.repo}><button className='btn' style={{backgroundColor: '#1B263B', color: '#E0E1DD', fontSize: '19px'}}>Visit Repository</button></a>
                                    <a href={project.deployment}><button className='btn' style={{backgroundColor: '#1B263B', color: '#E0E1DD', fontSize: '19px'}}>Visit Deployment</button></a>
                                </div>
                            </div>
                    ))};
                </div>
            </div>  
    );
}

export default Portfolio;