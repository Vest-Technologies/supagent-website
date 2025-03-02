'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Essential cookies cannot be disabled
    analytics: true,
    marketing: true,
    functional: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setSettings({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    saveCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    setShow(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(settings);
    setShowPreferences(false);
    setShow(false);
  };

  const saveCookiePreferences = (preferences: CookieSettings) => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    // Here you would typically trigger your analytics/tracking code based on preferences
  };

  if (!show) return null;

  return (
    <>
      <div className="cookie-consent-banner">
        <div className="cookie-consent-content">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 p-3 bg-white fixed-bottom shadow-lg">
            <div className="cookie-text flex-grow-1">
              <p className="mb-0">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
                <Link href="/legal/cookies" className="text-primary text-decoration-none">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="cookie-buttons d-flex gap-2 flex-shrink-0">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => setShowPreferences(true)}
              >
                Cookie Settings
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showPreferences}
        onHide={() => setShowPreferences(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cookie Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cookie-preferences">
            <p className="text-muted mb-4">
              We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
            </p>

            <div className="cookie-option mb-3 p-3 border rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="mb-1">Essential Cookies</h5>
                  <p className="text-muted mb-0 small">These cookies are necessary for the website to function and cannot be switched off.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={settings.essential}
                    disabled
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>

            <div className="cookie-option mb-3 p-3 border rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="mb-1">Analytics Cookies</h5>
                  <p className="text-muted mb-0 small">These cookies help us understand how visitors interact with our website.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                  />
                </div>
              </div>
            </div>

            <div className="cookie-option mb-3 p-3 border rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="mb-1">Functional Cookies</h5>
                  <p className="text-muted mb-0 small">These cookies enable personalized features and functionality.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={settings.functional}
                    onChange={(e) => setSettings({ ...settings, functional: e.target.checked })}
                  />
                </div>
              </div>
            </div>

            <div className="cookie-option mb-3 p-3 border rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="mb-1">Marketing Cookies</h5>
                  <p className="text-muted mb-0 small">These cookies help us show you relevant advertising content.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={settings.marketing}
                    onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowPreferences(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSavePreferences}>
            Save Preferences
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 