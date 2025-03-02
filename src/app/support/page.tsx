'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './styles.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  priority: string;
  message: string;
  attachments: FileList | null;
}

const topics = [
  'Technical Support',
  'Account Management',
  'Billing & Pricing',
  'Integration Help',
  'Feature Request',
  'Bug Report',
  'Security Concern',
  'General Inquiry',
  'Partnership Opportunity'
];

const priorities = [
  'Low - General Inquiry',
  'Medium - Need Assistance',
  'High - System Issue',
  'Critical - Service Disruption'
];

export default function SupportPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    topic: '',
    priority: '',
    message: '',
    attachments: null
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        topic: '',
        priority: '',
        message: '',
        attachments: null
      });
      setValidated(false);
      return;
    }

    setValidated(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: e.target.files
      }));
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col md={10} lg={8}>
          <div className="text-center mb-5">
            <h1 className="support-title">Contact Support</h1>
            <p className="support-description">
              Need help? Our support team is here to assist you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="support-card">
            <Card.Body className="p-4 p-md-5">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number (Optional)</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="company">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your company name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="topic">
                      <Form.Label>Topic</Form.Label>
                      <Form.Select
                        required
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a topic</option>
                        {topics.map(topic => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select a topic.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="priority">
                      <Form.Label>Priority Level</Form.Label>
                      <Form.Select
                        required
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                      >
                        <option value="">Select priority</option>
                        {priorities.map(priority => (
                          <option key={priority} value={priority}>{priority}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select a priority level.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your issue or question in detail"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="attachments">
                  <Form.Label>Attachments (Optional)</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  />
                  <Form.Text className="text-muted">
                    Supported file types: JPG, PNG, PDF, DOC, DOCX (Max 10MB per file)
                  </Form.Text>
                </Form.Group>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="submit-button"
                  >
                    Submit Support Request
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <div className="additional-support text-center mt-5">
            <h3>Need Immediate Assistance?</h3>
            <p>
              For urgent matters, you can also reach us at:<br />
              Email: support@supagent.com<br />
              Phone: +1 (555) 123-4567<br />
              Available 24/7 for critical support
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
} 