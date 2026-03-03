import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// ── Page Layout ────────────────────────────────────────────────

const PageHeader = styled.header`
   margin-bottom: 48px;
`;

const LibraryName = styled.h1`
   font-size: 2.5rem;
   font-weight: 800;
   color: var(--color-nav-text);
   letter-spacing: -0.025em;
   margin-bottom: 12px;
   font-family: var(--inter-font);

   @media (max-width: 768px) {
      font-size: 2rem;
   }
`;

const LibraryDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.6;
   max-width: 700px;
   font-family: var(--inter-font);
`;

// ── Component Section ──────────────────────────────────────────

const ComponentSection = styled.section`
   margin-bottom: 64px;
`;

const SectionHeading = styled.h2`
   font-size: 1.5rem;
   font-weight: 700;
   color: var(--color-nav-text);
   margin-bottom: 8px;
   font-family: var(--inter-font);
   display: flex;
   align-items: center;
   gap: 12px;

   span {
      font-size: 0.8rem;
      font-weight: 600;
      background-color: var(--color-badge-gray-bg);
      color: var(--color-nav-text-secondary);
      padding: 2px 10px;
      border-radius: var(--radius-full);
      font-family: var(--inter-font);
   }
`;

const SectionDivider = styled.div`
   width: 100%;
   height: 1px;
   background-color: var(--color-sidebar-border);
   margin-bottom: 28px;
`;

// ── Cards Grid ─────────────────────────────────────────────────

const CardsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
   gap: 20px;
`;

const Card = styled.div`
   border: 1px solid var(--color-sidebar-border);
   border-radius: 12px;
   overflow: hidden;
   background: var(--color-bg-white);
   display: flex;
   flex-direction: column;
   cursor: pointer;
   position: relative;
   transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

   &:hover {
      border-color: var(--color-nav-active);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
      transform: translateY(-2px);
   }
`;

const CardPreview = styled.div`
   height: 180px;
   background-color: var(--color-bg-light);
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 1px solid var(--color-sidebar-border);
   overflow: hidden;
   padding: 16px;
`;

const CardFooter = styled.div`
   padding: 14px 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 8px;
`;

const CardName = styled.span`
   font-size: 0.9rem;
   font-weight: 600;
   color: var(--color-nav-text);
   font-family: var(--inter-font);
`;

const CustomizeBtn = styled.button`
   font-size: 0.8rem;
   font-weight: 600;
   padding: 6px 14px;
   border-radius: var(--radius-full);
   background-color: var(--color-nav-active-bg);
   color: var(--color-nav-active);
   border: 1px solid rgba(0, 127, 255, 0.2);
   font-family: var(--inter-font);
   transition: var(--transition-fast);
   white-space: nowrap;
   flex-shrink: 0;

   &:hover {
      background-color: var(--color-nav-active);
      color: var(--color-text-white);
      border-color: var(--color-nav-active);
   }
`;

// ── Mini Previews ──────────────────────────────────────────────

const MiniNav = styled.div`
   width: 100%;
   background: white;
   border: 1px solid var(--color-sidebar-border);
   border-radius: 6px;
   padding: 8px 12px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   box-shadow: var(--shadow-sm);
`;
const MiniLogo = styled.div`
   width: 20px;
   height: 8px;
   background: var(--color-nav-active);
   border-radius: 2px;
`;
const MiniNavLinks = styled.div`
   display: flex;
   gap: 8px;
`;
const MiniNavLink = styled.div`
   width: ${({ $w }) => $w || "20px"};
   height: 4px;
   background: #e0e0e0;
   border-radius: 2px;
`;
const MiniBtn = styled.div`
   width: 36px;
   height: 14px;
   background: ${({ $dark }) =>
      $dark ? "var(--color-nav-text)" : "var(--color-nav-active)"};
   border-radius: 4px;
`;
const MiniHeroWrapper = styled.div`
   width: 100%;
   background: white;
   border: 1px solid var(--color-sidebar-border);
   border-radius: 6px;
   padding: 12px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 6px;
   box-shadow: var(--shadow-sm);
`;
const MiniHeroTitle = styled.div`
   height: 6px;
   width: ${({ $w }) => $w || "60%"};
   background: #1f2937;
   border-radius: 3px;
`;
const MiniHeroSub = styled.div`
   height: 4px;
   width: 80%;
   background: #e5e7eb;
   border-radius: 2px;
`;
const MiniHeroCta = styled.div`
   height: 12px;
   width: 50px;
   background: var(--color-nav-active);
   border-radius: 4px;
   margin-top: 4px;
`;
const MiniHeroImg = styled.div`
   height: 40px;
   width: 100%;
   background: var(--color-bg-gray);
   border-radius: 4px;
`;
const MiniFeatGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 8px;
   width: 100%;
