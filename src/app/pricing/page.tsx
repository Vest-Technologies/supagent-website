'use client';

import { Container, Row, Col, Card, Button, Table, Accordion } from 'react-bootstrap';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import './pricing.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

interface PricingFeature {
  name: string;
  starter: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: PricingFeature[] = [
  { name: 'AI Agent Integration', starter: true, pro: true, enterprise: true },
  { name: 'Knowledge Base Creation', starter: true, pro: true, enterprise: true },
  { name: 'Multi-Channel Support', starter: false, pro: true, enterprise: true },
  { name: 'Custom Workflows', starter: false, pro: true, enterprise: true },
  { name: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
  { name: 'Custom Integrations', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
  { name: 'Custom AI Training', starter: false, pro: false, enterprise: true },
];

const detailedFeatures = {
  aiAgent: {
    title: 'AI Agent Integration',
    description: 'Powerful AI agents that can be customized for your specific needs',
    details: [
      { starter: '1 AI Agent', pro: 'Up to 5 AI Agents', enterprise: 'Unlimited AI Agents' },
      { starter: 'Basic Training', pro: 'Advanced Training', enterprise: 'Custom Training' },
      { starter: '1,000 messages/month', pro: '10,000 messages/month', enterprise: 'Unlimited messages' }
    ]
  },
  channels: {
    title: 'Multi-Channel Support',
    description: 'Connect with your customers across different platforms',
    details: [
      { starter: 'Website Widget', pro: 'Website + WhatsApp', enterprise: 'All Channels' },
      { starter: 'Basic Customization', pro: 'Advanced Customization', enterprise: 'Full Customization' },
      { starter: '1 Language', pro: '3 Languages', enterprise: 'Unlimited Languages' }
    ]
  },
  analytics: {
    title: 'Analytics & Reporting',
    description: 'Comprehensive insights into your AI agents performance',
    details: [
      { starter: 'Basic Reports', pro: 'Advanced Analytics', enterprise: 'Custom Reports' },
      { starter: 'Weekly Reports', pro: 'Daily Reports', enterprise: 'Real-time Analytics' },
      { starter: 'Basic Metrics', pro: 'Advanced Metrics', enterprise: 'Custom Metrics' }
    ]
  }
};

const faqs = [
  {
    question: 'How does the AI agent training work?',
    answer: 'Our AI agents use advanced machine learning algorithms to learn from your existing knowledge base, documentation, and customer interactions. The training process is iterative and continues to improve over time as more data becomes available.'
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: 'Yes, you can change your plan at any time. When upgrading, you will be charged the prorated amount for the remainder of your billing cycle. When downgrading, the new rate will take effect at the start of your next billing cycle.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer different levels of support based on your plan. Starter plans include email support with 24-hour response time, Pro plans include priority email support with 12-hour response time, and Enterprise plans include 24/7 phone and email support with a dedicated account manager.'
  },
  {
    question: 'How do you handle data security and privacy?',
    answer: 'We take security seriously. All data is encrypted both in transit and at rest. We are GDPR compliant and offer custom data retention policies for Enterprise customers. Our systems undergo regular security audits and penetration testing.'
  }
];

export default function PricingPage() {
  return (
    <div className="py-5">
      <Container>
        <AnimatedSection variants={fadeInUp} className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="lead text-muted">
            Choose the perfect plan for your business needs
          </p>
        </AnimatedSection>

        <Row className="g-4 py-4">
          {/* Starter Plan */}
          <Col lg={4}>
            <AnimatedSection variants={scaleIn} delay={0.2} className="h-100">
              <Card className="h-100 shadow-sm hover-shadow transition-all">
                <Card.Header className="bg-white border-0 pt-4">
                  <h2 className="fw-bold text-center mb-0">Starter</h2>
                  <div className="text-center mt-3 price-text">
                    <span className="currency">$</span>
                    <span className="amount">49</span>
                    <span className="period">/month</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled feature-list">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-3 d-flex align-items-center">
                        <i className={`bi ${feature.starter ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-muted'} me-2`}></i>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-4">
                  <Button variant="outline-primary" size="lg" className="w-100">
                    Get Started
                  </Button>
                </Card.Footer>
              </Card>
            </AnimatedSection>
          </Col>

          {/* Pro Plan */}
          <Col lg={4}>
            <AnimatedSection variants={scaleIn} delay={0.4} className="h-100">
              <Card className="h-100 shadow border-primary hover-shadow transition-all popular-plan">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className="badge bg-primary px-3 py-2 rounded-pill">
                    Most Popular
                  </span>
                </div>
                <Card.Header className="bg-white border-0 pt-4">
                  <h2 className="fw-bold text-center mb-0">Pro</h2>
                  <div className="text-center mt-3 price-text">
                    <span className="currency">$</span>
                    <span className="amount">149</span>
                    <span className="period">/month</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled feature-list">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-3 d-flex align-items-center">
                        <i className={`bi ${feature.pro ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-muted'} me-2`}></i>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-4">
                  <Button variant="primary" size="lg" className="w-100">
                    Get Started
                  </Button>
                </Card.Footer>
              </Card>
            </AnimatedSection>
          </Col>

          {/* Enterprise Plan */}
          <Col lg={4}>
            <AnimatedSection variants={scaleIn} delay={0.6} className="h-100">
              <Card className="h-100 shadow-sm hover-shadow transition-all">
                <Card.Header className="bg-white border-0 pt-4">
                  <h2 className="fw-bold text-center mb-0">Enterprise</h2>
                  <div className="text-center mt-3">
                    <span className="h1 fw-bold">Custom</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-3 d-flex align-items-center">
                        <i className={`bi ${feature.enterprise ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-muted'} me-2`}></i>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-4">
                  <Button variant="outline-primary" size="lg" className="w-100">
                    Contact Sales
                  </Button>
                </Card.Footer>
              </Card>
            </AnimatedSection>
          </Col>
        </Row>

        {/* Detailed Feature Comparison */}
        <AnimatedSection variants={fadeInUp} delay={0.2} className="mt-5 pt-5">
          <h2 className="text-center fw-bold mb-5">Detailed Feature Comparison</h2>
          
          {Object.values(detailedFeatures).map((feature, index) => (
            <Card key={index} className="mb-4 border-0 shadow-sm">
              <Card.Header className="bg-light border-0">
                <h3 className="h4 mb-0">{feature.title}</h3>
                <p className="text-muted mb-0">{feature.description}</p>
              </Card.Header>
              <Card.Body>
                <Table responsive className="feature-comparison-table">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>Feature</th>
                      <th style={{width: '25%'}}>Starter</th>
                      <th style={{width: '25%'}}>Pro</th>
                      <th style={{width: '25%'}}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.details.map((detail, idx) => (
                      <tr key={idx}>
                        <td className="text-muted">Level {idx + 1}</td>
                        <td>{detail.starter}</td>
                        <td>{detail.pro}</td>
                        <td>{detail.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ))}
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection variants={fadeInUp} delay={0.4} className="mt-5 pt-5">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <Accordion flush>
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <span className="fw-semibold">{faq.question}</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-muted mb-0">{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Enterprise Features */}
        <AnimatedSection variants={fadeInUp} delay={0.6} className="mt-5 pt-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="fw-bold mb-4">Enterprise-Grade Features</h2>
              <ul className="list-unstyled enterprise-features">
                <li className="mb-4">
                  <h4 className="fw-semibold"><i className="bi bi-shield-check me-2"></i>Advanced Security</h4>
                  <p className="text-muted mb-0">SOC 2 Type II certified, GDPR compliant, and custom security policies</p>
                </li>
                <li className="mb-4">
                  <h4 className="fw-semibold"><i className="bi bi-graph-up-arrow me-2"></i>Scalable Infrastructure</h4>
                  <p className="text-muted mb-0">High-availability infrastructure with 99.9% uptime SLA</p>
                </li>
                <li className="mb-4">
                  <h4 className="fw-semibold"><i className="bi bi-people me-2"></i>Dedicated Support</h4>
                  <p className="text-muted mb-0">24/7 priority support with dedicated account manager and technical team</p>
                </li>
                <li>
                  <h4 className="fw-semibold"><i className="bi bi-gear me-2"></i>Custom Development</h4>
                  <p className="text-muted mb-0">Custom feature development and API integrations</p>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4">Enterprise Support Includes:</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Custom SLA agreements
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Dedicated slack channel
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Quarterly business reviews
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Custom training sessions
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Migration assistance
                    </li>
                  </ul>
                  <Button variant="primary" size="lg" className="w-100 mt-4">
                    Contact Enterprise Sales
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection variants={fadeInUp} delay={0.8} className="text-center mt-5 pt-5">
          <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead text-muted mb-4">
            Join thousands of businesses that trust our AI agents for their customer support
          </p>
          <Button variant="primary" size="lg" className="px-5 me-3">
            Start Free Trial
          </Button>
          <Button variant="outline-primary" size="lg" className="px-5">
            Schedule Demo
          </Button>
        </AnimatedSection>
      </Container>
    </div>
  );
} 