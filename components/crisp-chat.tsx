'use client';

import {useEffect} from 'react';
import {Crisp} from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('69fb15e2-f3c1-4f8b-920d-15d6cc4a841c');
  }, []);

  return null;
};
