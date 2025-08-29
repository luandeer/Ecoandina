/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FormControl, FormField, FormItem, FormMessage } from '@/common/components/shadcnui/form';
import Script from 'next/script';
import { Control, UseFormSetValue } from 'react-hook-form';

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  };
}
interface Props {
  action: string;
  control: Control<any>; // Puedes tipar con tu tipo de form si quieres
  setValue: UseFormSetValue<any>;
}

export function RecaptchaWrapper({ action, control, setValue }: Props) {
  const executeRecaptcha = () => {
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            `${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
            { action },
          );
          const tokenInput = document.getElementById('recaptcha-token') as HTMLInputElement;
          if (tokenInput) tokenInput.value = token;
          // Aquí usas setValue para actualizar el valor en el formulario
          setValue('recaptchaToken', token, { shouldValidate: true });
        } catch (e) {
          console.error('Recaptcha error', e);
        }
      });
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
      />
      <FormField
        control={control}
        name="recaptchaToken"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <input type="hidden" id="recaptcha-token" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
