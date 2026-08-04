"use client";

import { useEffect, useRef, useState } from "react";
import { youtubeCatalogues } from "./catalogueData";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Headphones,
  Mic2,
  MousePointerClick,
  Play,
  Video,
  X,
  TvMinimalPlay,
} from "lucide-react";

const allVideos = youtubeCatalogues.flatMap((group) =>
  group.ids.map((id, index) => ({
    id,
    channel: group.channel,
    handle: group.handle,
    title: group.titles?.[index] ?? `Video ${String(index + 1).padStart(3, "0")}`,
  })),
);

const podcastIds = new Set([
  "RTbvq99VrNE",
  "voSM-iCHeFg",
  "GPzpXyRHUb8",
  "Vz2wqRwpZGk",
  "CA2nl0PrL_8",
  "hoVh-oKvOiQ",
  "pNFfK-W7nXE",
]);

const podcasts = allVideos.filter((video) => podcastIds.has(video.id));
const videos = allVideos.filter((video) => !podcastIds.has(video.id));
const videoChannels = ["All", ...new Set(videos.map((video) => video.channel))];

export function YouTubeShowcase() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof allVideos)[number] | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const podcastTrack = useRef<HTMLDivElement>(null);
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

  const movePodcasts = (direction: number) =>
    podcastTrack.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.82, 900),
      behavior: "smooth",
    });

  return (
    <>
      <div className="youtube-filter">
        {videoChannels.map((channel) => (
          <button
            key={channel}
            className={filter === channel ? "active" : ""}
            onClick={() => {
              setFilter(channel);
              track.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            {channel === "All" && <TvMinimalPlay size={14} />}
            {channel}
          </button>
        ))}
      </div>
      <div className="archive-controls youtube-controls">
        <strong><Video size={15} /> {visible.length} selected videos</strong>
        <span><MousePointerClick size={14} /> Click any thumbnail to watch</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous videos"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next videos"><ChevronRight /></button>
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
              <i><Play size={22} fill="currentColor" /></i>
            </span>
            <small>{video.channel}</small>
            <strong>{video.title}</strong>
            <em>{String(index + 1).padStart(3, "0")} / {visible.length}</em>
          </button>
        ))}
      </div>

      <div className="podcast-subsection" id="podcasts">
        <div className="podcast-subsection-head">
          <div>
            <p className="kicker"><Mic2 size={15} /> Podcast production</p>
            <h3>Podcasts &amp;<br />conversations.</h3>
          </div>
          <p>
            Long-form interview edits, branded conversation formats and visual
            storytelling for The Original You Show and Uncover Wellness.
          </p>
        </div>
        <div className="archive-controls podcast-controls">
          <strong><Headphones size={15} /> {podcasts.length} podcast episodes</strong>
          <span><MousePointerClick size={14} /> Click any episode to watch</span>
          <div>
            <button onClick={() => movePodcasts(-1)} aria-label="Previous podcasts"><ChevronLeft /></button>
            <button onClick={() => movePodcasts(1)} aria-label="Next podcasts"><ChevronRight /></button>
          </div>
        </div>
        <div className="youtube-track podcast-track" ref={podcastTrack}>
          {podcasts.map((podcast, index) => (
            <button
              className="youtube-card podcast-card"
              key={podcast.id}
              onClick={() => setActive(podcast)}
            >
              <span>
                <img
                  src={`https://i.ytimg.com/vi/${podcast.id}/hqdefault.jpg`}
                  alt={`${podcast.channel} podcast: ${podcast.title}`}
                  loading="lazy"
                />
                <i><Play size={22} fill="currentColor" /></i>
                <b><Mic2 size={13} /> Podcast</b>
              </span>
              <small>{podcast.channel}</small>
              <strong>{podcast.title}</strong>
              <em>{String(index + 1).padStart(2, "0")} / {podcasts.length}</em>
            </button>
          ))}
        </div>
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
              <button onClick={() => setActive(null)} aria-label="Close video"><X size={21} /></button>
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
              <TvMinimalPlay size={16} /> Open on YouTube <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
