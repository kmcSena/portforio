import { useEffect, useState } from "react";

const projects = [
  {
    slug: "marugoto-festival",
    title: "まるごと祭",
    filter: "Event",
    category: "Event / Graphic Design",
    year: "2026",
    image: "work-marugoto-kirin.png",
    gallery: [],
    description: "神山まるごと高専の学園祭「まるごと祭 つくることは、いきること。2026」の実行委員長として、全体の統括とディレクションをしています。デザイン面では、ロゴやKVのクリエイティブディレクション、SNSアイコンやクラウドファンディングの表紙などを担当しています。今年の世界観である「小さな社会、もう一つの未来」を表現できるよう、手作り感のある、あえていびつで違和感のあるデザインを一貫して守っています。この活動を通して、個別の制作物だけでなく、企画全体を俯瞰しながら複数の表現に一貫した世界観を通すディレクションを学んでいます。",
  },
  {
    slug: "tie",
    title: "ネクタイ",
    filter: "Fashion",
    category: "Fashion / Graphic Design",
    year: "2025",
    image: "work-fashion.png",
    gallery: ["tie-detail-01.png", "tie-detail-02.png"],
    description: "友達の誕生日のために作ったデザインです。いろいろな人に愛されてきた彼女の1年間の経験や成長、そして未来に向けた輝きを表現しました。コンセプトは「2つの落ちる」。人間には、落ちることが再び上がる原動力になる瞬間があります。それでも進み続ける人生。そんなアップダウンを、ネクタイという細長いキャンバスに表現しました。このネクタイが、彼女の未来の一部になればいいなと思い、デザインしました。",
  },
  {
    slug: "frc",
    title: "FRC",
    filter: "Robotics",
    category: "Robotics / Engineering",
    year: "2024",
    image: "work-robotics.png",
    gallery: ["frc-detail-01.jpg", "frc-detail-02.jpg"],
    description: "戦略、概念設計、全体設計、機構設計、発注、組み立てまで、すべて自分で作ったロボットです。予算や渡航を考慮した設計、実戦を想定した部品や素材の選定など、線ではなく面として捉え、設計していくデザインです。予算、輸送、製作性、競技での動作を同時に捉え、複数の制約を設計判断へつなげる重要性を学びました。",
  },
];

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

function go(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function ProjectImage({ project, className = "" }) {
  return (
    <button className={`project-image ${className}`} onClick={() => go(`/works/${project.slug}`)} aria-label={`${project.title}の詳細を見る`}>
      <img src={asset(project.image)} alt={project.title} />
      <span>view ↗</span>
    </button>
  );
}

function Header() {
  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => go("/")} aria-label="トップページへ"><img src={asset("hero-logo.png")} alt="" /></button>
      <nav aria-label="メインナビゲーション">
        <a href="#about">about me</a>
        <a href="#works">works</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="home-page">
      <Header />
      <section className="hero" aria-label="表紙">
        <div className="hero-object">
          <img className="hero-back" src={asset("hero-background-object.png")} alt="" />
          <img className="hero-back water water-one" src={asset("hero-background-object.png")} alt="" />
          <img className="hero-back water water-two" src={asset("hero-background-object.png")} alt="" />
          <img className="hero-logo" src={asset("hero-logo.png")} alt="安松星那のロゴ" />
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading"><span /><h1>about me</h1><span /></div>
        <div className="about-content">
          <div><small>YASUMATSU SENA</small><h2>安松星那</h2></div>
          <p>ロゴ、<br />服、<br />イベント、<br />ロボット、<br />どんなデザインもできます。</p>
        </div>
      </section>

      <section className="section works" id="works">
        <div className="section-heading"><span /><h2>works</h2><span /></div>
        <div className="works-track">
          {projects.map((project) => <ProjectImage project={project} key={project.slug} />)}
          {["04", "05", "06"].map((number) => <div className="coming" key={number}><b>{number}</b><span>coming soon</span></div>)}
        </div>
        <button className="view-more" onClick={() => go("/works")}>view more <span>→</span></button>
      </section>

      <section className="section contact" id="contact">
        <div className="section-heading"><span /><h2>contact</h2><span /></div>
        <div className="contact-content">
          <p>制作のご相談やプロジェクトのご依頼など、<br />お気軽にご連絡ください。</p>
          <form action="https://formsubmit.co/kmc2441@kamiyama.ac.jp" method="post">
            <input type="hidden" name="_subject" value="ポートフォリオサイトからのお問い合わせ" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://kmcsena.github.io/portforio/?sent=1#contact" />
            <input className="contact-honey" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <label><span>Name</span><input name="name" required /></label>
            <label><span>Email</span><input name="email" type="email" required /></label>
            <label><span>Message</span><textarea name="message" rows="4" required /></label>
            <button type="submit">Send <span>→</span></button>
          </form>
        </div>
      </section>
    </main>
  );
}

function SubHeader() {
  return <header className="sub-header"><button onClick={() => go("/")}><img src={asset("hero-logo.png")} alt="トップページへ" /></button><button onClick={() => go("/")}>close</button></header>;
}

function Works() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.filter === filter);

  return (
    <main className="sub-page">
      <SubHeader />
      <section className="index-title"><p>All projects</p><h1>WORKS</h1></section>
      <nav className="works-filters" aria-label="作品カテゴリー">
        {["All", "Event", "Fashion", "Robotics"].map((item) => (
          <button className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)} key={item} aria-pressed={filter === item}>{item}</button>
        ))}
      </nav>
      <section className="works-grid">
        {visibleProjects.map((project) => <article key={project.slug}><ProjectImage project={project} /><h2>{project.title}</h2><p>{project.category} / {project.year}</p></article>)}
      </section>
    </main>
  );
}

function Detail({ project }) {
  const gallery = [project.image, ...project.gallery].slice(0, 3);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main className="sub-page">
      <SubHeader />
      <section className="detail-title"><h1>{project.title}</h1><div><span>{project.category}</span><span>{project.year}</span></div></section>
      <div className="detail-layout">
        <section className="gallery">
          {gallery.map((image, index) => <figure key={image}><img src={asset(image)} alt={`${project.title} ${index + 1}`} /></figure>)}
          {Array.from({ length: 3 - gallery.length }).map((_, index) => <figure className="placeholder" key={index}><span>image coming soon</span></figure>)}
        </section>
        <section className="story"><p>{project.description}</p></section>
      </div>
      <button className="next" onClick={() => go(`/works/${next.slug}`)}><small>next project</small><strong>{next.title}</strong><span>→</span></button>
    </main>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  useEffect(() => {
    const update = () => setRoute(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  if (route === "/works") return <Works />;
  if (route.startsWith("/works/")) {
    const project = projects.find((item) => item.slug === route.split("/").pop());
    return project ? <Detail project={project} /> : <Works />;
  }
  return <Home />;
}

export default App;
