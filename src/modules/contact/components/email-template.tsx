import React from 'react';

type Props = {
  nombre: string;
  empresa: string;
  celular: string;
  correo: string;
  titulo: string;
  mensaje: string;
};

export const EmailTemplate = ({ nombre, empresa, celular, correo, titulo, mensaje }: Props) => (
  <div
    style={{
      backgroundColor: '#f5f5f5',
      padding: '40px 0',
    }}
  >
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        color: '#333',
      }}
    >
      <h2
        style={{
          fontSize: '22px',
          fontWeight: 600,
          marginBottom: '24px',
          color: '#111827',
        }}
      >
        Formulario web — Información de cliente entrante
      </h2>

      <div style={{ display: 'grid', rowGap: '16px' }}>
        <Info label="Nombre" value={nombre} />
        <Info label="Empresa" value={empresa} />
        <Info label="Celular" value={celular} />
        <Info label="Correo" value={correo} />
        <Info label="Título" value={titulo} />
        <div>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Mensaje
          </p>
          <div
            style={{
              backgroundColor: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.6',
              border: '1px solid #e5e7eb',
              whiteSpace: 'pre-wrap',
              color: '#1f2937',
            }}
          >
            {mensaje}
          </div>
        </div>
      </div>

      <footer
        style={{
          marginTop: '32px',
          fontSize: '12px',
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        Este mensaje fue generado automáticamente desde el sitio web thedooragency.com.
      </footer>
    </div>
  </div>
);

const Info = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p
      style={{
        fontSize: '14px',
        fontWeight: 500,
        marginBottom: '4px',
        color: '#374151',
      }}
    >
      {label}
    </p>
    <p
      style={{
        fontSize: '14px',
        color: '#1f2937',
        backgroundColor: '#f9fafb',
        padding: '8px 12px',
        borderRadius: '6px',
        border: '1px solid #e5e7eb',
      }}
    >
      {value}
    </p>
  </div>
);
