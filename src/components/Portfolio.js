import React from 'react';

function Portfolio({ projects }) {
    // TODO: Add style classes
    return(
            <div>
                {projects.map((project) =>(
                            <div key= {project.id} className='card'>
                                <div className='card-image'>
                                    <a href={project.deployment}>
                                    <img src={project.image}  alt='Project cover'></img>
                                    </a>
                                </div>
                                <div className='card-content'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <h4>Languages & Packages used</h4>
                                    <p>{project.framework}</p>
                                </div>
                                <div className='link-left'>
                                    <a href={project.repo}><button>Visit Repository</button></a>
                                </div>
                                <div className='link-right'>
                                    <a href={project.deployment}><button>Visit Deployment</button></a>
                                </div>
                            </div>
                    )
                )}
            </div>  
    );
}

export default Portfolio;