"use client";

import { useEffect, useRef, useState } from "react";
import { driveCatalogues } from "./catalogueData";

type Collection = {
  id: keyof typeof driveCatalogues;
  number: string;
  kicker: string;
  title: string;
  description: string;
  source: string;
  tone: string;
};

const collections: Collection[] = [
  {
    id: "print",
    number: "04",
    kicker: "Print Designs",
    title: "Campaigns made tangible.",
    description:
      "The complete print-facing archive: campaign creatives, mailers, newsletters and communication pieces.",
    source:
      "https://drive.google.com/drive/folders/1Qg2Xu1e8smwU4gVpHackjyd1pDCxrWGo",
    tone: "lime",
  },
  {
    id: "packaging",
    number: "05",
    kicker: "Packaging Design",
    title: "Shelf presence, considered.",
    description:
      "Every available packaging system, label, bottle artwork and product mockup from the portfolio archive.",
    source:
      "https://drive.google.com/drive/folders/1pOYFadc5Kd6-RNgUsgTgE61a_XfqGIX0",
    tone: "peach",
  },
  {
    id: "brochures",
    number: "06",
    kicker: "Brochures & Editorial",
    title: "Information with rhythm.",
    description:
      "The complete set of brochures, leaflets, covers and editorial pages—including PDF work.",
    source:
      "https://drive.google.com/drive/folders/1GC9AeTRbuwhO4RvifsJVC7uuGp0VL2NK",
    tone: "violet",
  },
  {
    id: "listings",
    number: "07",
    kicker: "Product Listings",
    title: "Designed to convert.",
    description:
      "All marketplace and Amazon graphics, organised as one complete benefit-led ecommerce collection.",
    source:
      "https://drive.google.com/drive/folders/1FyjDUe00ll9uzrLMk63wP_VhYPyGCCaE",
    tone: "mint",
  },
  {
    id: "tshirts",
    number: "08",
    kicker: "T-shirt Design",
    title: "Ideas you can wear.",
    description:
      "Every available apparel graphic, print variation and neck-label asset from the T-shirt archive.",
    source:
      "https://drive.google.com/drive/folders/1TFnEkf3RteviNTwvPmjfHKD442QCVbZR",
    tone: "blue",
  },
];

const thumb = (id: string, size = 1000) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

function CollectionCarousel({
  collection,
  onOpen,
}: {
  collection: Collection;
  onOpen: (id: string, index: number, collection: Collection) => void;
}) {
  const track = useRef<HTMLDivElement>(null);
  const items = driveCatalogues[collection.id];
  const move = (direction: number) =>
    track.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.82, 900),
      behavior: "smooth",
    });

  return (
    <section
      className={`design-collection ${collection.tone}`}
      id={collection.id === "listings" ? "product-listing" : collection.id}
    >
      <div className="collection-head">
        <p className="kicker">
          {collection.number} / {collection.kicker}
        </p>
        <h2>{collection.title}</h2>
        <div>
          <p>{collection.description}</p>
          <a href={collection.source} target="_blank" rel="noreferrer">
            Open complete folder ↗
          </a>
        </div>
      </div>
      <div className="archive-controls">
        <strong>{items.length} artworks</strong>
        <span>Drag or use the arrows</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Previous artworks">←</button>
          <button onClick={() => move(1)} aria-label="Next artworks">→</button>
        </div>
      </div>
      <div className="collection-grid" ref={track}>
        {items.map((id, index) => (
          <button
            onClick={() => onOpen(id, index, collection)}
            key={id}
            className="collection-card"
          >
            <span className="collection-image">
              <img
                src={thumb(id)}
                alt={`${collection.kicker} artwork ${index + 1}`}
                loading="lazy"
              />
              <i>View artwork ↗</i>
            </span>
            <span className="collection-meta">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{collection.kicker} / {index + 1}</strong>
              <em>Original portfolio archive</em>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function DesignCollections() {
  const [active, setActive] = useState<{
    id: string;
    index: number;
    collection: Collection;
  } | null>(null);

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

  return (
    <>
      {collections.map((collection) => (
        <CollectionCarousel
          collection={collection}
          onOpen={(id, index, current) => setActive({ id, index, collection: current })}
          key={collection.id}
        />
      ))}

      {active && (
        <div
          className="design-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.collection.kicker} artwork ${active.index + 1}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <button
            className="lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <div className="lightbox-content">
            <img
              src={thumb(active.id, 1800)}
              alt={`${active.collection.kicker} artwork ${active.index + 1}`}
            />
            <div>
              <span>{active.collection.kicker}</span>
              <strong>Artwork {String(active.index + 1).padStart(2, "0")}</strong>
              <a
                href={`https://drive.google.com/file/d/${active.id}/view`}
                target="_blank"
                rel="noreferrer"
              >
                Open original file ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
