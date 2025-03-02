import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function AnalyticsPage() {
  const analyticsFeatures = [
    {
      title: 'Performance Metrics',
      description: 'Track key performance indicators including response times, resolution rates, and customer satisfaction scores.',
      icon: '📊'
    },
    {
      title: 'Interaction Analysis',
      description: 'Analyze conversation patterns and customer interactions to identify areas for improvement.',
      icon: '🔍'
    },
    {
      title: 'Custom Reports',
      description: 'Generate detailed reports tailored to your specific business needs and objectives.',
      icon: '📈'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor agent performance and customer interactions in real-time for immediate insights.',
      icon: '⚡'
    }
  ];

  const metricCategories = [
    {
      title: 'Response Metrics',
      metrics: [
        'Average Response Time',
        'First Response Time',
        'Resolution Time',
        'Response Quality Score'
      ]
    },
    {
      title: 'Customer Metrics',
      metrics: [
        'Customer Satisfaction',
        'Net Promoter Score',
        'Customer Effort Score',
        'Retention Rate'
      ]
    },
    {
      title: 'Agent Metrics',
      metrics: [
        'Resolution Rate',
        'Accuracy Score',
        'Handling Time',
        'Knowledge Base Usage'
      ]
    }
  ];

  return (
    <div className="analytics-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">Analytics & Insights</h1>
            <p className="lead text-muted">
              Make data-driven decisions with comprehensive analytics and reporting tools.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {analyticsFeatures.map((feature, index) => (
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
            <h2 className="h3 mb-4">Key Metrics</h2>
            <div className={styles['metrics-grid']}>
              {metricCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardBody>
                    <h4 className="h5 mb-3">{category.title}</h4>
                    <ul className="list-unstyled mb-0">
                      {category.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className={styles['metric-item']}>
                          <span className={styles['metric-bullet']}>•</span>
                          {metric}
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
              <h3 className="h4 mb-4">Analytics Benefits</h3>
              <div className={styles['benefits-list']}>
                <div className={styles['benefit-item']}>
                  <div className={styles['benefit-icon']}>📈</div>
                  <div className={styles['benefit-content']}>
                    <h5>Data-Driven Decisions</h5>
                    <p className="text-muted mb-0">Make informed decisions based on concrete data and trends.</p>
                  </div>
                </div>
                <div className={styles['benefit-item']}>
                  <div className={styles['benefit-icon']}>🎯</div>
                  <div className={styles['benefit-content']}>
                    <h5>Performance Optimization</h5>
                    <p className="text-muted mb-0">Identify and address areas for improvement in your support operations.</p>
                  </div>
                </div>
                <div className={styles['benefit-item']}>
                  <div className={styles['benefit-icon']}>💡</div>
                  <div className={styles['benefit-content']}>
                    <h5>Actionable Insights</h5>
                    <p className="text-muted mb-0">Convert data into actionable insights for business growth.</p>
                  </div>
                </div>
                <div className={styles['benefit-item']}>
                  <div className={styles['benefit-icon']}>⚡</div>
                  <div className={styles['benefit-content']}>
                    <h5>Real-time Monitoring</h5>
                    <p className="text-muted mb-0">Stay on top of your support operations with live monitoring.</p>
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