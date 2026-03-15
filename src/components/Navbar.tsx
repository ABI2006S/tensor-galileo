import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar-wrapper animate-fade-in">
            <div className="container navbar-pill-container">
                <div className={`navbar-floating-pill ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="navbar-logo">
                        <Image src="/logo.jpeg" alt="LumeFX Logo" width={48} height={48} className="logo-img" />
                    </div>
                    
                    <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <div className={`navbar-links ${isMenuOpen ? 'mobile-active' : ''}`}>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#bundle" onClick={() => setIsMenuOpen(false)}>What&apos;s Inside</a>
                        <a href="#preview" onClick={() => setIsMenuOpen(false)}>Samples</a>
                        <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                        <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                        
                        <div className="mobile-only-cta">
                             <button className="btn-primary" onClick={() => {
                                 document.getElementById('pricing')?.scrollIntoView();
                                 setIsMenuOpen(false);
                             }}>
                                Get Bundle
                            </button>
                        </div>
                    </div>

                    <div className="navbar-cta desktop-only">
                        <button className="btn-primary btn-nav" onClick={() => document.getElementById('pricing')?.scrollIntoView()}>
                            Get Bundle
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
