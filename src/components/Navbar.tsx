import { Link } from 'react-router';

type Page = 'home' | 'sobre-mi' | 'cursos' | 'recursos';

export default function Navbar({ active, onHablemos }: { active: Page; onHablemos: () => void }) {
  const links: { label: string; page: Page; href: string }[] = [
    { label: 'Home',      page: 'home',      href: '/' },
    { label: 'Sobre mí',  page: 'sobre-mi',  href: '/sobre-mi' },
    { label: 'Cursos',    page: 'cursos',    href: '/cursos' },
    { label: 'Recursos',  page: 'recursos',  href: '/recursos' },
  ];

  return (
    <nav style={{ background:'#fafafa', borderBottom:'1px solid #e5e5e5', position:'sticky', top:0, zIndex:50 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px' }}>
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
          <span style={{ fontFamily:"'Krona One', sans-serif", fontSize:22, letterSpacing:4, color:'black' }}>HIBIKU</span>
          <span style={{ color:'#aaa', margin:'0 4px', fontSize:16 }}>|</span>
          <span style={{ fontFamily:"'Inter', sans-serif", fontWeight:400, fontSize:14, letterSpacing:0.5, color:'black' }}>aprender, sentir, resonar.</span>
        </Link>
        <div style={{ display:'flex', alignItems:'center' }}>
          {links.map(({ label, page, href }) => (
            <Link key={page} to={href} style={{
              fontFamily:"'Work Sans', sans-serif",
              fontWeight: active === page ? 500 : 400,
              fontSize: 15,
              color: active === page ? '#1e293b' : '#94a3b8',
              padding: '8px 12px',
              textDecoration: 'none',
              borderBottom: active === page ? '2px solid #1e293b' : 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={e => { if (active !== page) e.currentTarget.style.color = '#1e293b'; }}
            onMouseOut={e => { if (active !== page) e.currentTarget.style.color = '#94a3b8'; }}
            >{label}</Link>
          ))}
          <button onClick={onHablemos} style={{ marginLeft:16, background:'black', color:'white', fontFamily:"'Work Sans', sans-serif", fontWeight:400, fontSize:18, padding:'10px 16px', border:'none', cursor:'pointer' }}
            onMouseOver={e => (e.currentTarget.style.background='#333')}
            onMouseOut={e => (e.currentTarget.style.background='black')}>
            Hablemos
          </button>
        </div>
      </div>
    </nav>
  );
}
