'use client';

import { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

type UseRecaptchaReturn = {
  executeRecaptcha: (action: string) => Promise<string | null>;
  isReady: boolean;
};

export const useRecaptcha = (): UseRecaptchaReturn => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkRecaptchaReady = () => {
      if (window.grecaptcha?.enterprise) {
        window.grecaptcha.enterprise.ready(() => {
          setIsReady(true);
        });
      } else {
        // Check again in 100ms if grecaptcha isn't ready yet
        setTimeout(checkRecaptchaReady, 100);
      }
    };

    checkRecaptchaReady();
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!isReady || !window.grecaptcha?.enterprise) {
        console.warn('reCAPTCHA not ready');
        return null;
      }

      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        console.error('reCAPTCHA site key not found');
        return null;
      }

      try {
        const token = await window.grecaptcha.enterprise.execute(siteKey, {
          action,
        });
        return token;
      } catch (error) {
        console.error('reCAPTCHA execution failed:', error);
        return null;
      }
    },
    [isReady]
  );

  return {
    executeRecaptcha,
    isReady,
  };
};
