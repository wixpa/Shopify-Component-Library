import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layers, ArrowRight, Clock, Star, Zap, Eye } from "lucide-react";

// ── Templates Data — 3 cards only ─────────────────────────────

const TEMPLATES = [
   {
      id: 1,
      title: "Shopify Bazzar — Starter Store",
      desc: "A minimal, blazing-fast Shopify theme built with our section library. Includes header, hero, product grid, and footer — ready to customize.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
      alt: "Shopify Starter Store Template",
      bg: "#f0f4ff",
      price: null,
      oldPrice: null,
      free: true,
      soon: false,
      tags: ["Shopify", "Liquid", "Starter"],
      path: "/templates/starter-store",
   },
   {
      id: 2,
      title: "Fashion & Apparel Store",
      desc: "Premium fashion-focused Shopify theme with announcement bar, lookbook hero, product cards, and a testimonials strip.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
      alt: "Fashion & Apparel Shopify Template",
      bg: "#fdf2f8",
      price: "$19",
      oldPrice: "$39",
      free: false,
      soon: false,
      tags: ["Shopify", "Fashion", "Lookbook"],
      path: "/templates/fashion-store",
   },
   {
      id: 3,
      title: "Beauty & Skincare Store",
      desc: "Pink-accented Shopify theme for beauty brands. Built with our skincare product cards, collection banners, and trust badges.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80&auto=format&fit=crop",
      alt: "Beauty & Skincare Shopify Template",
      bg: "#fff7f0",
      price: null,
      oldPrice: null,
      free: false,
      soon: true,
      tags: ["Shopify", "Beauty", "Skincare"],
      path: null,
   },
];

// ── Tailwind Classes ───────────────────────────────────────────

const section =
   "bg-[#f9fafb] border-t border-[#e5e7eb] pt-14 pb-20 lg:pt-16 lg:pb-28";
const container = "max-w-[1280px] mx-auto px-6";

const sectionHeader = "text-center mb-12";
const eyebrow =
   "inline-flex items-center gap-2 bg-[rgba(124,58,237,0.07)] border border-[rgba(124,58,237,0.15)] rounded-full px-[0.9rem] py-[0.3rem] text-[0.75rem] font-bold text-[#7c3aed] uppercase tracking-[0.08em] font-[var(--inter-font)] mb-4";
const sectionTitle =
   "text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] mb-3 tracking-[-0.03em] leading-[1.1] font-[var(--inter-font)]";
const sectionSub =
   "text-[#4b5563] text-[1.05rem] leading-[1.7] max-w-[560px] mx-auto font-[var(--inter-font)]";

// 3-col on lg — one card per type
const grid =
   "grid grid-cols-1 gap-7 mb-12 md:grid-cols-3 lg:grid-cols-3 lg:gap-7";

// Card — left purple accent + bg tint on hover. NO shadow, NO transform, NO scale
const cardBase =
   "flex flex-col bg-white border border-[#e5e7eb] [border-left-width:3px] [border-left-color:transparent] rounded-2xl overflow-hidden opacity-0 translate-y-[22px] transition-[opacity,transform,border-color,background-color] duration-500 ease-out hover:[border-left-color:#7c3aed] hover:bg-[#fdfbff]";

// Frame
const frameBase = "relative overflow-hidden flex-shrink-0 aspect-[16/10]";
const frameImg = "w-full h-full object-cover object-top block";

// Frame badges
const frameBadgeFree =
   "absolute top-[10px] left-[10px] z-[2] inline-flex items-center gap-[5px] text-[0.65rem] font-bold uppercase tracking-[0.07em] px-[9px] py-[3px] rounded-full font-[var(--inter-font)] backdrop-blur-md bg-[rgba(22,163,74,0.88)] text-white";
const frameBadgePrem =
   "absolute top-[10px] left-[10px] z-[2] inline-flex items-center gap-[5px] text-[0.65rem] font-bold uppercase tracking-[0.07em] px-[9px] py-[3px] rounded-full font-[var(--inter-font)] backdrop-blur-md bg-[rgba(15,23,42,0.82)] text-white";
const frameBadgeSoon =
   "absolute top-[10px] left-[10px] z-[2] inline-flex items-center gap-[5px] text-[0.65rem] font-bold uppercase tracking-[0.07em] px-[9px] py-[3px] rounded-full font-[var(--inter-font)] backdrop-blur-md bg-[rgba(234,88,12,0.88)] text-white";

