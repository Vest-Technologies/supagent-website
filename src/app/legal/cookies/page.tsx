'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function CookiePolicy() {
  return (
    <Container className="py-4 legal-content">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className="mb-4">Cookie Policy</h1>
          
          <section className="mb-4">
            <p className="text-muted mb-2">Last updated: March 2024</p>
            <p className="mb-3">This Cookie Policy explains how SupAgent ("we", "us", or "our") uses cookies and similar tracking technologies on our website. This policy is part of our commitment to transparency and protection of your privacy.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">What Are Cookies?</h2>
            <p className="mb-3">Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">How We Use Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            
            <h3 className="h5 mb-2">Essential Cookies</h3>
            <p className="mb-3">These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>
            
            <h3 className="h5 mb-2">Analytics Cookies</h3>
            <p className="mb-3">We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience. These cookies collect information anonymously.</p>
            
            <h3 className="h5 mb-2">Functionality Cookies</h3>
            <p className="mb-3">These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
            
            <h3 className="h5 mb-2">Marketing Cookies</h3>
            <p className="mb-3">These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Specific Cookies We Use</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>session_id</td>
                    <td>Maintains your session state</td>
                    <td>Session</td>
                    <td>Essential</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics tracking</td>
                    <td>2 years</td>
                    <td>Analytics</td>
                  </tr>
                  <tr>
                    <td>preferences</td>
                    <td>Stores your preferences</td>
                    <td>1 year</td>
                    <td>Functionality</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Managing Cookies</h2>
            <p className="mb-3">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. To manage cookies:</p>
            <ul className="mb-3">
              <li>Click on the cookie consent banner when you first visit our site</li>
              <li>Use your browser settings to accept, reject, or delete cookies</li>
              <li>Visit www.allaboutcookies.org for more information</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Third-Party Cookies</h2>
            <p className="mb-3">Some cookies are placed by third-party services that appear on our pages. We use third-party cookies for:</p>
            <ul className="mb-3">
              <li>Analytics (e.g., Google Analytics)</li>
              <li>Marketing and retargeting</li>
              <li>Social media integration</li>
              <li>Payment processing</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Updates to This Policy</h2>
            <p className="mb-3">We may update this Cookie Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at privacy@supagent.ai.</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
} 