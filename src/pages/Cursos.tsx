import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import ContactDrawer from '../components/ContactDrawer';

import imgSakuraBanner from '../assets/Banner sakura 3.png';
const imgHiragana = "https://www.figma.com/api/mcp/asset/53c5b85d-5e00-40a6-bece-329a72b5d435";
const imgKatakana = "https://www.figma.com/api/mcp/asset/0dc8a618-8157-43a4-8f5d-6a9fe3c72ea8";
import imgJLPT from '../assets/N5.png';


interface CourseCard {
  title: string;
  description: string;
  tags: string[];
  image: React.ReactNode;
  href?: string;
}

function Card({ course, onHablemos }: { course: CourseCard; onHablemos: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'white', border:'1px solid #d4d4d4', borderRadius:6,
        padding:16, display:'flex', flexDirection:'column', gap:16,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.10)' : '0 0 0 rgba(0,0,0,0)',
        transition:'transform 0.25s ease, box-shadow 0.25s ease',
      }}>
      {/* Image area */}
      <div style={{ height:128, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', position:'relative' }}>
        {course.image}
      </div>
      {/* Info */}
      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:24, color:'black' }}>{course.title}</p>
        <p style={{ fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:16, color:'black', lineHeight:'24px' }}>{course.description}</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {course.tags.map(tag => (
            <span key={tag} style={{ border:'1px solid #d4d4d4', borderRadius:2, padding:'2px 10px', fontFamily:"'Work Sans', sans-serif", fontWeight:300, fontSize:16, color:'black' }}>{tag}</span>
          ))}
        </div>
      </div>
      {/* CTA */}
      {course.href ? (
        <Link to={course.href}
          style={{ display:'block', background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:16, padding:'10px 16px', width:'100%', marginTop:'auto', textAlign:'center', textDecoration:'none', boxSizing:'border-box' }}
          onMouseOver={e => (e.currentTarget.style.background='#333')}
          onMouseOut={e => (e.currentTarget.style.background='black')}>
          Ver detalle
        </Link>
      ) : (
        <button onClick={onHablemos}
          style={{ background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontSize:16, padding:'10px 16px', border:'none', cursor:'pointer', width:'100%', marginTop:'auto' }}
          onMouseOver={e => (e.currentTarget.style.background='#333')}
          onMouseOut={e => (e.currentTarget.style.background='black')}>
          Ver detalle
        </button>
      )}
    </div>
  );
}

export default function Cursos() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const courses: CourseCard[] = [
    {
      title: 'Hiragana',
      description: 'Descripción del curso un poco más larga por favor',
      tags: ['PRINCIPIANTE'],
      href: '/cursos/hiragana',
      image: (
        <div style={{ width:153, height:128 }}>
          <img src={imgHiragana} alt="Hiragana" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
      ),
    },
    {
      title: 'Katakana',
      description: 'Descripción del curso un poco más larga por favor',
      tags: ['PRINCIPIANTE'],
      image: (
        <div style={{ width:153, height:128 }}>
          <img src={imgKatakana} alt="Katakana" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
      ),
    },
    {
      title: 'Clases particulares',
      description: 'Descripción del curso un poco más larga por favor',
      tags: ['N5 - N3'],
      image: (
        <div style={{ width:'100%', height:128, background:'#f3f3f3', borderRadius:4, position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', gap:10, padding:'12px 16px' }}>
          {/* Bubble A */}
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:36, height:36, background:'#cbe2ff', border:'1px solid black', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:18, color:'black' }}>A</span>
            </div>
            <div style={{ background:'white', border:'1px solid #d4d4d4', borderRadius:6, padding:'4px 12px', fontFamily:"'Work Sans', sans-serif", fontSize:14, color:'black' }}>
              Konnichiha!
            </div>
          </div>
          {/* Bubble B */}
          <div style={{ display:'flex', alignItems:'center', gap:8, alignSelf:'flex-end' }}>
            <div style={{ background:'white', border:'1px solid #d4d4d4', borderRadius:6, padding:'4px 12px', fontFamily:"'Work Sans', sans-serif", fontSize:14, color:'black' }}>
              Arigatou!
            </div>
            <div style={{ width:36, height:36, background:'#cbe2ff', border:'1px solid black', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:18, color:'black' }}>B</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Examen JLPT N5',
      description: 'Descripción del curso un poco más larga por favor',
      tags: ['N5', 'PRINCIPIANTE'],
      image: (
        <div style={{ width:'100%', height:128, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <img src={imgJLPT} alt="JLPT N5" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
      ),
    },
  ];

  return (
    <div style={{ background:'white', minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%' }}>
      {drawerOpen && <ContactDrawer onClose={() => setDrawerOpen(false)} />}

      <Navbar active="cursos" onHablemos={() => setDrawerOpen(true)} />

      {/* ─── Banner ─── */}
      <div style={{ width:'100%', borderBottom:'2px solid #d4d4d4' }}>
        <img src={imgSakuraBanner} alt="" style={{ width:'100%', display:'block' }} />
      </div>

      {/* ─── Cursos ─── */}
      <FadeIn>
      <section style={{ maxWidth:1100, margin:'0 auto', width:'100%', padding:'80px 20px' }}>
        {/* Section title */}
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:29 }}>
          <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:24, letterSpacing:'4.8px', color:'black' }}>CURSOS</span>
          <span style={{ fontFamily:"'Inter', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px' }}>|</span>
          <span style={{ fontFamily:"'Inter', sans-serif", fontWeight:400, fontSize:16, color:'black', letterSpacing:'0.64px' }}>aprende japonés.</span>
        </div>

        {/* Cards grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
          {courses.map(course => (
            <Card key={course.title} course={course} onHablemos={() => setDrawerOpen(true)} />
          ))}
        </div>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
}
