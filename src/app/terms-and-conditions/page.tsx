import React from 'react';
import Link from 'next/link';
import './terms.css';

export default function TermsAndConditions() {
  return (
    <main className="terms-container">
      <div className="terms-card animate-fade-in">
        <header className="terms-header">
          <h1 className="terms-title">Terms and Conditions</h1>
          <p className="reveal-delay-100">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="terms-content">
          <p>
            Welcome to <strong>Lumefx Presets</strong>. These Terms and Conditions govern your use of our website <strong>lumefxpresets.store</strong> and the purchase of digital products offered on our platform.
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.
          </p>

          <h2>1. About Lumefx Presets</h2>
          <p>
            Lumefx Presets provides <strong>digital products and creative resources</strong> intended for content creators, video editors, and digital professionals.
          </p>
          <p>All products available on our website are <strong>digital downloads</strong>.</p>
          <p>
            <strong>Business Details:</strong><br />
            Business Name: Lumefx Presets<br />
            Website: lumefxpresets.store<br />
            Email: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a><br />
            Country of Operation: India
          </p>

          <h2>2. Digital Products</h2>
          <p>
            All items sold on <strong>lumefxpresets.store</strong> are <strong>digital products</strong>.
          </p>
          <p>
            After successful payment confirmation, customers will receive access to download the purchased files.
          </p>
          <p>No physical items will be shipped.</p>

          <h2>3. License and Usage</h2>
          <p>
            When purchasing products from Lumefx Presets, you are granted a <strong>non-exclusive, non-transferable license</strong> to use the digital assets for personal or commercial creative projects.
          </p>
          <p><strong>You may:</strong></p>
          <ul>
            <li>Use the products in personal projects</li>
            <li>Use the products in client projects</li>
            <li>Use the products for video or digital content creation</li>
          </ul>
          <p><strong>You may not:</strong></p>
          <ul>
            <li>Resell or redistribute the products</li>
            <li>Share the files publicly or privately for free</li>
            <li>Upload the files to marketplaces or file-sharing platforms</li>
            <li>Claim the products as your own</li>
          </ul>
          <p>Unauthorized distribution is strictly prohibited.</p>

          <h2>4. Pricing</h2>
          <p>
            All prices displayed on the website are listed in <strong>Indian Rupees (INR)</strong> unless stated otherwise.
          </p>
          <p>Prices may change at any time without prior notice.</p>

          <h2>5. Payment</h2>
          <p>Payments are securely processed through trusted third-party payment providers.</p>
          <p>Lumefx Presets does not store complete payment card information on its servers.</p>
          <p>All transactions are subject to verification and approval by the payment provider.</p>

          <h2>6. Refund Policy</h2>
          <p>
            Due to the nature of digital products, <strong>all sales are final once the product has been downloaded or accessed</strong>.
          </p>
          <p>Refunds are generally not provided after successful delivery of the digital files.</p>
          <p>
            If you experience technical issues accessing your files, please contact our support team at: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a>
          </p>
          <p>We will review and assist with resolving legitimate access issues.</p>

          <h2>7. Intellectual Property</h2>
          <p>
            All digital assets, graphics, files, and materials provided on this website remain the intellectual property of <strong>Lumefx Presets</strong>.
          </p>
          <p>Unauthorized copying, resale, redistribution, or modification for resale purposes is strictly prohibited.</p>
          <p>Violation of intellectual property rights may result in legal action.</p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Lumefx Presets shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our digital products.
          </p>
          <p>
            Users are responsible for ensuring compatibility of files with their software and editing tools.
          </p>

          <h2>9. Website Availability</h2>
          <p>
            We strive to ensure that our website remains accessible at all times. However, we do not guarantee uninterrupted access and may temporarily suspend the website for maintenance or updates.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            Lumefx Presets reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with the revised date.
          </p>
          <p>Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>

          <h2>11. Governing Law</h2>
          <p>These Terms and Conditions shall be governed and interpreted in accordance with the laws of <strong>India</strong>.</p>

          <h2>12. Contact Information</h2>
          <p>If you have any questions regarding these Terms and Conditions, please contact us:</p>
          <p>
            Business Name: Lumefx Presets<br />
            Website: lumefxpresets.store<br />
            Email: <a href="mailto:lumefxpresets@gmail.com">lumefxpresets@gmail.com</a><br />
            Country: India
          </p>
        </section>

        <footer className="terms-footer">
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
