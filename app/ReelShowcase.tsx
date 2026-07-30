"use client";

import { useEffect, useRef, useState } from "react";

const reels = [
  {
    brand: "Uncover Hair",
    title: "Timeless confidence",
    code: "DbFhqF8R-q8",
    image: "/reels/hair-shakira.jpg",
    accent: "#ff785a",
  },
  {
    brand: "Uncover Transform",
    title: "Performance has no age",
    code: "DavBnzoQ-FR",
    image: "/reels/transform-performance.jpg",
    accent: "#d7ff35",
  },
  {
    brand: "Chai Calling",
    title: "A new place for chai lovers",
    code: "DNqi6ixv2Yq",
    image: "/reels/chai-new-place.jpg",
    accent: "#ffb54a",
  },
  {
    brand: "Yuomo Men",
    title: "The biology of body change",
    code: "DYmtt2qTYCP",
    image: "/reels/yuomo-body.jpg",
    accent: "#7ec8ff",
  },
  {
    brand: "Go Sharpener",
    title: "Expert Talk · Episode 78",
    code: "DbNhEO4z1Jp",
    image: "/reels/gosharpener-78.jpg",
    accent: "#d6a8ff",
  },
  {
    brand: "Uncover Hair",
    title: "The evolution of an icon",
    code: "DaxpHs3KZF4",
    image: "/reels/hair-messi.jpg",
    accent: "#ff785a",
  },
  {
    brand: "Uncover Transform",
    title: "Fasting, explained",
    code: "DaxoZUqSWN5",
    image: "/reels/transform-fasting.jpg",
    accent: "#d7ff35",
  },
  {
    brand: "Chai Calling",
    title: "Chai & calling",
    code: "DNqOnX7Txn8",
    image: "/reels/chai-calling.jpg",
    accent: "#ffb54a",
  },
  {
    brand: "Yuomo Men",
    title: "Performance beyond the podium",
    code: "DZfLzFRTNcj",
    image: "/reels/yuomo-serena.jpg",
    accent: "#7ec8ff",
  },
  {
    brand: "Go Sharpener",
    title: "Expert Talk · Episode 79",
    code: "DbSq9ZkzUl2",
    image: "/reels/gosharpener-79.jpg",
    accent: "#d6a8ff",
  },
];

export function ReelShowcase() {
  const [active, setActive] = useState<(typeof reels)[number] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
      <div className="reel-controls">
        <p>Curated from recent public work</p>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous reels">←</button>
          <button onClick={() => move(1)} aria-label="Next reels">→</button>
        </div>
      </div>
      <div className="reel-track" ref={trackRef}>
        {reels.map((reel, index) => (
          <button
            className="reel-card"
            onClick={() => setActive(reel)}
            key={`${reel.brand}-${reel.code}`}
            style={{ "--reel-accent": reel.accent } as React.CSSProperties}
          >
            <img src={reel.image} alt={`${reel.brand}: ${reel.title}`} />
            <span className="reel-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="reel-play" aria-hidden="true">▶</span>
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
              <button onClick={() => setActive(null)} aria-label="Close reel">×</button>
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
              Open reel on Instagram ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
