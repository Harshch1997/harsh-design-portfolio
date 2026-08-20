"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Captions,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  ExternalLink,
  Gauge,
  Palette,
  Play,
  Scissors,
  Volume2,
  X,
} from "lucide-react";

type Highlight = {
  id: string;
  kind: "youtube" | "instagram" | "drive";
  brand: string;
  title: string;
  format: string;
  note: string;
  craft: string[];
  thumbnail?: string;
  orientation?: "vertical" | "horizontal";
};

const highlights: Highlight[] = [
  { id: "XbcuakaDH4Q", kind: "youtube", brand: "Uncover Wellness", title: "Aging Skin: Beyond Wrinkles", format: "Under The Skin · Editorial film", note: "A polished conversation-led edit combining expert insight, strong narrative pacing, branded framing and visual continuity.", craft: ["Story", "Pacing", "Sound"], orientation: "horizontal" },
  { id: "13C5zUbIui44wsfRassA2lALviy3PEBR8", kind: "drive", brand: "Selected campaign work", title: "Campaign film · Director's cut", format: "Horizontal brand film", note: "A high-effort campaign edit with cinematic composition, controlled pacing and a polished visual finish.", craft: ["Cinematic", "Edit", "Finish"], thumbnail: "/editing-thumbs/drive-13C5zUbIui44wsfRassA2lALviy3PEBR8.jpg", orientation: "horizontal" },
  { id: "1GtZ9Jfee3iA5khSiutOeH71bW_0WW4ZG", kind: "drive", brand: "Orange Health", title: "Diagnostics, made cinematic", format: "Digital campaign film", note: "Purposeful sequencing, motion-led transitions, sound design and a complete campaign storyline.", craft: ["Story", "Grade", "Sound"], thumbnail: "/editing-thumbs/orange-health.jpg", orientation: "vertical" },
  { id: "1M066shmsHB7XfBV5axDbMRx0Z9TEV2Jo", kind: "drive", brand: "Selected social campaign", title: "Vertical campaign edit", format: "Portrait social film", note: "A mobile-first campaign cut selected for its visual pacing, layered edit and strong vertical storytelling.", craft: ["Vertical", "Rhythm", "Effects"], thumbnail: "/editing-thumbs/drive-1M066shmsHB7XfBV5axDbMRx0Z9TEV2Jo.jpg", orientation: "vertical" },
  { id: "DbIdBpaR5RS", kind: "instagram", brand: "Uncover Wellness", title: "Golf Course Road clinic film", format: "Brand launch reel", note: "A polished space-led narrative that turns a clinic walkthrough into a premium brand experience.", craft: ["Cinematic", "Motion", "Grade"], thumbnail: "/reels/all/DbIdBpaR5RS.webp" },
  { id: "Daw8tv9xTNP", kind: "instagram", brand: "Uncover Wellness", title: "Eight clinics and counting", format: "Network montage", note: "Multi-location storytelling compressed into a clear, energetic brand montage.", craft: ["Montage", "Tempo", "Story"] },
  { id: "axooKW0kP_Q", kind: "youtube", brand: "GoSharpener", title: "GoSharpener × Troovy", format: "Impact film", note: "A large-scale programme story shaped around reach, participation and measurable impact.", craft: ["Long-form", "Pacing", "Impact"] },
  { id: "1SxAB_0hnZ4", kind: "youtube", brand: "GoSharpener", title: "World Oral Health Day", format: "Impact documentary", note: "A school-led impact narrative combining scale, human moments and campaign continuity.", craft: ["Documentary", "Story", "Sound"] },
  { id: "8WX58L1BIQk", kind: "youtube", brand: "GoSharpener", title: "Sustainability School Carnival", format: "Event film", note: "An event-scale edit balancing atmosphere, programme detail and sustainability storytelling.", craft: ["Event", "Montage", "Rhythm"] },
  { id: "DasnF7Sxu80", kind: "instagram", brand: "Uncover Wellness", title: "Why celebrities age differently", format: "Editorial social story", note: "A curiosity-led hook carried through a structured expert narrative and confident pacing.", craft: ["Hook", "Narrative", "Captions"] },
  { id: "DYE5RdePo0Q", kind: "instagram", brand: "Uncover Wellness × Kritikka", title: "Brides & bridesmaids", format: "Influencer campaign reel", note: "Lifestyle-led campaign editing with a strong opening, talent pacing and platform-native energy.", craft: ["Talent", "Lifestyle", "Tempo"] },
  { id: "DaFyEXUKKQx", kind: "instagram", brand: "Uncover Hair", title: "Hardik Pandya hair story", format: "Celebrity-led explainer", note: "A recognisable cultural reference shaped into a sharp hair-restoration narrative.", craft: ["Story", "Hook", "Graphics"] },
  { id: "DaDFBLKKf7p", kind: "instagram", brand: "Uncover Hair", title: "Arjun's camera-ready transformation", format: "Transformation reel", note: "Character-led transformation storytelling with a clean problem-to-solution progression.", craft: ["Character", "Pacing", "Reveal"] },
  { id: "DWE2vuZCkRV", kind: "instagram", brand: "GoSharpener", title: "School transformation story", format: "Social impact reel", note: "Impact-first editing built from school moments, campaign scale and an uplifting arc.", craft: ["Impact", "Montage", "Emotion"] },
  { id: "DWDulWdimdu", kind: "instagram", brand: "GoSharpener", title: "Partnership in action", format: "Social impact reel", note: "A partnership story cut for clarity, momentum and credible social impact.", craft: ["Story", "Continuity", "Rhythm"] },
  { id: "DWbiApCE4C7", kind: "instagram", brand: "GoSharpener", title: "World Oral Health campaign", format: "School campaign reel", note: "Fast, youth-focused event storytelling with a clear educational message.", craft: ["Campaign", "Tempo", "Message"] },
  { id: "DazhCufOeus", kind: "instagram", brand: "Uncover Wellness", title: "Fire & Ice Facial", format: "Treatment campaign reel", note: "Temperature contrast, treatment detail and premium pacing create a memorable service story.", craft: ["Contrast", "Product", "Finish"] },
  { id: "DasQjq-Rkov", kind: "instagram", brand: "Uncover Wellness", title: "When science steps in", format: "Science-led brand reel", note: "Technical skincare information translated into a clear, confident social narrative.", craft: ["Science", "Graphics", "Captions"] },
  { id: "DazfIscRqz8", kind: "instagram", brand: "Uncover Hair", title: "Hair confidence restored", format: "Emotive treatment reel", note: "A human-centred edit connecting diagnosis, treatment and restored confidence.", craft: ["Emotion", "Story", "Pacing"], thumbnail: "/reels/all/DazfIscRqz8.webp" },
  { id: "DWHYedIkxko", kind: "instagram", brand: "Yuomo Men", title: "Why belly fat won't budge", format: "Men's wellness explainer", note: "A direct problem-first hook supported by fast educational pacing and clear visual emphasis.", craft: ["Hook", "Explainer", "Tempo"] },
  { id: "DWElnrZk2aJ", kind: "instagram", brand: "Yuomo Men", title: "The GLP-1 gap", format: "Medical explainer reel", note: "A complex topic simplified through structured captions, visual hierarchy and concise pacing.", craft: ["Graphics", "Hierarchy", "Clarity"] },
  { id: "DWMkDyAk8r2", kind: "instagram", brand: "Yuomo Men", title: "Hair fall warning signs", format: "Awareness reel", note: "Symptoms build in sequence to create urgency and a strong diagnostic storyline.", craft: ["Build", "Captions", "Story"] },
  { id: "DaIGTXcsF5F", kind: "instagram", brand: "Uncover Transform", title: "What rapid weight loss leaves behind", format: "Transformation explainer", note: "A dramatic premise developed through a considered health and body-transformation narrative.", craft: ["Narrative", "Reveal", "Clarity"] },
  { id: "DaF0HaeRAAb", kind: "instagram", brand: "Uncover Transform", title: "Are you cheating with cake?", format: "Humour-led social reel", note: "Conversational humour and quick timing make a sustainable-weight-loss message approachable.", craft: ["Humour", "Timing", "Hook"] },
  { id: "Da5ifsaNZGY", kind: "instagram", brand: "Uncover Transform", title: "Weight-loss aids: worth it?", format: "Educational reel", note: "Multiple myths organised into a concise comparison with clean caption hierarchy.", craft: ["Explainer", "Captions", "Pacing"], thumbnail: "/reels/all/Da5ifsaNZGY.webp" },
  { id: "DasQOWSqt5i", kind: "instagram", brand: "Uncover Hair", title: "Minoxidil isn't for everyone", format: "Clinical awareness reel", note: "A caution-led hook shaped into a measured, informative treatment story.", craft: ["Hook", "Education", "Finish"] },
  { id: "DZ7hJMbKyS4", kind: "instagram", brand: "Uncover Hair", title: "Normalising hair treatment", format: "Social awareness reel", note: "A relatable comparison builds acceptance through repetition, rhythm and reassuring messaging.", craft: ["Message", "Rhythm", "Story"] },
  { id: "DaP9hnzmNrl", kind: "instagram", brand: "Uncover Hair", title: "For every scalp and every story", format: "Doctors' Day carousel film", note: "A tribute-led sequence balancing people, purpose and warm brand storytelling.", craft: ["Tribute", "Sequence", "Emotion"] },
  { id: "DasQ2jQxdWI", kind: "instagram", brand: "Uncover Wellness", title: "Break the shaving cycle", format: "Service campaign post", note: "A crisp pain-point-to-solution concept built for immediate campaign comprehension.", craft: ["Concept", "Message", "Design"] },
  { id: "RTbvq99VrNE", kind: "youtube", brand: "Uncover Wellness", title: "Under The Skin", format: "Editorial health story", note: "Expert conversation balanced with branded framing and narrative clarity.", craft: ["Story", "Pacing", "Sound"] },
  { id: "AjUfyDF-YNk", kind: "youtube", brand: "My Elyara", title: "The filler that wakes collagen", format: "Branded explainer", note: "Subject-led storytelling supported by clean graphics, controlled colour and an educational arc.", craft: ["Graphics", "Colour", "Narrative"] },
  { id: "hoVh-oKvOiQ", kind: "youtube", brand: "The Original You Show", title: "Govinda Genes & Finding His Own Voice", format: "Long-form podcast edit", note: "Conversation shaped through reaction cuts, editorial pacing and visual continuity.", craft: ["Podcast", "Continuity", "Pacing"] },
  { id: "yqnlxg3_Kqk", kind: "youtube", brand: "Uncover Wellness", title: "Advanced Microneedling", format: "YouTube short", note: "A concise treatment story with mobile-first framing and polished caption hierarchy.", craft: ["Short-form", "Captions", "Finish"] },
  { id: "DbFhqF8R-q8", kind: "instagram", brand: "Uncover Wellness", title: "Culture-led social edit", format: "Vertical campaign reel", note: "A fast hook, purposeful captions and trend-aware pacing built for repeat viewing.", craft: ["Hook", "Captions", "Rhythm"], thumbnail: "/reels/all/DbFhqF8R-q8.webp" },
  { id: "DbTG2y5R2W0", kind: "instagram", brand: "Uncover Wellness", title: "Treatment transformation", format: "Vertical social edit", note: "A clear visual progression with energetic cuts and an immediate platform-native opening.", craft: ["Effects", "Tempo", "Story"], thumbnail: "/reels/all/DbTG2y5R2W0.webp" },
];

