"use client";
const previewExtensions: Record<string,string> = {"Dcz-9kFyakN":".jpg","DcC2PlfS4Mv":".jpg","Da149-8khv-":".webp","DaSQ-CXyjB1":".webp","DfXMkBkD-Nu":".jpg","DfRbtp1zKzK":".jpg","DMctGeqRSDW":".jpg","DfedTqylHCF":".jpg","DfJVKOpkzTd":".jpg","DfKS70XBWGK":".jpg","DXbzGqWEwEI":".jpg","DemKkk4k-nM":".jpg","Deb9GkZicdI":".jpg","DeJ5aC4pCQM":".jpg","DeRvss0JVZv":".jpg"};

import { useEffect, useRef, useState } from "react";
import { instagramPostCatalogues } from "./catalogueData";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  ExternalLink,
  GalleryHorizontalEnd,
  Image as ImageIcon,
  Layers3,
  MousePointerClick,
  X,
} from "lucide-react";

const newPosts = [
  ["ReME Sleep", "Signs of poor sleep", "DaSQ-CXyjB1", 1], ["ReME Sleep", "Sleep apnea and heart health", "Da149-8khv-", 0],
  ["Commbitz", "Travel inspiration", "DfXMkBkD-Nu", 0], ["Mahina", "Diwali carousel", "DfedTqylHCF", 0],
  ["Nivaan Care", "Travel and back care", "DfJVKOpkzTd", 0], ["OSSO", "Patient story", "DemKkk4k-nM", 0],
  ["GoQuest", "GrowthOS", "Deb9GkZicdI", 0], ["GoQuest", "Meet the founder", "DeJ5aC4pCQM", 1],
].map(([brand,title,code,slides]) => ({brand: brand as string, title: title as string, code: code as string, slides: slides as number, image: `/social-previews/${code}${previewExtensions[code as string]}`, accent: "#d7ff35"}));
const posts = [...newPosts, ...instagramPostCatalogues.flatMap((group) =>
  group.posts.map((post, index) => ({
    ...post,
    brand: group.brand,
    accent: group.accent,
    title: post.slides !== 1 ? `Carousel ${String(index + 1).padStart(2, "0")}` : `Static Post ${String(index + 1).padStart(2, "0")}`,
  })),
)];

export function StaticPostShowcase() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof posts)[number] | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const visible = filter === "All" ? posts : posts.filter((post) => post.brand === filter);

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

  const move = (direction: number) =>
    track.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.82, 800),
      behavior: "smooth",
    });

  return (
    <>
      <div className="post-filter">
        {["All", ...new Set(posts.map((post) => post.brand))].map((brand) => (
          <button
            key={brand}
            className={filter === brand ? "active" : ""}
            onClick={() => {
              setFilter(brand);
              track.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            {brand === "All" && <GalleryHorizontalEnd size={14} />}
            {brand}
          </button>
        ))}
      </div>
      <div className="archive-controls post-controls">
        <strong><Layers3 size={15} /> {visible.length} static &amp; carousel posts</strong>
        <span><MousePointerClick size={14} /> Click a carousel to browse every slide</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous posts"><ChevronLeft /></button>
          <button onClick={() => move(1)} aria-label="Next posts"><ChevronRight /></button>
        </div>
      </div>
      <div className="post-track" ref={track}>
        {visible.map((post, index) => (
          <button
            className="post-card"
            onClick={() => setActive(post)}
            key={`${post.brand}-${post.code}`}
            style={{ "--post-accent": post.accent } as React.CSSProperties}
          >
            <span className="post-image">
              {post.image === "" ? <span className="social-card-placeholder"><Camera size={28} /><strong>{post.brand}</strong><small>{post.slides === 1 ? "Instagram post" : "Instagram carousel"}</small></span> : <img src={post.image ?? `/posts/${post.code}.webp`} alt={`${post.brand}: ${post.title}`} loading="lazy" />}
              <i>{post.slides > 1 ? <><Layers3 size={13} /> {post.slides} slides</> : post.slides === 0 ? <><Layers3 size={13} /> Carousel</> : <><ImageIcon size={13} /> Static</>}</i>
              <b aria-hidden="true">{post.slides !== 1 ? <Layers3 size={17} /> : <Camera size={17} />}</b>
            </span>
            <span className="post-meta">
              <small>{String(index + 1).padStart(2, "0")} / {post.brand}</small>
              <strong>{post.title}</strong>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="reel-modal post-modal"
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
              <button onClick={() => setActive(null)} aria-label="Close post"><X size={20} /></button>
            </div>
            <iframe
              src={`https://www.instagram.com/p/${active.code}/embed/`}
              title={`${active.brand} Instagram post`}
            />
            <a
              href={`https://www.instagram.com/p/${active.code}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={16} /> Open post on Instagram <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
