import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLinkClick = (id: string) => {
        setIsMenuOpen(false);
        if (scrollToSection) {
            scrollToSection(id);
        }
    };

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
                        <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>Home</a>
                        <a href="#toolkit" onClick={(e) => { e.preventDefault(); handleLinkClick('toolkit'); }}>What&apos;s Inside</a>
                        <a href="#preview" onClick={(e) => { e.preventDefault(); /* Disabled as requested */ }} style={{ opacity: 0.5, cursor: 'not-allowed' }}>Samples</a>
                        <a href="#reviews" onClick={(e) => { e.preventDefault(); handleLinkClick('reviews'); }}>Reviews</a>
                        <a href="#pricing" onClick={(e) => { e.preventDefault(); handleLinkClick('pricing'); }}>Pricing</a>
                        
                        <div className="mobile-only-cta">
                             <button className="btn-primary" onClick={() => handleLinkClick('pricing')}>
                                Get Toolkit
                            </button>
                        </div>
                    </div>

                    <div className="navbar-cta desktop-only">
                        <button className="btn-primary btn-nav" onClick={() => handleLinkClick('pricing')}>
                            Get Toolkit
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
