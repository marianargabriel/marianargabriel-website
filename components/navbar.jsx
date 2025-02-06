'use client';

import React from 'react';
import { useState } from 'react';

import '@/public/styles/navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/logos/codeTag.png"
                            alt="Mariana Gabriel"
                            width={70}
                            height={64} />
                    </a>
                    <div className={`nav-container ${menuOpen ? 'active' : ''}`}>
                        <a href="#about" className="nav-link">About Me</a>
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                        <a href="https://api.whatsapp.com/send?phone=351924306673" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-outline-primary btn-talkToMe">
                                Talk to Me
                            </button>
                        </a>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}