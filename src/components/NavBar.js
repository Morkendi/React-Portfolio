import React from 'react';
import './styles.css'

function NavBar(props) {
    const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        <nav className='pt-2'>
            <ul className='nav nav-pills justify-content-center' style={{fontSize: '25px'}}>
                {/* Render each section */}
                {sections.map((section) => (
                    <li
                        className= {
                            props.currentSection === section ? 'nav-item active' : 'nav-item'
                        }
                        key= {section}
                        >
                        <a
                        href={'#' + section.toLowerCase()}
                        onClick={() => props.handleSectionChange(section)}
                        className={
                            props.currentSection === section ? 'nav-link active' : 'nav-link'
                        }
                        style={{color: '#1B263B', fontWeight: 'bold'}}
                        >
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    ); 
}

export default NavBar;