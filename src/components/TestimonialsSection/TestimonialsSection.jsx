import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

// ── Layout ─────────────────────────────────────────────────────

const Section = styled.section`
   background: var(--color-bg-light, #f9fafb);
   padding: 4rem 0 3rem;
   border-top: 1px solid #c4c4c4;

   @media (min-width: 1024px) {
      padding: 4rem 0 3rem;
   }
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: 0 var(--container-padding-x, 1.5rem);
`;

// ── Section Header ─────────────────────────────────────────────

const SectionHeader = styled.header`
   text-align: center;
   margin-bottom: 4rem;
`;

const SectionEyebrow = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   background: rgba(234, 179, 8, 0.08);
   border: 1px solid rgba(234, 179, 8, 0.2);
   border-radius: var(--radius-full);
   padding: 0.3rem 0.9rem;
   font-size: 0.75rem;
   font-weight: 700;
   color: #ca8a04;
   text-transform: uppercase;
   letter-spacing: 0.08em;
   font-family: var(--inter-font);
   margin-bottom: 1.25rem;

   i {
      font-size: 0.7rem;
   }
`;

const SectionTitle = styled.h2`
   font-size: clamp(1.9rem, 3.5vw, 2.75rem);
   font-weight: 800;
   color: var(--color-primary-dark);
   margin-bottom: 1rem;
   letter-spacing: -0.03em;
   line-height: 1.1;
   font-family: var(--inter-font);
`;

const SectionSubtitle = styled.p`
   font-size: 1.05rem;
   color: var(--color-text-secondary);
   line-height: 1.7;
   max-width: 520px;
   margin: 0 auto;
   font-family: var(--inter-font);
`;

// ── Stars ──────────────────────────────────────────────────────

const Stars = styled.div`
   display: flex;
   gap: 2px;
   margin-bottom: 1rem;

   i {
      font-size: 0.75rem;
      color: #f59e0b;
   }
`;

// ── Masonry Grid ───────────────────────────────────────────────

const MasonryGrid = styled.div`
   column-count: 1;
   column-gap: 1.5rem;

   @media (min-width: 640px) {
      column-count: 2;
   }

   @media (min-width: 1024px) {
      column-count: 3;
      column-gap: 1.75rem;
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   background: #ffffff;
   border: 1px solid var(--color-border);
   border-radius: 14px;
   padding: 1.5rem;
   margin-bottom: 1.5rem;
   break-inside: avoid;
   display: flex;
   flex-direction: column;
   gap: 0.85rem;
   opacity: 0;
   transform: translateY(20px);
   transition:
      opacity 0.5s ease ${({ $delay }) => $delay}s,
      transform 0.5s ease ${({ $delay }) => $delay}s,
      box-shadow 0.2s ease,
      border-color 0.2s ease;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }

   &:hover {
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
      border-color: var(--color-border-hover);
      transform: translateY(-2px);
   }
`;

// Quote mark accent
const QuoteAccent = styled.div`
   font-size: 2.5rem;
   line-height: 1;
   color: var(--color-primary-blue);
   opacity: 0.15;
   font-family: Georgia, serif;
   margin-bottom: -0.5rem;
   margin-top: -0.25rem;
   user-select: none;
`;

const CardQuote = styled.p`
   font-size: 0.88rem;
   color: var(--color-text-secondary);
   line-height: 1.7;
   font-family: var(--inter-font);
   flex: 1;
`;

// Divider
const Divider = styled.div`
   width: 100%;
   height: 1px;
   background: var(--color-border);
`;

const CardFooter = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;
`;

const Avatar = styled.img`
   width: 38px;
   height: 38px;
   border-radius: 50%;
   object-fit: cover;
   flex-shrink: 0;
   border: 2px solid var(--color-border);
`;

const UserInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1px;
   min-width: 0;
`;

const UserName = styled.span`
   font-size: 0.85rem;
   font-weight: 700;
   color: var(--color-text-main);
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const UserRole = styled.span`
   font-size: 0.72rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const VerifiedBadge = styled.div`
   margin-left: auto;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background: rgba(37, 99, 235, 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;

   i {
      font-size: 0.58rem;
      color: var(--color-primary-blue);
   }
`;

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

// ── Component ─────────────────────────────────────────────────

const TestimonialsSection = () => {
   const cardRefs = useRef([]);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
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
      <Section>
         <Container>
            {/* ── Header ── */}
            <SectionHeader>
               <SectionEyebrow>
                  <i className="fa-solid fa-star"></i>
                  Trusted by Developers
               </SectionEyebrow>
               <SectionTitle>
                  Shopify developers love it.
                  <br />
                  Here's what they say.
               </SectionTitle>
               <SectionSubtitle>
                  Real feedback from store owners, freelancers, and agencies who
                  ship faster with Shopify Bazzar.
               </SectionSubtitle>
            </SectionHeader>

            {/* ── Masonry Grid ── */}
            <MasonryGrid>
               {TESTIMONIALS.map((t, index) => (
                  <Card
                     key={t.id}
                     $delay={(index * 0.08).toFixed(2)}
                     ref={(el) => (cardRefs.current[index] = el)}
                  >
                     {/* Stars */}
                     <Stars aria-label={`${t.stars} out of 5 stars`}>
                        {Array.from({ length: t.stars }).map((_, i) => (
                           <i key={i} className="fa-solid fa-star"></i>
                        ))}
                     </Stars>

                     {/* Quote */}
                     <QuoteAccent aria-hidden>"</QuoteAccent>
                     <CardQuote>{t.quote}</CardQuote>

                     <Divider />

                     {/* Author */}
                     <CardFooter>
                        <Avatar src={t.avatar} alt={t.name} loading="lazy" />
                        <UserInfo>
                           <UserName>{t.name}</UserName>
                           <UserRole>{t.role}</UserRole>
                        </UserInfo>
                        <VerifiedBadge
                           title="Verified user"
                           aria-label="Verified user"
                        >
                           <i className="fa-solid fa-check"></i>
                        </VerifiedBadge>
                     </CardFooter>
                  </Card>
               ))}
            </MasonryGrid>
         </Container>
      </Section>
   );
};

export default TestimonialsSection;
