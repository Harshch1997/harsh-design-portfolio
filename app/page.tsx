import { ReelShowcase } from "./ReelShowcase";
import { DesignCollections } from "./DesignCollections";
import { YouTubeShowcase } from "./YouTubeShowcase";

const work = [
  {
    title: "Investment App",
    type: "Product Design · UI/UX",
    href: "https://www.behance.net/gallery/232275921/investment-app",
    index: "01",
  },
  {
    title: "Red Fort Ticketing",
    type: "Web Experience · UI/UX",
    href: "https://www.behance.net/harshchhabra",
    index: "02",
  },
  {
    title: "Construction Finance",
    type: "Digital Product · Web Design",
    href: "https://www.behance.net/harshchhabra",
    index: "03",
  },
  {
    title: "Pathology Lab",
    type: "Healthcare · Web Design",
    href: "https://www.behance.net/harshchhabra",
    index: "04",
  },
  {
    title: "Hospital Dashboard",
    type: "Data Experience · UI/UX",
    href: "https://www.behance.net/harshchhabra",
    index: "05",
  },
  {
    title: "Uncover Clinic",
    type: "Wellness · Web Design",
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
          <a href="#social">Social</a>
          <a href="#video">Video</a>
          <a href="#work">UI/UX</a>
          <a href="#about">About</a>
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
          <a className="circle-link" href="#social" aria-label="Explore selected work">
            <span>Explore</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one">UI/UX</div>
        <div className="hero-orbit orbit-two">Branding</div>
      </section>

      <section className="work-index" aria-label="Portfolio categories">
        <p className="kicker">Explore by category</p>
        <div>
          <a href="#social">
            <span>01</span>
            Social Media &amp; Reels
            <b>↓</b>
          </a>
          <a href="#video">
            <span>02</span>
            YouTube &amp; Video
            <b>↓</b>
          </a>
          <a href="#work">
            <span>03</span>
            UI/UX &amp; Web Design
            <b>↓</b>
          </a>
          <a href="#print">
            <span>04</span>
            Print Designs
            <b>↓</b>
          </a>
          <a href="#packaging">
            <span>05</span>
            Packaging Design
            <b>↓</b>
          </a>
          <a href="#brochures">
            <span>06</span>
            Brochures
            <b>↓</b>
          </a>
          <a href="#product-listing">
            <span>07</span>
            Product Listings
            <b>↓</b>
          </a>
          <a href="#tshirts">
            <span>08</span>
            T-shirt Design
            <b>↓</b>
          </a>
        </div>
      </section>

      <section className="brand-section" id="social">
        <div className="brand-intro">
          <p className="kicker">01 / Social Media &amp; Reels</p>
          <h2>Feeds that move.</h2>
          <p>
            All social-first work lives here: reel concepts, campaign creatives,
            content systems and visual storytelling for growing brands.
          </p>
        </div>
        <div className="social-profiles">
          {brandWork.map((item, index) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.name}</strong>
                <Arrow />
              </a>
            ))}
        </div>
        <div className="reels-wide">
          <ReelShowcase />
        </div>
      </section>

      <section className="motion-section" id="video">
        <div className="motion-copy">
          <p className="kicker">02 / YouTube &amp; Long-form Video</p>
          <h2>Stories with a longer arc.</h2>
          <p>
            Channel identity, thumbnails and long-form visual storytelling for
            original shows and purpose-led education.
          </p>
        </div>
        <YouTubeShowcase />
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="kicker">03 / UI/UX &amp; Web Design</p>
          <h2>Ideas, not screenshots.</h2>
          <p className="count">06 case studies</p>
        </div>
        <p className="work-note">
          A text-led index of digital product thinking. Open any project to see
          the complete process, interface and outcome on Behance.
        </p>
        <div className="case-index">
          {work.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
              <b>View case study <Arrow /></b>
            </a>
          ))}
        </div>
        <a
          className="behance-link"
          href="https://www.behance.net/harshchhabra"
          target="_blank"
          rel="noreferrer"
        >
          <span>See the complete UI/UX archive on Behance</span>
          <Arrow />
        </a>
      </section>

      <DesignCollections />

      <section className="graphic-section" id="graphic">
        <div>
          <p className="kicker">09 / Graphic &amp; Brand Design</p>
          <h2>Identity, print &amp; everything visual.</h2>
        </div>
        <div className="graphic-copy">
          <p>
            Logos, packaging, campaign key visuals, posters and brand systems —
            collected separately from digital product and social work.
          </p>
          <a
            href="https://www.behance.net/harshchhabra"
            target="_blank"
            rel="noreferrer"
          >
            Browse graphic design archive <Arrow />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Qg2Xu1e8smwU4gVpHackjyd1pDCxrWGo?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Open complete portfolio drive <Arrow />
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
