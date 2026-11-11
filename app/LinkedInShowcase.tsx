"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
const posts = [
  ["Astira Capital Partners", "Annual meeting", "7525595648935800832"],
  ["Commbitz", "GlobalTix Connect", "7524676741529788417"],
  ["Commbitz", "Team spotlight: Rajesh", "7524082018943467520"],
  ["Commbitz", "Connectivity in travel", "7523625315945037824"],
  ["Commbitz", "Business travel connectivity", "7521866191133552640"],
  ["Commbitz", "Team spotlight: Arjun", "7521092174046978048"],
  ["Commbitz", "Team spotlight: Anupama", "7518910300004192256"],
  ["Doxper", "Manipal Hospital, Ranchi", "7393932168567128064"],
  ["Commbitz", "Global connectivity", "7398692890992037888"],
];
export function LinkedInShowcase() {
 const [active,setActive]=useState<string[]|null>(null); const rail=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!active)return; const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setActive(null)}; document.body.style.overflow='hidden'; window.addEventListener('keydown',onKey); return()=>{document.body.style.overflow='';window.removeEventListener('keydown',onKey)}},[active]);
 return <section className="linkedin-work" id="linkedin-posts" data-reveal><div className="linkedin-work-head"><div><p className="kicker">01C / LinkedIn work</p><h2>Ideas built to connect.</h2><p>Selected posts, carousels and videos from Commbitz, Doxper and Astira Capital Partners.</p></div><div className="linkedin-arrows"><button onClick={()=>rail.current?.scrollBy({left:-400,behavior:'smooth'})} aria-label="Previous LinkedIn posts"><ArrowLeft /></button><button onClick={()=>rail.current?.scrollBy({left:400,behavior:'smooth'})} aria-label="Next LinkedIn posts"><ArrowRight /></button></div></div><div className="linkedin-work-rail" ref={rail} tabIndex={0} aria-label="LinkedIn posts carousel">{posts.map(post=><button key={post[2]} className="linkedin-thumb" onClick={()=>setActive(post)}><img src={`/linkedin-previews/${post[2]}.jpg`} alt={`${post[0]}: ${post[1]} first image`} loading="lazy"/><span><small>{post[0]}</small><strong>{post[1]}</strong><em>View post <ArrowUpRight size={15}/></em></span></button>)}</div>{active&&<div className="linkedin-modal" role="dialog" aria-modal="true" aria-label={`${active[0]}: ${active[1]}`} onMouseDown={e=>{if(e.target===e.currentTarget)setActive(null)}}><div className="linkedin-modal-panel"><header><div><small>{active[0]}</small><strong>{active[1]}</strong></div><button onClick={()=>setActive(null)} aria-label="Close LinkedIn post"><X/></button></header><iframe src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${active[2]}`} title={`${active[0]}: ${active[1]}`} /><a href={`https://www.linkedin.com/feed/update/urn:li:activity:${active[2]}/`} target="_blank" rel="noreferrer">Open on LinkedIn <ArrowUpRight size={16}/></a></div></div>}</section>
}
