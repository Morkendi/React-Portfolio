import React from 'react';

function NavBar(props) {
    const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        // TODO: Add style classes
        <nav className='pt-2'>
            <ul className='nav nav-pills justify-content-center' style={{fontSize: '25px'}}>
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