import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { getAllComponents } from "../../registry/componentRegistry";

// ── Animations ─────────────────────────────────────────────────

const slideDown = keyframes`
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const dropdownIn = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0);   }
`;

// ── Root ───────────────────────────────────────────────────────

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background: #ffffff;
    border-bottom: 1px solid var(--color-border);
    animation: ${slideDown} 0.28s ease both;
`;

const NavContainer = styled.div`
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding-x, 1.5rem);
    height: 66px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`;

// ── Logo (left) ────────────────────────────────────────────────

const Logo = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    font-family: var(--inter-font);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    justify-self: start;
    transition: opacity 0.15s ease;
    white-space: nowrap;
    line-height: 1;

    &:hover { opacity: 0.75; }
`;

const LogoShopify = styled.span`
    color: var(--color-text-main);
`;

const LogoBazzar = styled.span`
    color: var(--color-primary-blue);
`;

// ── Center Nav ─────────────────────────────────────────────────

const NavLinks = styled.nav`
    display: none;
    align-items: center;
    gap: 0.15rem;
    justify-self: center;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavLink = styled.button`
    position: relative;
    padding: 0.42rem 0.9rem;
    border-radius: var(--radius-sm, 8px);
    border: none;
    background: ${({ $active }) =>
        $active ? "rgba(37,99,235,0.07)" : "transparent"};
    color: ${({ $active }) =>
        $active ? "var(--color-primary-blue)" : "var(--color-text-secondary)"};
    font-weight: ${({ $active }) => ($active ? "600" : "500")};
    font-size: 0.875rem;
    font-family: var(--inter-font);
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.14s ease, color 0.14s ease;

    &:hover {
        background: rgba(37, 99, 235, 0.05);
        color: var(--color-text-main);
    }

    ${({ $active }) =>
        $active &&
        css`
            &::after {
                content: "";
                position: absolute;
                bottom: 3px;
                left: 50%;
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: var(--color-primary-blue);
            }
        `}
`;

// ── Right: Search ──────────────────────────────────────────────

const RightActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-self: end;
    position: relative;
`;

const SearchWrap = styled.div`
    position: relative;
`;

// Collapsed icon button — shown when search is closed
const SearchIconBtn = styled.button`
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm, 8px);
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.14s ease, border-color 0.14s ease, color 0.14s ease;

    &:hover {
        background: var(--color-bg-light);
        border-color: var(--color-border-hover);
        color: var(--color-text-main);
    }
`;

// Expanded search input bar
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: ${({ $open }) => ($open ? "260px" : "36px")};
    height: 36px;
    border: 1px solid ${({ $open }) =>
        $open ? "var(--color-primary-blue)" : "var(--color-border)"};
    border-radius: var(--radius-sm, 8px);
    background: ${({ $open }) => ($open ? "#ffffff" : "transparent")};
    padding: ${({ $open }) => ($open ? "0 10px" : "0")};
    overflow: hidden;
    transition: width 0.22s ease, border-color 0.15s ease, background 0.15s ease,
        box-shadow 0.15s ease;
    box-shadow: ${({ $open }) =>
        $open ? "0 0 0 3px rgba(37,99,235,0.1)" : "none"};
    cursor: ${({ $open }) => ($open ? "text" : "pointer")};
`;

const SearchIcon = styled.i`
    font-size: 0.8rem;
    color: ${({ $active }) =>
        $active ? "var(--color-primary-blue)" : "var(--color-text-secondary)"};
    flex-shrink: 0;
    transition: color 0.15s ease;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.84rem;
    font-family: var(--inter-font);
    color: var(--color-text-main);
    min-width: 0;
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    transition: opacity 0.15s ease;

    &::placeholder { color: var(--color-text-secondary); }
