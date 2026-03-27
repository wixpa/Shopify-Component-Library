import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, ArrowRight, Clock } from "lucide-react";
import { getAllCategories } from "../../registry/componentRegistry";

// ══════════════════════════════════════════════════════════════
// ── Preview Illustrations ──────────────────────────────────────
// ══════════════════════════════════════════════════════════════

const HeadersPreview = () => (
   <div className="w-full bg-white rounded-lg shadow-[0_4px_16px_rgba(15,23,42,0.1)] overflow-hidden border border-[#e5e7eb]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#f3f4f6] bg-white">
         <div className="w-12 h-[7px] bg-[#0f172a] rounded-[3px]" />
         <div className="flex gap-2 items-center">
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
         </div>
         <div className="w-9 h-[10px] bg-[#2563eb] rounded-[4px]" />
      </div>
      <div className="flex items-center justify-between px-3 py-2 bg-[#0f172a] mt-1">
         <div className="w-12 h-[7px] bg-white rounded-[3px]" />
         <div className="flex gap-2 items-center">
            <div className="w-[22px] h-[3px] bg-[#475569] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#475569] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#475569] rounded-sm" />
         </div>
         <div className="w-9 h-[10px] bg-[#4f46e5] rounded-[4px]" />
      </div>
      <div className="flex items-center justify-between px-3 py-2 bg-[#f9fafb]">
         <div className="w-12 h-[7px] bg-[#0f172a] rounded-[3px]" />
         <div className="flex-1 mx-[10px] h-[10px] bg-[#f3f4f6] rounded-[4px] border border-[#e5e7eb]" />
         <div className="w-9 h-[10px] bg-[#0f172a] rounded-[4px]" />
      </div>
   </div>
);

const HeroPreview = () => (
   <div className="w-full bg-white rounded-lg shadow-[0_4px_16px_rgba(15,23,42,0.1)] border border-[#e5e7eb] overflow-hidden">
      <div className="h-[14px] bg-[#f9fafb] border-b border-[#f3f4f6] flex items-center px-[10px] justify-between">
         <div className="w-[30px] h-[7px] bg-[#0f172a] rounded-[3px]" />
         <div className="flex gap-2">
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
            <div className="w-[22px] h-[3px] bg-[#d1d5db] rounded-sm" />
         </div>
         <div className="w-4 h-[3px] bg-[#d1d5db] rounded-sm" />
      </div>
      <div className="px-3 pt-[10px] pb-3 flex flex-col items-center gap-[5px]">
         <div className="w-[50px] h-[5px] bg-[#dbeafe] rounded-lg" />
         <div className="w-[70%] h-[5px] bg-[#0f172a] rounded-sm" />
         <div className="w-[50%] h-[4px] bg-[#7c3aed] rounded-sm" />
         <div className="w-[55%] h-[3px] bg-[#9ca3af] rounded-sm" />
         <div className="w-[80%] h-[2px] bg-[#e5e7eb] rounded-sm" />
         <div className="flex gap-1 mt-[2px]">
            <div className="w-7 h-[7px] bg-[#2563eb] rounded-[3px]" />
            <div className="w-7 h-[7px] bg-[#f3f4f6] rounded-[3px]" />
         </div>
         <div className="flex gap-2 mt-[3px] pt-[5px] border-t border-[#f3f4f6] w-full justify-center">
            {[0, 1, 2].map((i) => (
               <div key={i} className="flex flex-col items-center gap-[2px]">
                  <div className="w-[18px] h-[4px] bg-[#0f172a] rounded-sm" />
                  <div className="w-[14px] h-[2px] bg-[#d1d5db] rounded-sm" />
               </div>
            ))}
         </div>
      </div>
   </div>
);

const ProductCardsPreview = () => (
   <div className="w-full bg-white rounded-lg shadow-[0_4px_16px_rgba(15,23,42,0.1)] border border-[#e5e7eb] p-[10px] flex flex-col gap-[6px]">
      <div className="w-[55px] h-[5px] bg-[#0f172a] rounded-sm mb-[2px]" />
      <div className="flex gap-[6px]">
         {["#dbeafe", "#fce7f3", "#dcfce7"].map((bg, i) => (
            <div
               key={i}
               className="flex-1 bg-[#f9fafb] rounded-[5px] border border-[#f3f4f6] overflow-hidden"
            >
               <div className="h-[38px] relative" style={{ background: bg }}>
                  <div className="absolute top-[3px] left-[3px] w-3 h-[5px] bg-[#ef4444] rounded-[2px]" />
               </div>
               <div className="px-[5px] py-1 flex flex-col gap-[2px]">
                  <div className="h-[3px] w-[80%] bg-[#374151] rounded-sm" />
                  <div className="h-[3px] w-[50%] bg-[#d1d5db] rounded-sm" />
                  <div className="h-[3px] w-[40%] bg-[#2563eb] rounded-sm" />
                  <div className="h-[7px] w-full bg-[#0f172a] rounded-[2px] mt-[2px]" />
               </div>
            </div>
         ))}
      </div>
   </div>
);

