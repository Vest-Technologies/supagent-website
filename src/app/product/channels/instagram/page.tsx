import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';

export default function InstagramChannelPage() {
  const features = [
    'Instagram DM automation with AI responses',
    'Comment monitoring and engagement',
    'Visual content analysis and responses',
    'Seamless handoff to human agents when needed',
    'Multilingual support for global audiences',
    'Detailed analytics and conversation insights'
  ];

  const integrationSteps = [
    {
      title: 'Connect Instagram Business Account',
      description: 'Link your Instagram Business account to our platform.'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your brand voice and product knowledge.'
    },
    {
      title: 'Set Response Parameters',
      description: 'Define when and how your agent should respond to messages and comments.'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various inquiries.'
    },
    {
      title: 'Launch and Monitor',
      description: 'Go live with your Instagram AI agent and track performance.'
    }
  ];

  return (
    <div className="instagram-channel-page py-5">
      <Container>
        <div className={styles['channel-header']}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 mb-3">Instagram Integration</h1>
              <p className="lead mb-4">
                Engage with your audience on Instagram through AI-powered messaging and comment management
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
              <div className={styles['channel-logo']}>📸</div>
            </Col>
          </Row>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Elevate Your Instagram Presence</h2>
            <p className="mb-4">
              Instagram is a vital platform for brand engagement and customer interaction. Our Instagram integration 
              allows you to provide instant, AI-powered responses to direct messages and comments, enhancing your 
              brand presence and customer satisfaction.
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
                src="/images/instagram-integration-demo.jpg" 
                alt="Instagram Integration Demo" 
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
                <h2 className="h3 mb-4">Comprehensive Instagram Management</h2>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">💬</div>
                      <h3 className="h5">Direct Messages</h3>
                    </div>
                    <p className="text-muted">
                      Automatically respond to customer inquiries through Instagram DMs with personalized, AI-generated responses.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">💭</div>
                      <h3 className="h5">Comments</h3>
                    </div>
                    <p className="text-muted">
                      Monitor and respond to comments on your posts, engaging with your audience and addressing questions.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">📊</div>
                      <h3 className="h5">Analytics</h3>
                    </div>
                    <p className="text-muted">
                      Track engagement metrics, response times, and customer satisfaction to continuously improve your strategy.
                    </p>
                  </Col>
                </Row>
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
                <h3 className="h4 mb-4">Instagram Business Benefits</h3>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Enhanced Customer Experience</h4>
                  <p className="text-muted mb-0">
                    Provide immediate responses to customer inquiries, improving satisfaction and engagement.
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Increased Efficiency</h4>
                  <p className="text-muted mb-0">
                    Automate routine interactions, allowing your team to focus on high-value activities.
                  </p>
                </div>
                <div>
                  <h4 className="h5 mb-2">Consistent Brand Voice</h4>
                  <p className="text-muted mb-0">
                    Maintain a consistent brand voice across all Instagram interactions, strengthening your brand identity.
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
                SupaAgent's Instagram integration has transformed how we engage with our audience. We've seen a 60% increase in response rate and our customers love getting immediate answers to their questions about our products.
              </p>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image 
                    src="/images/testimonial-avatar-3.jpg" 
                    alt="Testimonial Avatar" 
                    width={50} 
                    height={50}
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Emma Chen</p>
                  <p className="mb-0 text-muted small">Social Media Director, Fashion Forward</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="h3 mb-4">Ready to Enhance Your Instagram Presence?</h2>
            <p className="mb-4">Start providing instant, AI-powered support to your Instagram audience today.</p>
            <Link href="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link href="/product/channels/messenger" className="btn btn-outline-secondary btn-lg">
              Explore Messenger Integration
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 