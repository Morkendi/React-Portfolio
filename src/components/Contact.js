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
        <section className='contact-form'>
            <div className='flex-row'>
                <h2 className='section-title'>Get in touch!</h2>
            </div>

            {/* Personal info section */}
            <div className='personal-info'>
                <div>
                    <h3>Hello there!</h3>
                    <p>Want to get in touch?</p>
                    <form className='contact-form'>
                        {/* Name field */}
                        <label htmlFor='contact-name'>Name</label>
                        <input 
                        value={username}
                        name='username'
                        onChange={handleInputChange}
                        type='text'
                        id='contact-name'
                        placeholder='Write your name here'
                        ></input>

                        {/* E-mail field */}
                        <label htmlFor='contact-email'>e-mail</label>
                        <input 
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        id='contact-email'
                        placeholder='Write your e-mail'
                        ></input>

                        {/* Message field */}
                        <label htmlFor='contact-msg'>Your message</label>
                        <textarea
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        type='message'
                        id='contact-msg'
                        placeholder='Write your message!'
                        ></textarea>
                        <button
                            type='button' onClick={handleFormSubmit}
                        >Submit</button>
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