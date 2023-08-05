import React from 'react';

function Footer() {
    return (
        // TODO: Add style classes
        <footer className='footer'>
            <div className='content'>
                <p>Made by: Daniel Sanchez Gutierrez</p>
                <a className='repos-link' href='https://github.com/Morkendi?tab=repositories'>
                    <span>
                        GitHub
                    </span>
                </a>
                <a className='linkedIn-link' href='https://www.linkedin.com/in/daniel-sagu/'>
                    <span>
                        LinkedIn
                    </span>
                </a>
                <a className='insta-link' href='https://www.instagram.com/morkendi/'>
                    <span>
                        Instagram
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;