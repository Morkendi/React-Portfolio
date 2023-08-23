import React from 'react';
import Portfolio from './Portfolio';
// import images
import Img1 from '../assets/images/GoalHub.png';
import Img2 from '../assets/images/social-network_img.png';
import Img3 from '../assets/images/text-editor_img.png';
import Img4 from '../assets/images/sales-tracker_img.png';
import Img5 from '../assets/images/weather-dash_img.png';
import Img6 from '../assets/images/password_img.gif';

// Hardcode Project information
const projects = [
    {
        id: 0,
        title: 'GoalHub',
        image: Img1,
        description: 'Empower company employees to track departmental goals and personal achievements.',
        framework: 'React, Apollo, GraphQL, JWT',
        repo: 'https://github.com/mondragonSaiz/GoalHub',
        deployment: 'https://goalhub-5f7766233267.herokuapp.com/'
    },
    {
        id: 1,
        title: 'Social Network API',
        image: Img2,
        description: 'API built with MongoDB to manage a social network based on sharing thoughts.',
        framework: 'Express.js, Mongoose, moments.js, dotenv',
        repo: 'https://github.com/Morkendi/Social-Network-API',
        deployment: 'https://drive.google.com/file/d/1Joy_8rvpF6najoPZSOf01u4V4lhGwiJf/view'
    },    
    {
        id: 2,
        title: 'Text Editor',
        image: Img3,
        description: 'PWA text editor with offline functionality. Can be downloaded for a native app experience.',
        framework: 'Concurrently, Express.js, nodemon',
        repo: 'https://github.com/Morkendi/Text-Editor',
        deployment: 'https://text-editor-dsg-66e602809ddc.herokuapp.com/'
    },    
    {
        id: 3,
        title: 'Sales Tracker',
        image: Img4,
        description: 'Monitor sales, inventory & earnings on a sales team.',
        framework: 'Express.js, MySQL, Sequelize, Bcrypt, Handlebars.js, dotenv',
        repo: 'https://github.com/Morkendi/Sales-Tracker',
        deployment: 'https://sales-tracker-t4p2-f41e20adc513.herokuapp.com/login'
    },    
    {
        id: 4,
        title: 'Weather Dashboard',
        image: Img5,
        description: 'Look up weather data in specific cities with OpenWeather API.',
        framework: 'HTML, CSS, JavaScript',
        repo: 'https://github.com/Morkendi/Weather-Dashboard',
        deployment: 'https://morkendi.github.io/Weather-Dashboard/'
    },    
    {
        id: 5,
        title: 'Random Password Generator',
        image: Img6,
        description: 'Generate a randon password with options for upper & lower case letters, numbers and special characters.',
        framework: 'HTML, CSS, JavaScript',
        repo: 'https://github.com/Morkendi/Random-Password-Generator',
        deployment: 'https://morkendi.github.io/Random-Password-Generator/'
    },
]

function ProjectList() {
    return(
        <div className='p-3 m-2'>
            {/* Section Title */}
            <h1 className='pb-1 border-bottom border-dark border-3' style={{color: '#1B263B'}}>My projects</h1>
            {/* Render Portfolio Component */}
            <Portfolio projects={projects}/>
        </div>
    );
};

export default ProjectList;