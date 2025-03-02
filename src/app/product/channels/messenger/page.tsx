import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';

export default function MessengerChannelPage() {
  const features = [
    'Facebook Messenger integration with AI responses',
    'Automated customer support and inquiries',
    'Rich media and interactive button support',
    'Seamless handoff to human agents when needed',
    'Multilingual support for global audiences',
    'Detailed analytics and conversation insights'
  ];

  const integrationSteps = [
    {
      title: 'Connect Facebook Business Page',
      description: 'Link your Facebook Business page to our platform.'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your brand voice and product knowledge.'
    },
    {
      title: 'Set Response Parameters',
      description: 'Define when and how your agent should respond to messages.'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various inquiries.'
    },
    {
      title: 'Launch and Monitor',
      description: 'Go live with your Messenger AI agent and track performance.'
    }
  ];

  return (
    <div className="messenger-channel-page py-5">
      <Container>
        <div className={styles['channel-header']}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 mb-3">Messenger Integration</h1>
              <p className="lead mb-4">
                Connect with your Facebook audience through AI-powered Messenger support
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
              <div className={styles['channel-logo']}>💬</div>
            </Col>
          </Row>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Engage Your Facebook Audience</h2>
            <p className="mb-4">
              With billions of active users, Facebook Messenger is a critical channel for customer engagement. 
              Our Messenger integration allows you to provide instant, AI-powered responses to customer inquiries, 
              enhancing satisfaction and reducing response times.
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
                src="/images/messenger-integration-demo.jpg" 
                alt="Messenger Integration Demo" 
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
                <h2 className="h3 mb-4">Interactive Messenger Experiences</h2>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">🤖</div>
                      <h3 className="h5">AI Conversations</h3>
                    </div>
                    <p className="text-muted">
                      Engage customers with natural, conversational AI that understands context and provides helpful responses.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">🔘</div>
                      <h3 className="h5">Interactive Buttons</h3>
                    </div>
                    <p className="text-muted">
                      Guide customers through support flows with interactive buttons, quick replies, and structured responses.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">🔄</div>
                      <h3 className="h5">Human Handoff</h3>
                    </div>
                    <p className="text-muted">
                      Seamlessly transfer complex conversations to human agents when needed, with full conversation context.
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
                <h3 className="h4 mb-4">Messenger Business Benefits</h3>
                <div className="mb-3">
                  <h4 className="h5 mb-2">24/7 Availability</h4>
                  <p className="text-muted mb-0">
                    Provide round-the-clock support to your customers, even outside business hours.
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Reduced Response Times</h4>
                  <p className="text-muted mb-0">
                    Decrease average response time from hours to seconds with instant AI replies.
                  </p>
                </div>
                <div>
                  <h4 className="h5 mb-2">Increased Conversion</h4>
                  <p className="text-muted mb-0">
                    Convert more inquiries into sales with prompt, helpful responses to product questions.
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
                After implementing SupaAgent's Messenger integration, our response time dropped from 5 hours to under 1 minute. Customer satisfaction scores have increased by 42%, and our support team can now focus on complex issues while the AI handles routine inquiries.
              </p>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image 
                    src="/images/testimonial-avatar-4.jpg" 
                    alt="Testimonial Avatar" 
                    width={50} 
                    height={50}
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Michael Thompson</p>
                  <p className="mb-0 text-muted small">Head of Customer Experience, Digital Solutions</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="h3 mb-4">Ready to Transform Your Messenger Support?</h2>
            <p className="mb-4">Start providing instant, AI-powered support to your Facebook audience today.</p>
            <Link href="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link href="/product/channels/slack" className="btn btn-outline-secondary btn-lg">
              Explore Slack Integration
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 