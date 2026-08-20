"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Captions,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  ExternalLink,
  Film,
  Gauge,
  Palette,
  Play,
  Scissors,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";

type Highlight = {
  id: string;
  kind: "youtube" | "instagram";
  brand: string;
  title: string;
  format: string;
  note: string;
  craft: string[];
  thumbnail?: string;
};

const highlights: Highlight[] = [
  {
    id: "DbFhqF8R-q8",
    kind: "instagram",
    brand: "Uncover Wellness",
    title: "Culture-led social edit",
    format: "Vertical campaign reel",
    note: "A fast hook, purposeful captions and trend-aware pacing built for repeat viewing.",
    craft: ["Hook", "Captions", "Rhythm"],
    thumbnail: "/reels/all/DbFhqF8R-q8.webp",
  },
  {
    id: "RTbvq99VrNE",
    kind: "youtube",
    brand: "Uncover Wellness",
    title: "Under The Skin",
    format: "Editorial health story",
    note: "A considered long-form cut balancing expert conversation, branded framing and narrative clarity.",
    craft: ["Story", "Pacing", "Sound"],
  },
  {
    id: "AjUfyDF-YNk",
    kind: "youtube",
    brand: "My Elyara",
    title: "The filler that wakes collagen",
    format: "Branded explainer",
    note: "Subject-led storytelling supported by clean graphics, controlled colour and an educational arc.",
    craft: ["Graphics", "Colour", "Narrative"],
  },
  {
    id: "hoVh-oKvOiQ",
    kind: "youtube",
    brand: "The Original You Show",
    title: "Govinda Genes & Finding His Own Voice",
    format: "Long-form podcast edit",
    note: "Conversation shaped into an engaging episode through editorial pacing, reaction cuts and visual continuity.",
    craft: ["Podcast", "Continuity", "Pacing"],
  },
  {
    id: "yqnlxg3_Kqk",
    kind: "youtube",
    brand: "Uncover Wellness",
    title: "Advanced Microneedling",
    format: "YouTube short",
    note: "A concise treatment story with mobile-first framing, caption hierarchy and a polished finish.",
    craft: ["Short-form", "Captions", "Finish"],
  },
  {
    id: "DbTG2y5R2W0",
    kind: "instagram",
    brand: "Uncover Wellness",
    title: "Treatment transformation",
    format: "Vertical social edit",
    note: "A clear visual progression with energetic cuts and an immediate, platform-native opening.",
    craft: ["Effects", "Tempo", "Story"],
    thumbnail: "/reels/all/DbTG2y5R2W0.webp",
  },
];

const getThumbnail = (item: Highlight) =>
  item.thumbnail ?? `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

export function VideoEditingHighlights() {
  const [active, setActive] = useState<Highlight | null>(null);
  const rail = useRef<HTMLDivElement>(null);

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
    rail.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.78, 620),
      behavior: "smooth",
    });

  return (
    <section className="editor-cut" id="editing-highlights" data-reveal>
      <div className="editor-cut-glow" aria-hidden="true" />
      <div className="editor-cut-head">
        <div>
          <p className="kicker"><Clapperboard size={15} /> Editor&apos;s cut · Selected video work</p>
          <h2>Every frame<br /><em>earns its place.</em></h2>
        </div>
        <p>
          A recruiter-ready selection of my strongest edits—chosen for story,
          visual rhythm, captions, colour and the craft behind the cut.
        </p>
      </div>

      <div className="editor-cut-stage">
        <article className="editor-cut-feature">
          <div className="editor-cut-video">
            <iframe
              src="https://drive.google.com/file/d/1GtZ9Jfee3iA5khSiutOeH71bW_0WW4ZG/preview"
              title="Orange Health digital campaign video"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
            <span className="editor-cut-feature-label"><Sparkles size={14} /> Featured film</span>
          </div>
          <div className="editor-cut-feature-copy">
            <span>Orange Health · Digital campaign</span>
            <h3>Diagnostics, made cinematic.</h3>
            <p>
              A full-funnel brand film shaped through purposeful sequencing,
              motion-led transitions, sound design and a clear visual storyline.
            </p>
            <div className="editor-cut-tags">
              <span><Scissors size={14} /> Editorial pacing</span>
              <span><Palette size={14} /> Colour grade</span>
              <span><Volume2 size={14} /> Sound design</span>
              <span><Film size={14} /> Motion</span>
            </div>
          </div>
        </article>

        <div className="editor-cut-selection">
          <div className="editor-cut-selection-head">
            <div><Gauge size={17} /><span><strong>06</strong> selected edits</span></div>
            <div>
              <button onClick={() => move(-1)} aria-label="Previous selected edits"><ChevronLeft /></button>
              <button onClick={() => move(1)} aria-label="Next selected edits"><ChevronRight /></button>
            </div>
          </div>
          <div className="editor-cut-rail" ref={rail}>
            {highlights.map((item, index) => (
              <button
                className="editor-cut-card"
                onClick={() => setActive(item)}
                key={`${item.kind}-${item.id}`}
                aria-label={`Play ${item.title}`}
              >
                <span className="editor-cut-card-image">
                  <img src={getThumbnail(item)} alt="" loading="lazy" />
                  <i><Play size={20} fill="currentColor" /></i>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </span>
                <span className="editor-cut-card-copy">
                  <small>{item.brand} · {item.format}</small>
                  <strong>{item.title}</strong>
                  <em>{item.note}</em>
                  <span>{item.craft.map((skill) => <i key={skill}>{skill}</i>)}</span>
                </span>
                <ArrowUpRight className="editor-cut-card-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="editor-cut-craft" aria-label="Video editing strengths">
        <span><Scissors /> Story-first cuts</span>
        <span><Captions /> Caption systems</span>
        <span><Palette /> Colour &amp; finish</span>
        <span><Volume2 /> Sound-led rhythm</span>
      </div>

      {active && (
        <div
          className="video-modal editor-cut-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="video-modal-panel">
            <div>
              <span><small>{active.brand} · {active.format}</small><strong>{active.title}</strong></span>
              <button onClick={() => setActive(null)} aria-label="Close video"><X size={21} /></button>
            </div>
            <iframe
              src={active.kind === "youtube"
                ? `https://www.youtube.com/embed/${active.id}?autoplay=1`
                : `https://www.instagram.com/reel/${active.id}/embed/`}
              title={`${active.brand}: ${active.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              href={active.kind === "youtube"
                ? `https://www.youtube.com/watch?v=${active.id}`
                : `https://www.instagram.com/reel/${active.id}/`}
              target="_blank"
              rel="noreferrer"
            >
              Open original <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
