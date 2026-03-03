import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// ── Animations ─────────────────────────────────────────────────

const checkPop = keyframes`
    from { transform: scale(0.7); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
`;

// ── Root ───────────────────────────────────────────────────────

const StyledFooter = styled.footer`
   background: #ffffff;
   border-top: 1px solid var(--color-border);
   padding: 4rem 0 2rem;
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: 0 var(--container-padding-x, 1.5rem);
`;

// ── Top grid ───────────────────────────────────────────────────

const FooterGrid = styled.div`
   display: grid;
   grid-template-columns: 1.6fr 1fr 1fr 1fr;
   gap: 2.5rem;
   margin-bottom: 3.5rem;

   @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem 3rem;
   }

   @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`;

// ── Brand column ───────────────────────────────────────────────

const BrandCol = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding-right: 1.5rem;

   @media (max-width: 1024px) {
      grid-column: span 2;
      padding-right: 0;
      max-width: 460px;
   }

   @media (max-width: 640px) {
      grid-column: span 1;
      max-width: 100%;
   }
`;

const BrandLogo = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0;
   font-size: 1.1rem;
   font-weight: 800;
   letter-spacing: -0.035em;
   font-family: var(--inter-font);
   background: none;
   border: none;
   cursor: pointer;
   padding: 0;
   width: fit-content;
   transition: opacity 0.15s ease;

   &:hover {
      opacity: 0.75;
   }
`;

const LogoShopify = styled.span`
   color: var(--color-text-main);
`;

const LogoBazzar = styled.span`
   color: var(--color-primary-blue);
`;

const BrandDesc = styled.p`
   font-size: 0.82rem;
   color: var(--color-text-secondary);
   line-height: 1.7;
   font-family: var(--inter-font);
   max-width: 320px;
`;

// Social icons
const SocialRow = styled.div`
   display: flex;
   gap: 0.5rem;
   margin-top: 0.25rem;
`;

const SocialBtn = styled.a`
   width: 32px;
   height: 32px;
   border-radius: 8px;
   border: 1px solid var(--color-border);
   background: transparent;
   color: var(--color-text-secondary);
   font-size: 0.78rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition:
      background 0.14s ease,
      border-color 0.14s ease,
      color 0.14s ease;
   text-decoration: none;

   &:hover {
      background: var(--color-bg-light);
      border-color: var(--color-border-hover);
      color: var(--color-text-main);
   }
`;

// ── Newsletter ─────────────────────────────────────────────────

const NewsletterWrap = styled.div`
   margin-top: 0.5rem;
   display: flex;
   flex-direction: column;
   gap: 0.6rem;
`;

const NewsletterLabel = styled.label`
   font-size: 0.72rem;
   font-weight: 700;
   color: var(--color-text-main);
   text-transform: uppercase;
   letter-spacing: 0.07em;
   font-family: var(--inter-font);
`;

const NewsletterForm = styled.form`
   display: flex;
   gap: 0.5rem;
   max-width: 360px;

   @media (max-width: 480px) {
      flex-direction: column;
      max-width: 100%;
   }
`;

const NewsletterInput = styled.input`
   flex: 1;
   min-width: 0;
   padding: 0.6rem 0.9rem;
   border: 1px solid var(--color-border);
   border-radius: 8px;
   font-size: 0.82rem;
   color: var(--color-text-main);
   font-family: var(--inter-font);
   background: var(--color-bg-light, #f9fafb);
   outline: none;
   transition:
      border-color 0.14s ease,
      box-shadow 0.14s ease;

   &::placeholder {
      color: var(--color-text-secondary);
   }

   &:focus {
      border-color: var(--color-primary-blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      background: #ffffff;
   }
`;

const BtnSubscribe = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   padding: 0.6rem 1.1rem;
   border-radius: 8px;
   border: none;
   font-weight: 600;
   font-size: 0.8rem;
   font-family: var(--inter-font);
   cursor: pointer;
   white-space: nowrap;
   transition:
      background 0.2s ease,
      transform 0.12s ease;
   background: ${({ $subscribed }) =>
      $subscribed ? "#16a34a" : "var(--color-primary-dark)"};
   color: #ffffff;

   i {
      font-size: 0.7rem;
      animation: ${({ $subscribed }) => ($subscribed ? checkPop : "none")} 0.3s
         ease both;
   }

   &:hover {
      background: ${({ $subscribed }) => ($subscribed ? "#15803d" : "#1e293b")};
      transform: translateY(-1px);
   }
   &:active {
      transform: translateY(0);
   }

   @media (max-width: 480px) {
      width: 100%;
      justify-content: center;
   }
`;

const SubscribeNote = styled.p`
   font-size: 0.68rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   line-height: 1.5;
`;

// ── Link columns ───────────────────────────────────────────────

const FooterCol = styled.div``;

const ColTitle = styled.h3`
   font-size: 0.78rem;
   font-weight: 700;
   color: var(--color-text-main);
   margin-bottom: 1.1rem;
   text-transform: uppercase;
   letter-spacing: 0.07em;
   font-family: var(--inter-font);
