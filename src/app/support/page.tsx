  'use client';

  import React, { useState } from 'react';
  import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
  import { motion } from 'framer-motion';
  import Image from 'next/image';
  import PageTransition from '@/components/PageTransition';
  import AnimatedSection from '@/components/AnimatedSection';
  import { fadeInVariant, bounceVariant } from '@/lib/animation';
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
      message: ''
    });

    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
      } else {
        setLoading(true);
        
        try {
          // Prepare payload for API
          const payload = {
            useCase: "support",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.company,
            topic: formData.topic,
            priority: formData.priority,
            message: formData.message
          };

          // Send request to endpoint
          const response = await fetch('https://h5bhkostncehunn2wqgohlvgra0qxnbu.lambda-url.eu-north-1.on.aws/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error('Failed to submit form');
          }

          setSubmitted(true);
        } catch (error) {
          console.error('Error submitting form:', error);
          // You could add error handling UI here
        } finally {
          setLoading(false);
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <PageTransition>
        <section className="support-section py-5">
          {/* Background elements */}
          <div className="position-absolute top-0 left-0 w-100 h-100">
            <div className="support-gradient-1"></div>
            <div className="support-gradient-2"></div>
            <div className="support-particles"></div>
          </div>
          
          <div className="position-absolute top-0 end-0 mt-5 me-5 d-none d-lg-block">
            <Image 
              src="/illustrations/customer-support.svg" 
              alt="Customer Support Illustration" 
              width={200} 
              height={200}
              className="floating-image"
            />
          </div>
          
          <div className="position-absolute bottom-0 start-0 mb-5 ms-5 d-none d-lg-block">
            <Image 
              src="/illustrations/hr-support.svg" 
              alt="Hr Support Illustration" 
              width={180} 
              height={180}
              className="floating-image-reverse"
            />
          </div>
          
          <Container className="py-5">
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h1 className="support-title display-4 fw-bold mb-4">
                  Contact <span className="text-primary">Support</span>
                </h1>
                <p className="support-subtitle lead mb-0">
                  Need help? Our support team is here to assist you. Please fill out the form below and we'll get back to you as soon as possible.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={8}>
                <AnimatedSection variants={fadeInVariant}>
                  <Card className="border-0 shadow-lg support-card">
                    <Card.Body className="p-4 p-lg-5">
                      {!submitted ? (
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                          <Row>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="firstName">
                                <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  placeholder="Enter your first name"
                                  className="form-control-lg"
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please provide your first name.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="lastName">
                                <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  placeholder="Enter your last name"
                                  className="form-control-lg"
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
                                <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                  required
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="Enter your email"
                                  className="form-control-lg"
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
                                  className="form-control-lg"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-4" controlId="company">
                            <Form.Label>Company Name (Optional)</Form.Label>
                            <Form.Control
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Enter your company name"
                              className="form-control-lg"
                            />
                          </Form.Group>

                          <Row>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="topic">
                                <Form.Label>Topic <span className="text-danger">*</span></Form.Label>
                                <Form.Select
                                  required
                                  name="topic"
                                  value={formData.topic}
                                  onChange={handleInputChange}
                                  className="form-select-lg"
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
                                <Form.Label>Priority Level <span className="text-danger">*</span></Form.Label>
                                <Form.Select
                                  required
                                  name="priority"
                                  value={formData.priority}
                                  onChange={handleInputChange}
                                  className="form-select-lg"
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
                            <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                              required
                              as="textarea"
                              rows={5}
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Please describe your issue or question in detail"
                              className="form-control-lg"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a message.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <div className="text-center">
                            <motion.button
                              type="submit"
                              className="btn btn-warning btn-lg px-5 py-3"
                              disabled={loading}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {loading ? (
                                <span>
                                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                  Submitting...
                                </span>
                              ) : (
                                <span>
                                  <i className="bi bi-send-check me-2"></i>
                                  Submit Support Request
                                </span>
                              )}
                            </motion.button>
                          </div>
                        </Form>
                      ) : (
                        <motion.div 
                          className="text-center py-4"
                          variants={bounceVariant}
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="checkmark-circle mb-4">
                            <i className="bi bi-check-lg text-success"></i>
                          </div>
                          <h3 className="mb-3">Thank You for Contacting Us!</h3>
                          <p className="mb-0">
                            Your support request has been submitted successfully. We'll get back to you as soon as possible.
                          </p>
                        </motion.div>
                      )}
                    </Card.Body>
                  </Card>
                </AnimatedSection>
              </Col>
            </Row>

            <Row className="justify-content-center mt-5">
              <Col lg={8} className="text-center">
                <div className="additional-support mt-4">
                  <h3>Need Immediate Assistance?</h3>
                  <div className="support-contact-options mt-4">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div className="contact-text">support@supagent.ai</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div className="contact-text">+90 (507) 738 52 77</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      <div className="contact-text">Available 24/7 for critical support</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </PageTransition>
    );
  } 