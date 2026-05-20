import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactDrawer from '../components/ContactDrawer';
import imgBanner from '../assets/banner cursos.png';
import imgCurso from '../assets/Detalle katakana.png';
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/d7acae28-d696-4114-b1b3-65766dfdcb38";
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/e154fe0d-4067-43d8-9665-9eabe44fd0f8";
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/259967c3-22e8-43b9-9a2e-39db1a748f50";

function Tag({ label }: { label: string }) {
  return (
    <span style={{ border:'1px solid #d4d4d4', borderRadius:2, padding:'2px 10px', fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:16, color:'black' }}>
      {label}
    </span>
  );
}

export default function CursoKatakana() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cursoNombre = 'Aprende Katakana';

  const incluye = [
    'Introducción al japonés y al sistema de escritura',
    'Aprendizaje completo de los caracteres Katakana',
    'Guías de trazos y práctica de escritura',
    'Lectura de palabras y frases simples',
    'Ejercicios prácticos y material descargable',
    'Recursos gratuitos para seguir practicando',
  ];

  const idealPara = [
    'Personas que quieren comenzar japonés desde cero',
    'Fans del anime, manga o la cultura japonesa',
    'Estudiantes autodidactas',
    'Quienes quieren avanzar en gramática y conversación.',
  ];

  return (
    <div style={{ background:'white', minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%' }}>
      {drawerOpen && <ContactDrawer onClose={() => setDrawerOpen(false)} cursoDefault={cursoNombre} />}
      <Navbar active="cursos" onHablemos={() => setDrawerOpen(true)} />

      {/* ─── Banner ─── */}
      <div style={{ width:'100%', borderBottom:'2px solid #d4d4d4' }}>
        <img src={imgBanner} alt="" style={{ width:'100%', display:'block' }} />
      </div>

      {/* ─── Contenido ─── */}
      <section style={{ maxWidth:1100, margin:'0 auto', width:'100%', padding:'60px 20px', display:'flex', flexDirection:'column', gap:40 }}>

        {/* Hero */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40 }}>

          {/* Izquierda */}
          <div style={{ display:'flex', flexDirection:'column', gap:29, maxWidth:600 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <Link to="/cursos" style={{ color:'black', textDecoration:'none', display:'flex', alignItems:'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                </Link>
                <h1 style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black', margin:0 }}>
                  {cursoNombre.toUpperCase()}
                </h1>
              </div>
              <div style={{ display:'flex', gap:6 }}>
                <Tag label="PRINCIPIANTE" />
                <Tag label="4 HS" />
                <Tag label="ASINCRONICO" />
              </div>
            </div>

            <div style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', lineHeight:'26px', display:'flex', flexDirection:'column', gap:16 }}>
              <p>¿Te gustaría empezar a aprender japonés desde cero pero no sabés por dónde comenzar?</p>
              <p>Este curso de Katakana está pensado para principiantes que quieren dar sus primeros pasos de forma simple, clara y sin sentirse abrumados.</p>
              <p>Aprenderás los 46 caracteres katakana, su pronunciación y cómo leer y escribir tus primeras palabras y expresiones en japonés desde las primeras clases.</p>
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:25 }}>
              <button onClick={() => setDrawerOpen(true)}
                style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:20, padding:'10px 16px', border:'none', cursor:'pointer', whiteSpace:'nowrap' }}
                onMouseOver={e => (e.currentTarget.style.background='#333')}
                onMouseOut={e => (e.currentTarget.style.background='black')}>
                Más información
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ display:'flex' }}>
                  {[imgAvatar1, imgAvatar2, imgAvatar3].map((src, i) => (
                    <div key={i} style={{ width:45, height:45, borderRadius:'50%', border:'1px solid #d4d4d4', overflow:'hidden', marginRight: i < 2 ? -20 : 0, position:'relative', zIndex: 3 - i }}>
                      <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                  <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:16, letterSpacing:'1.6px', color:'black' }}>+100 alumnos</span>
                  <span style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'1.6px' }}>ya se anotaron</span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen del curso */}
          <div style={{ flexShrink:0, border:'1px solid #d0cccc', borderRadius:32, padding:10, width:418, height:355, overflow:'hidden' }}>
            <img src={imgCurso} alt="Katakana" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:24 }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop:'2px solid #d4d4d4', width:'100%' }} />

        {/* Incluye / Ideal para */}
        <div style={{ display:'flex', justifyContent:'space-between', gap:40 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:20, flex:1 }}>
            <h2 style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black', margin:0 }}>INCLUYE</h2>
            <ul style={{ paddingLeft:24, margin:0 }}>
              {incluye.map((item, i) => (
                <li key={i} style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px', lineHeight:'normal', listStyleType:'disc', marginBottom: i < incluye.length - 1 ? 16 : 0 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:20, flex:1 }}>
            <h2 style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black', margin:0 }}>IDEAL PARA</h2>
            <ul style={{ paddingLeft:24, margin:0 }}>
              {idealPara.map((item, i) => (
                <li key={i} style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px', lineHeight:'normal', listStyleType:'disc', marginBottom: i < idealPara.length - 1 ? 16 : 0 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
