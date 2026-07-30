const work = [
  {
    title: "Investment App",
    type: "Product Design · UI/UX",
    image: "/work/investment-app.png",
    href: "https://www.behance.net/gallery/232275921/investment-app",
    index: "01",
  },
  {
    title: "Red Fort Ticketing",
    type: "Web Experience · UI/UX",
    image: "/work/redfort-ticketing.png",
    href: "https://www.behance.net/harshchhabra",
    index: "02",
  },
  {
    title: "Construction Finance",
    type: "Digital Product · Web Design",
    image: "/work/construction-finance.png",
    href: "https://www.behance.net/harshchhabra",
    index: "03",
  },
  {
    title: "Pathology Lab",
    type: "Healthcare · Web Design",
    image: "/work/pathology-lab.png",
    href: "https://www.behance.net/harshchhabra",
    index: "04",
  },
  {
    title: "Hospital Dashboard",
    type: "Data Experience · UI/UX",
    image: "/work/hospital-dashboard.png",
    href: "https://www.behance.net/harshchhabra",
    index: "05",
  },
  {
    title: "Uncover Clinic",
    type: "Wellness · Web Design",
    image: "/work/uncover-clinic.png",
    href: "https://www.behance.net/harshchhabra",
    index: "06",
  },
];

const brandWork = [
  {
    name: "Uncover Transform",
    service: "Social identity · Campaign design",
    href: "https://www.instagram.com/uncover.transform/",
  },
  {
    name: "Uncover Hair",
    service: "Brand communication · Social",
    href: "https://www.instagram.com/uncover.hair/",
  },
  {
    name: "Casa Sonal Singh",
    service: "Luxury fashion · Digital content",
    href: "https://www.instagram.com/casasonalsingh/",
  },
  {
    name: "Go Sharpener",
    service: "Education · Social & video",
    href: "https://www.instagram.com/gosharpener/",
  },
  {
    name: "Chai Calling India",
    service: "F&B · Social storytelling",
    href: "https://www.instagram.com/chaicallingindia/",
  },
  {
    name: "Yuomo Men",
    service: "Menswear · Digital campaigns",
    href: "https://www.instagram.com/yuomo.men/",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Harsh Chhabra, home">
          HC<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="availability"
          href="https://www.behance.net/harshchhabra"
          target="_blank"
          rel="noreferrer"
        >
          Available for projects <i />
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent designer · India</p>
        <h1>
          Design that makes
          <br />
          brands <em>unmissable.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m Harsh Chhabra — a graphic &amp; UI/UX designer creating bold
            digital experiences, visual identities and stories built to move.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <span>Explore</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one">UI/UX</div>
        <div className="hero-orbit orbit-two">Branding</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work / 2024–26</p>
          <h2>Built with intent.</h2>
          <p className="count">06 projects</p>
        </div>

        <div className="work-grid">
          {work.map((item) => (
            <a
              className="project-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              <div className="project-image">
                <img src={item.image} alt={`${item.title} project preview`} />
                <span className="view-pill">View project <Arrow /></span>
              </div>
              <div className="project-meta">
                <span>{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
                <Arrow />
              </div>
            </a>
          ))}
        </div>

        <a
          className="behance-link"
          href="https://www.behance.net/harshchhabra"
          target="_blank"
          rel="noreferrer"
        >
          <span>See the complete archive on Behance</span>
          <Arrow />
        </a>
      </section>

      <section className="brand-section">
        <div className="brand-intro">
          <p className="kicker">Brand collaborations</p>
          <h2>From feed to feeling.</h2>
          <p>
            Social-first systems and campaign worlds that give growing brands a
            distinct, consistent voice.
          </p>
        </div>
        <div className="brand-list">
          {brandWork.map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.name}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.name}</h3>
              <p>{item.service}</p>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="motion-section">
        <div className="motion-copy">
          <p className="kicker">Motion &amp; video</p>
          <h2>Stories that don’t sit still.</h2>
          <p>
            Visual direction, content design and video storytelling across
            original shows and purpose-led education.
          </p>
        </div>
        <div className="video-links">
          <a
            href="https://youtube.com/@theoriginalyoushow"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play">▶</span>
            <span>
              <small>YouTube channel</small>
              <strong>The Original You Show</strong>
            </span>
            <Arrow />
          </a>
          <a
            href="https://youtube.com/@gosharpener"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play">▶</span>
            <span>
              <small>YouTube channel</small>
              <strong>Go Sharpener</strong>
            </span>
            <Arrow />
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="kicker">A little about me</p>
        <div className="about-grid">
          <h2>
            Curious by nature.
            <br />
            Precise by practice.
          </h2>
          <div className="about-copy">
            <p>
              I turn complex briefs into clear, memorable visual experiences.
              My work moves between brand identity, campaigns and digital
              products — always led by a strong idea and thoughtful craft.
            </p>
            <div className="skills">
              <span>Art Direction</span>
              <span>Brand Identity</span>
              <span>UI/UX Design</span>
              <span>Social Campaigns</span>
              <span>Motion &amp; Video</span>
              <span>Packaging</span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="kicker">Have a project in mind?</p>
        <h2>Let’s make it happen.</h2>
        <div className="footer-links">
          <a
            href="https://www.behance.net/harshchhabra"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation on Behance <Arrow />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Qg2Xu1e8smwU4gVpHackjyd1pDCxrWGo?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View portfolio drive <Arrow />
          </a>
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Harsh Chhabra</p>
          <p>Graphic &amp; UI/UX Designer · India</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
