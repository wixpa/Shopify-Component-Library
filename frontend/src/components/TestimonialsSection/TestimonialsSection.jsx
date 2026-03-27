import { useEffect, useRef } from "react";
import { Star, Check } from "lucide-react";

// ── Testimonials Data ──────────────────────────────────────────

const TESTIMONIALS = [
   {
      id: 1,
      name: "Ahmed Al-Rashid",
      role: "Shopify Store Owner · Fashion Niche",
      avatar:
         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "Shopify Bazzar saved me days of work. I picked the Header V2, dropped it into Custom Liquid, changed two colors, and my store went live before lunch. The sections just work — no tweaking required.",
   },
   {
      id: 2,
      name: "Sara Mitchell",
      role: "Freelance Shopify Developer",
      avatar:
         "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "I use Shopify Bazzar on every client project now. The live editor is a game-changer — I can show clients real-time previews and get sign-off without writing a single line of Liquid myself.",
   },
   {
      id: 3,
      name: "David Nguyen",
      role: "Co-founder · Beauty Brand",
      avatar:
         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "We launched our skincare store in a weekend using the Beauty Product Cards section and a Hero from Shopify Bazzar. Revenue in the first month exceeded our projections by 40%.",
   },
   {
      id: 4,
      name: "Lena Hoffmann",
      role: "E-commerce Consultant · Berlin",
      avatar:
         "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "What sets this library apart is the attention to detail — hover states, mobile breakpoints, and clean semantic HTML. My clients notice the quality immediately. Shopify Bazzar is now part of my standard toolkit.",
   },
   {
      id: 5,
      name: "Tariq Hassan",
      role: "MERN Stack Developer · Pakistan",
      avatar:
         "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "As a developer who builds custom Shopify themes daily, finding Shopify Bazzar was a massive productivity boost. The code quality is excellent — well-structured, commented, and easy to extend.",
   },
   {
      id: 6,
      name: "Jessica Park",
      role: "Shopify Plus Agency · Toronto",
      avatar:
         "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=100&q=80&auto=format&fit=crop",
      stars: 5,
      quote: "Our agency has evaluated every major Shopify component library. Shopify Bazzar stands out for its copy-paste simplicity and the fact that all sections are production-tested on real stores.",
   },
];

// ── Tailwind Classes ───────────────────────────────────────────

// No bg — transparent so parent page bg shows through
const section = "border-t border-[#c4c4c4] pt-14 pb-12 lg:pt-16 lg:pb-14";
const container = "max-w-[1280px] mx-auto px-6";

const sectionHeader = "text-center mb-12";
const eyebrow =
   "inline-flex items-center gap-2 bg-[rgba(234,179,8,0.08)] border border-[rgba(234,179,8,0.2)] rounded-full px-[0.9rem] py-[0.3rem] text-[0.75rem] font-bold text-[#ca8a04] uppercase tracking-[0.08em] font-[var(--inter-font)] mb-4";
const sectionTitle =
   "text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] mb-3 tracking-[-0.03em] leading-[1.1] font-[var(--inter-font)]";
const sectionSub =
   "text-[1.05rem] text-[#4b5563] leading-[1.7] max-w-[520px] mx-auto font-[var(--inter-font)]";

// Masonry via CSS columns
const masonryGrid = "columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-7";

// Card — full border on all 4 sides, left accent yellow on hover, NO shadow, NO transform
const cardBase =
   "bg-white border-[1.5px] border-[#e5e7eb] rounded-2xl p-6 mb-6 break-inside-avoid flex flex-col gap-[0.85rem] opacity-0 translate-y-5 transition-[opacity,transform,border-color,background-color] duration-500 ease-out hover:border-[#f59e0b] hover:bg-[#fffdf5]";

const starsRow = "flex gap-[2px]";
const quoteAccent =
   "text-[2.5rem] leading-none text-[#2563eb] opacity-15 font-['Georgia',serif] mb-[-0.5rem] mt-[-0.25rem] select-none";
const cardQuote =
   "text-[0.88rem] text-[#4b5563] leading-[1.7] font-[var(--inter-font)] flex-1";
const divider = "w-full h-px bg-[#e5e7eb]";
const cardFooter = "flex items-center gap-3";
const avatarCls =
   "w-[38px] h-[38px] rounded-full object-cover flex-shrink-0 border-2 border-[#e5e7eb]";
const userInfo = "flex flex-col gap-[1px] min-w-0";
const userName =
   "text-[0.85rem] font-bold text-[#111827] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis";
const userRole =
   "text-[0.72rem] text-[#6b7280] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis";
const verifiedBadge =
   "ml-auto w-5 h-5 rounded-full bg-[rgba(37,99,235,0.1)] flex items-center justify-center flex-shrink-0";

// ── Component ──────────────────────────────────────────────────

const TestimonialsSection = () => {
   const cardRefs = useRef([]);

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
         { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });
      return () => observer.disconnect();
   }, []);

   return (
      <section className={section}>
         <div className={container}>
            {/* ── Header ── */}
            <header className={sectionHeader}>
               <div className={eyebrow}>
                  <Star size={11} />
                  Trusted by Developers
               </div>
               <h2 className={sectionTitle}>
                  Shopify developers love it.
                  <br />
                  Here's what they say.
               </h2>
               <p className={sectionSub}>
                  Real feedback from store owners, freelancers, and agencies who
                  ship faster with Shopify Bazzar.
               </p>
            </header>

            {/* ── Masonry Grid ── */}
            <div className={masonryGrid}>
               {TESTIMONIALS.map((t, index) => (
                  <article
                     key={t.id}
                     ref={(el) => (cardRefs.current[index] = el)}
                     className={cardBase}
                     style={{
                        transitionDelay: `${(index * 0.08).toFixed(2)}s`,
                     }}
                  >
                     {/* Stars */}
                     <div
                        className={starsRow}
                        aria-label={`${t.stars} out of 5 stars`}
                     >
                        {Array.from({ length: t.stars }).map((_, i) => (
                           <Star
                              key={i}
                              size={12}
                              className="text-[#f59e0b] fill-[#f59e0b]"
                           />
                        ))}
                     </div>

                     {/* Quote */}
                     <div className={quoteAccent} aria-hidden="true">
                        "
                     </div>
                     <p className={cardQuote}>{t.quote}</p>

                     <div className={divider} />

                     {/* Author */}
                     <div className={cardFooter}>
                        <img
                           className={avatarCls}
                           src={t.avatar}
                           alt={t.name}
                           loading="lazy"
                        />
                        <div className={userInfo}>
                           <span className={userName}>{t.name}</span>
                           <span className={userRole}>{t.role}</span>
                        </div>
                        <div
                           className={verifiedBadge}
                           title="Verified user"
                           aria-label="Verified user"
                        >
                           <Check size={9} className="text-[#2563eb]" />
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default TestimonialsSection;
