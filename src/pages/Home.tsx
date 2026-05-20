import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Figma assets ── */
import imgBannerHome from '../assets/Banner home.png';
import imgTeacherLocal from '../assets/guada.png';
const imgTeacher  = imgTeacherLocal;
const imgHiragana = "https://www.figma.com/api/mcp/asset/ab326742-948f-4552-a1c0-2426f125a3b6";
const imgKatakana = "https://www.figma.com/api/mcp/asset/72368156-877f-4b02-a206-40ebedaba643";
import imgJLPT from '../assets/N5.png';
import imgBannerLocal from '../assets/bannerrecursos.png';
const imgBanner   = imgBannerLocal;
const imgRev1     = "https://www.figma.com/api/mcp/asset/5fad5849-0cff-4843-acec-289ba73a64fc";
const imgRev2     = "https://www.figma.com/api/mcp/asset/423edb98-440b-4ad3-84f1-4cc597657240";
const imgRev3     = "https://www.figma.com/api/mcp/asset/1f5e36e7-b202-4910-bd40-bbbdd1aa050f";
const imgRev4     = "https://www.figma.com/api/mcp/asset/07b157fb-29d3-4c91-9476-4a235ec620cf";

/* ── Contact Drawer ── */
function ContactDrawer({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nombre:'', email:'', nivel:'', curso:'', comentarios:'' });

  const field = (placeholder: string, key: keyof typeof form, type = 'input') => {
    const base: React.CSSProperties = {
      width:'100%', border:'1px solid #d4d4d4', padding:'14px 16px',
      fontFamily:"'Work Sans', sans-serif", fontSize:15, color:'#333',
      outline:'none', background:'white', boxSizing:'border-box',
    };
    return type === 'textarea'
      ? <textarea placeholder={placeholder} value={form[key]} rows={6}
          onChange={e => setForm({...form, [key]: e.target.value})}
          style={{...base, resize:'none', display:'block'}} />
      : <input placeholder={placeholder} value={form[key]}
          onChange={e => setForm({...form, [key]: e.target.value})}
          style={{...base, display:'block'}} />;
  };

  const base: React.CSSProperties = {
    width:'100%', border:'1px solid #d4d4d4', padding:'14px 16px',
    fontFamily:"'Work Sans', sans-serif", fontSize:15, color:'#333',
    outline:'none', background:'white', boxSizing:'border-box', appearance:'none' as const,
  };
  const niveles = ['Principiante (sin experiencia)', 'N5 — Básico', 'N4 — Elemental', 'N3 — Intermedio', 'N2 — Avanzado', 'N1 — Experto'];
  const cursos  = ['Hiragana', 'Katakana', 'Clases particulares', 'Examen JLPT N5'];

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', zIndex:100, animation:'backdrop-in 0.3s ease' }} />

      {/* Panel */}
      <div style={{ position:'fixed', top:0, right:0, height:'100%', width:560, background:'white', zIndex:101, display:'flex', flexDirection:'column', animation:'drawer-in 0.35s cubic-bezier(0.32,0.72,0,1)' }}>
        {/* Close */}
        <button onClick={onClose} style={{ position:'absolute', top:20, right:24, background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#111' }}>✕</button>

        {/* Header */}
        <div style={{ padding:'40px 40px 24px' }}>
          <h2 style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:700, fontSize:32, color:'black', marginBottom:8 }}>Resonemos juntos</h2>
          <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'#555' }}>Enviame tu consulta para poder ayudarte.</p>
        </div>

        {/* Form */}
        <div style={{ flex:1, overflowY:'auto', padding:'0 40px', display:'flex', flexDirection:'column', gap:12 }}>
          {field('Nombre & apellido*', 'nombre')}
          {field('E-mail*', 'email')}
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
          {field('Comentarios', 'comentarios', 'textarea')}
        </div>

        {/* Footer */}
        <div style={{ padding:'24px 40px', display:'flex', justifyContent:'flex-end', borderTop:'1px solid #ebebeb' }}>
          <button style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:18, padding:'12px 32px', border:'none', cursor:'pointer' }}
            onMouseOver={e => (e.currentTarget.style.background='#333')}
            onMouseOut={e => (e.currentTarget.style.background='black')}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24"
          fill={i <= n ? "#111" : "none"} stroke="#111" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function CourseCard({ img, title, desc, tags, extra, href }: {
  img: string; title: string; desc: string; tags: string[]; extra?: string; href?: string;
}) {
  return (
    <div style={{ background:'white', border:'1px solid #d4d4d4', borderRadius:6, padding:16, display:'flex', flexDirection:'column', gap:16, width:320, transition:'transform 0.25s ease, box-shadow 0.25s ease', cursor:'default' }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.10)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
    >
      <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', height:130, overflow:'hidden' }}>
        <img src={img} alt={title} style={{ height:128, objectFit:'contain' }} loading="lazy" />
        {extra && <span style={{ position:'absolute', right:6, bottom:0, fontFamily:"'Krona One', sans-serif", fontSize:48, color:'#838383', lineHeight:1 }}>{extra}</span>}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:22, color:'black' }}>{title}</p>
        <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:15, color:'black', lineHeight:1.4 }}>{desc}</p>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          {tags.map(t => (
            <span key={t} style={{ border:'1px solid #d4d4d4', fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:13, color:'black', padding:'2px 8px', borderRadius:2 }}>{t}</span>
          ))}
        </div>
      </div>
      {href ? (
        <Link to={href} style={{ display:'block', background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:15, padding:'10px 0', width:'100%', textAlign:'center', textDecoration:'none', marginTop:'auto', boxSizing:'border-box' }}
          onMouseOver={e => (e.currentTarget.style.background='#333')}
          onMouseOut={e => (e.currentTarget.style.background='black')}>
          Ver detalle
        </Link>
      ) : (
        <button style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:15, padding:'10px 0', width:'100%', border:'none', cursor:'pointer', marginTop:'auto' }}
          onMouseOver={e => (e.currentTarget.style.background='#333')}
          onMouseOut={e => (e.currentTarget.style.background='black')}>
          Ver detalle
        </button>
      )}
    </div>
  );
}

