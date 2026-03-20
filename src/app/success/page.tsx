import React from 'react';
import Link from 'next/link';
import './success.css';

export default function SuccessPage() {
    return (
        <main className="success-container">
            <div className="success-card animate-fade-in">
                <div className="success-icon p-2 bg-[#1a1a1a] rounded-full border border-[#333] mb-4 inline-flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h1 className="success-title">Payment Successful</h1>
                <p className="success-message">
                    Thank you for purchasing Lumefx Toolkit.<br />
                    Your download link has been sent to your email.
                </p>

                <div className="success-details">
                    <p><strong>Note:</strong> Please check your spam folder if you don&apos;t see the email within 5 minutes.</p>
                </div>

                <Link href="/" className="btn-primary mt-4">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
