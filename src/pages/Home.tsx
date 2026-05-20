/* ── Images from Figma (valid 7 days) ── */
const imgSakura    = "https://www.figma.com/api/mcp/asset/0ccec46e-b65c-4ed2-aba5-62258de22d3b";
const imgTeacher   = "https://www.figma.com/api/mcp/asset/dd0280e7-411d-43d3-80da-046d63f75f43";
const imgHiragana  = "https://www.figma.com/api/mcp/asset/ab326742-948f-4552-a1c0-2426f125a3b6";
const imgKatakana  = "https://www.figma.com/api/mcp/asset/72368156-877f-4b02-a206-40ebedaba643";
const imgJLPT      = "https://www.figma.com/api/mcp/asset/d4cdbf87-c0a8-42c4-bf88-e4b2322e71f6";
const imgBanner    = "https://www.figma.com/api/mcp/asset/1b15e19f-c162-439b-b073-291bca469da2";
const imgReview1   = "https://www.figma.com/api/mcp/asset/5fad5849-0cff-4843-acec-289ba73a64fc";
const imgReview2   = "https://www.figma.com/api/mcp/asset/423edb98-440b-4ad3-84f1-4cc597657240";
const imgReview3   = "https://www.figma.com/api/mcp/asset/1f5e36e7-b202-4910-bd40-bbbdd1aa050f";
const imgReview4   = "https://www.figma.com/api/mcp/asset/1b15e19f-c162-439b-b073-291bca469da2";

