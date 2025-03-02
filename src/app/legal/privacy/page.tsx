'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function PrivacyPolicy() {
  return (
    <Container className="py-4 legal-content">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className="mb-4">Privacy Policy</h1>
          
          <section className="mb-4">
            <p className="text-muted mb-2">Last updated: March 2024</p>
            <p>This Privacy Policy describes how SupAgent ("we," "us," or "our") collects, uses, and shares your personal information when you use our AI-driven agent integrated support solution, website, and related services (collectively, the "Services").</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Information We Collect</h2>
            <h3 className="h5 mb-2">Information You Provide to Us</h3>
            <ul className="mb-">
              <li>Account information (name, email, password)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Payment information</li>
              <li>Customer support interactions</li>
              <li>Custom AI agent configurations and training data</li>
              <li>Integration settings and preferences</li>
            </ul>

            <h3 className="h5 mb-2">Information We Collect Automatically</h3>
            <ul className="mb-3">
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>Log data and performance metrics</li>
              <li>AI agent interaction data</li>
              <li>Integration usage statistics</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">How We Use Your Information</h2>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Train and optimize AI agents</li>
              <li>Process payments and transactions</li>
              <li>Send administrative communications</li>
              <li>Provide customer support</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Information Sharing and Disclosure</h2>
            <p className="mb-2">We may share your information with:</p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Integration platforms (e.g., Zapier, Make.com)</li>
              <li>Legal authorities when required by law</li>
              <li>During business transfers or acquisitions</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Data Security</h2>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Monitoring and logging of system activity</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Your Rights and Choices</h2>
            <p className="mb-2">You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Export your data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">International Data Transfers</h2>
            <p className="mb-2">We may transfer your information to countries other than your country of residence. We ensure appropriate safeguards are in place, including:</p>
            <ul>
              <li>Standard contractual clauses</li>
              <li>Data processing agreements</li>
              <li>GDPR compliance measures</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Children's Privacy</h2>
            <p>Our Services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: privacy@supagent.com</li>
              <li>Address: [Your Company Address]</li>
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
} 