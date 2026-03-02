import { useEffect, useRef } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const Section = styled.section`
   padding: 2rem 0;
   display: flex;
   justify-content: center;
`;

const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: var(--container-padding);
   width: 100%;
`;

const Banner = styled.div`
   width: 100%;
   background-color: var(--color-banner-bg);
   border-radius: var(--radius-xl);
   position: relative;
   overflow: hidden;
   display: flex;
   align-items: center;
   min-height: 320px;
   box-shadow: var(--shadow-xl);

   /* Yellow radial glow */
   &::before {
      content: "";
      position: absolute;
      bottom: -50%;
      right: 20%;
      width: 400px;
      height: 400px;
      background: radial-gradient(
         circle,
         rgba(253, 224, 71, 0.15) 0%,
         rgba(253, 224, 71, 0) 70%
      );
      filter: blur(40px);
      z-index: 1;
      pointer-events: none;
   }

   @media (max-width: 1024px) {
      justify-content: center;
   }
`;

const BannerContent = styled.div`
   position: relative;
   z-index: 2;
   padding: 3rem 4rem;
   max-width: 60%;

   @media (max-width: 1024px) {
      max-width: 100%;
      text-align: center;
      padding: 3rem 2rem;
   }

   @media (max-width: 640px) {
      padding: 2.5rem 1.5rem;
   }
`;

const BannerTitle = styled.h2`
   color: var(--color-text-white);
   font-size: 1.75rem;
   font-weight: 500;
   margin-bottom: 2rem;
   letter-spacing: -0.025em;
   font-family: var(--inter-font);
   line-height: 1.3;

   @media (max-width: 640px) {
      font-size: 1.5rem;
   }
`;

const BtnPremium = styled.a`
   display: inline-flex;
   align-items: center;
   background-color: var(--color-banner-btn);
   color: var(--color-text-white);
   padding: 0.75rem 1.5rem;
   border-radius: var(--radius-md);
   font-weight: 500;
   font-size: 0.95rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   i {
      margin-left: 0.5rem;
      font-size: 0.85rem;
   }

   &:hover {
      background-color: var(--color-banner-btn-hover);
      transform: translateY(-1px);
   }

   &:active {
      transform: translateY(0);
   }
`;

// ── 3D Mockup Visuals ──────────────────────────────────────────

const BannerVisuals = styled.div`
   position: absolute;
   right: -50px;
   top: 50%;
   transform: translateY(-50%);
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 2;
   perspective: 1000px;

   @media (max-width: 1024px) {
      display: none;
   }
`;

const MockupContainer = styled.div`
   position: relative;
   width: 300px;
   height: 400px;
   transform: rotateX(15deg) rotateY(-20deg) rotateZ(10deg) scale(0.9);
   transform-style: preserve-3d;
   transition: transform 0.1s ease-out;
`;

const BgShape = styled.div`
   position: absolute;
   top: 10%;
   right: 10%;
   width: 200px;
   height: 300px;
   background: rgba(255, 255, 255, 0.1);
   border-radius: 20px;
   transform: rotate(-15deg) translateZ(-50px);
   z-index: 1;
`;

const TabletMockup = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: auto;
   border-radius: 12px;
   box-shadow: -20px 20px 50px rgba(0, 0, 0, 0.5);
   border: 4px solid #111;
   background: #111;
   z-index: 2;
   overflow: hidden;

   img {
      display: block;
      width: 100%;
      height: auto;
   }
`;

const PhoneMockup = styled.div`
   position: absolute;
   bottom: -40px;
   left: -60px;
   width: 140px;
   border-radius: 16px;
   box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.4);
   border: 3px solid #111;
   background: #111;
   z-index: 3;
   transform: translateZ(20px);
   overflow: hidden;

   img {
      display: block;
      width: 100%;
      height: auto;
   }
`;

// ── Component ─────────────────────────────────────────────────

const CTABanner = () => {
   const mockupRef = useRef(null);
   const bannerRef = useRef(null);

   useEffect(() => {
      const banner = bannerRef.current;
      const mockup = mockupRef.current;

      if (!banner || !mockup) return;

      const handleMouseMove = (e) => {
         if (window.innerWidth <= 1024) return;
         const x = (window.innerWidth - e.pageX * 2) / 100;
         const y = (window.innerHeight - e.pageY * 2) / 100;
         mockup.style.transform = `rotateX(${15 + y}deg) rotateY(${-20 + x}deg) rotateZ(10deg) scale(0.9)`;
      };

      const handleMouseLeave = () => {
         if (window.innerWidth <= 1024) return;
         mockup.style.transform =
            "rotateX(15deg) rotateY(-20deg) rotateZ(10deg) scale(0.9)";
      };

      banner.addEventListener("mousemove", handleMouseMove);
      banner.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         banner.removeEventListener("mousemove", handleMouseMove);
         banner.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, []);

   return (
      <Section>
         <Container>
            <Banner ref={bannerRef}>
               {/* Left Content */}
               <BannerContent>
                  <BannerTitle>
                     Tailwind CSS templates for your next project
                  </BannerTitle>
                  <BtnPremium href="#">
                     Browse Premium Templates{" "}
                     <i className="fa-solid fa-arrow-right"></i>
                  </BtnPremium>
               </BannerContent>

               {/* Right 3D Visuals */}
               <BannerVisuals>
                  <MockupContainer ref={mockupRef}>
                     <BgShape />

                     {/* Tablet */}
                     <TabletMockup>
                        <img
                           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                           alt="Dashboard Template"
                           loading="lazy"
                        />
                     </TabletMockup>

                     {/* Phone */}
                     <PhoneMockup>
                        <img
                           src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                           alt="Mobile Template"
                           loading="lazy"
                        />
                     </PhoneMockup>
                  </MockupContainer>
               </BannerVisuals>
            </Banner>
         </Container>
      </Section>
   );
};

export default CTABanner;