`;

const SearchClearBtn = styled.button`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: none;
    background: var(--color-border);
    color: var(--color-text-secondary);
    font-size: 0.55rem;
    display: ${({ $show }) => ($show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.12s ease;

    &:hover {
        background: var(--color-border-hover);
        color: var(--color-text-main);
    }
`;

// ── Search Dropdown ────────────────────────────────────────────

const Dropdown = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 320px;
    background: #ffffff;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md, 12px);
    box-shadow: 0 8px 32px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15,23,42,0.06);
    overflow: hidden;
    z-index: 60;
    animation: ${dropdownIn} 0.18s ease both;
`;

const DropdownSection = styled.div`
    padding: 8px 0;

    & + & {
        border-top: 1px solid var(--color-border);
    }
`;

const DropdownSectionLabel = styled.div`
    padding: 6px 14px 4px;
    font-size: 0.66rem;
    font-weight: 700;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-family: var(--inter-font);
`;

const DropdownItem = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    border: none;
    background: ${({ $focused }) =>
        $focused ? "rgba(37,99,235,0.06)" : "transparent"};
    cursor: pointer;
    text-align: left;
    transition: background 0.12s ease;

    &:hover { background: rgba(37, 99, 235, 0.06); }
`;

const ItemIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: ${({ $bg }) => $bg || "rgba(37,99,235,0.08)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: ${({ $color }) => $color || "var(--color-primary-blue)"};
    flex-shrink: 0;
`;

const ItemText = styled.div`
    flex: 1;
    min-width: 0;
`;

const ItemName = styled.div`
    font-size: 0.84rem;
    font-weight: 600;
    color: var(--color-text-main);
    font-family: var(--inter-font);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ItemMeta = styled.div`
    font-size: 0.72rem;
    color: var(--color-text-secondary);
    font-family: var(--inter-font);
    margin-top: 1px;
`;

const ItemArrow = styled.i`
    font-size: 0.65rem;
    color: var(--color-text-secondary);
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0.12s ease, transform 0.12s ease;

    ${DropdownItem}:hover & {
        opacity: 1;
        transform: translateX(2px);
    }
`;

const HighlightMatch = styled.mark`
    background: rgba(37, 99, 235, 0.12);
    color: var(--color-primary-blue);
    border-radius: 2px;
    font-weight: 700;
`;

const DropdownEmpty = styled.div`
    padding: 20px 14px;
    text-align: center;
    font-size: 0.84rem;
    color: var(--color-text-secondary);
    font-family: var(--inter-font);

    i {
        display: block;
        font-size: 1.3rem;
        margin-bottom: 6px;
        color: var(--color-border-hover);
    }
`;

const DropdownFooter = styled.div`
    padding: 8px 14px;
    border-top: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DropdownFooterText = styled.span`
    font-size: 0.7rem;
    color: var(--color-text-secondary);
    font-family: var(--inter-font);
`;

const KbdHint = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`;

const Kbd = styled.kbd`
    font-size: 0.62rem;
    font-family: var(--inter-font);
    background: var(--color-bg-light);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 1px 5px;
    color: var(--color-text-secondary);
`;

// ── Hamburger ──────────────────────────────────────────────────

const HamburgerBtn = styled.button`
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm, 8px);
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text-main);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.14s ease, border-color 0.14s ease;

    &:hover {
        background: var(--color-bg-light);
        border-color: var(--color-border-hover);
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

// ── Mobile Menu ────────────────────────────────────────────────

const MobileOverlay = styled.div`
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 98;
    animation: ${fadeIn} 0.2s ease;
`;

const MobileMenu = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: min(300px, 100vw);
    height: 100%;
    background: #ffffff;
    z-index: 99;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-shadow: -6px 0 30px rgba(0, 0, 0, 0.1);
    border-left: 1px solid var(--color-border);
    transform: ${({ $open }) =>
        $open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MobileMenuHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    flex-shrink: 0;
`;

const MobileMenuLabel = styled.span`
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-family: var(--inter-font);
`;

const MobileCloseBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 7px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-light);
    color: var(--color-text-main);
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.14s ease;

    &:hover { background: var(--color-border); }
`;

const MobileNavBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0.85rem 0.75rem;
`;

const MobileNavLink = styled.button`
    display: flex;
    align-items: center;
    gap: 0.85rem;
    width: 100%;
    padding: 0.72rem 0.85rem;
    border-radius: 10px;
    border: none;
    background: ${({ $active }) =>
        $active ? "rgba(37,99,235,0.07)" : "transparent"};
    color: ${({ $active }) =>
        $active ? "var(--color-primary-blue)" : "var(--color-text-main)"};
    font-size: 0.92rem;
    font-weight: ${({ $active }) => ($active ? "600" : "500")};
    font-family: var(--inter-font);
    cursor: pointer;
    text-align: left;
    transition: background 0.14s ease, color 0.14s ease;

    i {
        width: 18px;
        text-align: center;
        font-size: 0.82rem;
        color: ${({ $active }) =>
            $active
                ? "var(--color-primary-blue)"
                : "var(--color-text-secondary)"};
        flex-shrink: 0;
    }

    &:hover {
        background: var(--color-bg-light);
    }
`;

// ── Nav + Search Data ──────────────────────────────────────────

const NAV_LINKS = [
    { label: "Components", path: "/components", icon: "fa-puzzle-piece"         },
    { label: "Templates",  path: "/templates",  icon: "fa-layer-group"          },
    { label: "Docs",       path: "/docs",        icon: "fa-book-open"           },
];

// Icon + color config per section — matches your registry sections
const SECTION_META = {
    headers:       { icon: "fa-bars-staggered",  iconBg: "rgba(37,99,235,0.1)",   iconColor: "#2563eb" },
    hero:          { icon: "fa-image",            iconBg: "rgba(124,58,237,0.1)",  iconColor: "#7c3aed" },
    "product-cards": { icon: "fa-layer-group",   iconBg: "rgba(234,88,12,0.1)",   iconColor: "#ea580c" },
};

// ── Highlight helper ───────────────────────────────────────────

const highlight = (text, query) => {
    if (!query.trim()) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <HighlightMatch>{text.slice(idx, idx + query.length)}</HighlightMatch>
            {text.slice(idx + query.length)}
        </>
    );
};

// ── Component ─────────────────────────────────────────────────

const Header = () => {
    const [menuOpen,     setMenuOpen]     = useState(false);
    const [searchOpen,   setSearchOpen]   = useState(false);
    const [query,        setQuery]        = useState("");
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const navigate  = useNavigate();
    const location  = useLocation();
    const inputRef  = useRef(null);
    const wrapRef   = useRef(null);

    // Lock body scroll on mobile menu
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Close search on outside click
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

    // Focus input when search opens
    useEffect(() => {
        if (searchOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [searchOpen]);

    // ── Build search results from registry ────────────────────

    const allComponents = getAllComponents(); // returns flat array of all variants

    const results = useCallback(() => {
        if (!query.trim()) return [];

        const q = query.toLowerCase().trim();

        return allComponents.filter(
            (item) =>
                item.name.toLowerCase().includes(q) ||
                item.section.toLowerCase().includes(q) ||
                (item.description || "").toLowerCase().includes(q) ||
                (item.tags || []).some((t) => t.toLowerCase().includes(q))
        );
    }, [query, allComponents])();

    // Group results by section for display
    const grouped = results.reduce((acc, item) => {
        if (!acc[item.section]) acc[item.section] = [];
        acc[item.section].push(item);
        return acc;
    }, {});

    const groupKeys   = Object.keys(grouped);
    const flatResults = groupKeys.flatMap((k) => grouped[k]);
    const totalCount  = flatResults.length;

    // ── Keyboard navigation ────────────────────────────────────

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

    // ── Handlers ──────────────────────────────────────────────

    const handleSelectResult = (item) => {
        navigate(`/components/${item.section}/${item.id}`);
        setSearchOpen(false);
        setQuery("");
        setFocusedIndex(-1);
        setMenuOpen(false);
    };

    const handleSearchBarClick = () => {
        if (!searchOpen) setSearchOpen(true);
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

    // ── Render ─────────────────────────────────────────────────

    // Running flat index for keyboard focus
    let flatIndex = -1;

    return (
        <>
            <StyledHeader>
                <NavContainer>

                    {/* ── Left: Logo ── */}
                    <Logo onClick={() => go("/")} aria-label="Home">
                        <LogoShopify>Shopify</LogoShopify>
                        <LogoBazzar>Bazzar</LogoBazzar>
                    </Logo>

                    {/* ── Center: Nav ── */}
                    <NavLinks aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.label}
                                $active={isActive(link.path)}
                                onClick={() => go(link.path)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </NavLinks>

                    {/* ── Right: Search + hamburger ── */}
                    <RightActions>
                        <SearchWrap ref={wrapRef}>
                            {/* Collapsed icon */}
                            {!searchOpen && (
                                <SearchIconBtn
                                    aria-label="Open search"
                                    onClick={handleSearchBarClick}
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </SearchIconBtn>
                            )}

                            {/* Expanded bar */}
                            {searchOpen && (
                                <SearchBar $open={searchOpen}>
                                    <SearchIcon
                                        className="fa-solid fa-magnifying-glass"
                                        $active={searchOpen}
                                    />
                                    <SearchInput
                                        ref={inputRef}
                                        $open={searchOpen}
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
                                    <SearchClearBtn
                                        $show={query.length > 0}
                                        onClick={handleClear}
                                        aria-label="Clear search"
                                        tabIndex={-1}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </SearchClearBtn>
                                </SearchBar>
                            )}

                            {/* ── Dropdown ── */}
                            {searchOpen && (
                                <Dropdown role="listbox">
                                    {/* No query yet → show all sections */}
                                    {!query.trim() && (
                                        <DropdownSection>
                                            <DropdownSectionLabel>
                                                Browse sections
                                            </DropdownSectionLabel>
                                            {Object.entries(SECTION_META).map(
                                                ([sec, meta]) => {
                                                    flatIndex++;
                                                    const fi = flatIndex;
                                                    return (
                                                        <DropdownItem
                                                            key={sec}
                                                            $focused={focusedIndex === fi}
                                                            onClick={() => {
                                                                go(`/components/${sec}`);
                                                                setSearchOpen(false);
                                                            }}
                                                            role="option"
                                                        >
                                                            <ItemIcon
                                                                $bg={meta.iconBg}
                                                                $color={meta.iconColor}
                                                            >
                                                                <i className={`fa-solid ${meta.icon}`}></i>
                                                            </ItemIcon>
                                                            <ItemText>
                                                                <ItemName>
                                                                    {sec
                                                                        .replace(/-/g, " ")
                                                                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                                                                </ItemName>
                                                                <ItemMeta>
                                                                    {grouped[sec]?.length ?? 3} variants
                                                                </ItemMeta>
                                                            </ItemText>
                                                            <ItemArrow className="fa-solid fa-arrow-right" />
                                                        </DropdownItem>
                                                    );
                                                }
                                            )}
                                        </DropdownSection>
                                    )}

                                    {/* Has query + has results */}
                                    {query.trim() && totalCount > 0 &&
                                        groupKeys.map((sec) => (
                                            <DropdownSection key={sec}>
                                                <DropdownSectionLabel>
                                                    {sec
                                                        .replace(/-/g, " ")
                                                        .replace(/\b\w/g, (c) =>
                                                            c.toUpperCase()
                                                        )}
                                                </DropdownSectionLabel>

                                                {grouped[sec].map((item) => {
                                                    flatIndex++;
                                                    const fi    = flatIndex;
                                                    const meta  = SECTION_META[sec] ?? {};
                                                    return (
                                                        <DropdownItem
                                                            key={item.id}
                                                            $focused={focusedIndex === fi}
                                                            onClick={() =>
                                                                handleSelectResult(item)
                                                            }
                                                            role="option"
                                                        >
                                                            <ItemIcon
                                                                $bg={meta.iconBg}
                                                                $color={meta.iconColor}
                                                            >
                                                                <i className={`fa-solid ${meta.icon}`}></i>
                                                            </ItemIcon>
                                                            <ItemText>
                                                                <ItemName>
                                                                    {highlight(item.name, query)}
                                                                </ItemName>
                                                                <ItemMeta>
                                                                    {sec.replace(/-/g, " ")} · {item.id}
                                                                </ItemMeta>
                                                            </ItemText>
                                                            <ItemArrow className="fa-solid fa-arrow-right" />
                                                        </DropdownItem>
                                                    );
                                                })}
                                            </DropdownSection>
                                        ))}

                                    {/* Has query + no results */}
                                    {query.trim() && totalCount === 0 && (
                                        <DropdownEmpty>
                                            <i className="fa-regular fa-face-frown-open"></i>
                                            No components found for
                                            <br />
                                            <strong>"{query}"</strong>
                                        </DropdownEmpty>
                                    )}

                                    {/* Footer hint */}
                                    <DropdownFooter>
                                        <DropdownFooterText>
                                            {totalCount > 0
                                                ? `${totalCount} result${totalCount === 1 ? "" : "s"}`
                                                : "Start typing to search"}
                                        </DropdownFooterText>
                                        <KbdHint>
                                            <Kbd>↑</Kbd>
                                            <Kbd>↓</Kbd>
                                            <DropdownFooterText>navigate</DropdownFooterText>
                                            <Kbd>↵</Kbd>
                                            <DropdownFooterText>open</DropdownFooterText>
                                            <Kbd>Esc</Kbd>
                                            <DropdownFooterText>close</DropdownFooterText>
                                        </KbdHint>
                                    </DropdownFooter>
                                </Dropdown>
                            )}
                        </SearchWrap>

                        <HamburgerBtn
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(true)}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </HamburgerBtn>
                    </RightActions>

                </NavContainer>
            </StyledHeader>

            {/* ── Mobile Menu ── */}
            <MobileOverlay
                $open={menuOpen}
                onClick={() => setMenuOpen(false)}
            />
            <MobileMenu $open={menuOpen} aria-label="Mobile navigation">
                <MobileMenuHead>
                    <MobileMenuLabel>Menu</MobileMenuLabel>
                    <MobileCloseBtn
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </MobileCloseBtn>
                </MobileMenuHead>
                <MobileNavBody>
                    {NAV_LINKS.map((link) => (
                        <MobileNavLink
                            key={link.label}
                            $active={isActive(link.path)}
                            onClick={() => go(link.path)}
                        >
                            <i className={`fa-solid ${link.icon}`}></i>
                            {link.label}
                        </MobileNavLink>
                    ))}
                </MobileNavBody>
            </MobileMenu>
        </>
    );
};

export default Header;
