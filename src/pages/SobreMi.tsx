import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import ContactDrawer from '../components/ContactDrawer';
import imgGuada from '../assets/guada sensei.png';
import imgBanner from '../assets/banner4.png';


export default function SobreMi() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ background:'white', minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%' }}>
      {drawerOpen && <ContactDrawer onClose={() => setDrawerOpen(false)} />}

      <Navbar active="sobre-mi" onHablemos={() => setDrawerOpen(true)} />

      {/* ─── Hero sakura azul ─── */}
      <div style={{ width:'100%', borderBottom:'2px solid #d4d4d4' }}>
        <img src={imgBanner} alt="" style={{ width:'100%', display:'block' }} />
      </div>

      {/* ─── Soy Guada ─── */}
      <FadeIn>
      <section style={{ maxWidth:1100, margin:'0 auto', width:'100%', padding:'80px 20px' }}>
        <div className="sobre-mi-layout">

          {/* Left — foto */}
          <div className="sobre-mi-photo">
            <img src={imgGuada} alt="Guada Sensei" style={{ width:'min(460px, 100%)', objectFit:'cover', display:'block' }} />
          </div>

          {/* Right — bio */}
          <div style={{ flex:1, display:'flex', flexDirection:'column', gap:24 }}>
            <h1 style={{ fontFamily:"'Krona One', sans-serif", fontSize:36, letterSpacing:6, color:'black', textTransform:'uppercase', lineHeight:1.2 }}>
              Hola, soy Guada
            </h1>
            <div style={{ display:'flex', flexDirection:'column', gap:16, fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:16, color:'#333', lineHeight:'28px' }}>
              <p>People close to me have noticed that sometimes I go completely still — like I've entered another level.</p>
              <p>That's usually when I'm designing interfaces in my head, replaying user flows, or thinking about how to make digital experiences feel more human.</p>
              <p>Influenced by anime and video games, I approach design as an experience that should guide, challenge, and reward the user.</p>
              <p>This site is an open portal to that world.</p>
            </div>
            <button onClick={() => setDrawerOpen(true)}
              style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:18, padding:'14px 24px', border:'none', cursor:'pointer', width:'fit-content' }}
              onMouseOver={e => (e.currentTarget.style.background='#333')}
              onMouseOut={e => (e.currentTarget.style.background='black')}>
              Aprendamos juntos!
            </button>
          </div>
        </div>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
}
