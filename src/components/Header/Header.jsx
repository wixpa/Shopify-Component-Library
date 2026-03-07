import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
   FiSearch,
   FiX,
   FiMenu,
   FiArrowRight,
   FiAlignLeft,
   FiImage,
   FiLayers,
   FiGrid,
   FiBookOpen,
   FiFrown,
} from "react-icons/fi";
import { getAllComponents } from "../../registry/componentRegistry";

// ── Nav Data ───────────────────────────────────────────────────
const NAV_LINKS = [
   { label: "Components", path: "/components", Icon: FiGrid },
   { label: "Templates", path: "/templates", Icon: FiLayers },
   { label: "Docs", path: "/docs", Icon: FiBookOpen },
];

const SECTION_META = {
   headers: {
      Icon: FiAlignLeft,
      iconBg: "rgba(37,99,235,0.1)",
      iconColor: "#2563eb",
   },
   hero: {
      Icon: FiImage,
      iconBg: "rgba(124,58,237,0.1)",
      iconColor: "#7c3aed",
   },
   "product-cards": {
      Icon: FiLayers,
      iconBg: "rgba(234,88,12,0.1)",
      iconColor: "#ea580c",
   },
};

// ── Highlight helper ───────────────────────────────────────────
const highlight = (text, query) => {
   if (!query.trim()) return text;
   const idx = text.toLowerCase().indexOf(query.toLowerCase());
   if (idx === -1) return text;
   return (
      <>
         {text.slice(0, idx)}
         <mark className={highlightMark}>
            {text.slice(idx, idx + query.length)}
         </mark>
         {text.slice(idx + query.length)}
      </>
   );
};

// ── Tailwind Class Variables ───────────────────────────────────

const styledHeader =
   "sticky top-0 z-50 bg-white border-b border-[#e5e7eb] animate-[slideDown_0.28s_ease_both]";
const navContainer =
   "max-w-[1280px] mx-auto px-6 h-[66px] grid grid-cols-[1fr_auto_1fr] items-center";

const logo =
   "flex items-center text-[1.1rem] font-extrabold tracking-[-0.04em] font-[var(--inter-font)] cursor-pointer p-0 justify-self-start transition-opacity duration-150 whitespace-nowrap leading-none hover:opacity-75 bg-transparent border-none";
const logoShopify = "text-[#111827]";
const logoBazzar = "text-[#2563eb]";

const navLinks = "hidden md:flex items-center gap-1 justify-self-center";
const navLinkBase =
   "relative px-[0.9rem] py-[0.42rem] rounded-md border-none text-sm font-[var(--inter-font)] cursor-pointer whitespace-nowrap transition-all duration-150";
const navLinkInactive =
   "bg-transparent text-[#4b5563] font-medium hover:bg-[rgba(37,99,235,0.05)] hover:text-[#111827]";
const navLinkActive = "bg-[rgba(37,99,235,0.07)] text-[#2563eb] font-semibold";

const rightActions = "flex items-center gap-2 justify-self-end relative";
const searchWrap = "relative";

const searchIconBtn =
   "w-9 h-9 rounded-md border border-[#e5e7eb] bg-transparent text-[#4b5563] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:text-[#111827]";
const searchBarOpen =
   "flex items-center gap-2 w-[260px] h-9 border border-[#2563eb] rounded-md bg-white px-[10px] overflow-hidden transition-all duration-200 shadow-[0_0_0_3px_rgba(37,99,235,0.1)] cursor-text";
const searchIconCls =
   "text-[#2563eb] flex-shrink-0 transition-colors duration-150 text-sm";
const searchInput =
   "flex-1 border-none outline-none bg-transparent text-[0.84rem] font-[var(--inter-font)] text-[#111827] min-w-0 placeholder:text-[#4b5563]";
const searchClearBtn =
   "w-[18px] h-[18px] rounded-full border-none bg-[#e5e7eb] text-[#4b5563] flex items-center justify-center cursor-pointer flex-shrink-0 transition-all duration-150 hover:bg-[#d1d5db] hover:text-[#111827]";

const dropdown =
   "absolute top-[calc(100%+8px)] right-0 w-80 bg-white border border-[#e5e7eb] rounded-xl shadow-[0_8px_32px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden z-[60] animate-[dropdownIn_0.18s_ease_both]";
const dropdownSection = "py-2 [&+&]:border-t [&+&]:border-[#e5e7eb]";
const dropdownLabel =
   "px-[14px] py-1 text-[0.66rem] font-bold text-[#4b5563] uppercase tracking-[0.09em] font-[var(--inter-font)]";
