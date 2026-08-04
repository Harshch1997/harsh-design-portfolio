"use client";

import { useEffect, useRef, useState } from "react";
import { youtubeShorts } from "./catalogueData";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MousePointerClick,
  Play,
  Smartphone,
  TvMinimalPlay,
  X,
} from "lucide-react";

export function YouTubeShortsShowcase() {
  const [active, setActive] = useState<(typeof youtubeShorts)[number] | null>(null);
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
      left: direction * Math.min(window.innerWidth * 0.76, 760),
      behavior: "smooth",
    });

  return (
    <section className="youtube-shorts-section" id="youtube-shorts" data-reveal>
      <div className="youtube-shorts-head">
        <p className="kicker"><Smartphone size={15} /> 02A / YouTube Shorts</p>
        <h2>Short stories.<br />Sharp impact.</h2>
        <div>
          <p>
            Vertical edits for Uncover Wellness—turning dermatologist insight,
            patient stories and treatment education into quick, high-retention narratives.
          </p>
          <a href="https://www.youtube.com/@UncoverWellness/shorts" target="_blank" rel="noreferrer">
            Visit Shorts channel <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <div className="youtube-shorts-controls">
        <strong><TvMinimalPlay size={16} /> {youtubeShorts.length} YouTube Shorts</strong>
        <span><MousePointerClick size={14} /> Tap any Short to watch</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous YouTube Shorts"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next YouTube Shorts"><ChevronRight /></button>
        </div>
      </div>

      <div className="youtube-shorts-track" ref={track}>
        {youtubeShorts.map((short, index) => (
          <button className="youtube-short-card" key={short.id} onClick={() => setActive(short)}>
            <span className="youtube-short-poster">
              <img
                src={`https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`}
                alt={`Uncover Wellness Short: ${short.title}`}
                loading="lazy"
              />
              <i><Play size={22} fill="currentColor" /></i>
              <b>{String(index + 1).padStart(2, "0")}</b>
            </span>
            <small>Uncover Wellness · Short</small>
            <strong>{short.title}</strong>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="video-modal shorts-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Uncover Wellness Short: ${active.title}`}
          onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}
        >
          <div className="video-modal-panel shorts-modal-panel">
            <div>
              <span>
                <small>Uncover Wellness · YouTube Short</small>
                <strong>{active.title}</strong>
              </span>
              <button onClick={() => setActive(null)} aria-label="Close YouTube Short"><X size={21} /></button>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              title={`Uncover Wellness Short: ${active.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a href={`https://www.youtube.com/shorts/${active.id}`} target="_blank" rel="noreferrer">
              <TvMinimalPlay size={16} /> Open Short on YouTube <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
