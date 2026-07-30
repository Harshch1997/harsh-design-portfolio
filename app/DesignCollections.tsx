"use client";

import { useEffect, useState } from "react";

type DesignItem = {
  title: string;
  image: string;
  detail: string;
};

type Collection = {
  id: string;
  number: string;
  kicker: string;
  title: string;
  description: string;
  source: string;
  tone: string;
  items: DesignItem[];
};

const collections: Collection[] = [
  {
    id: "packaging",
    number: "04",
    kicker: "Packaging Design",
    title: "Shelf presence, considered.",
    description:
      "Packaging systems, labels and product mockups shaped to feel clear, credible and recognisable at a glance.",
    source:
      "https://drive.google.com/drive/folders/1pOYFadc5Kd6-RNgUsgTgE61a_XfqGIX0",
    tone: "peach",
    items: [
      {
        title: "Apple Cider Shampoo",
        image: "/drive/packaging/apple-cider-shampoo.webp",
        detail: "Bottle identity · Label design",
      },
      {
        title: "Men’s Face Cream",
        image: "/drive/packaging/face-cream-mockup.webp",
        detail: "Packaging system · Product mockup",
      },
      {
        title: "Natural Care Range",
        image: "/drive/packaging/product-mockup.webp",
        detail: "Range architecture · Packaging",
      },
      {
        title: "Sun Protection",
        image: "/drive/packaging/sun-cream.webp",
        detail: "Label design · Product visualisation",
      },
    ],
  },
  {
    id: "brochures",
    number: "05",
    kicker: "Brochures & Editorial",
    title: "Information with rhythm.",
    description:
      "Brochures, leaflets and editorial layouts that organise dense information into confident visual stories.",
    source:
      "https://drive.google.com/drive/folders/1GC9AeTRbuwhO4RvifsJVC7uuGp0VL2NK",
    tone: "violet",
    items: [
      {
        title: "Business Solutions",
        image: "/drive/brochures/front-back-cover.webp",
        detail: "Corporate brochure · Front & back",
      },
      {
        title: "SAS Hyundai",
        image: "/drive/brochures/hyundai.webp",
        detail: "Performance communication · Editorial",
      },
      {
        title: "Healthvaidya",
        image: "/drive/brochures/leaflet.webp",
        detail: "Product leaflet · Information design",
      },
      {
        title: "Brand Overview",
        image: "/drive/brochures/page-one.webp",
        detail: "Brochure cover · Layout design",
      },
    ],
  },
  {
    id: "product-listing",
    number: "06",
    kicker: "Product Listings",
    title: "Designed to convert.",
    description:
      "Amazon and marketplace graphics that turn product benefits, trust signals and features into quick purchase decisions.",
    source:
      "https://drive.google.com/drive/folders/1FyjDUe00ll9uzrLMk63wP_VhYPyGCCaE",
    tone: "mint",
    items: [
      {
        title: "Aloe Vera Gel",
        image: "/drive/product-listing/aloe-vera.webp",
        detail: "Marketplace listing · Trust credentials",
      },
      {
        title: "Ashwagandha",
        image: "/drive/product-listing/ashwagandha.webp",
        detail: "Benefit-led product listing",
      },
      {
        title: "Men’s Face Wash",
        image: "/drive/product-listing/mens-face-wash.webp",
        detail: "Marketplace listing · Product claims",
      },
      {
        title: "Sun Cream SPF 50",
        image: "/drive/product-listing/sun-cream.webp",
        detail: "Feature-led ecommerce creative",
      },
    ],
  },
  {
    id: "tshirts",
    number: "07",
    kicker: "T-shirt Design",
    title: "Ideas you can wear.",
    description:
      "Expressive apparel graphics that balance bold type, personality and print-ready simplicity.",
    source:
      "https://drive.google.com/drive/folders/1TFnEkf3RteviNTwvPmjfHKD442QCVbZR",
    tone: "blue",
    items: [
      {
        title: "Your Only Limit",
        image: "/drive/tshirts/design-01.webp",
        detail: "Motivational graphic · Apparel",
      },
      {
        title: "Yay Fridays",
        image: "/drive/tshirts/design-02.webp",
        detail: "Typography · Casual apparel",
      },
      {
        title: "Insta Queen — Black",
        image: "/drive/tshirts/design-03.webp",
        detail: "Lettering · Fashion graphic",
      },
      {
        title: "Insta Queen — White",
        image: "/drive/tshirts/design-04.webp",
        detail: "Colourway · Fashion graphic",
      },
    ],
  },
];

export function DesignCollections() {
  const [active, setActive] = useState<{
    item: DesignItem;
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
        <section
          className={`design-collection ${collection.tone}`}
          id={collection.id}
          key={collection.id}
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
          <div className="collection-grid">
            {collection.items.map((item, index) => (
              <button
                onClick={() => setActive({ item, collection })}
                key={item.image}
                className="collection-card"
              >
                <span className="collection-image">
                  <img src={item.image} alt={item.title} />
                  <i>View full size ↗</i>
                </span>
                <span className="collection-meta">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{item.title}</strong>
                  <em>{item.detail}</em>
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      {active && (
        <div
          className="design-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.item.title}
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
            <img src={active.item.image} alt={active.item.title} />
            <div>
              <span>{active.collection.kicker}</span>
              <strong>{active.item.title}</strong>
              <p>{active.item.detail}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