const dropdownItemBase =
   "w-full flex items-center gap-[10px] px-[14px] py-2 border-none cursor-pointer text-left transition-colors duration-150 hover:bg-[rgba(37,99,235,0.06)]";
const dropdownItemFocused = "bg-[rgba(37,99,235,0.06)]";
const dropdownItemNormal = "bg-transparent";
const itemText = "flex-1 min-w-0";
const itemName =
   "text-[0.84rem] font-semibold text-[#111827] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis";
const itemMeta =
   "text-[0.72rem] text-[#4b5563] font-[var(--inter-font)] mt-[1px]";
const itemArrow =
   "text-[#4b5563] flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-150 text-xs";
const highlightMark =
   "bg-[rgba(37,99,235,0.12)] text-[#2563eb] rounded-[2px] font-bold";
const dropdownEmpty =
   "p-5 text-center text-[0.84rem] text-[#4b5563] font-[var(--inter-font)]";
const dropdownFooter =
   "px-[14px] py-2 border-t border-[#e5e7eb] flex items-center justify-between";
const dropdownFooterText =
   "text-[0.7rem] text-[#4b5563] font-[var(--inter-font)]";
const kbdHint = "inline-flex items-center gap-[3px]";
const kbd =
   "text-[0.62rem] font-[var(--inter-font)] bg-[#f9fafb] border border-[#e5e7eb] rounded px-[5px] py-[1px] text-[#4b5563]";

const hamburgerBtn =
   "w-9 h-9 rounded-md border border-[#e5e7eb] bg-transparent text-[#111827] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-[#f9fafb] hover:border-[#d1d5db] md:hidden";

const mobileOverlayOpen =
   "block fixed inset-0 bg-black/35 backdrop-blur-[3px] z-[98] animate-[fadeIn_0.2s_ease]";
const mobileOverlayClosed = "hidden";
const mobileMenuBase =
   "fixed top-0 right-0 w-[min(300px,100vw)] h-full bg-white z-[99] flex flex-col overflow-y-auto shadow-[-6px_0_30px_rgba(0,0,0,0.1)] border-l border-[#e5e7eb] transition-transform duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)]";
const mobileMenuOpen = "translate-x-0";
const mobileMenuClosed = "translate-x-full";
const mobileMenuHead =
   "flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb] flex-shrink-0";
const mobileMenuLabel =
   "text-[0.72rem] font-bold text-[#4b5563] uppercase tracking-[0.09em] font-[var(--inter-font)]";
const mobileCloseBtn =
   "w-[30px] h-[30px] rounded-[7px] border border-[#e5e7eb] bg-[#f9fafb] text-[#111827] flex items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-[#e5e7eb]";
const mobileNavBody = "flex-1 flex flex-col gap-[2px] px-3 py-[0.85rem]";
const mobileNavLinkBase =
   "flex items-center gap-[0.85rem] w-full px-[0.85rem] py-[0.72rem] rounded-[10px] border-none text-[0.92rem] font-[var(--inter-font)] cursor-pointer text-left transition-all duration-150 hover:bg-[#f9fafb]";
const mobileNavLinkInactive = "bg-transparent text-[#111827] font-medium";
const mobileNavLinkActive =
   "bg-[rgba(37,99,235,0.07)] text-[#2563eb] font-semibold";
const mobileNavIconInactive = "text-[#4b5563] flex-shrink-0";
const mobileNavIconActive = "text-[#2563eb] flex-shrink-0";

