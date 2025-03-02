import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function CustomizationPage() {
  const customizationOptions = [
    {
      title: 'Brand Voice',
      description: 'Customize your AI agent\'s communication style to match your brand\'s tone and personality.',
      icon: '🎭'
    },
    {
      title: 'Response Templates',
      description: 'Create and manage pre-defined response templates for common scenarios and queries.',
      icon: '📝'
    },
    {
      title: 'Workflow Integration',
      description: 'Design custom workflows and decision trees for handling specific customer interactions.',
      icon: '🔄'
    },
    {
      title: 'Visual Customization',
      description: 'Tailor the appearance of your AI agent interface to match your brand\'s visual identity.',
      icon: '🎨'
    }
  ];

  const integrationTypes = [
    'CRM Systems',
    'Help Desk Software',
    'E-commerce Platforms',
    'Knowledge Bases',
    'Analytics Tools',
    'Communication Channels'
  ];

  return (
    <div className="customization-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">Customization Options</h1>
            <p className="lead text-muted">
              Tailor your AI agents to perfectly match your business needs and brand identity.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {customizationOptions.map((option, index) => (
            <Col key={index} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <CardBody>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${styles['feature-icon']} fs-1 me-3`}>
                      {option.icon}
                    </div>
                    <h3 className="h4 mb-0">{option.title}</h3>
                  </div>
                  <CardText className="text-muted">
                    {option.description}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 mb-4">Integration Capabilities</h2>
            <div className={styles['integration-grid']}>
              {integrationTypes.map((type, index) => (
                <div key={index} className={styles['integration-item']}>
                  <span className={styles['integration-check']}>✓</span>
                  {type}
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light p-4 rounded-3">
              <h3 className="h4 mb-4">Customization Benefits</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <strong>Enhanced Brand Consistency</strong>
                  <p className="text-muted mb-0">Maintain a unified brand voice across all customer interactions.</p>
                </li>
                <li className="mb-3">
                  <strong>Improved Customer Experience</strong>
                  <p className="text-muted mb-0">Deliver personalized and contextually relevant responses.</p>
                </li>
                <li className="mb-3">
                  <strong>Increased Efficiency</strong>
                  <p className="text-muted mb-0">Streamline workflows with customized automation rules.</p>
                </li>
                <li>
                  <strong>Better Integration</strong>
                  <p className="text-muted mb-0">Seamlessly connect with your existing tools and systems.</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 