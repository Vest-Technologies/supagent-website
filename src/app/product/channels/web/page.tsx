import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';

export default function WebChannelPage() {
  const features = [
    'Seamless website integration with minimal code',
    'Customizable chat widget matching your brand',
    'Proactive engagement based on user behavior',
    'Multilingual support for global audiences',
    'Contextual responses based on page content',
    'Seamless handoff to human agents when needed'
  ];

  const integrationSteps = [
    {
      title: 'Create Your Agent',
      description: 'Design and train your AI agent with your knowledge base and brand voice.'
    },
    {
      title: 'Configure Your Widget',
      description: 'Customize the appearance and behavior of your chat widget to match your website.'
    },
    {
      title: 'Add the Integration Code',
      description: 'Insert a simple JavaScript snippet into your website to activate the agent.'
    },
    {
      title: 'Test and Refine',
      description: 'Validate the integration and fine-tune your agent\'s responses.'
    },
    {
      title: 'Monitor Performance',
      description: 'Track engagement metrics and continuously improve your agent.'
    }
  ];

  return (
    <div className="web-channel-page py-5">
      <Container>
        <div className={styles['channel-header']}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 mb-3">Web Integration</h1>
              <p className="lead mb-4">
                Transform your website into an interactive support hub with our AI-powered web integration
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
              <div className={styles['channel-logo']}>🌐</div>
            </Col>
          </Row>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Enhance Your Website Experience</h2>
            <p className="mb-4">
              Our web integration brings the power of AI-driven support directly to your website, 
              providing instant assistance to your visitors and customers without the need for 
              human intervention.
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
                src="/images/web-integration-demo.jpg" 
                alt="Web Integration Demo" 
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
                  Our web integration uses a lightweight JavaScript widget that can be easily added to any website. 
                  The widget connects to our secure cloud infrastructure, where your AI agent processes queries and 
                  delivers responses in real-time.
                </p>
                <div className="d-flex justify-content-center mb-4">
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">👤</div>
                    <p className="mb-0"><strong>User</strong></p>
                    <p className="text-muted small">Asks a question</p>
                  </div>
                  <div className="d-flex align-items-center px-2">
                    <div style={{ fontSize: '2rem' }}>→</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="mb-3 fs-1">🔌</div>
                    <p className="mb-0"><strong>Widget</strong></p>
                    <p className="text-muted small">Captures query</p>
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
                    <p className="text-muted small">Delivers answer</p>
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
                <h3 className="h4 mb-4">Sample Integration Code</h3>
                <div className="bg-dark text-light p-3 rounded">
                  <pre className="mb-0" style={{ overflow: 'auto' }}>
                    <code>
{`<script>
  window.SupaAgentConfig = {
    agentId: 'YOUR_AGENT_ID',
    theme: 'light',
    position: 'bottom-right',
    welcomeMessage: 'Hello! How can I help you today?'
  };
</script>
<script src="https://cdn.supagent.ai/widget.js" async></script>`}
                    </code>
                  </pre>
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
                Implementing the SupaAgent web integration increased our customer satisfaction by 35% while reducing support costs by 40%. The AI handles over 80% of inquiries without human intervention.
              </p>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image 
                    src="/images/testimonial-avatar.jpg" 
                    alt="Testimonial Avatar" 
                    width={50} 
                    height={50}
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Sarah Johnson</p>
                  <p className="mb-0 text-muted small">CTO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2 className="h3 mb-4">Ready to Transform Your Website?</h2>
            <p className="mb-4">Start providing instant, AI-powered support to your website visitors today.</p>
            <Link href="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link href="/product/channels/whatsapp" className="btn btn-outline-secondary btn-lg">
              Explore WhatsApp Integration
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 