`;

const ColList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 0.65rem;
   list-style: none;
   padding: 0;
   margin: 0;
`;

const ColLink = styled.button`
   background: none;
   border: none;
   padding: 0;
   color: var(--color-text-secondary);
   font-size: 0.82rem;
   font-family: var(--inter-font);
   cursor: pointer;
   text-align: left;
   transition: color 0.14s ease;
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;

   i {
      font-size: 0.65rem;
      opacity: 0;
      transition:
         opacity 0.14s ease,
         transform 0.14s ease;
   }

   &:hover {
      color: var(--color-text-main);

      i {
         opacity: 1;
         transform: translateX(2px);
      }
   }
`;

// ── Divider ────────────────────────────────────────────────────

const Divider = styled.div`
   width: 100%;
   height: 1px;
   background: var(--color-border);
   margin-bottom: 1.75rem;
`;

// ── Footer bottom ──────────────────────────────────────────────

const FooterBottom = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   flex-wrap: wrap;

   @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.75rem;
   }
`;

const Copyright = styled.p`
   font-size: 0.75rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   line-height: 1.5;

   span {
      color: #ef4444;
   }
`;

const BottomLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 1.25rem;
`;

const BottomLink = styled.button`
   background: none;
   border: none;
   padding: 0;
   font-size: 0.72rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   cursor: pointer;
   transition: color 0.14s ease;

   &:hover {
      color: var(--color-text-main);
   }
`;

const BottomDot = styled.span`
   width: 3px;
   height: 3px;
   border-radius: 50%;
   background: var(--color-border-hover);
   flex-shrink: 0;
`;

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
   { icon: "fa-github", label: "GitHub", href: "https://github.com" },
   { icon: "fa-twitter", label: "Twitter", href: "https://twitter.com" },
   { icon: "fa-linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

// ── Component ─────────────────────────────────────────────────

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
      <StyledFooter>
         <Container>
            <FooterGrid>
               {/* ── Brand + Newsletter ── */}
               <BrandCol>
                  <BrandLogo onClick={() => navigate("/")}>
                     <LogoShopify>Shopify</LogoShopify>
                     <LogoBazzar>Bazzar</LogoBazzar>
                  </BrandLogo>

                  <BrandDesc>
                     A free, growing library of production-ready Shopify section
                     components. Copy, paste, and go live in minutes — no Liquid
                     knowledge required.
                  </BrandDesc>

                  <SocialRow>
                     {SOCIAL.map((s) => (
                        <SocialBtn
                           key={s.label}
                           href={s.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={s.label}
                        >
                           <i className={`fa-brands ${s.icon}`}></i>
                        </SocialBtn>
                     ))}
                  </SocialRow>

                  {/* Newsletter */}
                  <NewsletterWrap>
                     <NewsletterLabel htmlFor="footer-email">
                        Stay updated
                     </NewsletterLabel>
                     <NewsletterForm onSubmit={handleSubmit}>
                        <NewsletterInput
                           id="footer-email"
                           type="email"
                           placeholder="your@email.com"
                           aria-label="Email address"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                        <BtnSubscribe type="submit" $subscribed={subscribed}>
                           {subscribed ? (
                              <>
                                 <i className="fa-solid fa-check"></i>
                                 Done!
                              </>
                           ) : (
                              <>
                                 <i className="fa-solid fa-paper-plane"></i>
                                 Subscribe
                              </>
                           )}
                        </BtnSubscribe>
                     </NewsletterForm>
                     <SubscribeNote>
                        New sections and templates straight to your inbox. No
                        spam, unsubscribe any time.
                     </SubscribeNote>
                  </NewsletterWrap>
               </BrandCol>

               {/* ── Link columns ── */}
               {FOOTER_COLS.map((col) => (
                  <FooterCol key={col.id}>
                     <ColTitle>{col.title}</ColTitle>
                     <ColList>
                        {col.links.map((link) => (
                           <li key={link.label}>
                              <ColLink onClick={() => go(link.path, link.href)}>
                                 {link.label}
                                 <i className="fa-solid fa-arrow-right"></i>
                              </ColLink>
                           </li>
                        ))}
                     </ColList>
                  </FooterCol>
               ))}
            </FooterGrid>

            <Divider />

            {/* ── Bottom bar ── */}
            <FooterBottom>
               <Copyright>
                  © {new Date().getFullYear()} ShopifyBazzar. Made with{" "}
                  <span>♥</span> for Shopify developers.
               </Copyright>
               <BottomLinks>
                  <BottomLink onClick={() => navigate("/docs")}>
                     Privacy Policy
                  </BottomLink>
                  <BottomDot />
                  <BottomLink onClick={() => navigate("/docs")}>
                     Terms of Use
                  </BottomLink>
                  <BottomDot />
                  <BottomLink onClick={() => navigate("/docs")}>
                     Sitemap
                  </BottomLink>
               </BottomLinks>
            </FooterBottom>
         </Container>
      </StyledFooter>
   );
};

export default Footer;
