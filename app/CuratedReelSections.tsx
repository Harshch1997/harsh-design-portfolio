"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  ExternalLink,
  Film,
  MousePointerClick,
  Play,
  ScanLine,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

type Reel = {
  code: string;
  title: string;
  label: string;
};

const aiReels: Reel[] = [
  { code: "DUXx7-kDqPo", title: "Birthday trend takeover", label: "AI concept · Social trend" },
  { code: "DWjLEU6jbHv", title: "The clinic team disappears", label: "AI narrative · Campaign" },
  { code: "DWjV-D6IgYx", title: "Where did the dermats go?", label: "AI story · Suspense edit" },
  { code: "DWlUD_TGA7n", title: "UNCOVER Unplugged", label: "AI world-building · Launch" },
  { code: "DWlWv2JESik", title: "Welcome to Unplugged", label: "AI characters · Branded reel" },
  { code: "DYjx_xPTTo6", title: "The MELODI moment", label: "AI culture edit · Social" },
  { code: "DZHvtuSsNEW", title: "Skin Booster candidates", label: "AI-assisted explainer" },
  { code: "DZKK7_WRwV7", title: "Eight locations and counting", label: "AI scale story · Brand" },
  { code: "DdBsK9WBTT3", title: "New season, fresh rotation", label: "AI fashion campaign · MR BUTTON" },
  { code: "Dc3ZlLSBQOv", title: "The Black Soul Blazer", label: "AI product story · MR BUTTON" },
  { code: "Dc59zbFBtaD", title: "You can never have enough blue shirts", label: "AI fashion edit · MR BUTTON" },
  { code: "DcvqqYbhw5m", title: "Fall styling, the MR BUTTON way", label: "AI styling concept · MR BUTTON" },
  { code: "DdbcJ_MBZ1m", title: "Five looks, one festive mood", label: "AI festive campaign · MR BUTTON" },
];

const trailers: Reel[] = [
  { code: "DIRQjoCya2E", title: "Uorfi Javed · The Original You", label: "Podcast trailer" },
  { code: "DKhlu7wy7EN", title: "Tina Ahuja · The Original You", label: "Talk-show trailer" },
  { code: "DLXOVCtS_pg", title: "Neeti Palta · Real & hilarious", label: "Podcast trailer" },
  { code: "DMiCUBYyZUC", title: "Love, logistics & electric rides", label: "Conversation trailer" },
  { code: "DUaykpWEjFU", title: "Two SKs · One conversation", label: "Talk-show trailer" },
  { code: "DVyQlLnEX33", title: "SK vs SK · Gen Z challenge", label: "Show segment trailer" },
];

function ReelCollection({
  items,
  tone,
}: {
  items: Reel[];
  tone: "ai" | "trailer";
}) {
  const [active, setActive] = useState<Reel | null>(null);
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
      left: direction * Math.min(window.innerWidth * 0.82, 760),
      behavior: "smooth",
    });

  return (
    <>
      <div className="curated-reel-controls">
        <span><MousePointerClick size={14} /> Swipe the reel · click to play</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous videos"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next videos"><ChevronRight /></button>
        </div>
      </div>
      <div className="curated-reel-track" ref={track}>
        {items.map((item, index) => (
          <button
            className="curated-reel-card"
            key={item.code}
            onClick={() => setActive(item)}
            aria-label={`Play ${item.title}`}
          >
            <img src={`/reels/all/${item.code}.jpg`} alt={item.title} loading="lazy" />
            <span className="curated-reel-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="curated-reel-play"><Play size={22} fill="currentColor" /></span>
            <span className="curated-reel-copy">
              <small>{item.label}</small>
              <strong>{item.title}</strong>
              <em>{tone === "ai" ? <><Sparkles size={12} /> AI-enhanced edit</> : <><Film size={12} /> Trailer cut</>}</em>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="reel-modal curated-reel-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}
        >
          <div className="reel-modal-panel">
            <div className="reel-modal-head">
              <span><small>{active.label}</small><strong>{active.title}</strong></span>
              <button onClick={() => setActive(null)} aria-label="Close video"><X size={20} /></button>
            </div>
            <iframe
              src={`https://www.instagram.com/reel/${active.code}/embed/`}
              title={active.title}
              allow="autoplay; encrypted-media; picture-in-picture"
            />
            <a href={`https://www.instagram.com/reel/${active.code}/`} target="_blank" rel="noreferrer">
              Open reel on Instagram <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function CuratedReelSections() {
  return (
    <>
      <section className="curated-reel-section ai-reel-section" id="ai-reels" data-reveal>
        <div className="curated-reel-head">
          <div>
            <p className="kicker"><Bot size={15} /> 01A / AI Reels</p>
            <h2>Ideas that<br /><em>break reality.</em></h2>
          </div>
          <div className="curated-reel-summary">
            <WandSparkles />
            <p>AI-assisted concepts, playful world-building and branded visual experiments—edited for attention, surprise and shareability.</p>
            <span>{aiReels.length} selected AI edits</span>
          </div>
        </div>
        <ReelCollection items={aiReels} tone="ai" />
      </section>

      <section className="curated-reel-section trailer-reel-section" id="trailer-edits" data-reveal>
        <div className="trailer-frame" aria-hidden="true"><span>PREVIEW</span><i /><span>COMING UP</span><i /><span>PLAY</span></div>
        <div className="curated-reel-head">
          <div>
            <p className="kicker"><Clapperboard size={15} /> 01B / Trailer Edits</p>
            <h2>Hook them<br /><em>before episode one.</em></h2>
          </div>
          <div className="curated-reel-summary">
            <ScanLine />
            <p>Podcast and talk-show trailers shaped around sharp cold opens, personality, tension and a reason to watch the full conversation.</p>
            <span>{trailers.length} trailer cuts</span>
          </div>
        </div>
        <ReelCollection items={trailers} tone="trailer" />
      </section>
    </>
  );
}