/* ── Star rating ── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i <= count ? "#1a1a1a" : "none"} stroke="#1a1a1a" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

/* ── Course card ── */
function CourseCard({ img, title, description, tags, extraChar }: {
  img: string; title: string; description: string; tags: string[]; extraChar?: string;
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[6px] p-[16px] flex flex-col gap-[16px] w-[320px]">
      <div className="flex flex-col gap-[10px]">
        <div className="relative flex items-center justify-center h-[128px] w-full overflow-hidden">
          <img src={img} alt={title} className="h-[128px] object-contain" loading="lazy" />
          {extraChar && (
            <span className="absolute right-[10px] bottom-[5px] font-['Krona_One',sans-serif] text-[48px] text-[#838383] leading-none">{extraChar}</span>
          )}
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Work_Sans',sans-serif] font-normal text-[24px] text-black">{title}</p>
          <p className="font-['Work_Sans',sans-serif] font-light text-[16px] text-black">{description}</p>
          <div className="flex gap-[8px] flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="border border-[#d4d4d4] font-['Work_Sans',sans-serif] font-light text-[14px] text-black px-[10px] py-[2px] rounded-[2px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-black border border-black text-white font-['Work_Sans',sans-serif] font-normal text-[16px] py-[10px] w-full hover:bg-[#333] transition-colors cursor-pointer">
        Ver detalle
      </button>
    </div>
  );
}

/* ── Review card ── */
function ReviewCard({ img, name, role, quote, stars }: {
  img: string; name: string; role: string; quote: string; stars: number;
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[6px] p-[24px] flex flex-col gap-[16px] w-[370px] shrink-0">
      <Stars count={stars} />
      <p className="font-['Work_Sans',sans-serif] font-normal text-[15px] text-[#797979] leading-[1.6]">"{quote}"</p>
      <div className="flex items-center gap-[12px] mt-auto">
        <div className="border border-[#d4d4d4] p-[4px] rounded-[4px]">
          <img src={img} alt={name} className="w-[52px] h-[52px] object-cover rounded-[2px]" loading="lazy" />
        </div>
        <div>
          <p className="font-['Work_Sans',sans-serif] font-semibold text-[18px] text-black">{name}</p>
          <p className="font-['Work_Sans',sans-serif] font-normal text-[14px] text-[#797979]">{role}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main page ── */
export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* ── Navbar ── */}
      <nav className="bg-[#fafafa] flex items-center justify-between px-[24px] py-[20px] sticky top-0 z-50 border-b border-[#e5e5e5]">
        <div className="flex items-center gap-[8px]">
          <span className="font-['Krona_One',sans-serif] text-[22px] tracking-[4px] text-black">HIBIKU</span>
          <span className="text-black text-[16px]">|</span>
          <span className="font-['Inter',sans-serif] text-[15px] tracking-[0.6px] text-black">aprender, sentir, resonar.</span>
        </div>
        <div className="flex items-center gap-[4px]">
          <a href="#" className="font-['Work_Sans',sans-serif] font-medium text-[15px] text-[#1e293b] px-[10px] py-[8px] border-b-2 border-[#1e293b]">Home</a>
          <a href="#" className="font-['Work_Sans',sans-serif] font-normal text-[15px] text-[#94a3b8] px-[10px] py-[8px] hover:text-black transition-colors">Sobre mí</a>
          <a href="#" className="font-['Work_Sans',sans-serif] font-normal text-[15px] text-[#94a3b8] px-[10px] py-[8px] hover:text-black transition-colors">Cursos</a>
          <a href="#" className="font-['Work_Sans',sans-serif] font-normal text-[15px] text-[#94a3b8] px-[10px] py-[8px] hover:text-black transition-colors">Recursos</a>
          <button className="ml-[12px] bg-black text-white font-['Work_Sans',sans-serif] font-normal text-[18px] px-[16px] py-[10px] hover:bg-[#333] transition-colors cursor-pointer">
            Hablemos
          </button>
        </div>
      </nav>

      {/* ── Hero — sakura banner ── */}
      <div className="relative w-full h-[250px] overflow-hidden border-t-2 border-b-2 border-[#d4d4d4]">
        <img src={imgSakura} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 rotate-180" />
        <p className="absolute font-['Work_Sans',sans-serif] font-normal text-[18px] text-black tracking-[0.8px] top-[60px] left-[27px]">
          Estudiemos japonés juntos.
        </p>
        <div className="absolute bottom-[40px] left-[27px] bg-white border-2 border-[#959595] px-[32px] py-[20px]">
          <span className="font-['Noto_Sans_JP',sans-serif] font-normal text-[28px] text-black">いっしょに日本語を勉強しましょう</span>
        </div>
      </div>

      {/* ── Te doy la bienvenida ── */}
      <section className="max-w-[1100px] mx-auto w-full px-[24px] py-[80px] flex flex-col gap-[40px]">
        <div className="flex items-center gap-[8px]">
          <span className="font-['Krona_One',sans-serif] text-[22px] tracking-[4px] text-black">TE DOY LA BIENVENIDA</span>
          <span className="text-black text-[16px]">|</span>
          <span className="font-['Work_Sans',sans-serif] font-normal text-[16px] tracking-[0.6px] text-black">Conocé el mundo del japonés.</span>
        </div>
        <div className="flex items-start justify-between gap-[40px]">
          <div className="flex flex-col gap-[24px] max-w-[580px]">
            <div className="font-['Inter',sans-serif] font-light text-[16px] text-black leading-[28px] flex flex-col gap-[16px]">
              <p>People close to me have noticed that sometimes I go completely still — like I've entered another level.</p>
              <p>That's usually when I'm designing interfaces in my head, replaying user flows, or thinking about how to make digital experiences feel more human.</p>
              <p>Influenced by anime and video games, I approach design as an experience that should guide, challenge, and reward the user.</p>
              <p>This site is an open portal to that world.</p>
            </div>
            <button className="bg-black border border-black text-white font-['Work_Sans',sans-serif] font-normal text-[18px] px-[16px] py-[10px] w-fit hover:bg-[#333] transition-colors cursor-pointer">
              Aprendamos juntos!
            </button>
          </div>
          {/* Teacher photo */}
          <div className="shrink-0 w-[340px] h-[420px] border border-[#404040] rounded-tl-[200px] rounded-tr-[200px] overflow-hidden">
            <img src={imgTeacher} alt="Profesora" className="w-full h-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* ── Cursos ── */}
      <section className="bg-[#fafafa] py-[60px]">
        <div className="max-w-[1100px] mx-auto w-full px-[24px] flex flex-col gap-[40px]">
          <div className="flex items-center gap-[8px]">
            <span className="font-['Krona_One',sans-serif] text-[22px] tracking-[4px] text-black">CURSOS</span>
            <span className="text-black text-[16px]">|</span>
            <span className="font-['Inter',sans-serif] font-normal text-[16px] tracking-[0.6px] text-black">aprende japonés.</span>
          </div>
          <div className="flex gap-[37px] items-start justify-center flex-wrap">
            <CourseCard img={imgHiragana} title="Hiragana" description="Descripción del curso un poco más larga por favor" tags={["PRINCIPIANTE"]} extraChar="A" />
            <CourseCard img={imgKatakana} title="Katakana" description="Descripción del curso un poco más larga por favor" tags={["PRINCIPIANTE"]} extraChar="A" />
            <CourseCard img={imgJLPT}     title="Examen JLPT N5" description="Descripción del curso un poco más larga por favor" tags={["N5", "PRINCIPIANTE"]} />
          </div>
          <div className="flex justify-center">
            <button className="font-['Work_Sans',sans-serif] font-normal text-[18px] text-black hover:opacity-70 transition-opacity cursor-pointer">
              Ver todos los cursos →
            </button>
          </div>
        </div>
      </section>

      {/* ── Banner recursos ── */}
      <div className="relative w-full h-[179px] border-t-2 border-b-2 border-[#b2b2b2] overflow-hidden">
        <img src={imgBanner} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
        <div className="absolute left-[40px] top-1/2 -translate-y-1/2 bg-white border-2 border-black px-[32px] py-[20px]">
          <p className="font-['Work_Sans',sans-serif] font-normal text-[28px] text-black whitespace-nowrap">
            Palabras que resuenan, <span className="font-semibold">desde aquí</span>
          </p>
        </div>
        <button className="absolute right-[80px] top-1/2 -translate-y-1/2 bg-black border border-black text-white font-['Work_Sans',sans-serif] font-normal text-[18px] px-[16px] py-[10px] hover:bg-[#333] transition-colors cursor-pointer whitespace-nowrap">
          Vé nuestros recursos gratuitos
        </button>
      </div>

      {/* ── Experiencias ── */}
      <section className="py-[60px] flex flex-col gap-[40px]">
        <h2 className="font-['Krona_One',sans-serif] text-[22px] tracking-[4px] text-black text-center">EXPERIENCIAS</h2>
        <div className="flex gap-[16px] overflow-x-auto px-[24px] pb-[8px]" style={{ scrollbarWidth: 'none' }}>
          <ReviewCard img={imgReview1} name="Denise" role="Ex-alumna Nichia Gakkoin" stars={4}
            quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
          <ReviewCard img={imgReview2} name="Sofía" role="Clases particular" stars={4}
            quote="La profe explica de una forma muy clara y paciente. Lo que más me gusta es que no solo enseña el idioma, también transmite mucho de la cultura japonesa y hace que aprender se sienta lindo." />
          <ReviewCard img={imgReview3} name="Martina" role="Curso de hiragana y katakana" stars={5}
            quote="Probé estudiar japonés varias veces y siempre abandonaba. Acá fue la primera vez que sentí que podía aprender a mi ritmo. Las clases tienen una energía muy calma y motivan muchísimo." />
          <ReviewCard img={imgReview4} name="Franco" role="Clases particulares" stars={4}
            quote="Empecé japonés sin saber absolutamente nada y hoy puedo leer hiragana, entender frases básicas y hasta animarme a hablar un poco. Las clases siempre se sienten tranquilas y súper humanas." />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white border-t-2 border-black flex items-center justify-between px-[24px] py-[20px] mt-auto">
        <p className="font-['Noto_Sans_JP',sans-serif] font-normal text-[15px] text-black tracking-[0.6px]">
          響く言葉。HIBIKU 2026 | Hecho con mucho amor.
        </p>
        <div className="flex gap-[8px] items-center">
          {/* Facebook */}
          <a href="#" className="hover:opacity-60 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="hover:opacity-60 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </footer>

    </div>
  );
}
