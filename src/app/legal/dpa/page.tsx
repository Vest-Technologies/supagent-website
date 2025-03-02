'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function DataProcessingAddendum() {
  return (
    <Container className="py-4 legal-content">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className="mb-4">Data Processing Addendum</h1>
          
          <section className="mb-4">
            <p className="text-muted mb-2">Last updated: March 2024</p>
            <p className="mb-3">This Data Processing Addendum ("DPA") supplements the Terms of Service (the "Agreement") entered into by and between the customer signing this DPA ("Customer") and SupAgent ("Company"). By executing the DPA in accordance with Section 11 herein, Customer enters into this DPA on behalf of itself and, to the extent required under applicable Data Protection Laws (defined below), in the name and on behalf of its Affiliates (defined below), if any. This DPA incorporates the terms of the Agreement, and any terms not defined in this DPA shall have the meaning set forth in the Agreement.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">1. Definitions</h2>
            <ul className="mb-3">
              <li className="mb-3">
                <strong>"Affiliate"</strong> means (i) an entity of which a party directly or indirectly owns fifty percent (50%) or more of the stock or other equity interest, (ii) an entity that owns at least fifty percent (50%) or more of the stock or other equity interest of a party, or (iii) an entity which is under common control with a party by having at least fifty percent (50%) or more of the stock or other equity interest of such entity and a party owned by the same person, but such entity shall only be deemed to be an Affiliate so long as such ownership exists.
              </li>
              <li className="mb-3">
                <strong>"Authorized Sub-Processor"</strong> means a third-party who has a need to know or otherwise access Customer's Personal Data to enable Company to perform its obligations under this DPA or the Agreement, and who is either (1) listed in Exhibit B or (2) subsequently authorized under Section 4.2 of this DPA.
              </li>
              <li className="mb-3">
                <strong>"Company Account Data"</strong> means personal data that relates to Company's relationship with Customer, including the names or contact information of individuals authorized by Customer to access Customer's account and billing information of individuals that Customer has associated with its account.
              </li>
              <li className="mb-3">
                <strong>"Company Usage Data"</strong> means Service usage data collected and processed by Company in connection with the provision of the Services, including without limitation data used to identify the source and destination of a communication, activity logs, and data used to optimize and maintain performance of the Services.
              </li>
              <li className="mb-3">
                <strong>"Data Protection Laws"</strong> means any applicable laws and regulations relating to the use or processing of Personal Data including: (i) the California Consumer Privacy Act ("CCPA"), (ii) the General Data Protection Regulation (Regulation (EU) 2016/679) ("EU GDPR") and the EU GDPR as it forms part of the law of England and Wales by virtue of section 3 of the European Union (Withdrawal) Act 2018 (the "UK GDPR"), (iii) the Swiss Federal Act on Data Protection, (iv) the UK Data Protection Act 2018.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">2. Relationship of the Parties; Processing of Data</h2>
            <div className="mb-3">
              <h3 className="h5 mb-2">2.1 Processing Roles and Activities</h3>
              <p className="mb-3">The parties acknowledge and agree that with regard to the processing of Personal Data, Customer may act either as a controller or processor and, except as expressly set forth in this DPA or the Agreement, Company is a processor. Customer shall, in its use of the Services, at all times process Personal Data, and provide instructions for the processing of Personal Data, in compliance with Data Protection Laws.</p>
            </div>
            
            <div className="mb-3">
              <h3 className="h5 mb-2">2.2 Customer Processing of Personal Data</h3>
              <p className="mb-3">Customer is solely responsible for the accuracy, quality, and legality of (i) the Personal Data provided to Company by or on behalf of Customer, (ii) the means by which Customer acquired any such Personal Data, and (iii) the instructions it provides to Company regarding the processing of such Personal Data.</p>
            </div>

            <div className="mb-3">
              <h3 className="h5 mb-2">2.3 Company's Processing of Personal Data</h3>
              <p className="mb-3">Company shall process Personal Data only for the purposes described in this DPA and only in accordance with Customer's documented lawful instructions. The parties agree that this DPA and the Agreement set out the Customer's complete and final instructions to Company in relation to the processing of Personal Data.</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">3. Security</h2>
            <div className="mb-3">
              <h3 className="h5 mb-2">3.1 Security Measures</h3>
              <p className="mb-3">Company shall implement and maintain appropriate technical and organizational security measures to protect Personal Data from Security Incidents and to preserve the security and confidentiality of the Personal Data, in accordance with Company's security standards and in accordance with Data Protection Laws.</p>
            </div>

            <div className="mb-3">
              <h3 className="h5 mb-2">3.2 Updates to Security Measures</h3>
              <p className="mb-3">Customer is responsible for reviewing the information made available by Company relating to data security and making an independent determination as to whether the Services meet Customer's requirements and legal obligations under Data Protection Laws.</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">4. Sub-processing</h2>
            <div className="mb-3">
              <h3 className="h5 mb-2">4.1 Authorized Sub-processors</h3>
              <p className="mb-3">Customer agrees that Company may engage Sub-processors to process Personal Data on Customer's behalf. The Sub-processors currently engaged by Company and authorized by Customer are listed in Exhibit B.</p>
            </div>

            <div className="mb-3">
              <h3 className="h5 mb-2">4.2 Sub-processor Obligations</h3>
              <p className="mb-3">Company shall: (i) enter into a written agreement with the Sub-processor imposing data protection terms that require the Sub-processor to protect the Personal Data to the standard required by Data Protection Laws; and (ii) remain responsible for its compliance with the obligations of this DPA and for any acts or omissions of the Sub-processor that cause Company to breach any of its obligations under this DPA.</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">5. Security Reports and Audits</h2>
            <p className="mb-3">Company shall provide written responses (on a confidential basis) to all reasonable requests for information made by Customer, including responses to information security and audit questionnaires that are necessary to confirm Company's compliance with this DPA, provided that Customer shall not exercise this right more than once per year.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">6. International Transfers</h2>
            <p className="mb-3">Company may transfer and process Personal Data to and in other locations around the world where Company or its Sub-processors maintain data processing operations. Company shall ensure such transfers are made in compliance with the requirements of Data Protection Laws.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">7. Return or Deletion of Data</h2>
            <p className="mb-3">Upon termination or expiration of the Agreement, Company shall (at Customer's election) delete or return to Customer all Personal Data in its possession or control, except for Personal Data Company retains in accordance with applicable laws.</p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">8. Cooperation</h2>
            <div className="mb-3">
              <h3 className="h5 mb-2">8.1 Data Subject Requests</h3>
              <p className="mb-3">Company shall, to the extent legally permitted, promptly notify Customer if Company receives a request from a Data Subject to exercise their Data Subject rights in relation to Personal Data. Company shall provide Customer with commercially reasonable cooperation and assistance in relation to handling of a Data Subject Request.</p>
            </div>

            <div className="mb-3">
              <h3 className="h5 mb-2">8.2 Government Requests</h3>
              <p className="mb-3">If Company receives a binding request from a public authority, including judicial authorities, for access to Personal Data, Company shall attempt to redirect the public authority to request that data directly from Customer.</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">9. General Provisions</h2>
            <div className="mb-3">
              <h3 className="h5 mb-2">9.1 Amendments</h3>
              <p className="mb-3">Company may amend this DPA from time to time by posting an updated version on its website, provided that such amendments shall not reduce the level of protection provided for Personal Data.</p>
            </div>

            <div>
              <h3 className="h5 mb-2">9.2 Severability</h3>
              <p>If any provision of this DPA is invalid or unenforceable, the remaining provisions shall remain in effect. Upon such determination that any term or provision is invalid or unenforceable, the parties shall negotiate in good faith to modify this DPA to effect the original intent of the parties as closely as possible.</p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
} 