import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCode, FiBox } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

// ── Static Data ────────────────────────────────────────────────

const SLIDE_DURATION = 4500;

const SLIDES = [
   {
      id: 1,
      tag: "Components",
      Icon: FiBox,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      alt: "Shopify component library",
      title: "Production-ready Shopify sections",
      text: "Browse headers, hero sections, and product sliders. Copy one code block into Custom Liquid and you're live.",
      path: "/components",
   },
   {
      id: 2,
      tag: "Live Editor",
      Icon: HiSparkles,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      alt: "Live component editor",
      title: "Customize in the live editor",
      text: "Tweak colors, text, and layout in real time on the React Flow canvas. Changes are baked into the exported code.",
      path: "/components/hero/hero-v1",
   },
   {
      id: 3,
      tag: "Copy Code",
      Icon: FiCode,
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80&auto=format&fit=crop",
      alt: "Copy and paste code snippet",
      title: "Paste directly into Shopify",
      text: "One clean HTML + CSS + JS block. Paste into a Custom Liquid section — your section is live in minutes.",
      path: "/components",
   },
];

const STATS = [
   { value: "50+", label: "Components" },
   { value: "3", label: "Section types" },
   { value: "100%", label: "Free to use" },
];

// ── Tailwind Class Variables ───────────────────────────────────

const heroWrapper =
   "bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#ccfbf1] py-[5rem] lg:py-[7rem]";
const container = "max-w-[1280px] mx-auto px-6";
const heroGrid =
   "grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.15fr_0.85fr] lg:gap-20";

const heroContent = "animate-[fadeUp_0.6s_ease_both] [animation-delay:0.05s]";

const badge =
   "inline-flex items-center bg-white px-[0.85rem] pl-[0.5rem] py-[0.3rem] rounded-full text-[0.8rem] font-medium text-[#111827] shadow-[0_1px_2px_rgba(0,0,0,0.05)] mb-[1.75rem] border border-[#e5e7eb] font-[var(--inter-font)] w-fit gap-0";
const badgeDot =
   "w-[7px] h-[7px] bg-[#22c55e] rounded-full mr-[0.6rem] flex-shrink-0 animate-[pulse_2.2s_ease_infinite]";
const badgeDivider = "w-px h-[11px] bg-[#d1d5db] mx-[0.65rem] flex-shrink-0";
const badgeHighlight = "font-semibold text-[#2563eb]";

const heroTitle =
   "text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.08] font-extrabold mb-[1.4rem] tracking-[-0.033em] font-[var(--inter-font)]";
const titleHighlight = "text-[#4f46e5] block";
const titleDark = "text-[#0f172a] block";
const titleMuted = "text-[#4b5563] block";

const heroDesc =
   "text-[1rem] md:text-[1.05rem] text-[#4b5563] mb-[2.25rem] leading-[1.75] max-w-[520px] font-[var(--inter-font)]";

const ctaGroup =
   "flex flex-wrap gap-[0.85rem] mb-[2.5rem] max-[480px]:flex-col";
const btnPrimary =
   "inline-flex items-center gap-[0.55rem] px-6 py-[0.78rem] rounded-lg border border-[#0f172a] bg-[#0f172a] text-white font-semibold text-[0.9rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 whitespace-nowrap hover:bg-[#1e293b] hover:border-[#1e293b] max-[480px]:w-full max-[480px]:justify-center";
const btnSecondary =
   "inline-flex items-center gap-[0.55rem] px-[1.35rem] py-[0.78rem] rounded-lg border border-[#e5e7eb] bg-white text-[#111827] font-medium text-[0.9rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 whitespace-nowrap hover:bg-[#f9fafb] hover:border-[#d1d5db] max-[480px]:w-full max-[480px]:justify-center";
const btnSecondaryIcon = "text-[#4f46e5]";

const statsRow =
   "flex flex-wrap gap-[1.75rem] pt-[1.75rem] border-t border-[#e5e7eb] max-[380px]:gap-5";
