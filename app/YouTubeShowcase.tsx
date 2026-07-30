"use client";

import { useEffect, useRef, useState } from "react";
import { youtubeCatalogues } from "./catalogueData";

const videos = youtubeCatalogues.flatMap((group) =>
  group.ids.map((id, index) => ({
    id,
    channel: group.channel,
    handle: group.handle,
    title: `Video ${String(index + 1).padStart(3, "0")}`,
  })),
);

export function YouTubeShowcase() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof videos)[number] | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const visible = filter === "All" ? videos : videos.filter((video) => video.channel === filter);

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
      left: direction * Math.min(window.innerWidth * 0.82, 900),
      behavior: "smooth",
    });

  return (
    <>
      <div className="youtube-filter">
        {["All", ...youtubeCatalogues.map((group) => group.channel)].map((channel) => (
          <button
            key={channel}
            className={filter === channel ? "active" : ""}
            onClick={() => {
              setFilter(channel);
              track.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            {channel}
          </button>
        ))}
      </div>
      <div className="archive-controls youtube-controls">
        <strong>{visible.length} public videos</strong>
        <span>Click any thumbnail to watch</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous videos">←</button>
          <button onClick={() => move(1)} aria-label="Next videos">→</button>
        </div>
      </div>
      <div className="youtube-track" ref={track}>
        {visible.map((video, index) => (
          <button
            className="youtube-card"
            key={video.id}
            onClick={() => setActive(video)}
          >
            <span>
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={`${video.channel} ${video.title}`}
                loading="lazy"
              />
              <i>▶</i>
            </span>
            <small>{video.channel}</small>
            <strong>{video.title}</strong>
            <em>{String(index + 1).padStart(3, "0")} / {visible.length}</em>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.channel} ${active.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="video-modal-panel">
            <div>
              <span>
                <small>{active.channel}</small>
                <strong>{active.title}</strong>
              </span>
              <button onClick={() => setActive(null)} aria-label="Close video">×</button>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              title={`${active.channel} ${active.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              href={`https://www.youtube.com/watch?v=${active.id}`}
              target="_blank"
              rel="noreferrer"
            >
              Open on YouTube ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