// Hover overlay — opacity only, NO transform on button
const frameOverlay =
   "absolute inset-0 bg-[rgba(15,23,42,0.45)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[3]";
const overlayBtn =
   "inline-flex items-center gap-2 bg-white text-[#0f172a] border-none rounded-lg px-[1.1rem] py-[0.55rem] text-[0.8rem] font-bold font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#f1f5f9]";

// Card body
const cardBody = "px-5 py-4 flex flex-col gap-[0.5rem] flex-1";
const cardTopRow = "flex items-start justify-between gap-3";
const cardTitle =
   "text-[0.98rem] font-bold text-[#111827] font-[var(--inter-font)] tracking-[-0.01em] leading-[1.3] flex-1 min-w-0";

const priceFree =
   "text-[0.78rem] font-extrabold text-[#16a34a] bg-[rgba(22,163,74,0.08)] rounded-full px-[9px] py-[2px] uppercase tracking-[0.06em] font-[var(--inter-font)] whitespace-nowrap flex-shrink-0";
const priceCurrent =
   "text-[0.88rem] font-extrabold text-[#2563eb] font-[var(--inter-font)] whitespace-nowrap flex-shrink-0";
const priceOld =
   "text-[0.75rem] font-medium text-[#6b7280] line-through font-[var(--inter-font)] whitespace-nowrap flex-shrink-0";
const priceSoon =
   "text-[0.72rem] font-bold text-[#ea580c] bg-[rgba(234,88,12,0.08)] rounded-full px-[9px] py-[2px] uppercase tracking-[0.06em] font-[var(--inter-font)] whitespace-nowrap flex-shrink-0";

const cardDesc =
   "text-[0.8rem] text-[#6b7280] leading-[1.65] font-[var(--inter-font)] m-0";
const tagsRow = "flex flex-wrap gap-[0.4rem] mt-1";
const tagCls =
   "text-[0.65rem] font-semibold bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] rounded-[5px] px-[7px] py-[2px] font-[var(--inter-font)]";

// Card footer
const cardFooter =
   "px-5 py-3 border-t border-[#e5e7eb] flex items-center justify-between gap-3 bg-[#f9fafb]";
const statusLive =
   "flex items-center gap-[0.35rem] text-[0.7rem] font-semibold text-[#16a34a] font-[var(--inter-font)]";
const statusSoon =
   "flex items-center gap-[0.35rem] text-[0.7rem] font-semibold text-[#ea580c] font-[var(--inter-font)]";
const liveDot =
   "w-[6px] h-[6px] rounded-full bg-[#22c55e] flex-shrink-0 animate-[pulse_2s_ease_infinite]";

// CTA buttons — color-only hover, NO transform
const ctaBtnLive =
   "inline-flex items-center gap-[0.45rem] text-[0.78rem] font-semibold font-[var(--inter-font)] rounded-[7px] border border-[#0f172a] bg-[#0f172a] text-white px-[0.85rem] py-[0.42rem] cursor-pointer transition-colors duration-150 hover:bg-[#1e293b] hover:border-[#1e293b]";
const ctaBtnSoon =
   "inline-flex items-center gap-[0.45rem] text-[0.78rem] font-semibold font-[var(--inter-font)] rounded-[7px] border border-[#e5e7eb] bg-[#f9fafb] text-[#6b7280] px-[0.85rem] py-[0.42rem] cursor-default pointer-events-none";

// Section footer
const footerAction = "flex flex-col items-center gap-3";
const btnBrowse =
   "inline-flex items-center gap-[0.55rem] bg-[#7c3aed] text-white px-8 py-[0.82rem] rounded-lg border border-[#7c3aed] font-semibold text-[0.92rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#6d28d9] hover:border-[#6d28d9]";
const footerNote =
   "text-[0.8rem] text-[#6b7280] font-[var(--inter-font)] text-center";

// ── Component ──────────────────────────────────────────────────

