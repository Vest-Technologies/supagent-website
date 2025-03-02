import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function TrainingPage() {
  const trainingFeatures = [
    {
      title: 'Custom Knowledge Base',
      description: 'Upload your documentation, FAQs, and support materials to train your AI agents with company-specific knowledge.',
      icon: '📚'
    },
    {
      title: 'Behavior Training',
      description: 'Define custom responses and behaviors to align with your brand voice and support protocols.',
      icon: '🎯'
    },
    {
      title: 'Continuous Learning',
      description: 'AI agents learn from each interaction, continuously improving their responses and effectiveness.',
      icon: '🔄'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track training progress and agent performance with detailed analytics and insights.',
      icon: '📈'
    }
  ];

  return (
    <div className="training-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">AI Agent Training</h1>
            <p className="lead text-muted">
              Empower your AI agents with comprehensive training capabilities to deliver exceptional support experiences.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {trainingFeatures.map((feature, index) => (
            <Col key={index} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <CardBody>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${styles['feature-icon']} fs-1 me-3`}>
                      {feature.icon}
                    </div>
                    <h3 className="h4 mb-0">{feature.title}</h3>
                  </div>
                  <CardText className="text-muted">
                    {feature.description}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 mb-4">How Our Training Works</h2>
            <div className="d-flex mb-3">
              <div className={`${styles['step-number']} me-3`}>1</div>
              <div>
                <h4 className="h5">Upload Your Content</h4>
                <p className="text-muted">Import your existing documentation, FAQs, and support materials.</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className={`${styles['step-number']} me-3`}>2</div>
              <div>
                <h4 className="h5">Configure Behaviors</h4>
                <p className="text-muted">Define response patterns and customize interaction styles.</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className={`${styles['step-number']} me-3`}>3</div>
              <div>
                <h4 className="h5">Test and Refine</h4>
                <p className="text-muted">Validate responses and fine-tune agent behavior through iterative testing.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className={`${styles['step-number']} me-3`}>4</div>
              <div>
                <h4 className="h5">Deploy and Monitor</h4>
                <p className="text-muted">Launch your trained agents and track their performance in real-time.</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light p-4 rounded-3">
              <h3 className="h4 mb-4">Training Best Practices</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">✓ Regular content updates to keep knowledge current</li>
                <li className="mb-3">✓ Consistent monitoring of agent responses</li>
                <li className="mb-3">✓ Feedback integration for continuous improvement</li>
                <li>✓ Performance benchmarking against key metrics</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 