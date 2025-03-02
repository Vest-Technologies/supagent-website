'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, InputGroup } from 'react-bootstrap';
import './styles.scss';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is SupAgent and how does it work?",
    answer: "SupAgent is an AI-driven agent integrated support solution that automates customer support and internal workflows. It uses advanced AI technology to process inquiries through a continuously updated knowledge base, providing instant responses and automating repetitive tasks while seamlessly integrating with human support when needed."
  },
  {
    id: 2,
    category: "General",
    question: "What channels does SupAgent support?",
    answer: "SupAgent integrates with multiple platforms including WordPress, WhatsApp, Messenger, Discord, Slack, and custom websites. This multi-channel deployment ensures consistent support across all your communication channels."
  },
  {
    id: 3,
    category: "Technical",
    question: "How does the AI training process work?",
    answer: "The AI training process involves feeding your knowledge base, documentation, and previous support interactions into our system. The AI continuously learns from new interactions and can be manually trained with specific responses for unique scenarios."
  },
  {
    id: 4,
    category: "Integration",
    question: "How long does it take to integrate SupAgent into my existing systems?",
    answer: "Integration time varies depending on your existing setup, but typically takes 1-3 days. We provide comprehensive documentation and support throughout the process to ensure a smooth transition."
  },
  {
    id: 5,
    category: "Security",
    question: "How secure is the data handled by SupAgent?",
    answer: "We maintain the highest security standards with end-to-end encryption, GDPR compliance, and regular security audits. All data is stored in secure, compliant data centers with strict access controls."
  },
  {
    id: 6,
    category: "Pricing",
    question: "How is SupAgent priced?",
    answer: "SupAgent offers flexible pricing plans based on usage volume and features needed. Contact our sales team for a customized quote that fits your business needs."
  },
  {
    id: 7,
    category: "Technical",
    question: "Can SupAgent handle multiple languages?",
    answer: "Yes, SupAgent supports multiple languages and can automatically detect and respond in the user's preferred language. Currently, we fully support English and Turkish, with more languages being added regularly."
  },
  {
    id: 8,
    category: "Integration",
    question: "What platforms can SupAgent integrate with?",
    answer: "SupAgent integrates with popular platforms like Zapier, Make.com, and major e-commerce platforms. We also offer custom API integration options for specific needs."
  },
  {
    id: 9,
    category: "Features",
    question: "How does the escalation to human support work?",
    answer: "When an AI agent encounters a complex issue or detects high user frustration, it automatically escalates to human support with full context of the conversation. This ensures seamless transition and maintains quality support."
  },
  {
    id: 10,
    category: "Technical",
    question: "What kind of analytics and reporting does SupAgent provide?",
    answer: "SupAgent offers comprehensive analytics including response times, resolution rates, common issues, customer satisfaction scores, and AI performance metrics. Custom reports can be generated based on your specific needs."
  },
  {
    id: 11,
    category: "Features",
    question: "Can SupAgent handle complex workflows?",
    answer: "Yes, SupAgent can handle complex, multi-step workflows through its advanced workflow automation engine. This includes conditional logic, parallel processes, and integration with external systems."
  },
  {
    id: 12,
    category: "Security",
    question: "Is SupAgent GDPR compliant?",
    answer: "Yes, SupAgent is fully GDPR compliant. We provide tools for data management, user consent, and data deletion requests, ensuring your business meets all privacy requirements."
  },
  {
    id: 13,
    category: "Technical",
    question: "How often is the AI updated?",
    answer: "The AI models are continuously updated based on new interactions and feedback. Major system updates occur monthly, while knowledge base updates can happen in real-time."
  },
  {
    id: 14,
    category: "Support",
    question: "What kind of support do you provide during implementation?",
    answer: "We provide comprehensive support including dedicated implementation specialists, documentation, training sessions, and 24/7 technical support during the integration phase."
  },
  {
    id: 15,
    category: "Features",
    question: "Can SupAgent handle file attachments?",
    answer: "Yes, SupAgent can process and respond to queries involving file attachments, including documents, images, and other media files, making it suitable for technical support scenarios."
  },
  {
    id: 16,
    category: "Integration",
    question: "Do you offer custom development for specific needs?",
    answer: "Yes, we offer custom development services to adapt SupAgent to specific business requirements, including custom integrations and specialized AI training."
  },
  {
    id: 17,
    category: "Technical",
    question: "What is the uptime guarantee for SupAgent?",
    answer: "We guarantee 99.9% uptime for our services, with redundant systems and automatic failover to ensure continuous operation of your support systems."
  },
  {
    id: 18,
    category: "Features",
    question: "Can SupAgent integrate with our CRM system?",
    answer: "Yes, SupAgent can integrate with major CRM systems including Salesforce, HubSpot, and others through our API or existing integrations."
  },
  {
    id: 19,
    category: "Security",
    question: "How is sensitive customer data protected?",
    answer: "We use industry-standard encryption, secure data centers, and role-based access control. All sensitive data is encrypted both in transit and at rest."
  },
  {
    id: 20,
    category: "Technical",
    question: "What happens if the AI cannot answer a question?",
    answer: "If the AI cannot confidently answer a question, it automatically escalates to human support while maintaining context. This ensures no query goes unanswered."
  },
  {
    id: 21,
    category: "Features",
    question: "Does SupAgent support voice interactions?",
    answer: "Yes, SupAgent can handle voice interactions through integration with voice platforms and can convert speech to text for processing."
  },
  {
    id: 22,
    category: "Integration",
    question: "Can we migrate our existing knowledge base to SupAgent?",
    answer: "Yes, we provide tools and support for migrating existing knowledge bases, FAQs, and support documentation into the SupAgent system."
  },
  {
    id: 23,
    category: "Technical",
    question: "How does SupAgent handle high volume traffic?",
    answer: "SupAgent uses auto-scaling infrastructure to handle varying loads, ensuring consistent performance even during peak times."
  },
  {
    id: 24,
    category: "Features",
    question: "Can we customize the AI's responses?",
    answer: "Yes, you can customize the AI's responses, tone, and personality to match your brand voice and specific requirements."
  },
  {
    id: 25,
    category: "Support",
    question: "What ongoing support do you provide?",
    answer: "We provide continuous support including system monitoring, regular updates, technical support, and consultation for optimization."
  },
  {
    id: 26,
    category: "Technical",
    question: "How does the system handle updates and maintenance?",
    answer: "Updates are performed during low-traffic periods with zero or minimal downtime. Maintenance schedules are communicated in advance."
  },
  {
    id: 27,
    category: "Features",
    question: "Can SupAgent handle multiple time zones?",
    answer: "Yes, SupAgent operates 24/7 and can handle multiple time zones, adjusting responses and escalations based on local business hours."
  },
  {
    id: 28,
    category: "Integration",
    question: "What API documentation is available?",
    answer: "We provide comprehensive API documentation, including examples, endpoints, and integration guides for developers."
  },
  {
    id: 29,
    category: "Security",
    question: "How often are security audits performed?",
    answer: "We conduct regular security audits and penetration testing, with third-party audits performed quarterly."
  },
  {
    id: 30,
    category: "Features",
    question: "Can we track agent performance metrics?",
    answer: "Yes, SupAgent provides detailed performance metrics for both AI and human agents, including response times, resolution rates, and satisfaction scores."
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center faq-title">Frequently Asked Questions</h1>
          <p className="text-center faq-description">
            Find answers to common questions about SupAgent's features, integrations, and capabilities.
          </p>
        </Col>
      </Row>

      <div className="search-container">
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="shadow-sm"
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="shadow-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <Accordion>
            {filteredFAQs.map((faq) => (
              <Accordion.Item key={faq.id} eventKey={faq.id.toString()}>
                <Accordion.Header>
                  <span className="category-badge me-2">{faq.category}</span>
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      {filteredFAQs.length === 0 && (
        <Row className="mt-4">
          <Col className="text-center">
            <p className="faq-description">No FAQs found matching your search criteria.</p>
          </Col>
        </Row>
      )}
    </Container>
  );
} 