function ReviewCard({ img, name, role, quote, stars }: {
  img: string; name: string; role: string; quote: string; stars: number;
}) {
  return (
    <div style={{ background:'white', border:'1px solid #d4d4d4', borderRadius:6, padding:24, display:'flex', flexDirection:'column', gap:16, width:480, flexShrink:0 }}>
      <Stars n={stars} />
      <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:15, color:'#797979', lineHeight:1.6, flex:1 }}>"{quote}"</p>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ border:'1px solid #d4d4d4', padding:3, borderRadius:4 }}>
          <img src={img} alt={name} style={{ width:52, height:52, objectFit:'cover', borderRadius:2, display:'block' }} loading="lazy" />
        </div>
        <div>
          <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:600, fontSize:17, color:'black' }}>{name}</p>
          <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:13, color:'#797979' }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const page: React.CSSProperties = { background:'white', minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%' };
const section: React.CSSProperties = { maxWidth:1100, margin:'0 auto', width:'100%', padding:'0 20px' };

  return (
    <div style={page}>
      {drawerOpen && <ContactDrawer onClose={closeDrawer} />}

      <Navbar active="home" onHablemos={openDrawer} />

      {/* ─── Hero ─── */}
      <div style={{ width:'100%', height:250, overflow:'hidden', borderBottom:'2px solid #d4d4d4' }}>
        <img src={imgBannerHome} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ─── Te doy la bienvenida ─── */}
      <section style={{ padding:'80px 0' }}>
        <div style={section}>
          <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:18, letterSpacing:3, color:'black' }}>TE DOY LA BIENVENIDA</span>
              <span style={{ color:'#aaa', margin:'0 4px' }}>|</span>
              <span style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:15, color:'black' }}>Conocé el mundo del japonés.</span>
            </div>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40 }}>
              <div style={{ display:'flex', flexDirection:'column', gap:24, maxWidth:560 }}>
                <div style={{ display:'flex', flexDirection:'column', gap:16, fontFamily:"'Inter', sans-serif", fontWeight:300, fontSize:16, color:'black', lineHeight:'28px' }}>
                  <p>People close to me have noticed that sometimes I go completely still — like I've entered another level.</p>
                  <p>That's usually when I'm designing interfaces in my head, replaying user flows, or thinking about how to make digital experiences feel more human.</p>
                  <p>Influenced by anime and video games, I approach design as an experience that should guide, challenge, and reward the user.</p>
                  <p>This site is an open portal to that world.</p>
                </div>
                <button style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:18, padding:'10px 16px', border:'none', cursor:'pointer', width:'fit-content' }}
                  onMouseOver={e => (e.currentTarget.style.background='#333')}
                  onClick={openDrawer} onMouseOut={e => (e.currentTarget.style.background='black')}>
                  Aprendamos juntos!
                </button>
              </div>
              <div style={{ flexShrink:0, width:330, height:420, border:'1px solid #404040', borderTopLeftRadius:200, borderTopRightRadius:200, overflow:'hidden' }}>
                <img src={imgTeacher} alt="Profesora" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cursos ─── */}
      <section style={{ background:'#fafafa', padding:'60px 0' }}>
        <div style={{ ...section, display:'flex', flexDirection:'column', gap:40 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:18, letterSpacing:3, color:'black' }}>CURSOS</span>
            <span style={{ color:'#aaa', margin:'0 4px' }}>|</span>
            <span style={{ fontFamily:"'Inter', sans-serif", fontWeight:400, fontSize:15, color:'black' }}>aprende japonés.</span>
          </div>
          <div style={{ display:'flex', gap:37, alignItems:'flex-start', justifyContent:'center', flexWrap:'wrap' }}>
            <CourseCard img={imgHiragana} title="Hiragana"       desc="Descripción del curso un poco más larga por favor" tags={["PRINCIPIANTE"]} href="/cursos/hiragana" />
            <CourseCard img={imgKatakana} title="Katakana"       desc="Descripción del curso un poco más larga por favor" tags={["PRINCIPIANTE"]} />
            <CourseCard img={imgJLPT}     title="Examen JLPT N5" desc="Descripción del curso un poco más larga por favor" tags={["N5","PRINCIPIANTE"]} />
          </div>
          <Link to="/cursos" style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:18, color:'black', textAlign:'center', textDecoration:'none', display:'block' }}
            onMouseOver={e => (e.currentTarget.style.opacity='0.6')}
            onMouseOut={e => (e.currentTarget.style.opacity='1')}>
            Ver todos los cursos →
          </Link>
        </div>
      </section>

      {/* ─── Banner recursos ─── */}
      <div style={{ position:'relative', width:'100%', height:179, borderTop:'2px solid #b2b2b2', borderBottom:'2px solid #b2b2b2', overflow:'hidden' }}>
        <img src={imgBanner} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.7 }} loading="lazy" />
        <div style={{ position:'relative', height:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 40px' }}>
          <div style={{ background:'white', border:'2px solid black', padding:'20px 32px' }}>
            <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:28, color:'black', whiteSpace:'nowrap' }}>
              Palabras que resuenan, <strong>desde aquí</strong>
            </p>
          </div>
          <Link to="/recursos"
            style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:18, padding:'10px 16px', textDecoration:'none', whiteSpace:'nowrap', display:'inline-block' }}
            onMouseOver={e => (e.currentTarget.style.background='#333')}
            onMouseOut={e => (e.currentTarget.style.background='black')}>
            Vé nuestros recursos gratuitos
          </Link>
        </div>
      </div>

      {/* ─── Experiencias ─── */}
      <section style={{ padding:'60px 0', display:'flex', flexDirection:'column', gap:40 }}>
        <p style={{ fontFamily:"'Krona One', sans-serif", fontSize:20, letterSpacing:4, color:'black', textAlign:'center' }}>
          EXPERIENCIAS
        </p>
        {/* Carrusel infinito — duplicamos las cards para el loop */}
        <div style={{ overflow:'hidden', width:'100%' }}>
          <div style={{
            display:'flex', gap:16,
            animation:'scroll-reviews 28s linear infinite',
            width:'max-content',
          }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState='paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState='running')}
          >
            {/* Original */}
            <ReviewCard img={imgRev1} name="Denise"  role="Ex-alumna Nichia Gakkoin"    stars={4} quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
            <ReviewCard img={imgRev2} name="Sofía"   role="Clases particular"            stars={4} quote="La profe explica de una forma muy clara y paciente. Lo que más me gusta es que no solo enseña el idioma, también transmite mucho de la cultura japonesa y hace que aprender se sienta lindo." />
            <ReviewCard img={imgRev3} name="Martina" role="Curso de hiragana y katakana" stars={5} quote="Probé estudiar japonés varias veces y siempre abandonaba. Acá fue la primera vez que sentí que podía aprender a mi ritmo. Las clases tienen una energía muy calma y motivan muchísimo." />
            <ReviewCard img={imgRev4} name="Franco"  role="Clases particulares"          stars={4} quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
            {/* Duplicado para loop infinito */}
            <ReviewCard img={imgRev1} name="Denise"  role="Ex-alumna Nichia Gakkoin"    stars={4} quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
            <ReviewCard img={imgRev2} name="Sofía"   role="Clases particular"            stars={4} quote="La profe explica de una forma muy clara y paciente. Lo que más me gusta es que no solo enseña el idioma, también transmite mucho de la cultura japonesa y hace que aprender se sienta lindo." />
            <ReviewCard img={imgRev3} name="Martina" role="Curso de hiragana y katakana" stars={5} quote="Probé estudiar japonés varias veces y siempre abandonaba. Acá fue la primera vez que sentí que podía aprender a mi ritmo. Las clases tienen una energía muy calma y motivan muchísimo." />
            <ReviewCard img={imgRev4} name="Franco"  role="Clases particulares"          stars={4} quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
