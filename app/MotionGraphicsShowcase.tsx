"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  FolderOpen,
  MousePointerClick,
  Play,
  Sparkles,
  X,
} from "lucide-react";

type MotionWorkItem = readonly [id: string, title: string];

const motionWork: readonly MotionWorkItem[] = [
  ["1PGYLfZNA_AKVSfr75M4SDIfXfHvpzL1V", "Agra Monday"],
  ["14dgn1tvR9hvKbGTCvp36jFxKJnkabQej", "Agra Bollywood Night"],
  ["14qsfd-MPSX6xQbqj9CtOIJ-qQlz0ycNN", "Bollywood Night"],
  ["1l53gZvukMnGG0TMIYpVHJEt9_Qoeal9a", "Agra Calendar"],
  ["1HdBveebFwbCFypifCIvEbd_0EWPxumn7", "Capten Story 01"],
  ["17yw4ULRYbufhba9WjN9DyrzJKGoKerCx", "Capten Story 02A"],
  ["1hAlJKSytJoicPoSAftj6BfOlJ_PJkNi5", "Capten Story 02B"],
  ["1lBTi7HxZirHXzwDADq9pwTFpnvCzbeEK", "Capten Story 03"],
  ["1NSLBMqxSBJXoPnRZBXjhFPibjVzG2gcg", "Capten Food Story"],
  ["1o3XtGnEv1XNLOC8GwT7I6D8SJc1EKKPS", "Property Mart"],
  ["1IxKCzkF4FrBFNQhS1vlA-2lHYK4qLNbB", "Corbett Calendar"],
  ["1y387HLtuiHeMTwiFmKPTGFmlNpQXVSvh", "DJ Night Party"],
  ["10cu_b9ZYl0fVoaAEiKLaniYhZ6RRCQK2", "Lord Offer Story 01"],
  ["1YR4xgTC2IqeKraJNw-zEngmbezOcNp64", "Lord Offer Story 02"],
  ["1G1NO1onQoOILXA2rJriVw-rYXMQd-LQW", "Noodle Story"],
  ["1KtywNKlb3CRrIHzKiG_qZgiri5qj_TdW", "Retro Monday — Agra"],
  ["177Owotgmf5gdr7mwH1ttkJ5JLxhebFbP", "Retro Monday — Corbett"],
  ["1drDJ6JC8pzCcCBuxqj3EYeNqKKETsgdC", "Retro Monday"],
  ["1XNH76Pg2Pbgm33MFGmzoPuGAsxg4IZob", "Social Motion Edit"],
  ["14b5L9M7Nm-c3FGeHgm8FlgB39Ia2HQRh", "Motion Design Task"],
  ["1ag5_XRzC2W9RieiMpVDKLRBug2li9bmu", "VN Motion Edit"],
];

export function MotionGraphicsShowcase() {
  const [active, setActive] = useState<(typeof motionWork)[number] | null>(null);
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
      left: direction * Math.min(window.innerWidth * 0.84, 860),
      behavior: "smooth",
    });

  return (
    <>
      <div className="archive-controls motion-controls">
        <strong><Film size={15} /> {motionWork.length} motion pieces</strong>
        <span><MousePointerClick size={14} /> Click any frame to play</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous motion graphics"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next motion graphics"><ChevronRight /></button>
        </div>
      </div>
      <div className="motion-track" ref={track}>
        {motionWork.map(([id, title], index) => (
          <button className="motion-card" key={id} onClick={() => setActive([id, title])}>
            <span className="motion-frame">
              <img
                src={`https://drive.google.com/thumbnail?id=${id}&sz=w1200`}
                alt={`${title} motion graphics preview`}
                loading="lazy"
              />
              <i><Play size={22} fill="currentColor" /></i>
              <b><Sparkles size={13} /> Motion</b>
            </span>
            <span className="motion-meta">
              <small>{String(index + 1).padStart(2, "0")} / 21</small>
              <strong>{title}</strong>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="video-modal motion-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active[1]}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="video-modal-panel">
            <div>
              <span>
                <small>Motion graphics</small>
                <strong>{active[1]}</strong>
              </span>
              <button onClick={() => setActive(null)} aria-label="Close motion video"><X size={21} /></button>
            </div>
            <iframe
              src={`https://drive.google.com/file/d/${active[0]}/preview`}
              title={`${active[1]} video`}
              allow="autoplay"
              allowFullScreen
            />
            <a
              href={`https://drive.google.com/file/d/${active[0]}/view`}
              target="_blank"
              rel="noreferrer"
            >
              <FolderOpen size={16} /> Open original video <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
