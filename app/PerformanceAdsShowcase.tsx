"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  Play,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const performanceAds = [
  {
    brand: "Natriel",
    title: "Modern Care Campaign",
    theme: "Brand Story",
    slug: "natriel-ad-01",
  },
  {
    brand: "Natriel",
    title: "India in Every Detail",
    theme: "Cultural Story",
    slug: "natriel-ad-02",
  },
  {
    brand: "Nivaan",
    title: "Knee Pain Awareness",
    theme: "Problem–Solution",
    slug: "nivaan-knee-pain",
  },
  {
    brand: "RemeSleep",
    title: "Better Sleep Campaign",
    theme: "Product Education",
    slug: "remesleep",
  },
  {
    brand: "Uncover",
    title: "Hair Restoration",
    theme: "Transformation",
    slug: "hair-patch",
  },
  {
    brand: "Uncover",
    title: "Bridal Prep Campaign",
    theme: "Occasion Marketing",
    slug: "founder-ad-01",
  },
  {
    brand: "Uncover",
    title: "Men’s Grooming Campaign",
    theme: "Audience Creative",
    slug: "founder-ad-02",
  },
  {
    brand: "Uncover",
    title: "Cabin Crew Laser Campaign",
    theme: "Persona Marketing",
    slug: "founder-ad-03",
  },
  {
    brand: "Uncover",
    title: "Swimmer Laser Campaign",
    theme: "Persona Marketing",
    slug: "founder-ad-04",
  },
] as const;

const prioritizedPerformanceAds = [...performanceAds].sort((a, b) => {
  if (a.brand === b.brand) return 0;
  if (a.brand === "Uncover") return -1;
  if (b.brand === "Uncover") return 1;
  return 0;
});

export function PerformanceAdsShowcase() {
  const [active, setActive] = useState<(typeof performanceAds)[number] | null>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const move = (direction: number) =>
    track.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.82, 920),
      behavior: "smooth",
    });

  return (
    <>
      <div className="performance-ad-controls">
        <div>
          <strong><Target size={16} /> 09 campaign creatives</strong>
          <span><Sparkles size={14} /> AI-assisted performance storytelling</span>
        </div>
        <p><MousePointerClick size={14} /> Click a creative to watch</p>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous ad campaigns">
            <ChevronLeft />
          </button>
          <button onClick={() => move(1)} aria-label="Next ad campaigns">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="performance-ad-track" ref={track}>
        {prioritizedPerformanceAds.map((ad, index) => (
          <button
            className="performance-ad-card"
            onClick={() => setActive(ad)}
            key={ad.slug}
          >
            <span className="performance-ad-poster">
              <img
                src={`/performance-ads/${ad.slug}.webp`}
                alt={`${ad.brand} ${ad.title} ad preview`}
                loading="lazy"
              />
              <i><Play size={23} fill="currentColor" /></i>
              <b>{ad.theme}</b>
              <em>AI + Performance</em>
            </span>
            <span className="performance-ad-meta">
              <small>{String(index + 1).padStart(2, "0")} / 09</small>
              <span>
                <b>{ad.brand}</b>
                <strong>{ad.title}</strong>
              </span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="performance-ad-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.brand} ${active.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="performance-ad-modal-panel">
            <div className="performance-ad-modal-head">
              <span>
                <small>{active.brand} · {active.theme}</small>
                <strong>{active.title}</strong>
              </span>
              <button onClick={() => setActive(null)} aria-label="Close ad video">
                <X size={21} />
              </button>
            </div>
            <video
              src={`/performance-ads/${active.slug}.mp4`}
              poster={`/performance-ads/${active.slug}.webp`}
              autoPlay
              controls
              playsInline
            />
            <div className="performance-ad-modal-foot">
              <Target size={15} />
              <span>AI performance marketing creative</span>
              <i>Click outside or press Esc to close</i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
