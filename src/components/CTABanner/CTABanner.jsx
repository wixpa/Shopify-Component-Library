import { useNavigate } from "react-router-dom";
import { Star, LayoutGrid, ArrowRight, Layers } from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const section = "pt-0 pb-8";
const container = "max-w-[var(--container-max-width)] mx-auto px-4 sm:px-6";

// Banner — auto height on mobile so content never clips
const banner = [
   "relative w-full rounded-2xl overflow-hidden",
   "min-h-[200px] sm:min-h-[220px] lg:h-[240px]",
].join(" ");

const bannerImg = [
   "absolute inset-0 w-full h-full object-cover object-[center_40%] block z-0",
   "animate-[fadeIn_0.7s_ease_both]",
].join(" ");

const overlay = [
   "absolute inset-0 z-[1]",
   "bg-[linear-gradient(100deg,rgba(10,17,38,0.92)_0%,rgba(10,17,38,0.78)_45%,rgba(10,17,38,0.45)_72%,rgba(10,17,38,0.15)_100%)]",
].join(" ");

// Content — stacks vertically on small screens
const content = [
   "absolute inset-0 z-[2] flex",
   "animate-[slideUp_0.6s_ease_both] [animation-delay:0.1s]",
   // mobile: column, centered
   "flex-col items-start justify-center gap-4 p-5",
   // sm: still column but more padding
   "sm:p-7 sm:gap-5",
   // md: row layout
   "md:flex-row md:items-center md:justify-between md:px-9 md:py-0 md:gap-6",
   // lg: more padding
   "lg:px-11",
].join(" ");

const textGroup = "flex flex-col gap-[0.4rem] flex-1 min-w-0";

const eyebrow = [
   "inline-flex items-center gap-[0.4rem]",
   "text-[0.65rem] sm:text-[0.68rem] font-bold text-white/65",
   "uppercase tracking-[0.1em] font-[var(--inter-font)]",
].join(" ");

const bannerTitle = [
   "font-extrabold text-white tracking-[-0.025em]",
   "font-[var(--inter-font)] leading-[1.2] m-0",
   "text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem]",
].join(" ");

const bannerSub = [
   "text-[0.76rem] sm:text-[0.78rem] text-white/60",
   "font-[var(--inter-font)] leading-[1.5] m-0 max-w-[380px]",
   // hide on very small screens to save space
   "hidden xs:block sm:block",
].join(" ");

// Button group — full width row on mobile
const btnGroup = [
   "flex items-center gap-2 w-full",
   "md:w-auto md:flex-shrink-0",
].join(" ");

// Primary button — full width on mobile, auto on md+
const btnPrimary = [
   "flex-1 md:flex-none",
   "inline-flex items-center justify-center gap-[0.45rem]",
   "bg-white text-[#0f172a] border border-white",
   "px-4 sm:px-5 py-[0.55rem] sm:py-[0.6rem] rounded-lg",
   "font-bold text-[0.78rem] sm:text-[0.82rem]",
   "font-[var(--inter-font)] cursor-pointer whitespace-nowrap",
   "transition-colors duration-150 hover:bg-[#f1f5f9]",
].join(" ");

// Secondary button — hidden on xs, shown sm+
const btnSecondary = [
   "hidden sm:inline-flex",
   "items-center justify-center gap-[0.45rem]",
   "bg-white/10 text-white border border-white/30",
   "px-4 sm:px-5 py-[0.55rem] sm:py-[0.6rem] rounded-lg",
   "font-semibold text-[0.78rem] sm:text-[0.82rem]",
   "font-[var(--inter-font)] cursor-pointer whitespace-nowrap backdrop-blur-[10px]",
   "transition-[background,border-color] duration-150 hover:bg-white/20 hover:border-white/50",
   "flex-1 md:flex-none",
].join(" ");

// Corner badge — hidden on xs, shown sm+
const cornerBadge = [
   "hidden sm:inline-flex",
   "absolute top-[12px] right-[14px] z-[3]",
   "items-center gap-[4px]",
   "bg-[rgba(251,191,36,0.92)] text-[#78350f]",
   "text-[0.6rem] font-extrabold px-[9px] py-[3px] rounded-full",
   "uppercase tracking-[0.08em] font-[var(--inter-font)] backdrop-blur-[4px]",
].join(" ");

// ── Component ──────────────────────────────────────────────────

const CTABanner = () => {
   const navigate = useNavigate();

   return (
      <section className={section}>
         <div className={container}>
            <div className={banner}>
               {/* ── Layer 0: Image ── */}
               <img
                  className={bannerImg}
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1600&q=85&auto=format&fit=crop"
                  alt="Shopify storefront components showcase"
                  loading="lazy"
               />

               {/* ── Layer 1: Gradient overlay ── */}
               <div className={overlay} />

               {/* ── Layer 2: Corner badge ── */}
               <div className={cornerBadge}>
                  <Star size={8} />
                  100% Free
               </div>

               {/* ── Layer 3: Content ── */}
               <div className={content}>
                  {/* Left: text */}
                  <div className={textGroup}>
                     <span className={eyebrow}>
                        <LayoutGrid
                           size={9}
                           className="text-[#fbbf24] flex-shrink-0"
                        />
                        Shopify Bazzar — Component Library
                     </span>

                     <h2 className={bannerTitle}>
                        Build your Shopify store{" "}
                        <span className="text-[#fbbf24]">
                           in hours, not weeks.
                        </span>
                     </h2>

                     <p className={bannerSub}>
                        Production-ready sections — copy, paste, and go live. No
                        Liquid knowledge required.
                     </p>
                  </div>

                  {/* Right: buttons */}
                  <div className={btnGroup}>
                     <button
                        className={btnPrimary}
                        onClick={() => navigate("/components")}
                     >
                        Browse Components
                        <ArrowRight size={12} />
                     </button>

                     <button
                        className={btnSecondary}
                        onClick={() => navigate("/templates")}
                     >
                        <Layers size={12} />
                        Templates
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CTABanner;
