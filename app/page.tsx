import { ReelShowcase } from "./ReelShowcase";
import { DesignCollections } from "./DesignCollections";
import { YouTubeShowcase } from "./YouTubeShowcase";
import { StaticPostShowcase } from "./StaticPostShowcase";
import { InteractiveChrome } from "./InteractiveChrome";
import { MotionGraphicsShowcase } from "./MotionGraphicsShowcase";
import { PerformanceAdsShowcase } from "./PerformanceAdsShowcase";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Eye,
  Film,
  FolderOpen,
  GalleryHorizontalEnd,
  Images,
  LayoutTemplate,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  PackageOpen,
  Palette,
  Printer,
  Play,
  Shirt,
  Sparkles,
  UserRound,
  TvMinimalPlay,
} from "lucide-react";

const work = [
  {
    title: "Doxper Blu",
    type: "Healthcare App · Product Design · UI/UX",
    image: "/work/doxper-screen-03.png",
    screens: [
      "/work/doxper-screen-01.png",
      "/work/doxper-screen-02.png",
      "/work/doxper-screen-03.png",
    ],
    appIcon: "/work/doxper-icon.png",
    href: "https://play.google.com/store/apps/details?id=com.informds.doxper&hl=en_IN",
    cta: "View on Google Play",
    featured: true,
    index: "01",
  },
  {
    title: "UNCOVER App",
    type: "Healthcare App · Product Design · UI/UX",
    image: "/work/uncover-app-screen-01.png",
    screens: [
      "/work/uncover-app-screen-01.png",
      "/work/uncover-app-screen-02.png",
      "/work/uncover-app-screen-03.png",
    ],
    appIcon: "/work/uncover-app-icon.png",
    href: "https://play.google.com/store/apps/details?id=in.uncover.patient&hl=en_IN",
    cta: "View on Google Play",
    featured: true,
    appTone: "uncover-app-preview",
    previewLabel: "Patient app experience",
    summary:
      "A guided skin-analysis, appointment-booking and treatment-discovery experience for Uncover clinic patients.",
    index: "02",
  },
  {
    title: "Uncover",
    type: "Healthcare Brand · Website Design · UI/UX",
    image: "/work/uncover-website.webp",
    href: "https://uncover.co.in/",
    cta: "Visit live website",
    website: "uncover.co.in",
    websiteTone: "uncover-preview",
    summary: "A dermatologist-led clinic experience that guides visitors through skin, hair and body treatments.",
    tags: ["Skin", "Hair", "Body"],
    index: "03",
  },
  {
    title: "USL Derma",
    type: "Skincare E-commerce · Website Design · UI/UX",
    image: "/work/usl-derma-website.webp",
    href: "https://www.uslderma.com/",
    cta: "Visit live website",
    website: "uslderma.com",
    websiteTone: "usl-preview",
    summary: "A warm, editorial storefront for dermatologist-created skincare essentials.",
    tags: ["Shop", "Skincare", "E-commerce"],
    index: "04",
  },
  {
    title: "Investment App",
    type: "Product Design · UI/UX",
    image: "/work/investment-app.png",
    href: "https://www.behance.net/gallery/232275921/investment-app",
    frame: "app-frame",
    tone: "investment-tone",
    previewLabel: "Fintech product",
    tags: ["Mobile UI", "Investing"],
    index: "05",
  },
  {
    title: "Red Fort Ticketing",
    type: "Web Experience · UI/UX",
    image: "/work/redfort-ticketing.png",
    video: "/videos/redfort-ui-walkthrough.mp4",
    href: "https://www.behance.net/harshchhabra",
    frame: "browser-frame",
    tone: "redfort-tone",
    previewLabel: "Ticketing experience",
    tags: ["Culture", "Booking"],
    index: "06",
  },
  {
    title: "Construction Finance",
    type: "Digital Product · Web Design",
    image: "/work/construction-finance.png",
    href: "https://www.behance.net/harshchhabra",
    frame: "browser-frame",
    tone: "finance-tone",
    previewLabel: "Finance platform",
    tags: ["Web UI", "Fintech"],
    index: "07",
  },
  {
    title: "Pathology Lab",
    type: "Healthcare · Web Design",
    image: "/work/pathology-lab.png",
    href: "https://www.behance.net/harshchhabra",
    frame: "browser-frame",
    tone: "pathology-tone",
    previewLabel: "Healthcare website",
    tags: ["Web UI", "Healthcare"],
    index: "08",
  },
  {
    title: "Hospital Dashboard",
    type: "Data Experience · UI/UX",
    image: "/work/hospital-dashboard.png",
    href: "https://www.behance.net/harshchhabra",
    frame: "dashboard-frame",
    tone: "hospital-tone",
    previewLabel: "Clinical dashboard",
    tags: ["Dashboard", "Data"],
    index: "09",
  },
  {
    title: "Uncover Clinic",
    type: "Wellness · Web Design",
    image: "/work/uncover-clinic.png",
    href: "https://www.behance.net/harshchhabra",
    frame: "browser-frame",
    tone: "clinic-tone",
    previewLabel: "Wellness experience",
    tags: ["Web UI", "Wellness"],
    index: "10",
  },
];

