import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';

export default function SlackChannelPage() {
  const features = [
    'Seamless Slack workspace integration',
    'Internal support automation for employees',
    'Knowledge base access through natural language',
    'Workflow automation and task management',
    'Cross-department coordination',
    'Detailed analytics and usage insights'
  ];

  const integrationSteps = [
    {
      title: 'Connect Your Slack Workspace',
      description: 'Authorize our app in your Slack workspace with just a few clicks.'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your internal knowledge base and processes.'
    },
    {
      title: 'Set Access Permissions',
      description: 'Define which teams and channels can interact with your agent.'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various internal inquiries.'
    },
    {
      title: 'Launch and Monitor',
      description: 'Deploy your Slack AI agent and track usage and performance.'
    }
  ];

  return (
    <div className="slack-channel-page py-5">
      <Container>
        <div className={styles['channel-header']}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 mb-3">Slack Integration</h1>
              <p className="lead mb-4">
                Streamline internal communications and support with AI-powered Slack integration
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
              <div className={styles['channel-logo']}>🔄</div>
            </Col>
          </Row>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Enhance Internal Efficiency</h2>
            <p className="mb-4">
              Our Slack integration brings the power of AI to your internal communications, helping teams 
              access information, automate workflows, and get support without leaving their primary 
              collaboration platform.
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
                src="/images/slack-integration-demo.jpg" 
                alt="Slack Integration Demo" 
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
                <h2 className="h3 mb-4">Internal Support Use Cases</h2>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">📚</div>
                      <h3 className="h5">Knowledge Access</h3>
                    </div>
                    <p className="text-muted">
                      Instantly access company policies, procedures, and documentation through natural language queries.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">🔧</div>
                      <h3 className="h5">IT Support</h3>
                    </div>
                    <p className="text-muted">
                      Resolve common IT issues, reset passwords, and submit support tickets without leaving Slack.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="text-center mb-3">
                      <div className="fs-1 mb-2">📅</div>
                      <h3 className="h5">HR Assistance</h3>
                    </div>
                    <p className="text-muted">
                      Get answers about benefits, time off policies, and company events through simple conversations.
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
                <h3 className="h4 mb-4">Slack Integration Benefits</h3>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Increased Productivity</h4>
                  <p className="text-muted mb-0">
                    Reduce time spent searching for information or waiting for support responses.
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="h5 mb-2">Improved Employee Experience</h4>
                  <p className="text-muted mb-0">
                    Provide instant support and answers to employees, enhancing satisfaction and engagement.
                  </p>
                </div>
                <div>
                  <h4 className="h5 mb-2">Reduced Support Costs</h4>
                  <p className="text-muted mb-0">
                    Decrease the burden on internal support teams by automating routine inquiries and tasks.
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
                SupaAgent's Slack integration has transformed our internal support processes. Our employees get answers in seconds instead of hours, and our IT and HR teams can focus on strategic initiatives rather than answering the same questions repeatedly.
              </p>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image 
                    src="/images/testimonial-avatar-5.jpg" 
                    alt="Testimonial Avatar" 
                    width={50} 
                    height={50}
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Jennifer Lee</p>
                  <p className="mb-0 text-muted small">Chief Operations Officer, Enterprise Solutions</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="h3 mb-4">Ready to Transform Your Internal Support?</h2>
            <p className="mb-4">Start providing instant, AI-powered support to your employees through Slack today.</p>
            <Link href="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link href="/product/channels" className="btn btn-outline-secondary btn-lg">
              Explore All Channels
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 