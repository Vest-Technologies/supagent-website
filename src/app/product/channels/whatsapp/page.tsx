import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';

export default function WhatsAppChannelPage() {
  const features = [
    'Official WhatsApp Business API integration',
    'Automated responses to common inquiries',
    'Rich media support (images, documents, etc.)',
    'Seamless handoff to human agents when needed',
    'Multilingual support for global audiences',
    'Detailed analytics and conversation insights'
  ];

  const integrationSteps = [
    {
      title: 'Apply for WhatsApp Business API',
      description: 'We\'ll guide you through the application process with Meta.'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your knowledge base and brand voice.'
    },
    {
      title: 'Connect Your WhatsApp Number',
      description: 'Link your approved WhatsApp Business number to our platform.'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various inquiries.'
    },
    {
      title: 'Launch and Monitor',
      description: 'Go live with your WhatsApp AI agent and track performance.'
    }
  ];

  return (
    <div className="whatsapp-channel-page py-5">
      <Container>
        <div className={styles['channel-header']}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 mb-3">WhatsApp Integration</h1>
              <p className="lead mb-4">
                Connect with your customers on the world's most popular messaging platform with AI-powered support
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="#integration-steps" className="btn btn-primary">
                  How to Integrate
                </Link>
                <Link href="/contact" className="btn btn-outline-secondary">
                  Request Demo
                </Link>
              </div>
            </Col>
            <Col md={5} className="text-center mt-4 mt-md-0">
              <div className={styles['channel-logo']}>📱</div>
            </Col>
          </Row>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Reach Customers Where They Are</h2>
            <p className="mb-4">
              With over 2 billion users worldwide, WhatsApp is the preferred communication channel for many of your customers. 
              Our WhatsApp integration allows you to provide instant, AI-powered support through this popular platform.
            </p>
            <ul className={styles['feature-list']}>
              {features.map((feature, index) => (
                <li key={index} className={styles['feature-item']}>
                  <span className={styles['feature-check']}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6}>
            <div className={styles['screenshot-container']}>
              <Image 
                src="/images/whatsapp-integration-demo.jpg" 
                alt="WhatsApp Integration Demo" 
                width={600} 
                height={400}
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <CardBody className="p-4">
                <h2 className="h3 mb-4">How It Works</h2>
                <p className="mb-4">
                  Our WhatsApp integration connects to the official WhatsApp Business API, allowing your AI agent to 
                  communicate with customers through WhatsApp while maintaining the security and reliability of the platform.
                </p>
                <div className="d-flex justify-content-center mb-4">
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">👤</div>
                    <p className="mb-0"><strong>Customer</strong></p>
                    <p className="text-muted small">Sends message</p>
                  </div>
                  <div className="d-flex align-items-center px-2">
                    <div style={{ fontSize: '2rem' }}>→</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">📱</div>
                    <p className="mb-0"><strong>WhatsApp</strong></p>
                    <p className="text-muted small">Delivers message</p>
                  </div>
                  <div className="d-flex align-items-center px-2">
                    <div style={{ fontSize: '2rem' }}>→</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">🤖</div>
                    <p className="mb-0"><strong>AI Agent</strong></p>
                    <p className="text-muted small">Processes request</p>
                  </div>
                  <div className="d-flex align-items-center px-2">
                    <div style={{ fontSize: '2rem' }}>→</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">💬</div>
                    <p className="mb-0"><strong>Response</strong></p>
                    <p className="text-muted small">Sent to customer</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5" id="integration-steps">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Integration Process</h2>
            <ol className={styles['integration-steps']}>
              {integrationSteps.map((step, index) => (
                <li key={index} className={styles['step-item']}>
                  <h3 className="h5 mb-2">{step.title}</h3>
                  <p className="text-muted mb-0">{step.description}</p>
                </li>
              ))}
            </ol>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <h3 className="h4 mb-4">WhatsApp Business Benefits</h3>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Verified Business Profile</h4>
                  <p className="text-muted mb-0">
                    Build trust with a verified business profile that includes your logo, website, and business information.
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Message Templates</h4>
                  <p className="text-muted mb-0">
                    Send proactive notifications to customers about order updates, appointment reminders, and more.
                  </p>
                </div>
                <div>
                  <h4 className="h5 mb-2">Rich Media Support</h4>
                  <p className="text-muted mb-0">
                    Share product images, documents, location information, and more to enhance customer interactions.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <div className={styles['testimonial-card']}>
              <div className={styles['quote-mark']}>"</div>
              <p className="mb-3 fs-5 fst-italic">
                Since implementing SupaAgent's WhatsApp integration, we've seen a 45% increase in customer engagement and a 30% reduction in response times. Our customers love being able to get instant support through WhatsApp.
              </p>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image 
                    src="/images/testimonial-avatar-2.jpg" 
                    alt="Testimonial Avatar" 
                    width={50} 
                    height={50}
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Carlos Rodriguez</p>
                  <p className="mb-0 text-muted small">Customer Experience Director, Global Retail</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="h3 mb-4">Ready to Connect on WhatsApp?</h2>
            <p className="mb-4">Start providing instant, AI-powered support to your customers on WhatsApp today.</p>
            <Link href="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link href="/product/channels/instagram" className="btn btn-outline-secondary btn-lg">
              Explore Instagram Integration
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 