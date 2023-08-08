import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'username') {
            setUsername(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email) || !username) {
            setErrorMsg('username or email is invalid');
            return;
        }
        
        if (!setMessage(message)) {
            setErrorMsg('Must write a message!');
            return;
        }

        setUsername('');
        setMessage('');
        setEmail('');
    };

    return (
        // TODO: Add style classes
        <section className='p-3 m-2'>
            <div>
                <h1 className='pb-1 border-bottom border-dark border-3' style={{color: '#1B263B'}}>Get in touch!</h1>
            </div>

            {/* Personal info section */}
            <div className='personal-info'>
                <div className='d-flex align-items-center'>
                    <div className='d-flex flex-column align-items-center flex-fill'>
                        <h1>Hello there!</h1>
                        <h2 className='mb-5'>Want to get in touch?</h2>
                        <p className='fs-2'><i className='bi bi-geo-alt-fill pe-2'></i>Mexico City, Mexico</p>
                        <p className='fs-2'><i className='bi bi-envelope-fill pe-3'></i>morkendi@gmail.com</p>
                        <p></p>
                    </div>
                    <form className='pt-4 contact-form flex-fill'>
                        <div className='d-flex flex-column'>
                        {/* Name field */}
                        <div>
                            <label className='form-label fs-3' htmlFor='contact-name'>Name</label>
                            <input 
                            className='form-control form-control-lg'
                            value={username}
                            name='username'
                            onChange={handleInputChange}
                            type='text'
                            id='contact-name'
                            placeholder='Write your name here'
                            ></input>
                        </div>

                        {/* E-mail field */}
                        <div>
                            <label className='form-label fs-3 pt-2' htmlFor='contact-email'>E-mail</label>
                            <input 
                            className='form-control form-control-lg'
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                            id='contact-email'
                            placeholder='Write your e-mail'
                            ></input>
                        </div>

                        {/* Message field */}
                        <div>
                            <label className='form-label fs-3 pt-2' htmlFor='contact-msg'>Your message</label>
                            <textarea
                            className='form-control form-control-lg'
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            type='message'
                            id='contact-msg'
                            placeholder='Write your message!'
                            ></textarea>
                        </div>
                        <button
                            className='btn mt-3 fs-3'
                            style={{backgroundColor: '#1B263B', color: '#E0E1DD'}}
                            type='button' 
                            onClick={handleFormSubmit}
                        >Submit</button>
                        </div>
                    </form>
                    
                </div>
                {errorMsg && (
                    <div>
                        <p className='error-msg'>{errorMsg}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;