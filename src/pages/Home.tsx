import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import ContactDrawer from '../components/ContactDrawer';

/* ── Figma assets ── */
import imgBannerHome from '../assets/Banner home.png';
import imgHero from '../assets/guadahome.png';
import imgHiragana from '../assets/Curso hiragana.png';
import imgKatakana from '../assets/Curso katakana.png';
import imgJLPT from '../assets/N5.png';
import imgBannerLocal from '../assets/bannerrecursos.png';
const imgBanner   = imgBannerLocal;
const imgRev1     = "https://www.figma.com/api/mcp/asset/5fad5849-0cff-4843-acec-289ba73a64fc";
const imgRev2     = "https://www.figma.com/api/mcp/asset/423edb98-440b-4ad3-84f1-4cc597657240";
const imgRev3     = "https://www.figma.com/api/mcp/asset/1f5e36e7-b202-4910-bd40-bbbdd1aa050f";
const imgRev4     = "https://www.figma.com/api/mcp/asset/07b157fb-29d3-4c91-9476-4a235ec620cf";


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
      <FadeIn>
      <section style={{ padding:'80px 0' }}>
        <div style={section}>
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {/* Título */}
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black' }}>TE DOY LA BIENVENIDA</span>
              <span style={{ fontFamily:"'Inter', sans-serif", fontWeight:400, fontSize:16, color:'black' }}>|</span>
              <span style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px' }}>Conocé el mundo del japonés.</span>
            </div>
            {/* Contenido */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%' }}>
              {/* Left — texto centrado verticalmente */}
              <div style={{ display:'flex', alignItems:'stretch', alignSelf:'stretch' }}>
                <div style={{ width:600, display:'flex', flexDirection:'column', gap:24, justifyContent:'center' }}>
                  <div style={{ fontFamily:"'Inter', sans-serif", fontWeight:300, fontSize:16, color:'black', lineHeight:'28px' }}>
                    <p>People close to me have noticed that sometimes I go completely still — like I've entered another level.</p>
                    <br /><br />
                    <p>That's usually when I'm designing interfaces in my head, replaying user flows, or thinking about how to make digital experiences feel more human.</p>
                    <br /><br />
                    <p>Influenced by anime and video games, I approach design as an experience that should guide, challenge, and reward the user.</p>
                    <br /><br />
                    <p>This site is an open portal to that world.</p>
                  </div>
                  <button onClick={openDrawer}
                    style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:20, padding:'10px 16px', border:'none', cursor:'pointer', width:'fit-content' }}
                    onMouseOver={e => (e.currentTarget.style.background='#333')}
                    onMouseOut={e => (e.currentTarget.style.background='black')}>
                    Aprendamos juntos!
                  </button>
                </div>
              </div>
              {/* Right — foto con arco ya en la imagen */}
              <div style={{ flexShrink:0 }}>
                <img src={imgHero} alt="Guada" style={{ height:470, width:'auto', display:'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ─── Cursos ─── */}
      <FadeIn>
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
      </FadeIn>

      {/* ─── Banner recursos ─── */}
      <FadeIn>
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
      </FadeIn>

      {/* ─── Experiencias ─── */}
      <FadeIn>
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
      </FadeIn>

      <Footer />

    </div>
  );
}
