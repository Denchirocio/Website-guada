import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactDrawer from '../components/ContactDrawer';
const imgCurso   = "https://www.figma.com/api/mcp/asset/28de98c8-2e53-4c60-b8a1-7ff0d7cd6593";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/b857fe91-4047-49b2-bc78-121601685b1e";
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/382f915d-1a16-4006-9cbd-4ac6bac57c3e";
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/dd97e8d8-d84c-4585-af90-cc08ead502fb";


function Tag({ label }: { label: string }) {
  return (
    <span style={{ border:'1px solid #d4d4d4', borderRadius:2, padding:'2px 10px', fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:16, color:'black' }}>
      {label}
    </span>
  );
}

export default function CursoHiragana() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cursoNombre = 'Aprende Hiragana';

  const incluye = [
    'Introducción al japonés y al sistema de escritura',
    'Aprendizaje completo de los caracteres Hiragana',
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

      <section style={{ maxWidth:1100, margin:'0 auto', width:'100%', padding:'60px 20px', display:'flex', flexDirection:'column', gap:40 }}>

        {/* ─── Hero: info + imagen ─── */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40 }}>

          {/* Izquierda */}
          <div style={{ display:'flex', flexDirection:'column', gap:29, maxWidth:600 }}>

            {/* Título */}
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <Link to="/cursos" style={{ color:'black', textDecoration:'none', fontSize:20, lineHeight:1 }}>←</Link>
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

            {/* Descripción */}
            <div style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', lineHeight:'26px', display:'flex', flexDirection:'column', gap:0 }}>
              <p>¿Te gustaría empezar a aprender japonés desde cero pero no sabés por dónde comenzar?</p>
              <br />
              <p>Este curso de Hiragana está pensado para principiantes que quieren dar sus primeros pasos de forma simple, clara y sin sentirse abrumados.</p>
              <br />
              <p>Aprenderás los 46 caracteres hiragana, su pronunciación y cómo leer y escribir tus primeras palabras y frases en japonés desde las primeras clases.</p>
            </div>

            {/* CTA + social proof */}
            <div style={{ display:'flex', alignItems:'center', gap:25 }}>
              <button onClick={() => setDrawerOpen(true)}
                style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:20, padding:'10px 16px', border:'none', cursor:'pointer', whiteSpace:'nowrap' }}
                onMouseOver={e => (e.currentTarget.style.background='#333')}
                onMouseOut={e => (e.currentTarget.style.background='black')}>
                Más información
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                {/* Avatares superpuestos */}
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
            <img src={imgCurso} alt="Hiragana" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:24 }} />
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div style={{ borderTop:'2px solid #d4d4d4', width:'100%' }} />

        {/* ─── Incluye / Ideal para ─── */}
        <div style={{ display:'flex', justifyContent:'space-between', gap:40 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:20, flex:1 }}>
            <h2 style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black', margin:0 }}>INCLUYE</h2>
            <ul style={{ display:'flex', flexDirection:'column', gap:16, paddingLeft:24, margin:0 }}>
              {incluye.map((item, i) => (
                <li key={i} style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px', lineHeight:'normal' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:20, flex:1 }}>
            <h2 style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black', margin:0 }}>IDEAL PARA</h2>
            <ul style={{ display:'flex', flexDirection:'column', gap:16, paddingLeft:24, margin:0 }}>
              {idealPara.map((item, i) => (
                <li key={i} style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px', lineHeight:'normal' }}>
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
