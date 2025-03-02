import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import styles from '../features.module.css';

export default function MultilanguagePage() {
  const languageFeatures = [
    {
      title: 'Real-time Translation',
      description: 'Seamlessly communicate with customers in their preferred language through instant, accurate translations.',
      icon: '🌍'
    },
    {
      title: 'Cultural Adaptation',
      description: 'Adapt responses to match cultural nuances and regional preferences for more effective communication.',
      icon: '🤝'
    },
    {
      title: 'Language Detection',
      description: 'Automatically detect customer\'s language and switch to the appropriate communication mode.',
      icon: '🔍'
    },
    {
      title: 'Multilingual Knowledge Base',
      description: 'Maintain and update your knowledge base in multiple languages for consistent support quality.',
      icon: '📚'
    }
  ];

  const supportedLanguages = [
    { name: 'English', code: 'EN', flag: '🇬🇧' },
    { name: 'Turkish', code: 'TR', flag: '🇹🇷' },
    { name: 'Spanish', code: 'ES', flag: '🇪🇸' },
    { name: 'French', code: 'FR', flag: '🇫🇷' },
    { name: 'German', code: 'DE', flag: '🇩🇪' },
    { name: 'Italian', code: 'IT', flag: '🇮🇹' },
    { name: 'Portuguese', code: 'PT', flag: '🇵🇹' },
    { name: 'Arabic', code: 'AR', flag: '🇸🇦' }
  ];

  return (
    <div className="multilanguage-page py-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">Multilanguage Support</h1>
            <p className="lead text-muted">
              Break language barriers and provide seamless support to customers worldwide.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {languageFeatures.map((feature, index) => (
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

        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 mb-4">Supported Languages</h2>
            <div className={styles['language-grid']}>
              {supportedLanguages.map((lang, index) => (
                <div key={index} className={styles['language-item']}>
                  <span className={styles['language-flag']}>{lang.flag}</span>
                  <span className={styles['language-name']}>{lang.name}</span>
                  <span className={styles['language-code']}>{lang.code}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light p-4 rounded-3">
              <h3 className="h4 mb-4">Key Benefits</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <strong>Global Reach</strong>
                  <p className="text-muted mb-0">Expand your business to international markets with confidence.</p>
                </li>
                <li className="mb-3">
                  <strong>Customer Satisfaction</strong>
                  <p className="text-muted mb-0">Improve customer experience by communicating in their preferred language.</p>
                </li>
                <li className="mb-3">
                  <strong>Cost Efficiency</strong>
                  <p className="text-muted mb-0">Reduce the need for multiple language-specific support teams.</p>
                </li>
                <li>
                  <strong>24/7 Availability</strong>
                  <p className="text-muted mb-0">Provide round-the-clock support in all supported languages.</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 