import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function HistoryPage() {
  const historyFeatures = [
    {
      title: 'Interaction Tracking',
      description: 'Record and store all customer interactions for comprehensive analysis and reference.',
      icon: '📝'
    },
    {
      title: 'Historical Analysis',
      description: 'Analyze past interactions to identify patterns and improve future responses.',
      icon: '📊'
    },
    {
      title: 'Conversation Timeline',
      description: 'View detailed timelines of customer conversations and support history.',
      icon: '⏱️'
    },
    {
      title: 'Data Retention',
      description: 'Securely store and manage historical data with customizable retention policies.',
      icon: '🔒'
    }
  ];

  const historyCapabilities = [
    {
      title: 'Search & Filter',
      items: [
        'Full-text search across conversations',
        'Advanced filtering options',
        'Custom date ranges',
        'Tag-based organization'
      ]
    },
    {
      title: 'Export & Reporting',
      items: [
        'Custom report generation',
        'Data export capabilities',
        'Multiple format options',
        'Scheduled exports'
      ]
    },
    {
      title: 'Compliance & Security',
      items: [
        'GDPR compliance',
        'Data encryption',
        'Access controls',
        'Audit trails'
      ]
    }
  ];

  return (
    <div className="history-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">Interaction History</h1>
            <p className="lead text-muted">
              Track, analyze, and learn from your support history to continuously improve customer service.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {historyFeatures.map((feature, index) => (
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
            <h2 className="h3 mb-4">History Management</h2>
            <div className={styles['capabilities-grid']}>
              {historyCapabilities.map((capability, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardBody>
                    <h4 className="h5 mb-3">{capability.title}</h4>
                    <ul className="list-unstyled mb-0">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles['capability-item']}>
                          <span className={styles['capability-bullet']}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light p-4 rounded-3">
              <h3 className="h4 mb-4">Data Timeline</h3>
              <div className={styles.timeline}>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}></div>
                  <div className={styles['timeline-content']}>
                    <h5>Initial Contact</h5>
                    <p className="text-muted mb-0">Record first customer interaction and context</p>
                  </div>
                </div>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}></div>
                  <div className={styles['timeline-content']}>
                    <h5>Conversation History</h5>
                    <p className="text-muted mb-0">Track ongoing communication and responses</p>
                  </div>
                </div>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}></div>
                  <div className={styles['timeline-content']}>
                    <h5>Resolution Details</h5>
                    <p className="text-muted mb-0">Document solution and customer satisfaction</p>
                  </div>
                </div>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}></div>
                  <div className={styles['timeline-content']}>
                    <h5>Follow-up Actions</h5>
                    <p className="text-muted mb-0">Record additional interactions and feedback</p>
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