'use client';
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import '@/public/styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid text-center">
                <p>Living, learning & leveling up one day at a time.</p>
                <div className='social-media'>
                    <a className='link-media' href="https://github.com/marianargabriel" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className='link-media' href="https://www.instagram.com/marianargabriel" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className='link-media' href="https://www.linkedin.com/in/marianagabriel/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className='link-media' href="mailto:marianaramalhaogabriel@gmail.com" target='_blank'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className='container-fluid copyright'>
                    <p className='text'>Developed by <a className='text-linked' href='https://marianargabriel.pt'>Mariana Gabriel</a></p>
                    <p>&copy; Mariana Gabriel - {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}