const getThumbnail = (item: Highlight) =>
  item.thumbnail ?? (item.kind === "drive"
    ? "/editing-thumbs/orange-health.jpg"
    : item.kind === "instagram"
      ? `/editing-thumbs/${item.id}.jpg`
      : `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`);

const getEmbed = (item: Highlight) => {
  if (item.kind === "youtube") return `https://www.youtube.com/embed/${item.id}?autoplay=1`;
  if (item.kind === "drive") return `https://drive.google.com/file/d/${item.id}/preview`;
  return `https://www.instagram.com/p/${item.id}/embed/`;
};

const getOriginal = (item: Highlight) => {
  if (item.kind === "youtube") return `https://www.youtube.com/watch?v=${item.id}`;
  if (item.kind === "drive") return `https://drive.google.com/file/d/${item.id}/view`;
  return `https://www.instagram.com/p/${item.id}/`;
};

const isVertical = (item: Highlight) =>
  item.orientation
    ? item.orientation === "vertical"
    : item.kind === "instagram" || item.id === "yqnlxg3_Kqk";

export function VideoEditingHighlights() {
  const [active, setActive] = useState<Highlight | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  const syncProgress = () => {
    if (!rail.current) return;
    const max = rail.current.scrollWidth - rail.current.clientWidth;
    setScrollProgress(max > 0 ? (rail.current.scrollLeft / max) * 100 : 0);
  };

  const seek = (value: number) => {
    if (!rail.current) return;
    const max = rail.current.scrollWidth - rail.current.clientWidth;
    rail.current.scrollTo({ left: (value / 100) * max, behavior: "smooth" });
    setScrollProgress(value);
  };

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
        <div className="editor-cut-selection">
          <div className="editor-cut-selection-head">
            <div><Gauge size={17} /><span><strong>{String(highlights.length).padStart(2, "0")}</strong> best edits · one complete reel</span></div>
            <div>
              <button onClick={() => move(-1)} aria-label="Previous selected edits"><ChevronLeft /></button>
              <button onClick={() => move(1)} aria-label="Next selected edits"><ChevronRight /></button>
            </div>
          </div>
          <div className="editor-cut-timecode" aria-hidden="true">
            <span>00:00:00</span><i /><span>SELECTED CUTS</span><i /><span>END: 00:{String(highlights.length).padStart(2, "0")}:00</span>
          </div>
          <div className="editor-cut-rail" ref={rail} onScroll={syncProgress}>
            {highlights.map((item, index) => (
              <button
                className="editor-cut-card"
                onClick={() => setActive(item)}
                key={`${item.kind}-${item.id}`}
                aria-label={`Play ${item.title}`}
              >
                <span className="editor-cut-slate">CUT {String(index + 1).padStart(2, "0")}</span>
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
          <div className="editor-cut-progress">
            <span><strong>Explore the edit reel</strong><small>Drag, swipe or use the slider</small></span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={scrollProgress}
              onChange={(event) => seek(Number(event.target.value))}
              aria-label="Move through selected video work"
              style={{ "--progress": `${scrollProgress}%` } as CSSProperties}
            />
            <b>{Math.round(scrollProgress)}%</b>
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
          className={`video-modal editor-cut-modal ${isVertical(active) ? "is-vertical" : "is-horizontal"}`}
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
              src={getEmbed(active)}
              title={`${active.brand}: ${active.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              href={getOriginal(active)}
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
