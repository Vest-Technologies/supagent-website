import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from '@/components/BootstrapClient';

const features = [
  {
    title: 'Training',
    description: 'Train your AI agents with custom knowledge and behaviors',
    path: '/features/training',
    icon: '🎓'
  },
  {
    title: 'Customization',
    description: 'Tailor your AI agents to match your brand and requirements',
    path: '/features/customization',
    icon: '⚙️'
  },
  {
    title: 'Multilanguage',
    description: 'Support customers in multiple languages seamlessly',
    path: '/features/multilanguage',
    icon: '🌐'
  },
  {
    title: 'AI Knowledge',
    description: 'Leverage advanced AI capabilities for smarter interactions',
    path: '/features/ai-knowledge',
    icon: '🧠'
  },
  {
    title: 'Analytics',
    description: 'Gain insights from detailed performance analytics',
    path: '/features/analytics',
    icon: '📊'
  },
  {
    title: 'History',
    description: 'Track and analyze all interactions and improvements',
    path: '/features/history',
    icon: '📜'
  }
];

export default function FeaturesPage() {
  return (
    <div className="features-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 mb-3">Our Features</h1>
          <p className="lead text-muted">
            Discover how our AI-driven solution can transform your support operations
          </p>
        </div>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <Link href={feature.path} className="text-decoration-none">
                <Card className="h-100 shadow-sm hover-card">
                  <CardBody className="d-flex flex-column">
                    <div className="feature-icon mb-3 fs-1 text-center">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-center mb-3">{feature.title}</CardTitle>
                    <CardText className="text-muted text-center">
                      {feature.description}
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
} 