const ComingSoonPreview = () => (
   <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
      <div className="w-10 h-10 rounded-xl bg-[rgba(37,99,235,0.08)] flex items-center justify-center">
         <Clock size={20} className="text-[#2563eb]" />
      </div>
      <div className="flex flex-col items-center gap-1">
         <div className="text-[0.8rem] font-bold text-[#0f172a] font-[var(--inter-font)]">
            More Coming Soon
         </div>
         <div className="text-[0.72rem] text-[#6b7280] font-[var(--inter-font)] text-center leading-[1.4] max-w-[160px]">
            Product grids, footers, banners, testimonials & more
         </div>
      </div>
      <div className="text-[0.62rem] font-bold bg-[rgba(37,99,235,0.08)] text-[#2563eb] px-3 py-[3px] rounded-full font-[var(--inter-font)] uppercase tracking-[0.07em] border border-[rgba(37,99,235,0.15)]">
         Shipping weekly
      </div>
   </div>
);

// ══════════════════════════════════════════════════════════════
// ── Showcase Data ─────────────────────────────────════════════
// ══════════════════════════════════════════════════════════════

const SHOWCASE = [
   {
      id: "headers",
      name: "Headers",
      count: 3,
      tag: {
         label: "Navigation",
         bg: "rgba(37,99,235,0.08)",
         color: "#2563eb",
      },
      bg: "#f0f4ff",
      path: "/components/headers",
      preview: <HeadersPreview />,
      live: true,
   },
   {
      id: "hero",
      name: "Hero Sections",
      count: 3,
      tag: { label: "Landing", bg: "rgba(124,58,237,0.08)", color: "#7c3aed" },
      bg: "#f5f0ff",
      path: "/components/hero",
      preview: <HeroPreview />,
      live: true,
   },
   {
      id: "product-cards",
      name: "Product Cards",
      count: 3,
      tag: {
         label: "E-commerce",
         bg: "rgba(234,88,12,0.08)",
         color: "#ea580c",
      },
      bg: "#fff7f0",
      path: "/components/product-cards",
      preview: <ProductCardsPreview />,
      live: true,
   },
   {
      id: "coming-soon",
      name: "More Coming Soon",
      count: null,
      tag: {
         label: "In Progress",
         bg: "rgba(37,99,235,0.08)",
         color: "#2563eb",
      },
      bg: "#f8faff",
      path: null,
      preview: <ComingSoonPreview />,
      live: false,
   },
];

// ── Tailwind Classes ───────────────────────────────────────────

const section =
   "bg-white border-t border-[#e5e7eb] pt-14 pb-20 lg:pt-16 lg:pb-28";
const container = "max-w-[1280px] mx-auto px-6";

const sectionHeader = "text-center mb-12";
const eyebrow =
   "inline-flex items-center gap-2 bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.15)] rounded-full px-[0.9rem] py-[0.3rem] text-[0.75rem] font-bold text-[#2563eb] uppercase tracking-[0.08em] font-[var(--inter-font)] mb-4";
const sectionTitle =
   "text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] mb-3 tracking-[-0.03em] font-[var(--inter-font)] leading-[1.1]";
const sectionSub =
   "text-[#4b5563] text-[1.05rem] leading-[1.7] max-w-[580px] mx-auto font-[var(--inter-font)]";

// 2-col on sm, 4-col on lg so all 4 cards sit in one row
const grid =
   "grid grid-cols-1 gap-5 mb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5";

// Card: left accent border on hover, subtle bg tint — NO shadow, NO transform
const cardBase =
   "bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden flex flex-col opacity-0 translate-y-[22px] transition-[opacity,transform,border-color,background-color] duration-500 ease-out [border-left-width:3px] [border-left-color:transparent] hover:[border-left-color:#2563eb] hover:bg-[#fafbff]";

// Card footer — enough vertical padding so title never clips
const cardFooter =
   "px-4 pt-3 pb-4 flex flex-col gap-[0.55rem] border-t border-[#e5e7eb] bg-white";
