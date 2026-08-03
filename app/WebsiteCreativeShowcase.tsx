"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  LayoutPanelTop,
  MousePointerClick,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

type Brand = "Vyamès" | "House of Skad";
type Filter = "All" | Brand;

type Creative = {
  title: string;
  brand: Brand;
  image: string;
  source: string;
  kind: "Product image" | "Website banner";
};

const productImages: Creative[] = [
  { title: "Transit Campaign Look 01", brand: "Vyamès", image: "/website-creative/vyames/products/transit-look-01.png", source: "https://vyames.com/", kind: "Product image" },
  { title: "Transit Campaign Look 02", brand: "Vyamès", image: "/website-creative/vyames/products/transit-look-02.png", source: "https://vyames.com/", kind: "Product image" },
  { title: "Sketchbook Top", brand: "Vyamès", image: "/website-creative/vyames/products/sketchbook-top.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Receipt Vest", brand: "Vyamès", image: "/website-creative/vyames/products/receipt-vest.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Summer Sage Dress", brand: "Vyamès", image: "/website-creative/vyames/products/sage-dress.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Stamp Denim", brand: "Vyamès", image: "/website-creative/vyames/products/stamp-denim.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Hidden Deal Denim", brand: "Vyamès", image: "/website-creative/vyames/products/hidden-deal-denim.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Racer Top", brand: "Vyamès", image: "/website-creative/vyames/products/racer-top.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Signature Shirt — White", brand: "Vyamès", image: "/website-creative/vyames/products/signature-shirt-white.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Signature Shirt — Pink", brand: "Vyamès", image: "/website-creative/vyames/products/signature-shirt-pink.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Nomad Pocket", brand: "Vyamès", image: "/website-creative/vyames/products/nomad-pocket.webp", source: "https://vyames.com/", kind: "Product image" },
  { title: "Leather Wine Bag", brand: "Vyamès", image: "/website-creative/vyames/products/leather-wine-bag.png", source: "https://vyames.com/", kind: "Product image" },
  { title: "Canvas Tee — Black", brand: "House of Skad", image: "/website-creative/house-of-skad/products/canvas-tee-black.png", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Canvas Tee — White", brand: "House of Skad", image: "/website-creative/house-of-skad/products/canvas-tee-white.png", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Eclipse Summer Shacket", brand: "House of Skad", image: "/website-creative/house-of-skad/products/eclipse-shacket.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Sol Quarter-Zip Shirt", brand: "House of Skad", image: "/website-creative/house-of-skad/products/sol-shirt.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Helios Printed Shirt", brand: "House of Skad", image: "/website-creative/house-of-skad/products/helios-shirt.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Atlas Half-Sleeve Shirt", brand: "House of Skad", image: "/website-creative/house-of-skad/products/atlas-shirt.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Paradox Mini Dress", brand: "House of Skad", image: "/website-creative/house-of-skad/products/paradox-dress.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Medusa Halter Top", brand: "House of Skad", image: "/website-creative/house-of-skad/products/medusa-top.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Nyx Trousers", brand: "House of Skad", image: "/website-creative/house-of-skad/products/nyx-trousers.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Athena Waistcoat", brand: "House of Skad", image: "/website-creative/house-of-skad/products/athena-waistcoat.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Elysian Shirt", brand: "House of Skad", image: "/website-creative/house-of-skad/products/elysian-shirt.jpg", source: "https://houseofskad.com/", kind: "Product image" },
  { title: "Siren Corset", brand: "House of Skad", image: "/website-creative/house-of-skad/products/siren-corset.jpg", source: "https://houseofskad.com/", kind: "Product image" },
];

const bannerImages: Creative[] = [
  { title: "Vyamès Homepage Campaign", brand: "Vyamès", image: "/website-creative/vyames/banners/vyames-home.jpg", source: "https://vyames.com/", kind: "Website banner" },
  { title: "Vyamès Editorial Story", brand: "Vyamès", image: "/website-creative/vyames/banners/vyames-editorial-01.jpg", source: "https://vyames.com/", kind: "Website banner" },
  { title: "Vyamès Portrait Campaign 01", brand: "Vyamès", image: "/website-creative/vyames/banners/vyames-editorial-02.jpg", source: "https://vyames.com/", kind: "Website banner" },
  { title: "Vyamès Portrait Campaign 02", brand: "Vyamès", image: "/website-creative/vyames/banners/vyames-editorial-03.webp", source: "https://vyames.com/", kind: "Website banner" },
  { title: "SKAD New Collection", brand: "House of Skad", image: "/website-creative/house-of-skad/banners/skad-top-banner.jpg", source: "https://houseofskad.com/", kind: "Website banner" },
  { title: "SKAD Editorial Campaign 01", brand: "House of Skad", image: "/website-creative/house-of-skad/banners/skad-editorial-01.jpg", source: "https://houseofskad.com/", kind: "Website banner" },
  { title: "SKAD Editorial Campaign 02", brand: "House of Skad", image: "/website-creative/house-of-skad/banners/skad-editorial-02.jpg", source: "https://houseofskad.com/", kind: "Website banner" },
  { title: "SKAD Collection Banner", brand: "House of Skad", image: "/website-creative/house-of-skad/banners/skad-banner-02.jpg", source: "https://houseofskad.com/", kind: "Website banner" },
  { title: "SKAD Mobile Campaign", brand: "House of Skad", image: "/website-creative/house-of-skad/banners/skad-home.webp", source: "https://houseofskad.com/", kind: "Website banner" },
];

