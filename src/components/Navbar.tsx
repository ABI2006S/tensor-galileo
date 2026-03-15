import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="navbar-wrapper animate-fade-in">
            <div className="container navbar-pill-container">
                <div className="navbar-floating-pill">
                    <div className="navbar-logo">
                        <Image src="/logo.jpeg" alt="LumeFX Logo" width={48} height={48} className="logo-img" />
                    </div>
                    <div className="navbar-links">
                        <a href="#">Home</a>
                        <a href="#bundle">What&apos;s Inside</a>
                        <a href="#preview">Samples</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="navbar-cta">
                        <button className="btn-primary btn-nav" onClick={() => document.getElementById('pricing')?.scrollIntoView()}>
                            Get Bundle
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
