"use client";

import { useEffect, useState } from "react";
import {
  ArrowUp,
  BookOpenText,
  Boxes,
  Clapperboard,
  Film,
  GalleryHorizontalEnd,
  Grid3X3,
  Images,
  LayoutPanelTop,
  Megaphone,
  Menu,
  MonitorSmartphone,
  PackageOpen,
  Palette,
  Printer,
  Shirt,
  ShoppingBag,
  TvMinimalPlay,
  X,
} from "lucide-react";

const destinations = [
  { id: "social", label: "Reels", icon: Clapperboard },
  { id: "static-posts", label: "Social posts", icon: GalleryHorizontalEnd },
  { id: "video", label: "YouTube", icon: TvMinimalPlay },
  { id: "performance-ads", label: "Performance ads", icon: Megaphone },
  { id: "brochures", label: "Brochures", icon: BookOpenText },
  { id: "identity", label: "Brand identity", icon: Palette },
  { id: "outdoor", label: "Outdoor branding", icon: GalleryHorizontalEnd },
  { id: "work", label: "UI/UX", icon: MonitorSmartphone },
  { id: "website-products", label: "Product images", icon: ShoppingBag },
  { id: "website-banners", label: "Web banners", icon: LayoutPanelTop },
  { id: "motion-graphics", label: "Motion graphics", icon: Film },
  { id: "print", label: "Print", icon: Printer },
  { id: "packaging", label: "Packaging", icon: PackageOpen },
  { id: "product-listing", label: "Listings", icon: Boxes },
  { id: "tshirts", label: "T-shirts", icon: Shirt },
  { id: "graphic", label: "Graphic design", icon: Images },
];

export function InteractiveChrome() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
      setShowTop(window.scrollY > window.innerHeight * 0.8);
    };

    const sections = destinations
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((item) => revealObserver.observe(item));

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const visit = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <i style={{ width: `${progress}%` }} />
      </div>

      <div className={`project-map ${open ? "open" : ""} ${showTop ? "is-available" : ""}`}>
        <button
          className="project-map-trigger"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="project-map-panel"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span>{open ? "Close" : "Browse work"}</span>
          {!open && <Grid3X3 size={15} />}
        </button>
        <div className="project-map-panel" id="project-map-panel" aria-hidden={!open}>
          <div className="project-map-title">
            <span>Jump to a category</span>
            <small>Choose an icon</small>
          </div>
          <div className="project-map-grid">
            {destinations.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => visit(id)}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{label}</span>
                {active === id && <i>Viewing</i>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => visit("top")}
        aria-label="Back to top"
      >
        <ArrowUp size={19} />
      </button>
    </>
  );
}
