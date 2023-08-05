import React from 'react';

function NavBar(props) {
    const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        // TODO: Add style classes
        <div className='section-list'>
            <ul>
                {sections.map((section) => (
                    <li
                        className= {
                            props.currentSection === section ? 'nav-item is-active' : 'nav-item'
                        }
                        key= {section}
                        >
                        <a
                        href={'#' + section.toLowerCase()}
                        onClick={() => props.handleSectionChange(section)}
                        className={
                            props.currentSection === section ? 'nav-link active' : 'nav-link'
                        }
                        >
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ); 
}

export default NavBar;