function BrandFilter({ value, onChange }: { value: Filter; onChange: (filter: Filter) => void }) {
  return (
    <div className="web-creative-filters" aria-label="Filter by brand">
      {(["All", "Vyamès", "House of Skad"] as Filter[]).map((filter) => (
        <button className={value === filter ? "active" : ""} onClick={() => onChange(filter)} key={filter}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export function WebsiteCreativeShowcase() {
  const [productFilter, setProductFilter] = useState<Filter>("All");
  const [bannerFilter, setBannerFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Creative | null>(null);
  const productRail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [active]);

  const products = productFilter === "All" ? productImages : productImages.filter((item) => item.brand === productFilter);
  const banners = bannerFilter === "All" ? bannerImages : bannerImages.filter((item) => item.brand === bannerFilter);
  const scrollProducts = (direction: number) => productRail.current?.scrollBy({ left: direction * 720, behavior: "smooth" });

  return (
    <>
      <section className="web-products-section" id="website-products" data-reveal>
        <div className="web-creative-head">
          <div>
            <p className="kicker"><ShoppingBag size={15} /> 02D / Website Product Images</p>
            <h2>Products styled<br />to stop the scroll.</h2>
          </div>
          <div className="web-creative-intro">
            <p>Art direction and ecommerce imagery created for two fashion storefronts—from clean product presentation to expressive editorial styling.</p>
            <span><Sparkles size={15} /> {productImages.length} selected product images</span>
          </div>
        </div>

        <div className="web-creative-toolbar">
          <BrandFilter value={productFilter} onChange={setProductFilter} />
          <div className="web-creative-arrows">
            <button onClick={() => scrollProducts(-1)} aria-label="Previous product images"><ChevronLeft /></button>
            <button onClick={() => scrollProducts(1)} aria-label="Next product images"><ChevronRight /></button>
          </div>
        </div>

        <div className="web-product-rail" ref={productRail}>
          {products.map((item, index) => (
            <button className="web-product-card" onClick={() => setActive(item)} key={item.image}>
              <span className="web-product-image">
                <img src={item.image} alt={`${item.title} for ${item.brand}`} loading="lazy" />
                <i><MousePointerClick size={15} /> Open image</i>
              </span>
              <span className="web-product-meta">
                <small>{item.brand} · {String(index + 1).padStart(2, "0")}</small>
                <strong>{item.title}</strong>
                <ArrowUpRight size={19} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="web-banners-section" id="website-banners" data-reveal>
        <div className="web-banner-titlebar">
          <div>
            <p className="kicker"><LayoutPanelTop size={15} /> 02E / Website Banner Images</p>
            <h2>Campaign worlds,<br />built wide.</h2>
          </div>
          <div>
            <p>Homepage heroes, collection launches and editorial campaign frames designed to set the tone before the first scroll.</p>
            <BrandFilter value={bannerFilter} onChange={setBannerFilter} />
          </div>
        </div>

        <div className="web-banner-grid">
          {banners.map((item, index) => (
            <button className={`web-banner-card banner-${(index % 5) + 1}`} onClick={() => setActive(item)} key={item.image}>
              <img src={item.image} alt={`${item.title} for ${item.brand}`} loading="lazy" />
              <span className="web-banner-shade" />
              <span className="web-banner-label">
                <small>{item.brand} · Website campaign</small>
                <strong>{item.title}</strong>
              </span>
              <i><Images size={16} /> Expand</i>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="web-creative-modal" role="dialog" aria-modal="true" aria-label={`${active.title} preview`} onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
          <div className="web-creative-modal-panel">
            <button className="web-creative-modal-close" onClick={() => setActive(null)} aria-label="Close image preview"><X /></button>
            <div className="web-creative-modal-image"><img src={active.image} alt={`${active.title} for ${active.brand}`} /></div>
            <div className="web-creative-modal-copy">
              <small>{active.kind} · {active.brand}</small>
              <strong>{active.title}</strong>
              <a href={active.source} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
