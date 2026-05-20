import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import imgBanner from '../assets/bannerrrhh.png';

interface Resource {
  title: string;
  description: string;
  href?: string;
}

const resources: Resource[] = [
  { title: 'Guía de Hiragana PDF',  description: 'Aprendé el alfabeto básico japonés desde cero con una guía visual simple.' },
  { title: 'Guía de Katakana PDF',  description: 'Una introducción práctica al katakana, y su sistema de escritura.' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
  { title: 'Guía de Hiragana PDF',  description: 'Aprendé el alfabeto básico japonés desde cero con una guía visual simple.' },
  { title: 'Guía de Katakana PDF',  description: 'Una introducción práctica al katakana, y su sistema de escritura.' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white', border: '1px solid #d4d4d4', borderRadius: 6,
        padding: 16, display: 'flex', flexDirection: 'column', gap: 16,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.10)' : '0 0 0 rgba(0,0,0,0)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}>
      {/* Image placeholder */}
      <div style={{ width: '100%', height: 128, background: '#f0f0f0', borderRadius: 4 }} />

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 24, color: 'black' }}>{resource.title}</p>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300, fontSize: 16, color: 'black', lineHeight: '24px' }}>{resource.description}</p>
      </div>

      {/* CTA */}
      <a
        href={resource.href ?? '#'}
        style={{
          display: 'block', background: 'black', color: 'white', textAlign: 'center',
          fontFamily: "'Work Sans', sans-serif", fontSize: 16, padding: '10px 16px',
          border: 'none', cursor: 'pointer', textDecoration: 'none',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = 'black')}>
        Descargar
      </a>
    </div>
  );
}

export default function Recursos() {
  return (
    <div style={{ background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Navbar active="recursos" onHablemos={() => {}} />

      {/* ─── Banner ─── */}
      <div style={{ width: '100%', height: 250, overflow: 'hidden', borderBottom: '2px solid #d4d4d4' }}>
        <img src={imgBanner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* ─── Recursos ─── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', width: '100%', padding: '80px 20px' }}>
        {/* Section title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 29 }}>
          <span style={{ fontFamily: "'Krona One', sans-serif", fontSize: 24, letterSpacing: '4.8px', color: 'black' }}>RECURSOS</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, color: 'black' }}>|</span>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 16, color: 'black', letterSpacing: '0.64px' }}>Acercando el japonés a tu día a día.</span>
        </div>

        {/* Cards — 2 rows of 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[resources.slice(0, 4), resources.slice(4, 8)].map((row, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {row.map((resource, i) => (
                <ResourceCard key={`${ri}-${i}`} resource={resource} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
