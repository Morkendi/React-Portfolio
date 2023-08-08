import React from 'react';

function Footer() {
    return (
        // TODO: Add style classes
        // Container
        <footer className='fixed-bottom' style={{backgroundColor: '#415A77'}}>
            {/* Set items as rows */}
            <div className='d-flex justify-content-between align-items-center'>
                {/* Name and copyright */}
                <div className='ps-2'>
                    <p className='' style={{fontSize: 20, color: '#E0E1DD'}}>Daniel Sanchez Gutierrez <i className="bi bi-c-circle"></i></p>
                </div>
                {/* Social media Links */}
                <div className=''>
                    <a className='p-2 me-2' href='https://github.com/Morkendi?tab=repositories'>
                        <i className='bi bi-github' style={{fontSize: 40, color: '#E0E1DD'}}></i>
                    </a>
                    <a className='p-2 me-2' href='https://www.linkedin.com/in/daniel-sagu/'>
                        <i className="bi bi-linkedin" style={{fontSize: 40, color: '#E0E1DD'}}></i>
                    </a>
                    <a className='p-2 me-2' href='https://www.instagram.com/morkendi/'>
                        <i className="bi bi-instagram" style={{fontSize: 40, color: '#E0E1DD'}}></i>                
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;