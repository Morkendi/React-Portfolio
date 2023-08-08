import React from 'react';
// Import Profile Image
import Profile from '../assets/images/avatar.jpg'

function About() {
    return (
        // TODO: Add style classes
        <section>
            <div className='p-3 m-2'>
                <h1 className='pb-1 border-bottom border-dark border-3' style={{color: '#1B263B'}}>
                    About Me
                </h1>
            </div>
            {/* Container */}
            <div className='p-3'>
                <div className='d-flex align-items-center'>
                    {/* Profile Picture */}
                    <div className='px-4'>
                        {/* Set image settings */}
                        <img src={Profile}  className='img-thumbnail rounded-circle' alt='Profile'/>
                    </div>
                    {/* Intro Text */}
                    <p className='pe-3 ps-2 flex-grow-1' style={{textAlign: 'justify', fontSize: '18px'}}>
                    Hello everyone! My name is Daniel. I am a technology enthusiast starting my career as a full stack developer. <br />
                    I am a recent graduate of Tec de Monterrey Bootcamps, where I learned a strong foundation of both front and back end languages, such as HTML, CSS, JavaScript, MySQL, NoSQL, Node.js, React.js, among others. This experience helped me develop a strong philosophy of writing clean, efficient, and scalable code. <br />
                    I am also a student of Computer Systems and Telecommunications Engineering at the Universidad Iberoamericana, with an expected graduation date of 2026. My experiences here have given me a strong work ethic and fostered my passion for technology and software development. <br />
                    Feel free to browse my work in this portfolio and don't hesitate to contact me if you want to get in touch with me!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;