import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// ── Animations ─────────────────────────────────────────────────

const fadeIn = keyframes`
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1);    }
`;

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

// ── Layout ─────────────────────────────────────────────────────

const Section = styled.section`
   padding: 2rem 0 3rem;

   @media (min-width: 1024px) {
      padding: 2rem 0 3rem;
   }
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: 0 var(--container-padding-x, 1.5rem);
`;

// ── Banner ─────────────────────────────────────────────────────

const Banner = styled.div`
   position: relative;
   width: 100%;
   border-radius: 18px;
   overflow: hidden;
   box-shadow: 0 20px 56px rgba(15, 23, 42, 0.16);
   height: 200px;

   @media (min-width: 640px) {
      height: 220px;
   }

   @media (min-width: 1024px) {
      height: 240px;
   }
`;

// ── Image layer (bottom) ───────────────────────────────────────

const BannerImage = styled.img`
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center 40%;
   display: block;
   animation: ${fadeIn} 0.7s ease both;
   z-index: 0;
`;

// ── Overlay layer (middle) ─────────────────────────────────────

const BannerOverlay = styled.div`
   position: absolute;
   inset: 0;
   z-index: 1;
   background: linear-gradient(
      100deg,
      rgba(10, 17, 38, 0.88) 0%,
      rgba(10, 17, 38, 0.72) 40%,
      rgba(10, 17, 38, 0.38) 70%,
      rgba(10, 17, 38, 0.12) 100%
   );
`;

// ── Content layer (top) ────────────────────────────────────────

const BannerContent = styled.div`
   position: absolute;
   inset: 0;
   z-index: 2;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 2.5rem;
   gap: 1.5rem;
   animation: ${slideUp} 0.6s ease both;
   animation-delay: 0.1s;

   @media (max-width: 768px) {
      padding: 0 1.75rem;
      gap: 1rem;
   }

   @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 1.25rem;
      gap: 1rem;
   }
`;

// ── Left text group ────────────────────────────────────────────

const TextGroup = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.45rem;
   flex: 1;
   min-width: 0;
`;

const BannerEyebrow = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   font-size: 0.68rem;
   font-weight: 700;
   color: rgba(255, 255, 255, 0.65);
   text-transform: uppercase;
   letter-spacing: 0.1em;
   font-family: var(--inter-font);

   i {
      font-size: 0.58rem;
      color: #fbbf24;
   }
`;

const BannerTitle = styled.h2`
   font-size: clamp(1.15rem, 2.2vw, 1.75rem);
   font-weight: 800;
   color: #ffffff;
   letter-spacing: -0.025em;
   font-family: var(--inter-font);
   line-height: 1.2;
   margin: 0;

   span {
      color: #fbbf24;
   }
`;

const BannerSub = styled.p`
   font-size: 0.78rem;
   color: rgba(255, 255, 255, 0.6);
   font-family: var(--inter-font);
   line-height: 1.5;
   margin: 0;
   max-width: 380px;

   @media (max-width: 768px) {
      display: none;
   }
`;

// ── Right CTA group ────────────────────────────────────────────

const BtnGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 0.6rem;
   flex-shrink: 0;

   @media (max-width: 580px) {
      width: 100%;
   }
`;

const BtnPrimary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   background: #ffffff;
   color: var(--color-primary-dark);
   border: 1px solid #ffffff;
   padding: 0.6rem 1.25rem;
   border-radius: 8px;
   font-weight: 700;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   cursor: pointer;
   white-space: nowrap;
   transition:
      background 0.15s ease,
      transform 0.12s ease,
      box-shadow 0.15s ease;

   i {
      font-size: 0.7rem;
      transition: transform 0.15s ease;
   }

   &:hover {
      background: #f1f5f9;
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22);

      i {
         transform: translateX(2px);
      }
   }
   &:active {
      transform: translateY(0);
   }

   @media (max-width: 580px) {
      flex: 1;
      justify-content: center;
   }
`;

const BtnSecondary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   background: rgba(255, 255, 255, 0.1);
   color: #ffffff;
   border: 1px solid rgba(255, 255, 255, 0.28);
   padding: 0.6rem 1.25rem;
   border-radius: 8px;
   font-weight: 600;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   cursor: pointer;
   white-space: nowrap;
   backdrop-filter: blur(10px);
   -webkit-backdrop-filter: blur(10px);
   transition:
      background 0.15s ease,
      border-color 0.15s ease,
      transform 0.12s ease;

   i {
      font-size: 0.7rem;
   }

   &:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.45);
      transform: translateY(-1px);
   }
   &:active {
      transform: translateY(0);
   }

   @media (max-width: 480px) {
      display: none;
   }
`;

// ── Top-right corner badge ─────────────────────────────────────

const CornerBadge = styled.div`
   position: absolute;
   top: 14px;
   right: 16px;
   z-index: 3;
   display: inline-flex;
   align-items: center;
   gap: 5px;
   background: rgba(251, 191, 36, 0.9);
   color: #78350f;
   font-size: 0.62rem;
   font-weight: 800;
   padding: 3px 10px;
   border-radius: 999px;
   text-transform: uppercase;
   letter-spacing: 0.08em;
   font-family: var(--inter-font);
   backdrop-filter: blur(4px);

   i {
      font-size: 0.55rem;
   }

   @media (max-width: 480px) {
      display: none;
   }
`;

// ── Component ─────────────────────────────────────────────────

const CTABanner = () => {
   const navigate = useNavigate();

   return (
      <Section>
         <Container>
            <Banner>
               {/* ── Layer 0: Image ── */}
               <BannerImage
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1600&q=85&auto=format&fit=crop"
                  alt="Shopify storefront components showcase"
                  loading="lazy"
               />

               {/* ── Layer 1: Gradient overlay ── */}
               <BannerOverlay />

               {/* ── Layer 2: Corner badge ── */}
               <CornerBadge>
                  <i className="fa-solid fa-star"></i>
                  100% Free
               </CornerBadge>

               {/* ── Layer 3: Content ── */}
               <BannerContent>
                  <TextGroup>
                     <BannerEyebrow>
                        <i className="fa-solid fa-puzzle-piece"></i>
                        Shopify Bazzar — Component Library
                     </BannerEyebrow>
                     <BannerTitle>
                        Build your Shopify store{" "}
                        <span>in hours, not weeks.</span>
                     </BannerTitle>
                     <BannerSub>
                        Production-ready sections — copy, paste, and go live. No
                        Liquid knowledge required.
                     </BannerSub>
                  </TextGroup>

                  <BtnGroup>
                     <BtnPrimary onClick={() => navigate("/components")}>
                        Browse Components
                        <i className="fa-solid fa-arrow-right"></i>
                     </BtnPrimary>
                     <BtnSecondary onClick={() => navigate("/templates")}>
                        <i className="fa-solid fa-layer-group"></i>
                        Templates
                     </BtnSecondary>
                  </BtnGroup>
               </BannerContent>
            </Banner>
         </Container>
      </Section>
   );
};

export default CTABanner;
