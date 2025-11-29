'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-58B6W7GX2Z');
    }

    // Initialize Tawk.to
    if (typeof window !== 'undefined') {
      var Tawk_API = (window as any).Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/692a138cc860c2197de63116/1jb65oo69';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        if (s0.parentNode) {
          s0.parentNode.insertBefore(s1, s0);
        }
      })();
    }

    // Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            console.log('ServiceWorker registration successful');
          },
          function(err) {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-58B6W7GX2Z"
        strategy="afterInteractive"
      />
    </>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