// ── Component ──────────────────────────────────────────────────
const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [searchOpen, setSearchOpen] = useState(false);
   const [query, setQuery] = useState("");
   const [focusedIndex, setFocusedIndex] = useState(-1);

   const navigate = useNavigate();
   const location = useLocation();
   const inputRef = useRef(null);
   const wrapRef = useRef(null);

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
      return () => {
         document.body.style.overflow = "";
      };
   }, [menuOpen]);

   useEffect(() => {
      const handler = (e) => {
         if (wrapRef.current && !wrapRef.current.contains(e.target)) {
            setSearchOpen(false);
            setQuery("");
            setFocusedIndex(-1);
         }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
   }, []);

   useEffect(() => {
      if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
   }, [searchOpen]);

   const allComponents = getAllComponents();

   const results = useCallback(() => {
      if (!query.trim()) return [];
      const q = query.toLowerCase().trim();
      return allComponents.filter(
         (item) =>
            item.name.toLowerCase().includes(q) ||
            item.section.toLowerCase().includes(q) ||
            (item.description || "").toLowerCase().includes(q) ||
            (item.tags || []).some((t) => t.toLowerCase().includes(q)),
      );
   }, [query, allComponents])();

   const grouped = results.reduce((acc, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
   }, {});

   const groupKeys = Object.keys(grouped);
   const flatResults = groupKeys.flatMap((k) => grouped[k]);
   const totalCount = flatResults.length;

   const handleKeyDown = (e) => {
      if (!searchOpen) return;
      if (e.key === "ArrowDown") {
         e.preventDefault();
         setFocusedIndex((p) => Math.min(p + 1, totalCount - 1));
      } else if (e.key === "ArrowUp") {
         e.preventDefault();
         setFocusedIndex((p) => Math.max(p - 1, 0));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
         e.preventDefault();
         const item = flatResults[focusedIndex];
         if (item) handleSelectResult(item);
      } else if (e.key === "Escape") {
         setSearchOpen(false);
         setQuery("");
         setFocusedIndex(-1);
      }
   };

   const handleSelectResult = (item) => {
      navigate(`/components/${item.section}/${item.id}`);
      setSearchOpen(false);
      setQuery("");
      setFocusedIndex(-1);
      setMenuOpen(false);
   };

   const handleClear = () => {
      setQuery("");
      setFocusedIndex(-1);
      inputRef.current?.focus();
   };

   const go = (path) => {
      navigate(path);
      setMenuOpen(false);
   };

   const isActive = (path) =>
      path === "/"
         ? location.pathname === "/"
         : location.pathname.startsWith(path);

   let flatIndex = -1;

   return (
      <>
         <header className={styledHeader}>
            <div className={navContainer}>
               {/* ── Logo ── */}
               <button
                  className={logo}
                  onClick={() => go("/")}
                  aria-label="Home"
               >
                  <span className={logoShopify}>Shopify</span>
                  <span className={logoBazzar}>Bazzar</span>
               </button>

               {/* ── Center Nav ── */}
               <nav className={navLinks} aria-label="Main navigation">
                  {NAV_LINKS.map(({ label, path }) => (
                     <button
                        key={label}
                        className={`${navLinkBase} ${isActive(path) ? navLinkActive : navLinkInactive}`}
                        onClick={() => go(path)}
                     >
                        {label}
                        {isActive(path) && (
                           <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2563eb]" />
                        )}
                     </button>
                  ))}
               </nav>

               {/* ── Right: Search + Hamburger ── */}
               <div className={rightActions}>
                  <div className={searchWrap} ref={wrapRef}>
                     {/* Collapsed search icon button */}
                     {!searchOpen && (
                        <button
                           className={searchIconBtn}
                           aria-label="Open search"
                           onClick={() => setSearchOpen(true)}
                        >
                           <FiSearch size={15} />
                        </button>
                     )}

                     {/* Expanded search bar */}
                     {searchOpen && (
                        <div className={searchBarOpen}>
                           <FiSearch size={14} className={searchIconCls} />
                           <input
                              ref={inputRef}
                              className={searchInput}
                              value={query}
                              onChange={(e) => {
                                 setQuery(e.target.value);
                                 setFocusedIndex(-1);
                              }}
                              onKeyDown={handleKeyDown}
                              placeholder="Search components…"
                              aria-label="Search components"
                              autoComplete="off"
                              spellCheck={false}
                           />
                           {query.length > 0 && (
                              <button
                                 className={searchClearBtn}
                                 onClick={handleClear}
                                 aria-label="Clear search"
                                 tabIndex={-1}
                              >
                                 <FiX size={10} />
                              </button>
                           )}
                        </div>
                     )}

                     {/* ── Dropdown ── */}
                     {searchOpen && (
                        <div className={dropdown} role="listbox">
                           {/* No query → browse sections */}
                           {!query.trim() && (
                              <div className={dropdownSection}>
                                 <div className={dropdownLabel}>
                                    Browse sections
                                 </div>
                                 {Object.entries(SECTION_META).map(
                                    ([sec, meta]) => {
                                       flatIndex++;
                                       const fi = flatIndex;
                                       const SectionIcon = meta.Icon;
                                       return (
                                          <button
                                             key={sec}
                                             className={`${dropdownItemBase} ${focusedIndex === fi ? dropdownItemFocused : dropdownItemNormal} group`}
                                             onClick={() => {
                                                go(`/components/${sec}`);
                                                setSearchOpen(false);
                                             }}
                                             role="option"
                                          >
                                             <div
                                                className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                   background: meta.iconBg,
                                                   color: meta.iconColor,
                                                }}
                                             >
                                                <SectionIcon size={13} />
                                             </div>
                                             <div className={itemText}>
                                                <div className={itemName}>
                                                   {sec
                                                      .replace(/-/g, " ")
                                                      .replace(/\b\w/g, (c) =>
                                                         c.toUpperCase(),
                                                      )}
                                                </div>
                                                <div className={itemMeta}>
                                                   {grouped[sec]?.length ?? 3}{" "}
                                                   variants
                                                </div>
                                             </div>
                                             <FiArrowRight
                                                size={11}
                                                className={itemArrow}
                                             />
                                          </button>
                                       );
                                    },
                                 )}
                              </div>
                           )}

                           {/* Has query + results */}
                           {query.trim() &&
                              totalCount > 0 &&
                              groupKeys.map((sec) => (
                                 <div key={sec} className={dropdownSection}>
                                    <div className={dropdownLabel}>
                                       {sec
                                          .replace(/-/g, " ")
                                          .replace(/\b\w/g, (c) =>
                                             c.toUpperCase(),
                                          )}
                                    </div>
                                    {grouped[sec].map((item) => {
                                       flatIndex++;
                                       const fi = flatIndex;
                                       const meta = SECTION_META[sec] ?? {};
                                       const SectionIcon = meta.Icon;
                                       return (
                                          <button
                                             key={item.id}
                                             className={`${dropdownItemBase} ${focusedIndex === fi ? dropdownItemFocused : dropdownItemNormal} group`}
                                             onClick={() =>
                                                handleSelectResult(item)
                                             }
                                             role="option"
                                          >
                                             <div
                                                className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                   background: meta.iconBg,
                                                   color: meta.iconColor,
                                                }}
                                             >
                                                {SectionIcon && (
                                                   <SectionIcon size={13} />
                                                )}
                                             </div>
                                             <div className={itemText}>
                                                <div className={itemName}>
                                                   {highlight(item.name, query)}
                                                </div>
                                                <div className={itemMeta}>
                                                   {sec.replace(/-/g, " ")} ·{" "}
                                                   {item.id}
                                                </div>
                                             </div>
                                             <FiArrowRight
                                                size={11}
                                                className={itemArrow}
                                             />
                                          </button>
                                       );
                                    })}
                                 </div>
                              ))}

                           {/* Has query + no results */}
                           {query.trim() && totalCount === 0 && (
                              <div className={dropdownEmpty}>
                                 <FiFrown
                                    size={22}
                                    className="mx-auto mb-[6px] text-[#d1d5db]"
                                 />
                                 No components found for <br />
                                 <strong>"{query}"</strong>
                              </div>
                           )}

                           {/* Footer */}
                           <div className={dropdownFooter}>
                              <span className={dropdownFooterText}>
                                 {totalCount > 0
                                    ? `${totalCount} result${totalCount === 1 ? "" : "s"}`
                                    : "Start typing to search"}
                              </span>
                              <span className={kbdHint}>
                                 <kbd className={kbd}>↑</kbd>
                                 <kbd className={kbd}>↓</kbd>
                                 <span className={dropdownFooterText}>
                                    navigate
                                 </span>
                                 <kbd className={kbd}>↵</kbd>
                                 <span className={dropdownFooterText}>
                                    open
                                 </span>
                                 <kbd className={kbd}>Esc</kbd>
                                 <span className={dropdownFooterText}>
                                    close
                                 </span>
                              </span>
                           </div>
                        </div>
                     )}
                  </div>

                  {/* Hamburger */}
                  <button
                     className={hamburgerBtn}
                     aria-label="Open menu"
                     onClick={() => setMenuOpen(true)}
                  >
                     <FiMenu size={17} />
                  </button>
               </div>
            </div>
         </header>

         {/* ── Mobile Overlay ── */}
         <div
            className={menuOpen ? mobileOverlayOpen : mobileOverlayClosed}
            onClick={() => setMenuOpen(false)}
         />

         {/* ── Mobile Menu ── */}
         <aside
            className={`${mobileMenuBase} ${menuOpen ? mobileMenuOpen : mobileMenuClosed}`}
            aria-label="Mobile navigation"
         >
            <div className={mobileMenuHead}>
               <span className={mobileMenuLabel}>Menu</span>
               <button
                  className={mobileCloseBtn}
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
               >
                  <FiX size={14} />
               </button>
            </div>
            <div className={mobileNavBody}>
               {NAV_LINKS.map(({ label, path, Icon }) => (
                  <button
                     key={label}
                     className={`${mobileNavLinkBase} ${isActive(path) ? mobileNavLinkActive : mobileNavLinkInactive}`}
                     onClick={() => go(path)}
                  >
                     <Icon
                        size={15}
                        className={
                           isActive(path)
                              ? mobileNavIconActive
                              : mobileNavIconInactive
                        }
                     />
                     {label}
                  </button>
               ))}
            </div>
         </aside>
      </>
   );
};

export default Header;
