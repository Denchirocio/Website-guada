import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import ContactDrawer from '../components/ContactDrawer';

import imgBanner from '../assets/bannerrrhh.png';

interface Resource {
  title: string;
  description: string;
  href?: string;
}

const resources: Resource[] = [
  { title: 'Práctica y juegos de Hiragana',        description: 'Actividades imprimibles para practicar y aprender hiragana de forma divertida.' },
  { title: 'Práctica y juegos de Katakana',        description: 'Actividades imprimibles para practicar y aprender katakana de forma divertida.' },
  { title: 'Tabla de Hiragana completa',           description: 'Tabla de referencia con todos los caracteres hiragana y su romanización.',       href: '/hiragana-chart.pdf' },
  { title: 'Tabla de Katakana completa',           description: 'Tabla de referencia con todos los caracteres katakana y su romanización.',       href: '/katakana-chart.pdf' },
  { title: 'Hojas de práctica de trazos',          description: 'Plantillas imprimibles para practicar la escritura de cada carácter a tu ritmo.' },
  { title: 'Hiragana en braille japonés',          description: 'Tabla de correspondencia entre el hiragana y el sistema braille japonés.' },
  { title: 'Silabario en Lengua de Señas japonesa', description: 'Tabla del silabario japonés representado en Lengua de Señas Japonesa (JSL).' },
  { title: 'Saludos en Lengua de Señas japonesa',  description: 'Videos para aprender los saludos más comunes en Lengua de Señas Japonesa.' },
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
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 20, color: 'black' }}>{resource.title}</p>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300, fontSize: 16, color: 'black', lineHeight: '24px' }}>{resource.description}</p>
      </div>

      {/* CTA */}
      <a
        href={resource.href ?? '#'}
        download={!!resource.href}
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div style={{ background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      {drawerOpen && <ContactDrawer onClose={() => setDrawerOpen(false)} />}
      <Navbar active="recursos" onHablemos={() => setDrawerOpen(true)} />

      {/* ─── Banner ─── */}
      <div style={{ width: '100%', height: 250, overflow: 'hidden', borderBottom: '2px solid #d4d4d4' }}>
        <img src={imgBanner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* ─── Recursos ─── */}
      <FadeIn>
      <section style={{ maxWidth: 1100, margin: '0 auto', width: '100%', padding: '80px 20px' }}>
        {/* Section title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 29 }}>
          <span style={{ fontFamily: "'Krona One', sans-serif", fontSize: 24, letterSpacing: '4.8px', color: 'black' }}>RECURSOS</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, color: 'black' }}>|</span>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 16, color: 'black', letterSpacing: '0.64px' }}>Acercando el japonés a tu día a día.</span>
        </div>

        {/* Cards — 3 por fila */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {resources.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </div>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
}
