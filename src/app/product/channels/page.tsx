import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from '@/components/BootstrapClient';
import styles from './channels.module.css';

const channels = [
  {
    title: 'Web',
    description: 'Integrate AI agents directly into your website for seamless customer support',
    path: '/product/channels/web',
    icon: '🌐'
  },
  {
    title: 'WhatsApp',
    description: 'Connect with customers on the world\'s most popular messaging platform',
    path: '/product/channels/whatsapp',
    icon: '📱'
  },
  {
    title: 'Instagram',
    description: 'Provide support through Instagram\'s messaging features',
    path: '/product/channels/instagram',
    icon: '📸'
  },
  {
    title: 'Messenger',
    description: 'Engage with your Facebook audience through Messenger',
    path: '/product/channels/messenger',
    icon: '💬'
  },
  {
    title: 'Slack',
    description: 'Streamline internal communications with AI-powered Slack integration',
    path: '/product/channels/slack',
    icon: '🔄'
  }
];

export default function ChannelsPage() {
  return (
    <div className="channels-page py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 mb-3">Integration Channels</h1>
            <p className="lead text-muted">
              Deploy your AI agents across multiple platforms to provide consistent support everywhere your customers are
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {channels.map((channel, index) => (
            <Col key={index} md={6} lg={4}>
              <Link href={channel.path} className="text-decoration-none">
                <Card className={`h-100 shadow-sm ${styles['channel-card']}`}>
                  <CardBody className="d-flex flex-column">
                    <div className={`${styles['channel-icon']} mb-3 fs-1 text-center`}>
                      {channel.icon}
                    </div>
                    <CardTitle className="text-center h4 mb-3">{channel.title}</CardTitle>
                    <CardText className="text-muted text-center">
                      {channel.description}
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center bg-light rounded-3 p-4 mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 mb-4">Omnichannel Support</h2>
            <p>Our platform enables true omnichannel support, allowing your AI agents to:</p>
            <ul className={styles['benefits-list']}>
              <li className={styles['benefit-item']}>
                <span className={styles['benefit-icon']}>✓</span>
                <div className={styles['benefit-content']}>
                  <strong>Maintain context</strong> across different channels
                </div>
              </li>
              <li className={styles['benefit-item']}>
                <span className={styles['benefit-icon']}>✓</span>
                <div className={styles['benefit-content']}>
                  <strong>Provide consistent responses</strong> regardless of platform
                </div>
              </li>
              <li className={styles['benefit-item']}>
                <span className={styles['benefit-icon']}>✓</span>
                <div className={styles['benefit-content']}>
                  <strong>Transfer conversations</strong> between channels when needed
                </div>
              </li>
              <li className={styles['benefit-item']}>
                <span className={styles['benefit-icon']}>✓</span>
                <div className={styles['benefit-content']}>
                  <strong>Collect unified analytics</strong> across all touchpoints
                </div>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <div className={styles['integration-diagram']}>
              <div className={styles['central-hub']}>
                <span className={styles['hub-icon']}>🤖</span>
                <span className={styles['hub-text']}>AI Agent</span>
              </div>
              <div className={styles['connection-lines']}></div>
              <div className={styles['channel-bubbles']}>
                {channels.map((channel, index) => (
                  <div key={index} className={styles['channel-bubble']}>
                    <span className={styles['bubble-icon']}>{channel.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h3 className="h4 mb-4">Ready to expand your reach?</h3>
            <p className="mb-4">Explore our channel integrations to learn how you can deploy AI agents where they'll have the most impact.</p>
            <Link href="/product/channels/web" className="btn btn-primary btn-lg me-3">
              Start with Web Integration
            </Link>
            <Link href="/contact" className="btn btn-outline-secondary btn-lg">
              Contact Sales
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 