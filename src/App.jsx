import { useEffect, useState } from "react";

const projects = [
  {
    slug: "marugoto-festival",
    title: "まるごと祭",
    category: "Event / Graphic Design",
    year: "2026",
    image: "work-marugoto-kirin.png",
    gallery: [],
    description: "地域の魅力をひとつの体験として届けるイベントです。キービジュアルを中心に、会場へ足を運ぶ前から楽しさと勢いが伝わる表現を設計しました。イベントの空気感を山・川・文字の強いシルエットへ整理し、小さな画面でも認識できる色面と文字のバランスを検証しました。コンセプト設計、グラフィックデザイン、イベント企画を担当しています。",
  },
  {
    slug: "tie",
    title: "ネクタイ",
    category: "Fashion / Graphic Design",
    year: "2025",
    image: "work-fashion.png",
    gallery: ["tie-detail-01.png", "tie-detail-02.png"],
    description: "グラフィックを身につける体験へ変換したオリジナルネクタイです。衣服として遠くから見た印象と、近くで見たときの細かな発見を両立させました。結び目から剣先までを一つのキャンバスとして扱い、着用時にモチーフが自然につながるよう配置と縮尺を調整しました。アートディレクション、パターン設計、制作を担当しています。",
  },
  {
    slug: "frc",
    title: "FRC",
    category: "Robotics / Engineering",
    year: "2024",
    image: "work-robotics.png",
    gallery: ["frc-detail-01.jpg", "frc-detail-02.jpg"],
    description: "FRCの競技課題に合わせて設計・制作したロボットです。機構、制御、調整を反復し、実戦で安定して動作することを目指しました。取得・搬送・排出の動きを分解して各機構を試作し、実際の競技環境で検証しながら速度と再現性を高めました。機構設計、プログラミング、動作検証を担当しています。",
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
          <form action="mailto:" method="post" encType="text/plain">
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
  return (
    <main className="sub-page">
      <SubHeader />
      <section className="index-title"><p>All projects</p><h1>WORKS</h1></section>
      <section className="works-grid">
        {projects.map((project) => <article key={project.slug}><ProjectImage project={project} /><h2>{project.title}</h2><p>{project.category} / {project.year}</p></article>)}
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