const statCls = "flex flex-col gap-[3px]";
const statValue =
   "text-[1.35rem] font-extrabold text-[#0f172a] font-[var(--inter-font)] tracking-[-0.025em] leading-none";
const statLabel =
   "text-[0.73rem] text-[#4b5563] font-[var(--inter-font)] font-medium whitespace-nowrap";

const heroVisual =
   "flex justify-center lg:justify-end animate-[scaleIn_0.6s_ease_both] [animation-delay:0.18s]";
const cardShell =
   "bg-white rounded-2xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] w-full max-w-[430px] lg:max-w-[420px] border border-[#e5e7eb] outline-none";

const cardTopBar =
   "flex items-center gap-[0.45rem] px-[0.9rem] py-[0.55rem] bg-[#f9fafb] border-b border-[#e5e7eb] flex-shrink-0";
const cardUrlBar =
   "flex-1 bg-white border border-[#e5e7eb] rounded-[5px] px-[10px] py-[3px] text-[0.68rem] text-[#4b5563] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis ml-[0.2rem]";

const cardImageWrap = "relative overflow-hidden h-[210px] bg-[#f9fafb]";
const cardImage =
   "w-full h-full object-cover block animate-[imageFade_0.4s_ease_both]";
const cardImageOverlay =
   "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,23,42,0.22)] pointer-events-none";

const cardBody = "px-[1.4rem] pt-5 pb-6";
const cardTopRow = "flex items-center justify-between mb-[0.65rem]";
const cardTag =
   "inline-flex items-center gap-[5px] bg-[rgba(37,99,235,0.08)] text-[#2563eb] text-[0.67rem] font-bold px-[10px] py-[3px] rounded-full uppercase tracking-[0.07em] font-[var(--inter-font)]";
const slideCounter =
   "text-[0.68rem] text-[#4b5563] font-[var(--inter-font)] font-medium tabular-nums";
const cardTitle =
   "text-[1.05rem] font-bold text-[#111827] mb-[0.45rem] tracking-[-0.015em] font-[var(--inter-font)] leading-[1.3]";
const cardText =
   "text-[0.8rem] text-[#6b7280] mb-[1.1rem] leading-[1.65] font-[var(--inter-font)]";

const paginationDots = "flex items-center gap-[0.4rem] mb-[1.1rem]";
const cardActions = "grid grid-cols-2 gap-[0.65rem]";
const btnCardSecondary =
   "flex items-center justify-center gap-[0.4rem] bg-transparent border border-[#e5e7eb] text-[#4b5563] px-2 py-[0.58rem] rounded-md font-medium text-[0.82rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:text-[#111827]";
const btnCardPrimary =
   "flex items-center justify-center gap-[0.4rem] bg-[#2563eb] border border-[#2563eb] text-white px-2 py-[0.58rem] rounded-md font-semibold text-[0.82rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#1d4ed8] hover:border-[#1d4ed8]";

// ── Component ──────────────────────────────────────────────────

