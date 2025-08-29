// app/contacto/action/sendEmail.ts
'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/thedooragency-re-1749018755335/assessments?key=${secretKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token,
          expectedAction: 'contact_form',
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    },
  );

  const data = await response.json();

  if (data?.tokenProperties?.valid !== true) {
    console.log('reCAPTCHA no válido:', data);
    return false;
  }

  if ((data?.riskAnalysis?.score ?? 0) < 0.5) {
    console.log('reCAPTCHA score bajo:', data);
    return false;
  }

  return true;
}

export async function sendEmail(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const empresa = formData.get('empresa') as string;
  const celular = formData.get('celular') as string;
  const correo = formData.get('correo') as string;
  const titulo = formData.get('titulo') as string;
  const mensaje = formData.get('mensaje') as string;
  const recaptchaToken = formData.get('recaptchaToken') as string;
  // thedoor.agencyperu@gmail.com
  // Verificar reCAPTCHA
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return { success: false, error: 'Falló la verificación de reCAPTCHA' };
  }
  try {
    const { data, error } = await resend.emails.send({
      from: 'Thedoor agency <contacto@thedooragency.com>',
      to: ['thedoor.agencyperu@gmail.com'],
      subject: titulo || 'Nuevo mensaje de contacto',
      react: EmailTemplate({ nombre, empresa, celular, correo, titulo, mensaje }),
    });

    if (error) return { success: false, error: String(error) };

    return { success: true, data };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
