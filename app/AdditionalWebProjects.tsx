"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Eye, Film, Globe2,
  LayoutTemplate, MonitorSmartphone, MousePointerClick, Palette, X,
} from "lucide-react";

export type ArchiveProject = {
  title: string; type: string; image: string; href: string; index: string; video?: string;
};

type LiveSite = {
  kind: "live"; title: string; url: string; image: string; type: string; note: string;
};

type FigmaPage = { label: string; node: string; image?: string };
type FigmaCase = {
  kind: "figma"; title: string; fileKey: string; source: string; type: string;
  note: string; pages: FigmaPage[]; prototype?: boolean;
};
type UnifiedProject =
  | (ArchiveProject & { kind: "archive"; note: string })
  | LiveSite
  | FigmaCase;

const liveSites: LiveSite[] = [
  { kind: "live", title: "Neocrest", url: "https://neocrest.in/", image: "/site-previews/neocrest.png", type: "Corporate Website", note: "A polished business experience with a clear service journey." },
  { kind: "live", title: "Home4Us", url: "https://home4us.in/", image: "/site-previews/home4us.png", type: "Real Estate Platform", note: "Property discovery designed for confidence and fast decisions." },
  { kind: "live", title: "Car Bike World", url: "https://carbikeworld.com/", image: "/site-previews/carbikeworld.png", type: "Automotive Marketplace", note: "A content-rich automotive platform with practical browsing paths." },
  { kind: "live", title: "The Bridal Masterclass", url: "https://thebridalmasterclass.in/", image: "/site-previews/bridal-masterclass.png", type: "Education Landing Page", note: "A conversion-led event experience with editorial storytelling." },
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
    kind: "figma", title: "Hearing Care Website", fileKey: "mwZuOU8bkozcPVDPo9vkju",
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
    kind: "figma", title: "Asset Management Company", fileKey: "cgVtGFr8TmUIMvZQrnElwk",
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
    kind: "figma", title: "Investment Mobile Experience", fileKey: "C1Am2Y4PuvKZfpHL8V1t6M",
    source: "https://www.figma.com/proto/C1Am2Y4PuvKZfpHL8V1t6M/Untitled?node-id=0-3&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    type: "Mobile Product Design · Prototype", prototype: true,
    note: "A seven-screen finance concept with focused tasks, clear hierarchy and compact mobile navigation.",
    pages: [
      { label: "Welcome", node: "0:3" }, { label: "Dashboard", node: "0:21" },
      { label: "Portfolio", node: "0:37" }, { label: "Investment", node: "0:55" },
      { label: "Details", node: "0:89" }, { label: "Review", node: "0:106" },
      { label: "Success", node: "0:125" },
    ],
  },
];

