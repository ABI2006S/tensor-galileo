import React from 'react';
import Link from 'next/link';
import './privacy.css';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-container">
      <div className="privacy-card animate-fade-in">
        <header className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="reveal-delay-100">Last Updated: 16/03/2026</p>
        </header>

        <section className="privacy-content">
          <p>
            Welcome to <strong>Lumefx Presets</strong> ("we", "our", "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>lumefxpresets.store</strong> and purchase our digital products.
          </p>
          <p>
            By using our website, you agree to the terms of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>When you make a purchase or contact us, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Billing details</li>
            <li>Payment information (processed securely via third-party payment gateways)</li>
          </ul>

          <h3>Non-Personal Information</h3>
          <p>We may automatically collect:</p>
          <ul>
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Date and time of access</li>
          </ul>
          <p>This information helps us improve our website and services.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Process purchases and deliver digital products</li>
            <li>Provide customer support</li>
            <li>Send order confirmations and download instructions</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and unauthorized transactions</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Payment Processing</h2>
          <p>
            All payments on <strong>lumefxpresets.store</strong> are processed securely through trusted third-party payment providers.
          </p>
          <p>We do not store complete payment card details on our servers.</p>
          <p>Payment providers may process your data according to their own privacy policies.</p>

          <h2>4. Digital Product Delivery</h2>
          <p>All products sold are digital products only.</p>
          <p>After successful payment, customers receive:</p>
          <ul>
            <li>Instant access to download purchased files</li>
          </ul>
          <p>No physical products are shipped.</p>

          <h2>5. Refund Policy Overview</h2>
          <p>Due to the nature of digital products:</p>
          <ul>
            <li>All sales are final after download or access</li>
            <li>Refunds are generally not provided</li>
          </ul>
          <p>
            If you face technical issues, contact: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a>
          </p>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>We may use cookies to:</p>
          <ul>
            <li>Improve user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
          </ul>
          <p>You can disable cookies through your browser settings.</p>

          <h2>7. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul>
            <li>Payment processing</li>
            <li>Website analytics</li>
            <li>Hosting</li>
          </ul>
          <p>These providers may access limited data only to perform their services.</p>

          <h2>8. Data Security</h2>
          <p>We implement reasonable security measures to protect your data.</p>
          <p>However, no online system is 100% secure. By using our website, you acknowledge this risk.</p>

          <h2>9. Children's Information</h2>
          <p>Our services are not intended for individuals under 13 years of age.</p>
          <p>We do not knowingly collect data from children.</p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>We may update this policy at any time. Updates will be posted on this page with a revised date.</p>

          <hr style={{ margin: '3rem 0', opacity: 0.1 }} />

          <h1 className="privacy-title" style={{ fontSize: '1.8rem' }}>Digital Delivery Policy</h1>
          <p>Last Updated: 16/03/2026</p>
          <p>This policy explains how digital products are delivered.</p>

          <h2>1. Nature of Products</h2>
          <p>All products on <strong>lumefxpresets.store</strong> are:</p>
          <ul>
            <li>100% digital</li>
            <li>Designed for creative/editing purposes</li>
          </ul>
          <p>No physical items are shipped.</p>

          <h2>2. Delivery Method</h2>
          <p>After successful payment, you will receive:</p>
          <ul>
            <li>A download link on the confirmation page</li>
            <li>OR a download link via email</li>
          </ul>
          <p>Make sure your email is entered correctly.</p>

          <h2>3. Delivery Time</h2>
          <ul>
            <li>Usually instant delivery</li>
            <li>May take a few minutes depending on payment/network conditions</li>
          </ul>

          <h2>4. Customer Responsibility</h2>
          <p>Customers are responsible for:</p>
          <ul>
            <li>Downloading purchased files</li>
            <li>Storing files securely</li>
            <li>Ensuring device/software compatibility</li>
          </ul>

          <h2>5. Access Issues</h2>
          <p>If you face issues such as missing download links, file errors, or access problems, contact: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a></p>

          <hr style={{ margin: '3rem 0', opacity: 0.1 }} />

          <h1 className="privacy-title" style={{ fontSize: '1.8rem' }}>Refund Policy</h1>
          <p>Last Updated: 16/03/2026</p>
          <p>Thank you for purchasing from Lumefx Presets.</p>

          <h2>1. Digital Product Policy</h2>
          <p>All products are digital and delivered electronically. Because digital files cannot be returned, all sales are final after download or access.</p>

          <h2>2. No Refund After Download</h2>
          <p>Once files are downloaded, accessed, or delivered, we do not provide refunds, cancellations, or exchanges.</p>

          <h2>3. Technical Issues</h2>
          <p>If you experience broken download links, corrupted files, missing files, or access problems, contact us for assistance. We will fix the issue or provide replacement access if needed.</p>
          <p>📧 <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a></p>

          <h2>4. Exceptional Cases</h2>
          <p>Refunds may be considered only in rare cases such as serious technical failure or duplicate payments. All requests are reviewed individually.</p>

          <h2>5. Customer Support</h2>
          <p>
            Business Name: Lumefx Presets<br />
            Website: lumefxpresets.store<br />
            Email: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a><br />
            Country: India
          </p>

          <h2>6. Policy Updates</h2>
          <p>We may update this Refund Policy at any time. Changes will be reflected on this page.</p>
        </section>

        <footer className="privacy-footer">
          <Link href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </footer>
      </div>
    </main>
  );
}