const currentWorkOrder = ["UNCOVER App", "Uncover", "Uncover Clinic"];
const prioritizedWork = [...work]
  .sort((a, b) => {
    const aPriority = currentWorkOrder.indexOf(a.title);
    const bPriority = currentWorkOrder.indexOf(b.title);
    if (aPriority === -1 && bPriority === -1) return 0;
    if (aPriority === -1) return 1;
    if (bPriority === -1) return -1;
    return aPriority - bPriority;
  })
  .map((item, index) => ({
    ...item,
    index: String(index + 1).padStart(2, "0"),
  }));

const brandWork = [
  {
    name: "Uncover Wellness",
    service: "Dermatology · Wellness campaigns",
    href: "https://www.instagram.com/uncover.wellness/",
  },
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
  return <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main>
      <InteractiveChrome />
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Harsh Chhabra, home">
          HC<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#social"><Clapperboard size={15} />Social</a>
          <a href="#video"><TvMinimalPlay size={15} />Video</a>
          <a href="#work"><MonitorSmartphone size={15} />UI/UX</a>
          <a href="#about"><UserRound size={15} />About</a>
        </nav>
        <a
          className="availability"
          href="https://www.behance.net/harshchhabra"
          target="_blank"
          rel="noreferrer"
        >
          <BriefcaseBusiness size={16} /> Available for projects <i />
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow"><MapPin size={15} /> Independent designer · India</p>
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
            <MousePointerClick size={20} />
            <span>Explore</span>
            <ArrowDown size={18} />
          </a>
        </div>
        <div className="hero-orbit orbit-one">UI/UX</div>
        <div className="hero-orbit orbit-two">Branding</div>
      </section>

      <section className="portfolio-stats" data-reveal aria-label="Portfolio overview">
        <div><Clapperboard /><strong>43</strong><span>Design reels</span></div>
        <div><GalleryHorizontalEnd /><strong>24</strong><span>Social posts</span></div>
        <div><TvMinimalPlay /><strong>39</strong><span>Video, motion &amp; ad pieces</span></div>
        <div><Images /><strong>246</strong><span>Archived artworks</span></div>
      </section>

      <section className="work-index" data-reveal aria-label="Portfolio categories">
        <p className="kicker"><Sparkles size={15} /> Explore by category</p>
        <div>
          <a href="#social">
            <span>01</span><Clapperboard className="category-icon" />
            <strong>Social Reels &amp; Posts</strong>
            <ArrowDown />
          </a>
          <a href="#video">
            <span>02</span><TvMinimalPlay className="category-icon" />
            <strong>YouTube &amp; Video</strong>
            <ArrowDown />
          </a>
          <a href="#motion-graphics">
            <span>02B</span><Film className="category-icon" />
            <strong>Motion Graphics</strong>
            <ArrowDown />
          </a>
          <a href="#performance-ads">
            <span>02C</span><Megaphone className="category-icon" />
            <strong>AI Performance Ads</strong>
            <ArrowDown />
          </a>
          <a href="#work">
            <span>03</span><MonitorSmartphone className="category-icon" />
            <strong>UI/UX &amp; Web Design</strong>
            <ArrowDown />
          </a>
          <a href="#print">
            <span>04</span><Printer className="category-icon" />
            <strong>Print Designs</strong>
            <ArrowDown />
          </a>
          <a href="#packaging">
            <span>05</span><PackageOpen className="category-icon" />
            <strong>Packaging Design</strong>
            <ArrowDown />
          </a>
          <a href="#brochures">
            <span>06</span><BookOpenText className="category-icon" />
            <strong>Brochures</strong>
            <ArrowDown />
          </a>
          <a href="#product-listing">
            <span>07</span><Boxes className="category-icon" />
            <strong>Product Listings</strong>
            <ArrowDown />
          </a>
          <a href="#identity">
            <span>08</span><Palette className="category-icon" />
            <strong>Brand Identity</strong>
            <ArrowDown />
          </a>
          <a href="#outdoor">
            <span>09</span><GalleryHorizontalEnd className="category-icon" />
            <strong>Outdoor Branding</strong>
            <ArrowDown />
          </a>
          <a href="#tshirts">
            <span>10</span><Shirt className="category-icon" />
            <strong>T-shirt Design</strong>
            <ArrowDown />
          </a>
        </div>
      </section>

      <section className="brand-section" id="social" data-reveal>
        <div className="brand-intro">
          <p className="kicker"><Clapperboard size={15} /> 01 / Social Media &amp; Reels</p>
          <h2>Feeds that move.</h2>
          <p>
            Motion-first social work: reel concepts, edits and visual
            storytelling. GoSharpener’s static work lives in the next section.
          </p>
        </div>
        <div className="social-profiles">
          {brandWork.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.name}>
                <span className="profile-icon"><Camera size={18} /></span>
                <span className="profile-copy">
                  <strong>{item.name}</strong>
                  <small>{item.service}</small>
                </span>
                <Arrow />
              </a>
            ))}
        </div>
        <div className="reels-wide">
          <ReelShowcase />
        </div>
      </section>

      <section className="static-section" id="static-posts" data-reveal>
        <div className="static-intro">
          <p className="kicker"><GalleryHorizontalEnd size={15} /> 01B / Static &amp; Carousel Posts</p>
          <h2>Stories, frame by frame.</h2>
          <p>
            Static campaign design and multi-slide carousel systems, separated
            from reels and organised by brand—including GoSharpener.
          </p>
        </div>
        <StaticPostShowcase />
      </section>

      <section className="motion-section" id="video" data-reveal>
        <div className="motion-copy">
          <p className="kicker"><TvMinimalPlay size={15} /> 02 / YouTube &amp; Long-form Video</p>
          <h2>Stories with a longer arc.</h2>
          <p>
            Channel identity, thumbnails and long-form visual storytelling for
            original shows and purpose-led education.
          </p>
        </div>
        <YouTubeShowcase />
      </section>

      <section className="motion-graphics-section" id="motion-graphics" data-reveal>
        <div className="motion-graphics-head">
          <p className="kicker"><Film size={15} /> 02B / Motion Graphics</p>
          <h2>Designed to move.</h2>
          <p>
            The complete motion archive from Drive: animated campaigns,
            hospitality stories, offer films, event loops and branded edits.
          </p>
        </div>
        <MotionGraphicsShowcase />
      </section>

      <section className="performance-ads-section" id="performance-ads" data-reveal>
        <div className="performance-ads-head">
          <p className="kicker"><Megaphone size={15} /> 02C / AI Performance Marketing Ads</p>
          <h2>Creative built to perform.</h2>
          <p>
            AI-assisted concepts, persona-led hooks and conversion-minded video
            storytelling for healthcare, wellness and consumer brands.
          </p>
        </div>
        <PerformanceAdsShowcase />
      </section>

      <section className="work-section" id="work" data-reveal>
        <div className="section-heading">
          <p className="kicker"><MonitorSmartphone size={15} /> 03 / UI/UX &amp; Web Design</p>
          <h2>Ideas, not screenshots.</h2>
          <p className="count">10 case studies</p>
        </div>
        <div className="work-grid visual-work-grid">
          {prioritizedWork.map((item) => (
            <a
              className={`project-card ${item.video ? "video-project" : ""} ${item.featured ? "featured-project" : ""} ${item.website ? "website-project" : ""}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              <div className="project-image">
                {item.screens ? (
                  <div className={`doxper-project-preview ${item.appTone ?? ""}`}>
                    <div className="doxper-project-copy">
                      <img src={item.appIcon} alt="" className="doxper-app-icon" />
                      <span>{item.previewLabel ?? "Healthcare product design"}</span>
                      <strong>{item.title}</strong>
                      <p>{item.summary ?? "Digital workflows designed for doctors, appointments and connected care."}</p>
                    </div>
                    <div className="doxper-screens" aria-label="Doxper Blu app interface previews">
                      {item.screens.map((screen, screenIndex) => (
                        <img
                          src={screen}
                          alt={`Doxper Blu app screen ${screenIndex + 1}`}
                          loading={screenIndex === 0 ? "eager" : "lazy"}
                          key={screen}
                        />
                      ))}
                    </div>
                  </div>
                ) : item.website ? (
                  <div className={`website-project-preview ${item.websiteTone}`}>
                    <div className="website-browser-card">
                      <div className="website-browser-bar">
                        <i /><i /><i />
                        <span>{item.website}</span>
                      </div>
                      <div className="website-browser-canvas">
                        <img src={item.image} alt={`${item.title} website homepage`} loading="lazy" />
                      </div>
                    </div>
                    <div className="website-card-caption">
                      <span>Live website design</span>
                      <strong>{item.title}</strong>
                      <p>{item.summary}</p>
                      <div>
                        {item.tags?.map((tag) => <i key={tag}>{tag}</i>)}
                      </div>
                    </div>
                  </div>
                ) : item.frame ? (
                  <div className={`case-preview ${item.tone}`}>
                    <div className="case-preview-head">
                      <span>{item.previewLabel}</span>
                      <strong>{item.index}</strong>
                    </div>
                    <div className={`case-device ${item.frame}`}>
                      <div className="case-device-bar">
                        <i /><i /><i />
                        <span>{item.title}</span>
                      </div>
                      <div className="case-device-screen">
                        {item.video ? (
                          <video
                            src={item.video}
                            poster={item.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-label="Red Fort ticketing interface walkthrough"
                          />
                        ) : (
                          <img src={item.image} alt={`${item.title} UI/UX preview`} loading="lazy" />
                        )}
                      </div>
                    </div>
                    <div className="case-preview-foot">
                      <strong>{item.title}</strong>
                      <div>
                        {item.tags?.map((tag) => <i key={tag}>{tag}</i>)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.image} alt={`${item.title} UI/UX preview`} loading="lazy" />
                )}
                <span className="view-pill">
                  {item.video ? (
                    <><Play size={15} fill="currentColor" /> Watch Red Fort video</>
                  ) : (
                    <><Eye size={15} /> {item.cta ?? "View project"}</>
                  )}
                </span>
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
          <span>See the complete UI/UX archive on Behance</span>
          <Arrow />
        </a>
      </section>

      <DesignCollections />

      <section className="graphic-section" id="graphic" data-reveal>
        <div>
          <p className="kicker"><Palette size={15} /> 11 / Extended Graphic &amp; Brand Design</p>
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
            <span><Palette size={18} /> Browse graphic design archive</span> <Arrow />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Qg2Xu1e8smwU4gVpHackjyd1pDCxrWGo?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span><FolderOpen size={18} /> Open complete portfolio drive</span> <Arrow />
          </a>
        </div>
      </section>

      <section className="about-section" id="about" data-reveal>
        <p className="kicker"><UserRound size={15} /> A little about me</p>
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
              <span><Palette size={15} />Art Direction</span>
              <span><Sparkles size={15} />Brand Identity</span>
              <span><LayoutTemplate size={15} />UI/UX Design</span>
              <span><Megaphone size={15} />Social Campaigns</span>
              <span><Film size={15} />Motion &amp; Video</span>
              <span><PackageOpen size={15} />Packaging</span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" data-reveal>
        <p className="kicker"><MessageCircle size={15} /> Have a project in mind?</p>
        <h2>Let’s make it happen.</h2>
        <div className="footer-links">
          <a
            href="https://www.behance.net/harshchhabra"
            target="_blank"
            rel="noreferrer"
          >
            <span><MessageCircle size={19} /> Start a conversation on Behance</span> <Arrow />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Qg2Xu1e8smwU4gVpHackjyd1pDCxrWGo?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span><FolderOpen size={19} /> View portfolio drive</span> <Arrow />
          </a>
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Harsh Chhabra</p>
          <p>Graphic &amp; UI/UX Designer · India</p>
          <a href="#top">Back to top <ArrowUp size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
