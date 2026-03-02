import { useState, useEffect } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const StyledHeader = styled.header`
    padding: 1.5rem 0;
    background: linear-gradient(
        90deg,
        var(--color-bg-gradient-start) 0%,
        var(--color-bg-gradient-mid) 50%,
        var(--color-bg-gradient-end) 100%
    );
`;

const NavContainer = styled.div`
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: var(--container-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-main);
    letter-spacing: -0.025em;

    svg {
        height: 32px;
        width: auto;
    }
`;

const NavLinks = styled.nav`
    display: none;
    gap: 2rem;

    a {
        color: var(--color-text-secondary);
        font-weight: 500;
        font-size: 0.95rem;
        font-family: var(--inter-font);

        &:hover {
            color: var(--color-primary-purple);
        }
    }

    @media (min-width: 768px) {
        display: flex;
    }
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`;

const IconBtn = styled.button`
    color: var(--color-text-secondary);
    font-size: 1.1rem;
    transition: var(--transition-fast);
    padding: 0.25rem;

    &:hover {
        color: var(--color-text-main);
    }
`;

const HamburgerBtn = styled(IconBtn)`
    font-size: 1.25rem;
    color: var(--color-text-main);

    @media (min-width: 768px) {
        display: none;
    }
`;

// ── Mobile Menu ────────────────────────────────────────────────

const MobileMenu = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg-white);
    z-index: 100;
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
`;

const MobileMenuClose = styled.button`
    align-self: flex-end;
    font-size: 1.5rem;
    color: var(--color-text-main);
    background: none;
    border: none;
    cursor: pointer;
`;

const MobileNavLink = styled.a`
    font-size: 1.25rem;
    color: var(--color-text-main);
    font-weight: 600;
    font-family: var(--inter-font);

    &:hover {
        color: var(--color-primary-purple);
    }
`;

// ── Nav Data ───────────────────────────────────────────────────

const navLinks = [
    { label: "Components", href: "#" },
    { label: "Templates",  href: "#" },
    { label: "Work With Us", href: "#" },
];

// ── Component ─────────────────────────────────────────────────

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <StyledHeader>
                <NavContainer>
                    {/* Logo */}
                    <Logo href="#">
                        <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0001 0L50 15.0001L25.0001 30.0002L0 15.0001L25.0001 0Z" fill="#2563EB" fillOpacity="0.2"/>
                            <path d="M12 18L25 26L38 18" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 5L10 14L25 23L40 14L25 5Z" fill="#2563EB"/>
                        </svg>
                        merakiui
                    </Logo>

                    {/* Desktop Nav */}
                    <NavLinks>
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href}>{link.label}</a>
                        ))}
                    </NavLinks>

                    {/* Actions */}
                    <HeaderActions>
                        <IconBtn aria-label="Search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </IconBtn>
                        <IconBtn aria-label="Toggle Dark Mode">
                            <i className="fa-solid fa-moon"></i>
                        </IconBtn>
                        <HamburgerBtn
                            aria-label="Open Menu"
                            onClick={() => setMenuOpen(true)}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </HamburgerBtn>
                    </HeaderActions>
                </NavContainer>
            </StyledHeader>

            {/* Mobile Menu Overlay */}
            <MobileMenu $isOpen={menuOpen}>
                <MobileMenuClose
                    aria-label="Close Menu"
                    onClick={() => setMenuOpen(false)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </MobileMenuClose>
                {navLinks.map((link) => (
                    <MobileNavLink
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </MobileNavLink>
                ))}
            </MobileMenu>
        </>
    );
};

export default Header;
