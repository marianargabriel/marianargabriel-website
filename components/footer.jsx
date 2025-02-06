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
                <p className='text-slogan'>Living, learning & leveling up<br/>one day at a time.</p>
                <div className='social-media'>
                    <a className='link-media' href="https://github.com/marianargabriel" target="_blank">
                        <FontAwesomeIcon className='icon-media' icon={faGithub} />
                    </a>
                    <a className='link-media' href="https://www.instagram.com/marianargabriel" target='_blank'>
                        <FontAwesomeIcon className='icon-media' icon={faInstagram} />
                    </a>
                    <a className='link-media' href="https://www.linkedin.com/in/marianagabriel/" target="_blank">
                        <FontAwesomeIcon className='icon-media' icon={faLinkedinIn} />
                    </a>
                    <a className='link-media' href="mailto:gabrielrmariana@gmail.com" target='_blank'>
                        <FontAwesomeIcon className='icon-media' icon={faEnvelope} />
                    </a>
                </div>
                <div className='container-fluid copyright'>
                    <p>Developed by <a className='text-linked' href='https://marianargabriel.pt'>Mariana Gabriel</a></p>
                    <p>&copy; Mariana Gabriel - {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}