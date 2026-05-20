import { useState } from 'react';
import imgBannerForm from '../assets/bannerform.png';

const niveles = ['Principiante (sin experiencia)', 'N5 — Básico', 'N4 — Elemental', 'N3 — Intermedio', 'N2 — Avanzado', 'N1 — Experto'];
const cursos  = ['Hiragana', 'Katakana', 'Clases particulares', 'Examen JLPT N5'];

const fieldBase: React.CSSProperties = {
  width: '100%', border: '1px solid #aaa', padding: '4px 8px',
  fontFamily: "'Work Sans', sans-serif", fontSize: 16, color: 'black',
  outline: 'none', background: 'white', boxSizing: 'border-box',
  appearance: 'none' as const,
};

export default function ContactDrawer({ onClose, cursoDefault }: { onClose: () => void; cursoDefault?: string }) {
  const [form, setForm] = useState({ nombre: '', email: '', nivel: '', curso: cursoDefault ?? '', comentarios: '' });

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 100, animation: 'backdrop-in 0.3s ease' }} />
      <div style={{ position: 'fixed', top: 0, right: 0, height: '100%', width: 600, background: 'white', zIndex: 101, display: 'flex', flexDirection: 'column', animation: 'drawer-in 0.35s cubic-bezier(0.32,0.72,0,1)', overflowY: 'auto' }}>

        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#111', zIndex: 1 }}>✕</button>

        <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Banner con imagen y texto */}
            <div style={{ position: 'relative', width: '100%', height: 169, overflow: 'hidden' }}>
              <img src={imgBannerForm} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                background: 'white', border: '1.2px solid black',
                padding: '14px 19px', textAlign: 'center', whiteSpace: 'nowrap',
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <p style={{ fontFamily: "'Krona One', sans-serif", fontSize: 24, letterSpacing: '2.4px', color: 'black' }}>Resonemos juntos</p>
                <p style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 16, letterSpacing: '0.64px', color: 'black' }}>Enviame tu consulta para poder ayudarte.</p>
              </div>
            </div>

            {/* Nombre */}
            <input placeholder="Nombre & apellido*" value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
              style={{ ...fieldBase, height: 48 }} />

            {/* Email */}
            <input placeholder="E-mail*" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ ...fieldBase, height: 48 }} />

            {/* Nivel */}
            <div style={{ position: 'relative' }}>
              <select value={form.nivel} onChange={e => setForm({ ...form, nivel: e.target.value })}
                style={{ ...fieldBase, height: 48, cursor: 'pointer', color: form.nivel ? 'black' : '#aaa' }}>
                <option value="" disabled>Cuál es tu nivel de japonés?</option>
                {niveles.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#aaa' }}>▾</span>
            </div>

            {/* Curso */}
            <div style={{ position: 'relative' }}>
              <select value={form.curso} onChange={e => setForm({ ...form, curso: e.target.value })}
                style={{ ...fieldBase, height: 48, cursor: 'pointer', color: form.curso ? 'black' : '#aaa' }}>
                <option value="" disabled>En que curso estás interesado?</option>
                {cursos.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#aaa' }}>▾</span>
            </div>

            {/* Comentarios */}
            <textarea placeholder="Comentarios" rows={6} value={form.comentarios}
              onChange={e => setForm({ ...form, comentarios: e.target.value })}
              style={{ ...fieldBase, height: 187, resize: 'none' }} />
          </div>

          {/* Enviar */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 24 }}>
            <button
              style={{ background: 'black', color: 'white', fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: 20, padding: '10px 16px', border: 'none', cursor: 'pointer' }}
              onMouseOver={e => (e.currentTarget.style.background = '#333')}
              onMouseOut={e => (e.currentTarget.style.background = 'black')}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
