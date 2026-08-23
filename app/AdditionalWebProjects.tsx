"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Eye,
  Globe2,
  LayoutTemplate,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  X,
} from "lucide-react";

type LiveSite = {
  kind: "live";
  title: string;
  url: string;
  image: string;
  type: string;
  note: string;
};

type FigmaPage = {
  label: string;
  node: string;
  image?: string;
};

type FigmaCase = {
  kind: "figma";
  title: string;
  fileKey: string;
  source: string;
  type: string;
  note: string;
  pages: FigmaPage[];
  prototype?: boolean;
};

const liveSites: LiveSite[] = [
  { kind: "live", title: "Neocrest", url: "https://neocrest.in/", image: "/site-previews/neocrest.png", type: "Corporate Website", note: "A polished business experience with a clear service journey." },
  { kind: "live", title: "Home4Us", url: "https://home4us.in/", image: "/site-previews/home4us.png", type: "Real Estate Platform", note: "Property discovery designed for confidence and fast decision-making." },
  { kind: "live", title: "Car Bike World", url: "https://carbikeworld.com/", image: "/site-previews/carbikeworld.png", type: "Automotive Marketplace", note: "A content-rich automotive platform with practical browsing paths." },
  { kind: "live", title: "The Bridal Masterclass", url: "https://thebridalmasterclass.in/", image: "/site-previews/bridal-masterclass.png", type: "Education Landing Page", note: "A conversion-led event experience with editorial visual storytelling." },
  { kind: "live", title: "Education Ellipse", url: "https://educationellipse.com/", image: "/site-previews/education-ellipse.png", type: "Education Website", note: "Accessible information architecture for students and parents." },
  { kind: "live", title: "Signutra Shop", url: "https://signutrashop.in/", image: "/site-previews/signutra-shop.png", type: "Nutrition Ecommerce", note: "Benefit-first product presentation and a focused shopping journey." },
  { kind: "live", title: "The Monk", url: "https://themonk.co.in/", image: "/site-previews/the-monk.png", type: "Lifestyle Ecommerce", note: "A contemporary storefront balancing product and brand atmosphere." },
  { kind: "live", title: "Dromen & Co", url: "https://dromenco.com/en-us", image: "/site-previews/dromenco.jpg", type: "Beauty Ecommerce", note: "Editorial skincare storytelling paired with premium commerce." },
  { kind: "live", title: "Oh My Glow Face Oil", url: "https://dromenco.com/en-us/products/oh-my-glow-face-oil", image: "/site-previews/dromenco-face-oil.jpg", type: "Product Detail Experience", note: "A focused product story built around ritual, benefit and conversion." },
  { kind: "live", title: "Jovees", url: "https://www.jovees.com/", image: "/site-previews/jovees.png", type: "Beauty Ecommerce", note: "A large catalogue organised into a visual, shoppable experience." },
  { kind: "live", title: "CollegeWollege", url: "https://collegewollege.com/", image: "/site-previews/college-wollege.png", type: "Education Discovery", note: "Search-led college discovery with dense information made approachable." },
  { kind: "live", title: "Sarvottam Noida", url: "https://www.sarvottamnoida.com/", image: "/site-previews/sarvottam-noida.png", type: "Real Estate Website", note: "A premium property story designed around place, scale and enquiry." },
];

const figmaCases: FigmaCase[] = [
  {
    kind: "figma",
    title: "Hearing Care Website",
    fileKey: "mwZuOU8bkozcPVDPo9vkju",
    source: "https://www.figma.com/design/mwZuOU8bkozcPVDPo9vkju/Untitled?node-id=0-1",
    type: "Responsive Web Design · Figma",
    note: "Long-form healthcare pages with product education and a guided consultation journey.",
    pages: [
      { label: "Overview", node: "1:2" },
      { label: "Homepage", node: "2:2", image: "/figma-previews/hearing-page-01.png" },
      { label: "Product Story", node: "3:1261", image: "/figma-previews/hearing-page-02.png" },
    ],
  },
  {
    kind: "figma",
    title: "Asset Management Company",
    fileKey: "cgVtGFr8TmUIMvZQrnElwk",
    source: "https://www.figma.com/design/cgVtGFr8TmUIMvZQrnElwk/Asset-Management-Company?node-id=134-1304",
    type: "Financial Website · Figma",
    note: "A monochrome editorial system for investment thinking, services and institutional credibility.",
    pages: [
      { label: "Homepage", node: "134:1304", image: "/figma-previews/asset-desktop-01.png" },
      { label: "Approach", node: "134:1312", image: "/figma-previews/asset-desktop-02.png" },
      { label: "Insights", node: "134:1461", image: "/figma-previews/asset-desktop-03.png" },
      { label: "Article", node: "135:1476" },
      { label: "Company", node: "135:1492", image: "/figma-previews/asset-desktop-05.png" },
      { label: "Team", node: "134:1328", image: "/figma-previews/asset-desktop-06.png" },
      { label: "Contact", node: "134:1345" },
    ],
  },
  {
    kind: "figma",
    title: "Investment Mobile Experience",
    fileKey: "C1Am2Y4PuvKZfpHL8V1t6M",
    source: "https://www.figma.com/proto/C1Am2Y4PuvKZfpHL8V1t6M/Untitled?node-id=0-3&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    type: "Mobile Product Design · Prototype",
    note: "A seven-screen finance concept with focused tasks, clear hierarchy and compact mobile navigation.",
    prototype: true,
    pages: [
      { label: "Welcome", node: "0:3" },
      { label: "Dashboard", node: "0:21" },
      { label: "Portfolio", node: "0:37" },
      { label: "Investment", node: "0:55" },
      { label: "Details", node: "0:89" },
      { label: "Review", node: "0:106" },
      { label: "Success", node: "0:125" },
    ],
  },
];

