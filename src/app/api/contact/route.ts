import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Email verificado de Resend
      to: ['josuecovarrubias8@gmail.com'], // Tu email
      replyTo: email, // Email del cliente para que puedas responder
      subject: `Nueva Consulta de Portfolio: ${service || 'Consulta General'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                background: white;
                padding: 15px;
                margin-bottom: 15px;
                border-radius: 8px;
                border-left: 4px solid #14b8a6;
              }
              .label {
                font-weight: bold;
                color: #0d9488;
                margin-bottom: 5px;
              }
              .value {
                color: #334155;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">🚀 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0;">Tu Portfolio - Josue Covarrubias</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #14b8a6;">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">📱 Teléfono:</div>
                <div class="value"><a href="tel:${phone}" style="color: #14b8a6;">${phone}</a></div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">💼 Servicio de Interés:</div>
                <div class="value">${service || 'No especificado'}</div>
              </div>

              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                <p>Este mensaje fue enviado desde tu portfolio web.</p>
                <p>Puedes responder directamente a este email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
