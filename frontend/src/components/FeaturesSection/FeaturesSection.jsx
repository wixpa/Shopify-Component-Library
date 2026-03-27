import { useEffect, useRef } from "react";

// ── SVG Icons ──────────────────────────────────────────────────

const TranslateIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-full h-full block"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
   </svg>
);

const SmartphoneIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-full h-full block"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
   </svg>
);

const MoonIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-full h-full block"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
   </svg>
);

// ── Features Data ──────────────────────────────────────────────

const featuresData = [
   {
      id: 1,
      title: "Support RTL Languages",
      description:
         "Seamlessly supports right-to-left (RTL) languages for intuitive interfaces in Arabic, Hebrew, and more.",
      icon: <TranslateIcon />,
   },
   {
      id: 2,
      title: "Fully Responsive",
      description:
         "Components adapt flawlessly to all devices, ensuring consistent performance from desktops to smartphones.",
      icon: <SmartphoneIcon />,
   },
   {
      id: 3,
      title: "Elegant Dark Mode",
      description:
         "Enjoy comfortable viewing in low light with adaptive colors and contrasts for an elegant interface.",
      icon: <MoonIcon />,
   },
];

// ── Tailwind Classes ───────────────────────────────────────────

const section = "bg-white py-[4rem_1.5rem] px-6";
const container =
   "max-w-[1280px] mx-auto flex justify-center items-center py-16 px-6";
const grid =
   "grid grid-cols-1 gap-10 w-full md:grid-cols-2 lg:grid-cols-3 lg:gap-16";
const card =
   "flex items-start gap-4 opacity-0 translate-y-5 transition-[opacity,transform] duration-[600ms] ease-out";
const cardVisible = "!opacity-100 !translate-y-0";
const iconWrap = "flex-shrink-0 w-6 h-6 text-[#374151] mt-[0.125rem]";
const content = "flex flex-col gap-2";
const titleCls =
   "text-[1.125rem] font-semibold text-[#111827] leading-[1.4] font-[var(--inter-font)]";
const descCls =
   "text-[1rem] font-normal text-[#6b7280] leading-[1.6] font-[var(--inter-font)]";

// ── Component ──────────────────────────────────────────────────

const FeaturesSection = () => {
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
         { threshold: 0.1, rootMargin: "0px" },
      );

      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });
      return () => observer.disconnect();
   }, []);

   return (
      <section className={section} aria-label="Key Features">
         <div className={container}>
            <div className={grid}>
               {featuresData.map((feature, index) => (
                  <article
                     key={feature.id}
                     ref={(el) => (cardRefs.current[index] = el)}
                     className={card}
                     style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                     <div className={iconWrap} aria-hidden="true">
                        {feature.icon}
                     </div>
                     <div className={content}>
                        <h3 className={titleCls}>{feature.title}</h3>
                        <p className={descCls}>{feature.description}</p>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FeaturesSection;
