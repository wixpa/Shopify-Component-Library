import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
   Github,
   Twitter,
   Linkedin,
   Send,
   Check,
   ArrowRight,
} from "lucide-react";

// ── Footer Data ────────────────────────────────────────────────

const FOOTER_COLS = [
   {
      id: 1,
      title: "Library",
      links: [
         { label: "Components", path: "/components" },
         { label: "Headers", path: "/components/headers" },
         { label: "Hero Sections", path: "/components/hero" },
         { label: "Product Cards", path: "/components/product-cards" },
      ],
   },
   {
      id: 2,
      title: "Templates",
      links: [
         { label: "All Templates", path: "/templates" },
         { label: "Starter Store", path: "/templates/starter-store" },
         { label: "Fashion Store", path: "/templates/fashion-store" },
         { label: "Coming Soon", path: "/templates" },
      ],
   },
   {
      id: 3,
      title: "Resources",
      links: [
         { label: "Documentation", path: "/docs" },
         { label: "Changelog", path: "/docs/changelog" },
         { label: "GitHub", path: null, href: "https://github.com" },
         { label: "Request Section", path: "/docs" },
      ],
   },
];

const SOCIAL = [
   { Icon: Github, label: "GitHub", href: "https://github.com" },
   { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
   { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

// ── Tailwind Classes ───────────────────────────────────────────

const footer = "bg-white border-t border-[#e5e7eb] pt-16 pb-8";
const container = "max-w-[1280px] mx-auto px-6";

// Top grid: brand col wider, then 3 link cols
const footerGrid =
   "grid grid-cols-1 gap-10 mb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10";

// Brand col spans full width on tablet
const brandCol = "flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:pr-6";

const brandLogoBtn =
   "inline-flex items-center w-fit bg-transparent border-none p-0 cursor-pointer transition-opacity duration-150 hover:opacity-75";
const logoShopify =
   "text-[1.1rem] font-extrabold tracking-[-0.035em] font-[var(--inter-font)] text-[#0f172a]";
const logoBazzar =
   "text-[1.1rem] font-extrabold tracking-[-0.035em] font-[var(--inter-font)] text-[#2563eb]";

const brandDesc =
   "text-[0.82rem] text-[#6b7280] leading-[1.7] font-[var(--inter-font)] max-w-[320px]";

const socialRow = "flex gap-2 mt-1";
const socialBtn =
   "w-8 h-8 rounded-[8px] border border-[#e5e7eb] bg-transparent text-[#6b7280] flex items-center justify-center cursor-pointer transition-[background,border-color,color] duration-150 hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:text-[#0f172a] no-underline";

// Newsletter
const newsletterWrap = "flex flex-col gap-[0.6rem] mt-1";
const newsletterLabel =
   "text-[0.72rem] font-bold text-[#0f172a] uppercase tracking-[0.07em] font-[var(--inter-font)]";
const newsletterForm = "flex gap-2 max-w-[360px] flex-wrap sm:flex-nowrap";
const newsletterInput =
   "flex-1 min-w-0 px-[0.9rem] py-[0.6rem] border border-[#e5e7eb] rounded-lg text-[0.82rem] text-[#0f172a] font-[var(--inter-font)] bg-[#f9fafb] outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#9ca3af] focus:border-[#2563eb] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white";
const subscribeNote =
   "text-[0.68rem] text-[#9ca3af] font-[var(--inter-font)] leading-[1.5]";

// Link columns
const colTitle =
   "text-[0.78rem] font-bold text-[#0f172a] mb-[1.1rem] uppercase tracking-[0.07em] font-[var(--inter-font)]";
const colList = "flex flex-col gap-[0.65rem] list-none p-0 m-0";
const colLink =
   "group inline-flex items-center gap-[0.35rem] bg-transparent border-none p-0 text-[0.82rem] text-[#6b7280] font-[var(--inter-font)] cursor-pointer text-left transition-colors duration-150 hover:text-[#0f172a]";
const colArrow =
   "opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-150 group-hover:translate-x-[2px]";

// Divider + bottom
const divider = "w-full h-px bg-[#e5e7eb] mb-7";
const footerBottom =
   "flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap";
const copyright =
   "text-[0.75rem] text-[#9ca3af] font-[var(--inter-font)] leading-[1.5]";
const bottomLinks = "flex items-center gap-5";
const bottomLink =
   "bg-transparent border-none p-0 text-[0.72rem] text-[#9ca3af] font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:text-[#0f172a]";
const bottomDot = "w-[3px] h-[3px] rounded-full bg-[#d1d5db] flex-shrink-0";

// Subscribe button — dynamic bg, color-only hover, NO transform
const getSubscribeBtn = (subscribed) =>
   `inline-flex items-center justify-center gap-[0.4rem] px-[1.1rem] py-[0.6rem] rounded-lg border-none font-semibold text-[0.8rem] font-[var(--inter-font)] text-white cursor-pointer whitespace-nowrap transition-colors duration-200 w-full sm:w-auto ${
      subscribed
         ? "bg-[#16a34a] hover:bg-[#15803d]"
         : "bg-[#0f172a] hover:bg-[#1e293b]"
   }`;

// ── Component ──────────────────────────────────────────────────

const Footer = () => {
   const [subscribed, setSubscribed] = useState(false);
   const [email, setEmail] = useState("");
   const timerRef = useRef(null);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!email.trim()) return;
      setSubscribed(true);
      setEmail("");
      timerRef.current = setTimeout(() => setSubscribed(false), 3500);
   };

   useEffect(() => {
      return () => {
         if (timerRef.current) clearTimeout(timerRef.current);
      };
   }, []);

   const go = (path, href) => {
      if (href) {
         window.open(href, "_blank", "noopener noreferrer");
         return;
      }
      if (path) navigate(path);
   };

   return (
      <footer className={footer}>
         <div className={container}>
            {/* ── Top grid ── */}
            <div className={footerGrid}>
               {/* ── Brand + Newsletter ── */}
               <div className={brandCol}>
                  {/* Logo */}
                  <button
                     className={brandLogoBtn}
                     onClick={() => navigate("/")}
                  >
                     <span className={logoShopify}>Shopify</span>
                     <span className={logoBazzar}>Bazzar</span>
                  </button>

                  {/* Description */}
                  <p className={brandDesc}>
                     A free, growing library of production-ready Shopify section
                     components. Copy, paste, and go live in minutes — no Liquid
                     knowledge required.
                  </p>

                  {/* Social icons */}
                  <div className={socialRow}>
                     {SOCIAL.map(({ Icon, label, href }) => (
                        <a
                           key={label}
                           className={socialBtn}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={label}
                        >
                           <Icon size={14} />
                        </a>
                     ))}
                  </div>

                  {/* Newsletter */}
                  <div className={newsletterWrap}>
                     <label className={newsletterLabel} htmlFor="footer-email">
                        Stay updated
                     </label>
                     <form className={newsletterForm} onSubmit={handleSubmit}>
                        <input
                           id="footer-email"
                           className={newsletterInput}
                           type="email"
                           placeholder="your@email.com"
                           aria-label="Email address"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                        <button
                           type="submit"
                           className={getSubscribeBtn(subscribed)}
                        >
                           {subscribed ? (
                              <>
                                 <Check size={13} /> Done!
                              </>
                           ) : (
                              <>
                                 <Send size={13} /> Subscribe
                              </>
                           )}
                        </button>
                     </form>
                     <p className={subscribeNote}>
                        New sections and templates straight to your inbox. No
                        spam, unsubscribe any time.
                     </p>
                  </div>
               </div>

               {/* ── Link columns ── */}
               {FOOTER_COLS.map((col) => (
                  <div key={col.id}>
                     <h3 className={colTitle}>{col.title}</h3>
                     <ul className={colList}>
                        {col.links.map((link) => (
                           <li key={link.label}>
                              <button
                                 className={colLink}
                                 onClick={() => go(link.path, link.href)}
                              >
                                 {link.label}
                                 <ArrowRight size={11} className={colArrow} />
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* ── Divider ── */}
            <div className={divider} />

            {/* ── Bottom bar ── */}
            <div className={footerBottom}>
               <p className={copyright}>
                  © {new Date().getFullYear()} ShopifyBazzar. Made with{" "}
                  <span className="text-[#ef4444]">♥</span> for Shopify
                  developers.
               </p>
               <div className={bottomLinks}>
                  <button
                     className={bottomLink}
                     onClick={() => navigate("/docs")}
                  >
                     Privacy Policy
                  </button>
                  <span className={bottomDot} />
                  <button
                     className={bottomLink}
                     onClick={() => navigate("/docs")}
                  >
                     Terms of Use
                  </button>
                  <span className={bottomDot} />
                  <button
                     className={bottomLink}
                     onClick={() => navigate("/docs")}
                  >
                     Sitemap
                  </button>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
