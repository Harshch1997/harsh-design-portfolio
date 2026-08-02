"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  MousePointerClick,
  PackageOpen,
  Sparkles,
  X,
} from "lucide-react";

const products = [
  {
    handle: "soaked",
    name: "Soaked",
    fullName: "Soaked Moisture Shield",
    label: "Hydrating Barrier Cream",
    detail: "5 essential ceramides · 10% NMFs",
    description:
      "A barrier-first moisturiser expressed through a warm, tactile identity—soft gradients, mineral tones and a confident clinical hierarchy.",
    url: "https://www.uslderma.com/products/soaked",
    tone: "soaked",
  },
  {
    handle: "sun-soaked",
    name: "Sun Soaked",
    fullName: "Sun Soaked Hydrating SPF 30+",
    label: "Hydration + Sun Protection",
    detail: "Broad-spectrum SPF · Ceramide care",
    description:
      "A sun-care system with a luminous, skin-toned palette that balances everyday warmth with dermatology-led credibility.",
    url: "https://www.uslderma.com/products/sun-soaked",
    tone: "sun-soaked",
  },
  {
    handle: "untan-fluid-sunscreen-spf-50",
    name: "UnTan",
    fullName: "UnTan Fluid Sunscreen SPF 50+",
    label: "Advanced Hybrid UV Filter System",
    detail: "SPF 50+ · Nano Zinc · Ceramides",
    description:
      "A high-protection pack designed with an energetic amber fade, sharp typographic contrast and unmistakable shelf presence.",
    url: "https://www.uslderma.com/products/untan-fluid-sunscreen-spf-50",
    tone: "untan",
  },
  {
    handle: "unveil-cleanser",
    name: "UnVeil",
    fullName: "UnVeil – Daily Reset Cleanser",
    label: "Daily Reset Cleanser",
    detail: "pH balanced · Fragrance free",
    description:
      "A gentle cleansing identity built around soft ivory, botanical warmth and a fluid graphic language inspired by water and renewal.",
    url: "https://www.uslderma.com/products/unveil-cleanser",
    tone: "unveil",
  },
].map((product) => ({
  ...product,
  images: Array.from(
    { length: 7 },
    (_, index) => `/usl-packaging/${product.handle}/${String(index + 1).padStart(2, "0")}.webp`,
  ),
}));

type Product = (typeof products)[number];

export function USLPackagingShowcase() {
  const [active, setActive] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current - 1 + active.images.length) % active.images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % active.images.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const openProduct = (product: Product) => {
    setActiveImage(0);
    setActive(product);
  };

  const move = (direction: number) => {
    if (!active) return;
    setActiveImage((current) =>
      (current + direction + active.images.length) % active.images.length,
    );
  };

  return (
    <>
      <section className="usl-packaging" id="usl-packaging" data-reveal>
        <div className="usl-packaging-intro">
          <p className="kicker"><PackageOpen size={15} /> 05A / USL Packaging Design</p>
          <div>
            <h2>Four essentials.<br />One beautiful system.</h2>
            <div className="usl-packaging-summary">
              <p>
                A complete packaging language for dermatologist-created skincare—warm,
                inclusive and unmistakably USL across every product touchpoint.
              </p>
              <span><Sparkles size={15} /> 4 products · 28 gallery images</span>
            </div>
          </div>
        </div>

        <div className="usl-product-stories">
          {products.map((product, index) => (
            <article className={`usl-product-story ${product.tone}`} key={product.handle}>
              <button onClick={() => openProduct(product)} aria-label={`View ${product.fullName} packaging gallery`}>
                <span className="usl-story-visual">
                  <img src={product.images[0]} alt={`${product.fullName} packaging`} loading="lazy" />
                  <img src={product.images[1]} alt="" loading="lazy" aria-hidden="true" />
                  <i><Images size={16} /> View all 7 images</i>
                </span>
                <span className="usl-story-copy">
                  <small>{String(index + 1).padStart(2, "0")} / USL Skin Essential</small>
                  <strong>{product.name}</strong>
                  <b>{product.label}</b>
                  <p>{product.description}</p>
                  <em>{product.detail}</em>
                  <span className="usl-story-cta"><MousePointerClick size={16} /> Explore packaging <ArrowUpRight size={17} /></span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="usl-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.fullName} packaging gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="usl-gallery-panel">
            <div className="usl-gallery-stage">
              <img
                src={active.images[activeImage]}
                alt={`${active.fullName} packaging image ${activeImage + 1}`}
              />
              <button className="usl-gallery-prev" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
              <button className="usl-gallery-next" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
              <span>{String(activeImage + 1).padStart(2, "0")} / 07</span>
            </div>
            <div className="usl-gallery-sidebar">
              <div className="usl-gallery-head">
                <span><small>USL Packaging Design</small><strong>{active.fullName}</strong></span>
                <button onClick={() => setActive(null)} aria-label="Close gallery"><X size={20} /></button>
              </div>
              <p>{active.description}</p>
              <div className="usl-gallery-thumbs" aria-label="Choose product image">
                {active.images.map((image, index) => (
                  <button
                    className={activeImage === index ? "active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    key={image}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
              <a href={active.url} target="_blank" rel="noreferrer">
                View product on USL Derma <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
