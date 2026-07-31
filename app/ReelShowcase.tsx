"use client";

import { useEffect, useRef, useState } from "react";
import { instagramCatalogues } from "./catalogueData";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  ExternalLink,
  MousePointerClick,
  Play,
  X,
} from "lucide-react";

const reels = instagramCatalogues.flatMap((group) =>
  group.codes.map((code, index) => ({
    brand: group.brand,
    title: `Reel ${String(index + 1).padStart(2, "0")}`,
    code,
    image: `/reels/all/${code}.webp`,
    accent: group.accent,
  })),
);

export function ReelShowcase() {
  const [active, setActive] = useState<(typeof reels)[number] | null>(null);
  const [filter, setFilter] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const visible = filter === "All" ? reels : reels.filter((reel) => reel.brand === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const move = (direction: number) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.8, 760),
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="reel-filter" aria-label="Filter reels by brand">
        {["All", ...instagramCatalogues.map((group) => group.brand)].map((brand) => (
          <button
            key={brand}
            className={filter === brand ? "active" : ""}
            onClick={() => {
              setFilter(brand);
              trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            {brand === "All" && <Camera size={14} />}
            {brand}
          </button>
        ))}
      </div>
      <div className="reel-controls">
        <p><MousePointerClick size={15} /> {visible.length} reels · click to play</p>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous reels"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next reels"><ChevronRight /></button>
        </div>
      </div>
      <div className="reel-track" ref={trackRef}>
        {visible.map((reel, index) => (
          <button
            className="reel-card"
            onClick={() => setActive(reel)}
            key={`${reel.brand}-${reel.code}`}
            style={{ "--reel-accent": reel.accent } as React.CSSProperties}
          >
            <img
              src={reel.image}
              alt={`${reel.brand}: ${reel.title}`}
              loading="lazy"
            />
            <span className="reel-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="reel-play" aria-hidden="true"><Play size={23} fill="currentColor" /></span>
            <span className="reel-caption">
              <small>{reel.brand}</small>
              <strong>{reel.title}</strong>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="reel-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.brand}: ${active.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="reel-modal-panel">
            <div className="reel-modal-head">
              <span>
                <small>{active.brand}</small>
                <strong>{active.title}</strong>
              </span>
              <button onClick={() => setActive(null)} aria-label="Close reel"><X size={20} /></button>
            </div>
            <iframe
              src={`https://www.instagram.com/reel/${active.code}/embed/`}
              title={`${active.brand} Instagram reel`}
              allow="autoplay; encrypted-media; picture-in-picture"
            />
            <a
              href={`https://www.instagram.com/reel/${active.code}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={16} /> Open reel on Instagram <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
