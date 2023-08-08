// Import Section Components
import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
import Resume from './Resume';

function Header() {
    const [currentSection, handleSectionChange] = useState('');

    // Switch case to render a page according to selection
    const renderSection = () => {
        switch(currentSection) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <ProjectList />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;

        default:
            // TODO: Set value back to 'About'
            return <ProjectList />
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-center' style={{backgroundColor: "#415A77"}}>
            <a href='https://github.com/Morkendi' className='text-decoration-none'>
                <h1 className='py-2' style={{color: '#E0E1DD'}}>Daniel Sanchez Gutierrez</h1>
            </a>
            </div>
            <NavBar 
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
            />
            <main>
            <div>{renderSection(currentSection)}</div>
            </main>
            <div className='mb-5 pb-3'></div>
        </div>
    );
};

export default Header;