const HeroSection = () => {
   const [active, setActive] = useState(0);
   const [paused, setPaused] = useState(false);
   const [animKey, setAnimKey] = useState(0);
   const timerRef = useRef(null);
   const navigate = useNavigate();

   const slide = SLIDES[active];
   const totalSlides = SLIDES.length;
   const SlideIcon = slide.Icon;

   const goTo = (index) => {
      setActive(index);
      setAnimKey((k) => k + 1);
   };
   const goNext = () => goTo((active + 1) % totalSlides);
   const goPrev = () => goTo((active - 1 + totalSlides) % totalSlides);

   useEffect(() => {
      if (paused) return;
      timerRef.current = setTimeout(goNext, SLIDE_DURATION);
      return () => clearTimeout(timerRef.current);
   }, [active, paused]);

   const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
   };

   return (
      <section className={heroWrapper}>
         <div className={container}>
            <div className={heroGrid}>
               {/* ── Left: Content ── */}
               <div className={heroContent}>
                  {/* Badge */}
                  <div className={badge}>
                     <span className={badgeDot} />
                     New
                     <span className={badgeDivider} />
                     <span className={badgeHighlight}>
                        Shopify section builder
                     </span>
                  </div>

                  {/* Title */}
                  <h1 className={heroTitle}>
                     <span className={titleHighlight}>Beautiful Shopify</span>
                     <span className={titleDark}>Section Components</span>
                     <span className={titleMuted}>That Just Work.</span>
                  </h1>

                  {/* Description */}
                  <p className={heroDesc}>
                     Build stunning, high-converting Shopify storefronts with
                     our growing library of production-ready sections. Copy,
                     paste, and customize in minutes — no theme knowledge
                     required.
                  </p>

                  {/* CTA Buttons */}
                  <div className={ctaGroup}>
                     <button
                        className={btnPrimary}
                        onClick={() => navigate("/components")}
                     >
                        Browse Components
                        <FiArrowRight size={13} />
                     </button>
                     <button
                        className={btnSecondary}
                        onClick={() => navigate("/components/hero/hero-v1")}
                     >
                        <HiSparkles size={14} className={btnSecondaryIcon} />
                        Open Live Editor
                     </button>
                  </div>

                  {/* Stats */}
                  <div className={statsRow}>
                     {STATS.map((s) => (
                        <div key={s.label} className={statCls}>
                           <span className={statValue}>{s.value}</span>
                           <span className={statLabel}>{s.label}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* ── Right: Card ── */}
               <div className={heroVisual}>
                  <div
                     className={cardShell}
                     onMouseEnter={() => setPaused(true)}
                     onMouseLeave={() => setPaused(false)}
                     onKeyDown={handleKeyDown}
                     tabIndex={0}
                     role="region"
                     aria-label="Feature slideshow"
                     aria-roledescription="carousel"
                  >
                     {/* Browser chrome */}
                     <div className={cardTopBar}>
                        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] flex-shrink-0" />
                        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e] flex-shrink-0" />
                        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840] flex-shrink-0" />
                        <div className={cardUrlBar}>
                           shopifybazzar.com/components
                        </div>
                     </div>

                     {/* Image */}
                     <div className={cardImageWrap}>
                        <img
                           key={`img-${active}`}
                           className={cardImage}
                           src={slide.image}
                           alt={slide.alt}
                        />
                        <div className={cardImageOverlay} />

                        {/* Progress bar */}
                        {!paused && (
                           <div
                              key={`progress-${animKey}`}
                              className="absolute bottom-0 left-0 h-[3px] bg-[#2563eb] rounded-[0_2px_2px_0]"
                              style={{
                                 animation: `progressAnim ${SLIDE_DURATION}ms linear both`,
                              }}
                           />
                        )}
                     </div>

                     {/* Card body */}
                     <div className={cardBody}>
                        <div className={cardTopRow}>
                           <span className={cardTag}>
                              <SlideIcon size={10} />
                              {slide.tag}
                           </span>
                           <span className={slideCounter}>
                              {active + 1} / {totalSlides}
                           </span>
                        </div>

                        <h3 className={cardTitle}>{slide.title}</h3>
                        <p className={cardText}>{slide.text}</p>

                        {/* Pagination dots */}
                        <div
                           className={paginationDots}
                           role="tablist"
                           aria-label="Slides"
                        >
                           {SLIDES.map((s, i) => (
                              <button
                                 key={i}
                                 onClick={() => goTo(i)}
                                 role="tab"
                                 aria-selected={i === active}
                                 aria-label={`Slide ${i + 1}: ${s.title}`}
                                 className="h-[7px] rounded-full border-none p-0 cursor-pointer flex-shrink-0 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563eb] focus-visible:outline-offset-2"
                                 style={{
                                    width: i === active ? "22px" : "7px",
                                    background:
                                       i === active ? "#2563eb" : "#e5e7eb",
                                 }}
                              />
                           ))}
                        </div>

                        {/* Actions */}
                        <div className={cardActions}>
                           <button
                              className={btnCardSecondary}
                              onClick={goPrev}
                           >
                              <FiArrowLeft size={12} /> Prev
                           </button>
                           <button className={btnCardPrimary} onClick={goNext}>
                              Next <FiArrowRight size={12} />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