const cardTopRow = "flex items-start justify-between gap-2";
const cardName =
   "text-[0.92rem] font-bold text-[#111827] font-[var(--inter-font)] leading-[1.35]";
const cardMeta = "text-[0.72rem] text-[#6b7280] font-[var(--inter-font)]";
const cardBottomRow = "flex items-center justify-between gap-2";

const cardArrow =
   "w-7 h-7 rounded-[7px] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] flex-shrink-0 transition-colors duration-150 hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white";

const footerAction = "flex flex-col items-center gap-3";
const btnBrowse =
   "inline-flex items-center gap-[0.55rem] bg-[#0f172a] text-white px-8 py-[0.82rem] rounded-lg border border-[#0f172a] font-semibold text-[0.92rem] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#1e293b] hover:border-[#1e293b]";
const footerHelp = "text-[0.82rem] text-[#4b5563] font-[var(--inter-font)]";

// ── Component ──────────────────────────────────────────────────

const ComponentsShowcase = () => {
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

   const handleCardClick = (item) => {
      if (item.live && item.path) navigate(item.path);
   };

   const categories = getAllCategories();
   const totalVariants = categories.reduce(
      (acc, cat) => acc + cat.variants.length,
      0,
   );

   return (
      <section className={section}>
         <div className={container}>
            {/* ── Section Header ── */}
            <header className={sectionHeader}>
               <div className={eyebrow}>
                  <Box size={11} />
                  Component Library
               </div>
               <h2 className={sectionTitle}>
                  Every Section Your Shopify
                  <br />
                  Store Will Ever Need
               </h2>
               <p className={sectionSub}>
                  {totalVariants} production-ready sections across{" "}
                  {categories.length} categories — copy, paste, and go live in
                  minutes. More sections shipping every week.
               </p>
            </header>

            {/* ── Grid ── */}
            <div className={grid}>
               {SHOWCASE.map((item, index) => (
                  <article
                     key={item.id}
                     ref={(el) => (cardRefs.current[index] = el)}
                     className={cardBase}
                     style={{
                        transitionDelay: `${(index * 0.08).toFixed(2)}s`,
                        cursor: item.live ? "pointer" : "default",
                     }}
                     onClick={() => handleCardClick(item)}
                     role={item.live ? "button" : "article"}
                     tabIndex={item.live ? 0 : undefined}
                     onKeyDown={(e) => {
                        if (item.live && e.key === "Enter")
                           handleCardClick(item);
                     }}
                     aria-label={
                        item.live
                           ? `View ${item.name} components`
                           : `${item.name} — coming soon`
                     }
                  >
                     {/* Preview area */}
                     <div
                        className="h-[180px] w-full flex items-center justify-center p-5 overflow-hidden flex-shrink-0"
                        style={{ background: item.bg }}
                     >
                        {item.preview}
                     </div>

                     {/* Footer */}
                     <div className={cardFooter}>
                        {/* Top row: name + arrow */}
                        <div className={cardTopRow}>
                           <div className="flex-1 min-w-0">
                              <div className={cardName}>{item.name}</div>
                           </div>
                           {item.live && (
                              <div className={cardArrow} aria-hidden="true">
                                 <ArrowRight size={12} />
                              </div>
                           )}
                        </div>

                        {/* Bottom row: meta + tag */}
                        <div className={cardBottomRow}>
                           <span className={cardMeta}>
                              {item.live
                                 ? `${item.count} variant${item.count === 1 ? "" : "s"}`
                                 : "Coming soon"}
                           </span>
                           <span
                              className="inline-flex items-center text-[0.68rem] font-bold px-[0.6rem] py-[0.22rem] rounded-full whitespace-nowrap font-[var(--inter-font)] flex-shrink-0"
                              style={{
                                 background: item.tag.bg,
                                 color: item.tag.color,
                              }}
                           >
                              {item.tag.label}
                           </span>
                        </div>
                     </div>
                  </article>
               ))}
            </div>

            {/* ── Footer CTA ── */}
            <div className={footerAction}>
               <button
                  className={btnBrowse}
                  onClick={() => navigate("/components")}
               >
                  Browse All Components
                  <ArrowRight size={14} />
               </button>
               <p className={footerHelp}>
                  Want a specific section?{" "}
                  <span
                     className="text-[#2563eb] font-semibold cursor-pointer hover:underline"
                     onClick={() => navigate("/docs")}
                  >
                     Request it here →
                  </span>
               </p>
            </div>
         </div>
      </section>
   );
};

export default ComponentsShowcase;
