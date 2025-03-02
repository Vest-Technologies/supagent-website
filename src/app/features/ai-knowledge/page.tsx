import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function AIKnowledgePage() {
  const knowledgeFeatures = [
    {
      title: 'Dynamic Learning',
      description: 'AI agents continuously learn from interactions, improving their knowledge and response accuracy over time.',
      icon: '🧠'
    },
    {
      title: 'Knowledge Integration',
      description: 'Seamlessly integrate with existing knowledge bases and documentation to provide comprehensive support.',
      icon: '🔄'
    },
    {
      title: 'Context Awareness',
      description: 'Understand and maintain context throughout conversations for more natural and relevant responses.',
      icon: '🎯'
    },
    {
      title: 'Pattern Recognition',
      description: 'Identify common issues and trends to proactively improve support quality and efficiency.',
      icon: '📊'
    }
  ];

  const knowledgeSources = [
    {
      title: 'Documentation',
      items: ['Product Manuals', 'API Documentation', 'User Guides', 'FAQs']
    },
    {
      title: 'Support History',
      items: ['Past Interactions', 'Resolution Patterns', 'Customer Feedback', 'Common Issues']
    },
    {
      title: 'External Sources',
      items: ['Industry Standards', 'Best Practices', 'Regulatory Guidelines', 'Market Trends']
    }
  ];

  return (
    <div className="ai-knowledge-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">AI Knowledge</h1>
            <p className="lead text-muted">
              Harness the power of advanced AI learning and knowledge management for superior support.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {knowledgeFeatures.map((feature, index) => (
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

        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 mb-4">Knowledge Sources</h2>
            <div className={styles['sources-grid']}>
              {knowledgeSources.map((source, index) => (
                <div key={index} className="source-section">
                  <h4 className="h5 mb-3">{source.title}</h4>
                  <ul className="list-unstyled">
                    {source.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles['source-item']}>
                        <span className={styles['source-bullet']}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light p-4 rounded-3">
              <h3 className="h4 mb-4">AI Learning Process</h3>
              <div className={styles['learning-process']}>
                <div className={styles['process-step']}>
                  <div className={styles['step-number']}>1</div>
                  <div className={styles['step-content']}>
                    <h5>Data Collection</h5>
                    <p className="text-muted mb-0">Gather information from multiple sources</p>
                  </div>
                </div>
                <div className={styles['process-step']}>
                  <div className={styles['step-number']}>2</div>
                  <div className={styles['step-content']}>
                    <h5>Analysis & Processing</h5>
                    <p className="text-muted mb-0">Process and structure collected data</p>
                  </div>
                </div>
                <div className={styles['process-step']}>
                  <div className={styles['step-number']}>3</div>
                  <div className={styles['step-content']}>
                    <h5>Knowledge Integration</h5>
                    <p className="text-muted mb-0">Incorporate insights into response system</p>
                  </div>
                </div>
                <div className={styles['process-step']}>
                  <div className={styles['step-number']}>4</div>
                  <div className={styles['step-content']}>
                    <h5>Continuous Improvement</h5>
                    <p className="text-muted mb-0">Learn and adapt from new interactions</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 