const allProjects = [...liveSites, ...figmaCases];

function figmaUrl(project: FigmaCase, page: FigmaPage) {
  const node = page.node.replace(":", "-");
  const direct = project.prototype
    ? `https://www.figma.com/proto/${project.fileKey}/Portfolio?node-id=${node}&scaling=scale-down&content-scaling=fixed&page-id=0%3A1`
    : `https://www.figma.com/design/${project.fileKey}/Portfolio?node-id=${node}`;
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(direct)}`;
}

export function AdditionalWebProjects() {
  const [activeLive, setActiveLive] = useState<LiveSite | null>(null);
  const [activeFigma, setActiveFigma] = useState<FigmaCase | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (!activeLive && !activeFigma) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && (setActiveLive(null), setActiveFigma(null));
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [activeLive, activeFigma]);

  const closeModal = () => {
    setActiveLive(null);
    setActiveFigma(null);
    setPageIndex(0);
  };

  const activePage = activeFigma?.pages[pageIndex];

  return (
    <>
      <div className="additional-web-projects">
        <div className="additional-web-head">
          <div>
            <span><LayoutTemplate size={15} /> Extended digital archive</span>
            <h3>More products, built for real screens.</h3>
          </div>
          <p><MousePointerClick size={15} /> Open live websites in-site or browse complete Figma journeys page by page.</p>
        </div>

        <div className="additional-web-grid">
          {allProjects.map((project, index) => (
            <button
              className={`additional-web-card ${project.kind === "figma" ? "figma-card" : ""}`}
              key={project.title}
              onClick={() => {
                if (project.kind === "live") setActiveLive(project);
                else {
                  setPageIndex(0);
                  setActiveFigma(project);
                }
              }}
            >
              <span className="additional-web-visual">
                {project.kind === "live" ? (
                  <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                ) : project.pages[0].image ? (
                  <img src={project.pages[0].image} alt={`${project.title} Figma preview`} loading="lazy" />
                ) : (
                  <iframe src={figmaUrl(project, project.pages[0])} title={`${project.title} preview`} tabIndex={-1} />
                )}
                <i>{project.kind === "live" ? <><Globe2 size={14} /> Live website</> : <><Palette size={14} /> {project.pages.length} screens</>}</i>
                <b><Eye size={18} /></b>
              </span>
              <span className="additional-web-meta">
                <small>{String(index + 11).padStart(2, "0")} / {project.kind === "live" ? "LIVE" : "FIGMA"}</small>
                <strong>{project.title}</strong>
                <em>{project.type}</em>
                <p>{project.note}</p>
                <span>Explore project <ArrowUpRight size={16} /></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeLive && (
        <div className="web-project-modal" role="dialog" aria-modal="true" aria-label={`${activeLive.title} live website`} onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="web-project-panel live-site-panel">
            <header>
              <span><Globe2 size={17} /><small>Live website preview</small><strong>{activeLive.title}</strong></span>
              <div>
                <a href={activeLive.url} target="_blank" rel="noreferrer">Open full site <ExternalLink size={15} /></a>
                <button onClick={closeModal} aria-label="Close website preview"><X size={20} /></button>
              </div>
            </header>
            <div className="live-browser-bar"><i /><i /><i /><span>{activeLive.url.replace(/^https?:\/\//, "")}</span></div>
            <iframe src={activeLive.url} title={`${activeLive.title} live website`} />
            <footer><MonitorSmartphone size={15} /> Some websites restrict embedded previews. Use “Open full site” if the page does not load here.</footer>
          </div>
        </div>
      )}

      {activeFigma && activePage && (
        <div className="web-project-modal" role="dialog" aria-modal="true" aria-label={`${activeFigma.title} Figma project`} onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="web-project-panel figma-project-panel">
            <header>
              <span><Palette size={17} /><small>Complete Figma case</small><strong>{activeFigma.title}</strong></span>
              <div>
                <a href={activeFigma.source} target="_blank" rel="noreferrer">Open in Figma <ExternalLink size={15} /></a>
                <button onClick={closeModal} aria-label="Close Figma project"><X size={20} /></button>
              </div>
            </header>
            <div className="figma-viewer-layout">
              <nav aria-label="Choose project page">
                {activeFigma.pages.map((page, index) => (
                  <button className={index === pageIndex ? "active" : ""} onClick={() => setPageIndex(index)} key={page.node}>
                    <span>
                      {page.image ? <img src={page.image} alt="" loading="lazy" /> : <iframe src={figmaUrl(activeFigma, page)} title="" tabIndex={-1} />}
                    </span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{page.label}</strong>
                  </button>
                ))}
              </nav>
              <main className={activePage.image ? "scroll-design" : "embed-design"}>
                <div className="figma-active-label"><span>{String(pageIndex + 1).padStart(2, "0")} / {activeFigma.pages.length}</span><strong>{activePage.label}</strong><em>{activePage.image ? "Scroll to inspect the complete page" : "Interactive Figma view"}</em></div>
                {activePage.image ? (
                  <img src={activePage.image} alt={`${activeFigma.title}: ${activePage.label} full design`} />
                ) : (
                  <iframe src={figmaUrl(activeFigma, activePage)} title={`${activeFigma.title}: ${activePage.label}`} allowFullScreen />
                )}
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