function figmaUrl(project: FigmaCase, page: FigmaPage) {
  const node = page.node.replace(":", "-");
  const direct = project.prototype
    ? `https://www.figma.com/proto/${project.fileKey}/Portfolio?node-id=${node}&scaling=scale-down&content-scaling=fixed&page-id=0%3A1`
    : `https://www.figma.com/design/${project.fileKey}/Portfolio?node-id=${node}`;
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(direct)}`;
}

export function AdditionalWebProjects({ archiveProjects }: { archiveProjects: ArchiveProject[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<"all" | "archive" | "live" | "figma">("all");
  const [activeProject, setActiveProject] = useState<UnifiedProject | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const projects = useMemo<UnifiedProject[]>(() => [
    ...archiveProjects.map((project) => ({ ...project, kind: "archive" as const, note: "Selected product thinking, interface design and visual systems from the archive." })),
    ...liveSites, ...figmaCases,
  ], [archiveProjects]);
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.kind === filter);
  const activeFigma = activeProject?.kind === "figma" ? activeProject : null;
  const activePage = activeFigma?.pages[pageIndex];

  useEffect(() => {
    if (!activeProject) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [activeProject]);

  const closeModal = () => { setActiveProject(null); setPageIndex(0); };
  const scrollRail = (direction: number) => railRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 760), behavior: "smooth" });
  const projectImage = (project: UnifiedProject) => project.kind === "figma" ? project.pages.find((page) => page.image)?.image : project.image;
  const openFullProject = (url: string) => {
    const width = Math.min(1480, Math.max(860, window.screen.availWidth * 0.9));
    const height = Math.min(960, Math.max(680, window.screen.availHeight * 0.9));
    const left = Math.max(0, (window.screen.availWidth - width) / 2);
    const top = Math.max(0, (window.screen.availHeight - height) / 2);
    const viewer = window.open(
      url,
      "harsh-portfolio-project",
      `popup=yes,width=${Math.round(width)},height=${Math.round(height)},left=${Math.round(left)},top=${Math.round(top)},resizable=yes,scrollbars=yes`,
    );
    viewer?.focus();
  };
  const openProject = (project: UnifiedProject) => {
    if (project.kind === "figma") {
      setPageIndex(0);
      setActiveProject(project);
      return;
    }

    const destination = project.kind === "live" ? project.url : project.video || project.href;
    openFullProject(destination);
  };

  return (
    <>
      <div className="additional-web-projects">
        <div className="additional-web-head">
          <div><span><LayoutTemplate size={15} /> Compact digital archive</span><h3>One archive. Every screen.</h3></div>
          <p><MousePointerClick size={15} /> Filter the work, swipe one consistent row, then open any project for a closer look.</p>
        </div>
        <div className="uiux-archive-toolbar">
          <div className="uiux-archive-filters" aria-label="Filter UI/UX projects">
            {([[
              "all", "All work", projects.length,
            ], ["archive", "Selected archive", archiveProjects.length], ["live", "Live sites", liveSites.length], ["figma", "Figma", figmaCases.length]] as const).map(([value, label, count]) => (
              <button className={filter === value ? "active" : ""} onClick={() => setFilter(value)} key={value}>{label}<span>{String(count).padStart(2, "0")}</span></button>
            ))}
          </div>
          <div className="uiux-archive-arrows"><button onClick={() => scrollRail(-1)} aria-label="Previous projects"><ArrowLeft size={18} /></button><button onClick={() => scrollRail(1)} aria-label="Next projects"><ArrowRight size={18} /></button></div>
        </div>
        <div className="additional-web-grid" ref={railRef}>
          {visibleProjects.map((project, index) => {
            const image = projectImage(project);
            const label = project.kind === "live" ? "Live site" : project.kind === "figma" ? `${project.pages.length} screens` : project.video ? "Motion case" : "UI/UX case";
            return (
              <button className={`additional-web-card ${project.kind}-card`} key={`${filter}-${project.title}`} onClick={() => openProject(project)}>
                <span className="additional-web-visual">
                  {image ? <img src={image} alt={`${project.title} design preview`} loading="lazy" /> : <span className="figma-placeholder"><Palette size={34} /><strong>Figma</strong><small>Interactive prototype</small></span>}
                  <i>{project.kind === "live" ? <Globe2 size={14} /> : project.kind === "figma" ? <Palette size={14} /> : project.video ? <Film size={14} /> : <MonitorSmartphone size={14} />}{label}</i><b><Eye size={18} /></b>
                </span>
                <span className="additional-web-meta"><small>{String(index + 1).padStart(2, "0")} / {project.kind.toUpperCase()}</small><strong>{project.title}</strong><em>{project.type}</em><span>{project.kind === "live" ? "Launch live website" : project.kind === "figma" ? "Explore every screen" : project.video ? "Play full walkthrough" : "Open full project"} <ArrowUpRight size={16} /></span></span>
              </button>
            );
          })}
        </div>
        <div className="uiux-archive-hint"><span>Drag or swipe</span><i /><span>{visibleProjects.length} projects in this view</span></div>
      </div>

      {activeFigma && activePage && (
        <div className="web-project-modal" role="dialog" aria-modal="true" aria-label={`${activeFigma.title} Figma project`} onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="web-project-panel figma-project-panel">
            <header><span><Palette size={17} /><small>Complete Figma case</small><strong>{activeFigma.title}</strong></span><div><a href={activeFigma.source} target="_blank" rel="noreferrer">Open in Figma <ExternalLink size={15} /></a><button onClick={closeModal} aria-label="Close Figma project"><X size={20} /></button></div></header>
            <div className="figma-viewer-layout">
              <nav aria-label="Choose project page">{activeFigma.pages.map((page, index) => <button className={index === pageIndex ? "active" : ""} onClick={() => setPageIndex(index)} key={page.node}><span>{page.image ? <img src={page.image} alt="" loading="lazy" /> : <span className="figma-page-fallback"><Palette size={18} />View</span>}</span><small>{String(index + 1).padStart(2, "0")}</small><strong>{page.label}</strong></button>)}</nav>
              <main className={activePage.image ? "scroll-design" : "embed-design"}><div className="figma-active-label"><span>{String(pageIndex + 1).padStart(2, "0")} / {activeFigma.pages.length}</span><strong>{activePage.label}</strong><em>{activePage.image ? "Scroll to inspect the complete page" : "Interactive Figma view"}</em></div>{activePage.image ? <img src={activePage.image} alt={`${activeFigma.title}: ${activePage.label} full design`} /> : <iframe src={figmaUrl(activeFigma, activePage)} title={`${activeFigma.title}: ${activePage.label}`} allowFullScreen />}</main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
