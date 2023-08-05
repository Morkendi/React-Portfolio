import React from 'react';
// Import Profile Image
import Profile from '../assets/images/avatar.jpg'

function About() {
    return (
        // TODO: Add style classes
        <section>
            <div>
                <h1>
                    About Me
                </h1>
            </div>
            {/* Container */}
            <div className='info-container'>
                {/* Intro Text */}
                <div className='intro-text'>
                    {/* Profile Picture */}
                    <div className='personal-img'>
                        {/* Set image settings */}
                        <img src={Profile} alt='Profile'/>
                    </div>
                    <p>
                    Hello everyone! Welcome to my personal portfolio built with React. My name is Daniel, I am a student of Computer Systems and Telecommunications Engineering. I joined this bootcamp to expand my knowledge of software development in order to be more competitive in the job market. I hope you like what you see!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;