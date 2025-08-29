'use client';

//ejemplode para politicas de cookies, no se esta usando
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function ConsentScripts() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') setHasConsent(true);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>

      {/* Otras cookies (como reCAPTCHA) también van aquí */}
    </>
  );
}
