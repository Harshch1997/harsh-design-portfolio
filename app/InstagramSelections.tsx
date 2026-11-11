const selections = {
  reels: [
    ["ReME Sleep", "Sleep apnea awareness", "reel", "Dcz-9kFyakN"],
    ["ReME Sleep", "Sleep health", "reel", "DcC2PlfS4Mv"],
    ["Commbitz", "Thailand in November", "reel", "DfRbtp1zKzK"],
    ["Mahina", "Period care", "reel", "DMctGeqRSDW"],
    ["Nivaan Care", "Headache awareness", "reel", "DfKS70XBWGK"],
    ["OSSO", "The OSSO Podcast", "reel", "DXbzGqWEwEI"],
    ["GoQuest", "Growth architecture", "reel", "DeRvss0JVZv"],
  ],
  posts: [
    ["ReME Sleep", "Signs of poor sleep", "p", "DaSQ-CXyjB1"],
    ["ReME Sleep", "Sleep apnea and heart health", "p", "Da149-8khv-"],
    ["Commbitz", "Travel inspiration", "p", "DfXMkBkD-Nu"],
    ["Mahina", "Diwali carousel", "p", "DfedTqylHCF"],
    ["Nivaan Care", "Travel and back care", "p", "DfJVKOpkzTd"],
    ["OSSO", "Patient story", "p", "DemKkk4k-nM"],
    ["GoQuest", "GrowthOS", "p", "Deb9GkZicdI"],
    ["GoQuest", "Meet the founder", "p", "DeJ5aC4pCQM"],
  ],
};
export function InstagramSelections({ kind }: { kind: "reels" | "posts" }) {
  return <div className="instagram-selections"><div className="instagram-selections-head"><span>Selected Instagram work</span><h3>{kind === "reels" ? "More stories in motion" : "More social stories"}</h3><p>Explore the original posts and their full creative on Instagram.</p></div><div className="instagram-selection-grid">{selections[kind].map(([brand,title,type,code]) => <article key={code}><iframe title={`${brand}: ${title}`} src={`https://www.instagram.com/${type}/${code}/embed/`} loading="lazy" /><div><span>{brand}</span><strong>{title}</strong><a href={`https://www.instagram.com/${type}/${code}/`} target="_blank" rel="noreferrer">Open on Instagram ↗</a></div></article>)}</div></div>;
}
