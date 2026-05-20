import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imgGuada from '../assets/guada.png';
import imgBanner from '../assets/banner4.png';

function ContactDrawer({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nombre:'', email:'', nivel:'', curso:'', comentarios:'' });
  const base: React.CSSProperties = { width:'100%', border:'1px solid #d4d4d4', padding:'14px 16px', fontFamily:"'Work Sans', sans-serif", fontSize:15, color:'#333', outline:'none', background:'white', boxSizing:'border-box' };
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
          {(['Nombre & apellido*','E-mail*','Cuál es tu nivel de japonés?','En que curso estás interesado?'] as const).map((ph, i) => (
            <input key={i} placeholder={ph} style={{ ...base, display:'block' }} onChange={e => setForm({ ...form, [Object.keys(form)[i]]: e.target.value })} />
          ))}
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

function Sticker({ text, style }: { text: string; style: React.CSSProperties }) {
  return (
    <div style={{
      position:'absolute', background:'white', border:'1.5px solid #d4d4d4',
      padding:'8px 14px', borderRadius:4, boxShadow:'0 2px 8px rgba(0,0,0,0.08)',
      fontFamily:"'Noto Sans JP', sans-serif", fontSize:18, color:'black',
      whiteSpace:'nowrap', ...style
    }}>
      {text}
    </div>
  );
}

export default function SobreMi() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ background:'white', minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%' }}>
      {drawerOpen && <ContactDrawer onClose={() => setDrawerOpen(false)} />}

      <Navbar active="sobre-mi" onHablemos={() => setDrawerOpen(true)} />

      {/* ─── Hero sakura azul ─── */}
      <div style={{ width:'100%', height:300, overflow:'hidden', borderBottom:'2px solid #d4d4d4' }}>
        <img src={imgBanner} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ─── Soy Guada ─── */}
      <section style={{ maxWidth:1100, margin:'0 auto', width:'100%', padding:'80px 20px' }}>
        <div className="sobre-mi-layout">

          {/* Left — foto con stickers */}
          <div className="sobre-mi-photo">
            <div style={{ position:'relative', width:340, height:380 }}>
              {/* Foto circular */}
              <div style={{ width:280, height:340, border:'1.5px solid #404040', borderTopLeftRadius:200, borderTopRightRadius:200, overflow:'hidden', margin:'0 auto' }}>
                <img src={imgGuada} alt="Guada Sensei" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              {/* Stickers flotantes */}
              <Sticker text="がんばって！" style={{ top:10, left:0, transform:'rotate(-4deg)', fontSize:16 }} />
              <Sticker text="あ" style={{ top:30, right:10, transform:'rotate(6deg)', fontSize:24, padding:'10px 16px' }} />
              <Sticker text="ア" style={{ bottom:60, left:10, transform:'rotate(-8deg)', fontSize:24, padding:'10px 16px' }} />
              <Sticker text="日本語 ♥" style={{ bottom:30, right:0, transform:'rotate(3deg)', fontSize:16 }} />
            </div>
            <p style={{ fontFamily:"'Krona One', sans-serif", fontSize:16, letterSpacing:3, color:'black' }}>GUADA SENSEI</p>
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

      <Footer />
    </div>
  );
}
