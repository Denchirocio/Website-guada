import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

import imgBanner from '../assets/bannerrrhh.png';

interface Resource {
  title: string;
  description: string;
  href?: string;
}

const resources: Resource[] = [
  { title: 'Guía de Hiragana PDF',  description: 'Aprendé el alfabeto básico japonés desde cero con una guía visual simple.',  href: '/hiragana-chart.pdf' },
  { title: 'Guía de Katakana PDF',  description: 'Una introducción práctica al katakana, y su sistema de escritura.',           href: '/katakana-chart.pdf' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
  { title: 'Hojas para trazos',     description: 'Plantillas imprimibles para practicar escritura japonesa a tu ritmo.' },
  { title: 'Guía de Hiragana PDF',  description: 'Aprendé el alfabeto básico japonés desde cero con una guía visual simple.',  href: '/hiragana-chart.pdf' },
  { title: 'Guía de Katakana PDF',  description: 'Una introducción práctica al katakana, y su sistema de escritura.',           href: '/katakana-chart.pdf' },
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

function ContactDrawer({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nombre:'', email:'', nivel:'', curso:'', comentarios:'' });
  const base: React.CSSProperties = { width:'100%', border:'1px solid #d4d4d4', padding:'14px 16px', fontFamily:"'Work Sans', sans-serif", fontSize:15, color:'#333', outline:'none', background:'white', boxSizing:'border-box', appearance:'none' as const };
  const niveles = ['Principiante (sin experiencia)', 'N5 — Básico', 'N4 — Elemental', 'N3 — Intermedio', 'N2 — Avanzado', 'N1 — Experto'];
  const cursos  = ['Hiragana', 'Katakana', 'Clases particulares', 'Examen JLPT N5'];
  return (
    <>
      <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', zIndex:100, animation:'backdrop-in 0.3s ease' }} />
      <div style={{ position:'fixed', top:0, right:0, height:'100%', width:560, background:'white', zIndex:101, display:'flex', flexDirection:'column', animation:'drawer-in 0.35s cubic-bezier(0.32,0.72,0,1)' }}>
        <button onClick={onClose} style={{ position:'absolute', top:20, right:24, background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#111' }}>✕</button>
        <div style={{ padding:'40px 40px 24px' }}>
          <h2 style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:700, fontSize:32, color:'black', marginBottom:8 }}>Resonemos juntos</h2>
          <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'#555' }}>Enviame tu consulta para poder ayudarte.</p>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'0 40px', display:'flex', flexDirection:'column', gap:12 }}>
          <input placeholder="Nombre & apellido*" value={form.nombre} style={{ ...base, display:'block' }} onChange={e => setForm({ ...form, nombre: e.target.value })} />
          <input placeholder="E-mail*" value={form.email} style={{ ...base, display:'block' }} onChange={e => setForm({ ...form, email: e.target.value })} />
          {/* Nivel de japonés */}
          <div style={{ position:'relative' }}>
            <select value={form.nivel} onChange={e => setForm({...form, nivel: e.target.value})}
              style={{...base, display:'block', cursor:'pointer', color: form.nivel ? '#333' : '#aaa', appearance:'none' as const}}>
              <option value="" disabled>Cuál es tu nivel de japonés?</option>
              {niveles.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
            <span style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', pointerEvents:'none', color:'#aaa' }}>▾</span>
          </div>

          {/* Curso */}
          <div style={{ position:'relative' }}>
            <select value={form.curso} onChange={e => setForm({...form, curso: e.target.value})}
              style={{...base, display:'block', cursor:'pointer', color: form.curso ? '#333' : '#aaa', appearance:'none' as const}}>
              <option value="" disabled>En que curso estás interesado?</option>
              {cursos.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <span style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', pointerEvents:'none', color:'#aaa' }}>▾</span>
          </div>
          <textarea placeholder="Comentarios" rows={6} value={form.comentarios} onChange={e => setForm({...form, comentarios: e.target.value})} style={{...base, resize:'none', display:'block'}} />
        </div>
        <div style={{ padding:'24px 40px', display:'flex', justifyContent:'flex-end', borderTop:'1px solid #ebebeb' }}>
          <button style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:18, padding:'12px 32px', border:'none', cursor:'pointer' }}
            onMouseOver={e => (e.currentTarget.style.background='#333')}
            onMouseOut={e => (e.currentTarget.style.background='black')}>Enviar</button>
        </div>
      </div>
    </>
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
      </FadeIn>

      <Footer />
    </div>
  );
}
