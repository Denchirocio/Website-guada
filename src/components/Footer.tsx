export default function Footer() {
  return (
    <footer style={{ background:'white', borderTop:'2px solid black', marginTop:'auto' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px' }}>
        <p style={{ fontFamily:"'Noto Sans JP', sans-serif", fontWeight:400, fontSize:14, color:'black', letterSpacing:0.5 }}>
          響く言葉。HIBIKU 2026 | Hecho con mucho amor.
        </p>
        <div style={{ display:'flex', gap:8 }}>
          <a href="#" style={{ color:'black' }} onMouseOver={e => (e.currentTarget.style.opacity='0.5')} onMouseOut={e => (e.currentTarget.style.opacity='1')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" style={{ color:'black' }} onMouseOver={e => (e.currentTarget.style.opacity='0.5')} onMouseOut={e => (e.currentTarget.style.opacity='1')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
