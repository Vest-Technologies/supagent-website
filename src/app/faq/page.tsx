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
    answer: "SupAgent is an AI-driven agent integrated support solution that automates customer support, business support, onboarding, sales, and more. It uses advanced AI technology to process inquiries through a continuously updated knowledge base, providing instant responses and automating repetitive tasks while seamlessly integrating with human support (coming soon) when needed."
  },
  {
    id: 2,
    category: "General",
    question: "How can SupAgent benefit my business?",
    answer: "SupAgent can significantly reduce support costs, provide 24/7 availability without additional staffing, increase response speed, ensure consistent support quality, and allow your team to focus on strategic tasks rather than routine inquiries. Businesses typically see cost reductions up to 65% while maintaining or improving customer satisfaction."
  },
  {
    id: 3,
    category: "General",
    question: "What types of businesses can use SupAgent?",
    answer: "SupAgent is designed for businesses of all sizes, from solo entrepreneurs to large enterprises across various industries. Our solution is particularly valuable for e-commerce businesses, SaaS companies, educational institutions, HR departments, and any organization that handles frequent customer or employee inquiries."
  },
  {
    id: 4,
    category: "General",
    question: "How do I get started with SupAgent?",
    answer: "To get started, simply join our waitlist on the website. Once you're approved, you'll be guided through a simple setup process that includes training your AI with your knowledge base, customizing its appearance, setting up integrations, and deploying it to your preferred channels."
  },
  {
    id: 5,
    category: "Features",
    question: "How does SupAgent's AI training work?",
    answer: "SupAgent allows you to train your AI using multiple data sources including website crawling (with control over which pages to crawl and synchronization frequency), document uploads (supporting CSV, DOC, PDF, and TXT formats), direct text input through a rich text editor, and integrations with Google Docs and Notion (coming soon). The training process is intuitive and doesn't require technical expertise. You can categorize your training data and continuously update your AI's knowledge base to improve its performance over time."
  },
  {
    id: 6,
    category: "Features",
    question: "Can I customize the appearance of my SupAgent?",
    answer: "Yes, SupAgent offers extensive customization options. You can personalize your chatbot's appearance with custom colors, fonts, and sizes to match your brand identity. The customization features include styling the main chat interface, chat bubble appearance, header design, message bubbles, input area, and you can even choose from pre-designed templates. You can adjust position, animations, borders, shadows, and add your logo for a seamless brand experience."
  },
  {
    id: 7,
    category: "Features",
    question: "What languages does SupAgent support?",
    answer: "SupAgent offers full multilanguage support with real-time translation in over 90 languages, including specialized Turkish language capabilities. The platform can automatically detect the user's language and respond accordingly, making it ideal for businesses with a global customer base. You can configure language settings based on your specific requirements and create language-specific training data for optimal performance."
  },
  {
    id: 8,
    category: "Features",
    question: "What analytics and insights does SupAgent provide?",
    answer: "SupAgent offers comprehensive analytics through an intuitive dashboard that includes real-time performance metrics, user engagement statistics, conversion tracking, conversation analysis, sentiment tracking, geographic data, channel performance comparisons, response time metrics, and lead generation insights. These analytics help you understand customer needs, identify improvement areas, optimize your support operations, and make data-driven decisions to enhance customer satisfaction and business outcomes."
  },
  {
    id: 9,
    category: "Features",
    question: "Does SupAgent support automated workflows?",
    answer: "Yes, SupAgent enables you to create custom workflows for automating various business tasks. These can include creating tickets, updating product inventory data, managing calendar events, updating documents, and more. The intuitive flow builder lets you design automation sequences without coding knowledge."
  },
  {
    id: 10,
    category: "Features",
    question: "What AI models does SupAgent use?",
    answer: "SupAgent offers access to over 10 different cutting-edge AI models from leading providers including OpenAI (GPT-4O, GPT-4O Mini, GPT-O3 Mini), Anthropic (Claude 3.5 Sonnet, Claude 3.7 Sonnet), Google (Gemini 1.5 Pro), and more. You can select different models based on your specific needs for reasoning capabilities, response speed, knowledge base depth, or cost-efficiency. The platform allows you to easily switch between models as your requirements evolve."
  },
  {
    id: 11,
    category: "Solutions",
    question: "How does the Customer Support solution work?",
    answer: "Our Customer Support solution provides 24/7 automated support for customer inquiries and requests. Key benefits include 24/7 availability without increased staffing costs, instant responses to eliminate wait times, consistent quality across all interactions, multilingual support without additional resources, and reduced support costs of up to 65%. Features include knowledge base integration, smart escalation to human agents (coming soon ) when necessary, customer sentiment analysis, and omnichannel support capabilities."
  },
  {
    id: 12,
    category: "Solutions",
    question: "What is the Sales Agent solution?",
    answer: "The Sales Agent solution provides AI-powered sales support and lead management. Key benefits include increased conversion rates through personalized, data-driven approaches, automated lead qualification based on behavior patterns, personalized interactions tailored to customer preferences, consistent follow-ups with automated outreach, data-driven insights into customer behavior, and seamless CRM integration. Features include intelligent lead scoring, automated sales sequences for different customer segments, and smart product recommendations based on customer preferences."
  },
  {
    id: 13,
    category: "Solutions",
    question: "How can the HR Support solution help my organization?",
    answer: "Our HR Support solution automates HR processes and employee support. Key benefits include streamlined HR processes that save time and reduce errors, enhanced employee experience with instant responses to queries, reduced administrative burden so HR staff can focus on strategic initiatives, consistent policy application, data-driven HR insights, and scalable HR support without increasing headcount. Features include an employee self-service portal, automated HR workflows, a centralized policy knowledge base, and personalized employee assistance."
  },
  {
    id: 14,
    category: "Solutions",
    question: "What benefits does the Onboarding Buddy solution offer?",
    answer: "The Onboarding Buddy solution streamlines the employee onboarding process. Key benefits include accelerated onboarding that reduces time-to-productivity, consistent experience for all new hires, reduced HR workload through automation, improved retention through a smooth onboarding experience, personalized guidance based on role and department, and 24/7 support for new hires. Features include personalized onboarding plans, interactive training modules, instant knowledge base access, and progress tracking with performance assessments."
  },
  {
    id: 15,
    category: "Solutions",
    question: "How can the Education solution enhance learning experiences?",
    answer: "Our Education solution provides AI-powered educational support. Key benefits include personalized learning tailored to individual styles and progress, 24/7 learning support, reduced educator workload, improved learning outcomes through interactive adaptive learning, scalable education delivery, and data-driven insights into student performance. Features include intelligent tutoring with personalized guidance, adaptive learning paths that customize based on student progress, interactive multimedia content, and comprehensive performance analytics."
  },
  {
    id: 16,
    category: "Channels",
    question: "What communication channels does SupAgent support?",
    answer: "SupAgent can be deployed across multiple channels, including your website, WhatsApp, Instagram, Messenger, and Slack. The Web integration is available now, while WhatsApp, Instagram, Messenger, and Slack integrations are coming soon. This omnichannel approach ensures your customers or employees can access support through their preferred communication method while maintaining consistent quality across all channels."
  },
  {
    id: 17,
    category: "Channels",
    question: "How do I integrate SupAgent with my website?",
    answer: "Integrating SupAgent with your website is simple. After setting up your agent, you'll receive a small code snippet to add to your website. The chatbot will appear as a customizable chat bubble that visitors can interact with. The integration process includes configuring your agent with your knowledge base, customizing its appearance to match your brand, adding the code snippet to your site, testing the implementation, and then launching it live. No technical expertise is required, and the integration works with all major website platforms."
  },
  {
    id: 18,
    category: "Channels",
    question: "Can I integrate SupAgent with WhatsApp?",
    answer: "Yes, SupAgent will soon offer WhatsApp integration through the official WhatsApp Business API. The integration will provide automated responses to common inquiries, seamless handoff to human agents (coming soon) when needed, multilingual support, and detailed analytics. The process involves applying for WhatsApp Business API with Meta (we'll guide you through this), configuring your AI agent, connecting your approved WhatsApp Business number to our platform, testing the implementation, and then launching. This allows your customers to get instant responses through WhatsApp without requiring additional staff."
  },
  {
    id: 19,
    category: "Channels",
    question: "How does the Slack integration work?",
    answer: "SupAgent's upcoming Slack integration will enable AI-powered support directly within your Slack workspace. Features include seamless Slack workspace integration, internal support automation for employees, knowledge base access through natural language, workflow automation, task management, cross-department coordination, and detailed analytics. The integration process involves connecting your Slack workspace with just a few clicks, configuring your agent with your internal knowledge base, setting access permissions for different teams and channels, testing the implementation, and then launching. This can be used for internal support and operational efficiency."
  },
  {
    id: 20,
    category: "Channels",
    question: "Can SupAgent work with my existing tools and platforms?",
    answer: "Yes, SupAgent offers integrations with popular platforms like Zapier and Make.com, allowing you to connect it with thousands of other tools and services. This enables workflows where SupAgent can trigger actions in your CRM, ticketing system, calendar, or other business tools based on customer interactions."
  },
  {
    id: 21,
    category: "Pricing",
    question: "How much does SupAgent cost?",
    answer: "SupAgent offers flexible pricing plans designed to accommodate businesses of all sizes. For specific pricing details, please visit our pricing page or contact our sales team. Our plans typically include different tiers based on volume of interactions, number of channels, and advanced features required."
  },
  {
    id: 22,
    category: "Pricing",
    question: "Is there a free trial available?",
    answer: "We're currently operating on a waitlist model as we prepare for wider release. Once you're approved from the waitlist, you'll have the opportunity to explore SupAgent's capabilities. For the latest information on trials and availability, please join our waitlist or contact our sales team."
  },
  {
    id: 23,
    category: "Pricing",
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, SupAgent offers flexible plans that can be adjusted as your needs change. You can easily upgrade to access more features or increased capacity, or downgrade if your requirements decrease. Our goal is to provide the right solution for your current needs with the flexibility to scale as you grow."
  },
  {
    id: 24,
    category: "Technical",
    question: "How secure is SupAgent with my data?",
    answer: "Security is a top priority at SupAgent. We implement industry-standard encryption, secure data storage practices, and regular security audits. Your data and your customers' information are protected in compliance with relevant data protection regulations. For specific security details, please contact our team or refer to our security documentation."
  },
  {
    id: 26,
    category: "Technical",
    question: "Can SupAgent access and process my internal documents?",
    answer: "Yes, SupAgent can be trained using your internal documents such as PDFs, Word documents, spreadsheets, and text files. This allows the AI to access and reference your company-specific information when responding to inquiries. All document processing is done securely with appropriate data protection measures in place."
  },
  {
    id: 27,
    category: "Technical",
    question: "How does SupAgent handle data privacy and compliance?",
    answer: "SupAgent is designed with privacy and compliance in mind. We implement data minimization practices, secure processing, and configurable data retention policies. The platform can be configured to comply with various regulations such as GDPR and CCPA. For specific compliance requirements, please contact our team."
  },
  {
    id: 28,
    category: "Technical",
    question: "Can I export data from SupAgent for my own analysis?",
    answer: "Yes, SupAgent allows you to export conversation data, analytics, and performance metrics for your own analysis or record-keeping. The data can be exported in standard formats that can be imported into your preferred analytics or business intelligence tools."
  },
  {
    id: 29,
    category: "Solutions",
    question: "How does the Customer Support solution improve customer satisfaction?",
    answer: "The Customer Support solution improves customer satisfaction through several key mechanisms: instant responses eliminate frustrating wait times, consistent quality ensures reliable support experiences, 24/7 availability means customers get help when they need it, multilingual support removes language barriers, and sentiment analysis allows the AI to adapt its tone and approach based on customer emotions. The smart escalation feature ensures complex issues are handled appropriately, further enhancing satisfaction."
  },
  {
    id: 30,
    category: "Solutions",
    question: "What makes the Sales Agent solution different from traditional sales automation?",
    answer: "Unlike traditional sales automation that follows rigid scripts, our Sales Agent solution uses AI to create truly personalized interactions based on customer data and behavior patterns. It can intelligently qualify leads, adapt its approach based on customer responses, recommend relevant products, and learn from each interaction to improve future engagements. The solution also seamlessly integrates with your CRM to maintain a unified view of customer data and ensure continuity across the sales process."
  },
  {
    id: 31,
    category: "Solutions",
    question: "Can the HR Support solution handle complex HR policies and regulations?",
    answer: "Yes, the HR Support solution can be trained on your specific HR policies, procedures, and applicable regulations. The AI can interpret and apply these policies consistently, provide accurate information about benefits and entitlements, and guide employees through complex HR processes. For highly specialized HR matters or cases requiring human judgment, the system includes smart escalation to HR professionals while providing them with the relevant context."
  },
  {
    id: 32,
    category: "Solutions",
    question: "How does the Onboarding Buddy solution measure onboarding effectiveness?",
    answer: "The Onboarding Buddy solution includes comprehensive analytics that track new hire progress through the onboarding process. It measures completion rates of training modules, knowledge retention through assessments, time-to-productivity metrics, and new hire satisfaction through feedback mechanisms. These insights help organizations continuously refine their onboarding processes, identify potential bottlenecks, and ensure new employees are successfully integrating into the company."
  },
  {
    id: 33,
    category: "Solutions",
    question: "Can the Education solution support different learning styles and abilities?",
    answer: "Absolutely. The Education solution is designed to adapt to different learning styles and abilities through its personalized learning approach. It can present information in various formats (text, visual, interactive), adjust the pace based on student progress, provide additional explanations or simplified versions when needed, and offer alternative learning paths. The intelligent tutoring system can identify knowledge gaps and provide targeted support to ensure all students can achieve learning objectives regardless of their starting point."
  },
  {
    id: 34,
    category: "General",
    question: "What kind of support does SupAgent provide for users?",
    answer: "SupAgent provides comprehensive support for all users, including detailed documentation, setup guides, video tutorials, and responsive customer support. Our team is available to assist with onboarding, integration, optimization, and any technical issues you may encounter."
  },
  {
    id: 35,
    category: "General",
    question: "How can I stay updated on new SupAgent features and improvements?",
    answer: "SupAgent regularly releases new features and improvements. You can stay updated through our product update notifications, blog, newsletter, and social media channels. We also provide release notes detailing new features, improvements, and bug fixes with each update."
  },
  {
    id: 36,
    category: "Features",
    question: "How does the Chat History feature help manage conversations?",
    answer: "SupAgent's Chat History feature provides comprehensive filtering options to sort conversations by location, time period, channel source, and other parameters. It includes sentiment analysis with visual indicators for liked and disliked messages, export capabilities for chat logs in multiple formats, and a complete conversation timeline with timestamps and user context. This helps you track customer interactions, identify patterns, and improve your support strategy based on historical data."
  },
  {
    id: 37,
    category: "Features",
    question: "Can I control the AI's personality and response style?",
    answer: "Yes, SupAgent allows you to adjust the AI's personality and response style through temperature settings that control creativity vs. consistency. You can fine-tune your AI to be more creative and conversational for engagement-focused roles like sales, or more precise and factual for technical support. The platform offers over 100 pre-configured personalities such as customer support agent, sales assistant, technical expert, and many more to match your specific business needs."
  },
  {
    id: 38,
    category: "Features",
    question: "How does SupAgent handle languages other than English?",
    answer: "SupAgent excels at multilingual support through several features: automatic language detection identifies the user's preferred language, real-time translation allows seamless communication in over 90 languages, customizable interface elements can be translated to match your audience, and language-specific training data lets you provide specialized knowledge in different languages. This is particularly valuable for the Turkish market, where SupAgent offers full native language support."
  },
  {
    id: 39,
    category: "Features",
    question: "Can I track the effectiveness of my AI agent?",
    answer: "Yes, SupAgent provides comprehensive tracking through its analytics dashboard. You can monitor key metrics like total conversations, response times, user satisfaction rates, conversion rates, and geographic data. The platform also offers trend analysis to track improvements over time, comparison tools to evaluate performance across different channels, and detailed conversation analytics to identify common queries and potential knowledge gaps. These insights help optimize your AI agent's effectiveness and demonstrate ROI."
  },
  {
    id: 40,
    category: "Features",
    question: "What options are available for training my AI with website content?",
    answer: "SupAgent offers flexible website training options where you can crawl entire websites or specify certain pages to include or exclude. You can set synchronization frequency (hourly, daily, weekly, or monthly) to keep your AI updated with the latest content, manage multiple website sources in one interface, and organize website content into categories for better knowledge structuring. This ensures your AI always has the most current information from your website to provide accurate responses."
  },
  {
    id: 41,
    category: "Channels",
    question: "What benefits does the Instagram integration offer?",
    answer: "SupAgent's upcoming Instagram integration will provide several benefits including Instagram DM automation with AI responses, comment monitoring and engagement, visual content analysis and responses, seamless handoff to human agents (coming soon) when needed, multilingual support for global audiences, and detailed analytics. The integration helps enhance customer experience with immediate responses and increases efficiency by automating routine interactions. This allows your team to focus on more strategic aspects of your Instagram presence while ensuring customers receive prompt responses."
  },
  {
    id: 42,
    category: "Channels",
    question: "How will the Facebook Messenger integration help my business?",
    answer: "The upcoming Messenger integration will connect your Facebook business page with AI-powered support capabilities. Key features include automated customer support for common inquiries, seamless handoff to human agents (coming soon) for complex issues, multilingual support for global audiences, and detailed conversation analytics. The integration process is straightforward: connect your Facebook Business page, configure your AI agent with your brand voice and product knowledge, set response parameters, test the system, and launch. This integration helps you provide instant support to your Facebook audience while reducing the workload on your human agents."
  },
  {
    id: 43,
    category: "Channels",
    question: "What makes SupAgent's omnichannel approach valuable?",
    answer: "SupAgent's omnichannel approach provides several key advantages: consistent customer experience across all touchpoints, centralized knowledge management (train once, deploy everywhere), unified analytics that show performance across all channels, seamless conversation handoff between channels when needed, and scalable support capacity without proportionally increasing costs. This approach ensures that your customers receive the same high-quality support regardless of how they choose to contact you, while simplifying management for your team through a single, centralized platform."
  },
  {
    id: 44,
    category: "Channels",
    question: "How does SupAgent handle channel-specific features?",
    answer: "SupAgent adapts to the unique capabilities of each channel. For example, on WhatsApp, it can use verified business profiles and message templates for proactive notifications. On Instagram, it can analyze visual content and respond to both direct messages and comments. For websites, it offers customizable chat widgets with various appearance options. On Slack, it supports internal workflows and cross-department coordination. This channel-specific adaptation ensures optimal performance and user experience on each platform while maintaining consistent support quality and knowledge across all channels."
  },
  {
    id: 45,
    category: "Channels",
    question: "Can I start with one channel and add more later?",
    answer: "Absolutely. Many businesses start with the web integration to provide support on their website and then gradually add additional channels as their needs evolve. SupAgent's platform is designed for flexible deployment, allowing you to activate new channels without needing to retrain your AI or rebuild your setup. The knowledge base and training you create for one channel will automatically be available when you add new channels, making expansion seamless and efficient. This approach lets you scale your AI support strategy at your own pace."
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