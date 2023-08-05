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
            return <About />
        }
    };

    return (
        // TODO: Add style classes
        <div>
        <div className='title'>
            <a className='profile-link' href='https://github.com/Morkendi'>
                <span>
                    Daniel Sanchez Gutierrez
                </span>
            </a>
        </div>
        <NavBar 
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
        />
        <main>
            <div>{renderSection(currentSection)}</div>
        </main>
        </div>
    );
};

export default Header;