`;
const MiniFeatCard = styled.div`
   background: ${({ $bg }) => $bg || "white"};
   border: 1px solid var(--color-sidebar-border);
   border-radius: 4px;
   padding: 6px;
   display: flex;
   flex-direction: column;
   gap: 4px;
`;
const MiniFeatIcon = styled.div`
   width: 12px;
   height: 12px;
   background: var(--color-nav-active);
   border-radius: 2px;
`;
const MiniFeatLine = styled.div`
   height: 3px;
   width: ${({ $w }) => $w || "100%"};
   background: #e5e7eb;
   border-radius: 2px;
`;

// Header Variants
const HeaderV1Preview = () => (
   <MiniNav>
      <MiniLogo />
      <MiniNavLinks>
         <MiniNavLink />
         <MiniNavLink />
         <MiniNavLink />
      </MiniNavLinks>
      <MiniBtn />
   </MiniNav>
);
const HeaderV2Preview = () => (
   <MiniNav style={{ flexDirection: "column", gap: "8px" }}>
      <MiniLogo style={{ width: "40px" }} />
      <MiniNavLinks>
         <MiniNavLink />
         <MiniNavLink />
         <MiniNavLink />
         <MiniNavLink />
      </MiniNavLinks>
   </MiniNav>
);
const HeaderV3Preview = () => (
   <MiniNav style={{ background: "#0f172a", borderColor: "#1e293b" }}>
      <MiniLogo style={{ background: "white" }} />
      <MiniNavLinks>
         <MiniNavLink style={{ background: "#334155" }} />
         <MiniNavLink style={{ background: "#334155" }} />
         <MiniNavLink style={{ background: "#334155" }} />
      </MiniNavLinks>
      <MiniBtn $dark />
   </MiniNav>
);
const HeaderV4Preview = () => (
   <MiniNav>
      <MiniLogo />
      <div
         style={{
            width: "80px",
            height: "14px",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            background: "#f9fafb",
         }}
      />
      <MiniBtn />
   </MiniNav>
);
const HeaderV5Preview = () => (
   <MiniNav style={{ justifyContent: "space-between" }}>
      <MiniLogo style={{ width: "50px", background: "#4f46e5" }} />
      <MiniNavLinks>
         <MiniNavLink $w="25px" />
         <MiniNavLink $w="30px" />
         <MiniNavLink $w="20px" />
      </MiniNavLinks>
   </MiniNav>
);

// Hero Variants
const HeroV1Preview = () => (
   <MiniHeroWrapper>
      <MiniHeroTitle />
      <MiniHeroTitle $w="40%" />
      <MiniHeroSub />
      <MiniHeroCta />
      <MiniHeroImg />
   </MiniHeroWrapper>
);
const HeroV2Preview = () => (
   <MiniHeroWrapper
      style={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
   >
      <div
         style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
         }}
      >
         <MiniHeroTitle />
         <MiniHeroTitle $w="80%" />
         <MiniHeroSub />
         <MiniHeroCta style={{ width: "40px", height: "10px" }} />
      </div>
      <MiniHeroImg style={{ width: "80px", height: "70px" }} />
   </MiniHeroWrapper>
);
const HeroV3Preview = () => (
   <MiniHeroWrapper style={{ background: "#0f172a", borderColor: "#1e293b" }}>
      <MiniHeroTitle style={{ background: "white" }} />
      <MiniHeroTitle $w="50%" style={{ background: "#475569" }} />
      <MiniHeroSub style={{ background: "#334155" }} />
      <MiniHeroCta style={{ background: "#4f46e5" }} />
   </MiniHeroWrapper>
);
const HeroV4Preview = () => (
   <MiniHeroWrapper
      style={{ background: "linear-gradient(135deg, #eef2ff, #e0f2fe)" }}
   >
      <MiniHeroTitle $w="70%" />
      <MiniHeroSub />
      <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
         <MiniHeroCta style={{ width: "40px" }} />
         <MiniHeroCta
            style={{
               width: "40px",
               background: "transparent",
               border: "1px solid #2563eb",
            }}
         />
      </div>
      <MiniHeroImg style={{ background: "rgba(255,255,255,0.5)" }} />
   </MiniHeroWrapper>
);
const HeroV5Preview = () => (
   <MiniHeroWrapper>
      <div
         style={{
            width: "60px",
            height: "18px",
            borderRadius: "20px",
            background: "#dbeafe",
            marginBottom: "4px",
         }}
      />
      <MiniHeroTitle />
      <MiniHeroSub />
      <MiniHeroCta />
   </MiniHeroWrapper>
);

// Features Variants
const FeaturesV1Preview = () => (
   <MiniFeatGrid>
      {[1, 2, 3].map((i) => (
         <MiniFeatCard key={i}>
            <MiniFeatIcon />
            <MiniFeatLine $w="80%" />
            <MiniFeatLine />
         </MiniFeatCard>
      ))}
   </MiniFeatGrid>
);
const FeaturesV2Preview = () => (
   <MiniFeatGrid>
      {[1, 2, 3].map((i) => (
         <MiniFeatCard key={i} $bg="#f0f7ff">
            <MiniFeatIcon
               style={{ background: "#4f46e5", borderRadius: "50%" }}
            />
            <MiniFeatLine $w="70%" style={{ background: "#bfdbfe" }} />
            <MiniFeatLine style={{ background: "#bfdbfe" }} />
         </MiniFeatCard>
      ))}
   </MiniFeatGrid>
);
const FeaturesV3Preview = () => (
   <MiniFeatGrid>
      {[1, 2, 3].map((i) => (
         <MiniFeatCard key={i} $bg="#0f172a" style={{ borderColor: "#1e293b" }}>
            <MiniFeatIcon style={{ background: "#4f46e5" }} />
            <MiniFeatLine $w="80%" style={{ background: "#334155" }} />
            <MiniFeatLine style={{ background: "#334155" }} />
         </MiniFeatCard>
      ))}
   </MiniFeatGrid>
);
const FeaturesV4Preview = () => (
   <div
      style={{
         width: "100%",
         display: "flex",
         flexDirection: "column",
         gap: "8px",
      }}
   >
      {[1, 2].map((i) => (
         <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
         >
            <MiniFeatIcon
               style={{
                  width: "20px",
                  height: "20px",
                  flexShrink: 0,
                  borderRadius: "50%",
               }}
            />
            <div
               style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
               }}
            >
               <MiniFeatLine $w="50%" style={{ background: "#374151" }} />
               <MiniFeatLine />
            </div>
         </div>
      ))}
   </div>
);
const FeaturesV5Preview = () => (
   <MiniFeatGrid style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
      {[1, 2, 3, 4].map((i) => (
         <MiniFeatCard key={i}>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
               <MiniFeatIcon
                  style={{
                     width: "8px",
                     height: "8px",
                     borderRadius: "50%",
                     background: "#10b981",
                  }}
               />
               <MiniFeatLine $w="60%" style={{ background: "#374151" }} />
            </div>
            <MiniFeatLine />
         </MiniFeatCard>
      ))}
   </MiniFeatGrid>
);

// ── Shared Sections Data (exported for reuse) ──────────────────

export const allSectionsData = [
   {
      id: "headers",
      title: "Headers",
      slug: "headers",
      description:
         "Responsive navigation headers for your storefront — from minimal to feature-rich.",
      variants: [
         {
            id: "header-v1",
            name: "Header — Classic",
            preview: <HeaderV1Preview />,
         },
         {
            id: "header-v2",
            name: "Header — Centered",
            preview: <HeaderV2Preview />,
         },
         {
            id: "header-v3",
            name: "Header — Dark",
            preview: <HeaderV3Preview />,
         },
         {
            id: "header-v4",
            name: "Header — With Search",
            preview: <HeaderV4Preview />,
         },
         {
            id: "header-v5",
            name: "Header — Minimal",
            preview: <HeaderV5Preview />,
         },
      ],
   },
   {
      id: "hero",
      title: "Hero",
      slug: "hero",
      description:
         "Full-width hero sections designed to grab attention and drive conversions.",
      variants: [
         { id: "hero-v1", name: "Hero — Centered", preview: <HeroV1Preview /> },
         { id: "hero-v2", name: "Hero — Split", preview: <HeroV2Preview /> },
         { id: "hero-v3", name: "Hero — Dark", preview: <HeroV3Preview /> },
         { id: "hero-v4", name: "Hero — Gradient", preview: <HeroV4Preview /> },
         {
            id: "hero-v5",
            name: "Hero — With Badge",
            preview: <HeroV5Preview />,
         },
      ],
   },
   {
      id: "features",
      title: "Features",
      slug: "features",
      description:
         "Showcase your product or store features in clean, structured layouts.",
      variants: [
         {
            id: "features-v1",
            name: "Features — Grid",
            preview: <FeaturesV1Preview />,
         },
         {
            id: "features-v2",
            name: "Features — Blue Cards",
            preview: <FeaturesV2Preview />,
         },
         {
            id: "features-v3",
            name: "Features — Dark Grid",
            preview: <FeaturesV3Preview />,
         },
         {
            id: "features-v4",
            name: "Features — Icon List",
            preview: <FeaturesV4Preview />,
         },
         {
            id: "features-v5",
            name: "Features — 2-Col Grid",
            preview: <FeaturesV5Preview />,
         },
      ],
   },
];

// ── Reusable Cards Grid Component (used in both pages) ─────────

export const VariantsGrid = ({ section, onCustomize }) => {
   const navigate = useNavigate();

   return (
      <CardsGrid>
         {section.variants.map((variant) => (
            <Card
               key={variant.id}
               onClick={() =>
                  navigate(`/components/${section.slug}/${variant.id}`)
               }
            >
               <CardPreview>{variant.preview}</CardPreview>
               <CardFooter>
                  <CardName>{variant.name}</CardName>
                  <CustomizeBtn
                     onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/components/${section.slug}/${variant.id}`);
                     }}
                  >
                     Customize
                  </CustomizeBtn>
               </CardFooter>
            </Card>
         ))}
      </CardsGrid>
   );
};

// ── Component ─────────────────────────────────────────────────

const ComponentsPage = () => {
   return (
      <>
         {/* Library Header */}
         <PageHeader>
            <LibraryName>Shopify Bazzar</LibraryName>
            <LibraryDescription>
               A clean, modern, and fully responsive React component library for
               Shopify storefronts. Browse all available component variants
               below and click Customize to start building.
            </LibraryDescription>
         </PageHeader>

         {/* All Component Sections */}
         {allSectionsData.map((section) => (
            <ComponentSection key={section.id}>
               <SectionHeading>
                  {section.title}
                  <span>{section.variants.length} variants</span>
               </SectionHeading>
               <SectionDivider />
               <VariantsGrid section={section} />
            </ComponentSection>
         ))}
      </>
   );
};

export default ComponentsPage;