const TemplatesShowcase = () => {
   const cardRefs = useRef([]);
   const navigate = useNavigate();

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("!opacity-100", "!translate-y-0");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.08 },
      );
      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });
      return () => observer.disconnect();
   }, []);

   const handleCardNav = (path) => {
      if (path) navigate(path);
   };

   return (
      <section className={section}>
         <div className={container}>
            {/* ── Section Header ── */}
            <header className={sectionHeader}>
               <div className={eyebrow}>
                  <Layers size={11} />
                  Full Store Templates
               </div>
               <h2 className={sectionTitle}>
                  Complete Shopify Stores,{" "}
                  <span className="text-[#7c3aed] relative inline-block whitespace-nowrap after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-[#7c3aed] after:rounded-sm after:opacity-35">
                     Ready to Launch
                  </span>
               </h2>
               <p className={sectionSub}>
                  Full Shopify theme templates assembled from our section
                  library. Pick a template, customize the colors and copy, and
                  go live in one afternoon.
               </p>
            </header>

            {/* ── Cards Grid ── */}
            <div className={grid}>
               {TEMPLATES.map((tmpl, index) => (
                  <article
                     key={tmpl.id}
                     ref={(el) => (cardRefs.current[index] = el)}
                     className={`${cardBase} group`}
                     style={{ transitionDelay: `${(index * 0.1).toFixed(2)}s` }}
                     aria-label={tmpl.title}
                  >
                     {/* ── Frame ── */}
                     <div
                        className={frameBase}
                        style={{
                           background: tmpl.bg,
                           cursor: tmpl.soon ? "default" : "pointer",
                        }}
                        onClick={() => !tmpl.soon && handleCardNav(tmpl.path)}
                     >
                        <img
                           className={frameImg}
                           src={tmpl.image}
                           alt={tmpl.alt}
                           loading="lazy"
                        />

                        {/* Badge */}
                        {tmpl.soon ? (
                           <div className={frameBadgeSoon}>
                              <Clock size={9} /> Coming Soon
                           </div>
                        ) : tmpl.free ? (
                           <div className={frameBadgeFree}>
                              <Star size={9} /> Free
                           </div>
                        ) : (
                           <div className={frameBadgePrem}>
                              <Zap size={9} /> Premium
                           </div>
                        )}

                        {/* Hover overlay — live cards only */}
                        {!tmpl.soon && (
                           <div className={frameOverlay}>
                              <button
                                 className={overlayBtn}
                                 onClick={() => handleCardNav(tmpl.path)}
                              >
                                 <Eye size={13} />
                                 Preview Template
                              </button>
                           </div>
                        )}
                     </div>

                     {/* ── Body ── */}
                     <div className={cardBody}>
                        <div className={cardTopRow}>
                           <h3 className={cardTitle}>{tmpl.title}</h3>
                           <div className="flex items-center gap-[0.4rem] flex-shrink-0">
                              {tmpl.soon ? (
                                 <span className={priceSoon}>Soon</span>
                              ) : tmpl.free ? (
                                 <span className={priceFree}>Free</span>
                              ) : (
                                 <>
                                    <span className={priceCurrent}>
                                       {tmpl.price}
                                    </span>
                                    <span className={priceOld}>
                                       {tmpl.oldPrice}
                                    </span>
                                 </>
                              )}
                           </div>
                        </div>

                        <p className={cardDesc}>{tmpl.desc}</p>

                        <div className={tagsRow}>
                           {tmpl.tags.map((t) => (
                              <span key={t} className={tagCls}>
                                 {t}
                              </span>
                           ))}
                        </div>
                     </div>

                     {/* ── Footer ── */}
                     <div className={cardFooter}>
                        {tmpl.soon ? (
                           <div className={statusSoon}>
                              <Clock size={11} /> In development
                           </div>
                        ) : (
                           <div className={statusLive}>
                              <span className={liveDot} />
                              Available now
                           </div>
                        )}

                        <button
                           className={tmpl.soon ? ctaBtnSoon : ctaBtnLive}
                           onClick={() =>
                              !tmpl.soon && handleCardNav(tmpl.path)
                           }
                        >
                           {tmpl.soon ? (
                              <>
                                 <Clock size={11} /> Notify Me
                              </>
                           ) : (
                              <>
                                 <ArrowRight size={11} />{" "}
                                 {tmpl.free ? "Use Template" : "Get Template"}
                              </>
                           )}
                        </button>
                     </div>
                  </article>
               ))}
            </div>

            {/* ── Footer CTA ── */}
            <div className={footerAction}>
               <button
                  className={btnBrowse}
                  onClick={() => navigate("/templates")}
               >
                  Browse All Templates
                  <ArrowRight size={14} />
               </button>
               <p className={footerNote}>
                  All templates are built entirely from Shopify Bazzar sections.{" "}
                  <span
                     className="text-[#7c3aed] font-semibold cursor-pointer hover:underline"
                     onClick={() => navigate("/components")}
                  >
                     Explore the component library →
                  </span>
               </p>
            </div>
         </div>
      </section>
   );
};

export default TemplatesShowcase;
