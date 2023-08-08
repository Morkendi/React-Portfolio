import React from 'react';

function Portfolio({ projects }) {
    // TODO: Add style classes
    return(
            <div className=''>
                {projects.map((project) =>(
                            <div key= {project.id} className='col-6 card'>
                                <div className='card-img-top'>
                                    <a href={project.deployment}>
                                    <img src={project.image} style={{height: '500px'}} alt='Project cover'></img>
                                    </a>
                                </div>
                                <div className='card-body'>
                                    <h3 className='card-title'>{project.title}</h3>
                                    <p className='card-text'>{project.description}</p>
                                    <h4 className='card-text'>Languages & Packages used</h4>
                                    <p className='card-text'>{project.framework}</p>
                                </div>
                                <div className='d-flex justify-content-evenly'>
                                    <a href={project.repo}><button className='btn btn-primary'>Visit Repository</button></a>
                                    <a href={project.deployment}><button className='btn btn-primary'>Visit Deployment</button></a>
                                </div>
                            </div>
                    )
                )}
            </div>  
    );
}

export default Portfolio;