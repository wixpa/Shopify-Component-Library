import { useEffect, useRef } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const Section = styled.section`
   background-color: var(--color-bg-white);
   padding: var(--section-padding);
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: var(--container-padding);
`;

const SectionHeader = styled.header`
   text-align: center;
   margin-bottom: 4rem;
   max-width: 800px;
   margin-left: auto;
   margin-right: auto;
`;

const SectionTitle = styled.h2`
   font-size: 2rem;
   font-weight: 700;
   color: var(--color-deep-blue);
   margin-bottom: 1rem;
   letter-spacing: -0.025em;
   font-family: var(--inter-font);

   @media (min-width: 640px) {
      font-size: 2.25rem;
   }

   @media (min-width: 1024px) {
      font-size: 2.5rem;
   }
`;

const SectionSubtitle = styled.p`
   font-size: 1rem;
   color: var(--color-text-secondary);
   font-weight: 400;
   font-family: var(--inter-font);
`;

// ── Masonry Grid ───────────────────────────────────────────────

const MasonryGrid = styled.div`
   column-count: 1;
   column-gap: 2rem;

   @media (min-width: 768px) {
      column-count: 2;
   }

   @media (min-width: 1024px) {
      column-count: 3;
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   background-color: var(--color-bg-light);
   border-radius: var(--radius-lg);
   padding: 2rem;
   margin-bottom: 2rem;
   break-inside: avoid;
   display: flex;
   flex-direction: column;
   opacity: 0;
   transform: translateY(20px);
   transition:
      opacity 0.5s ease ${({ $delay }) => $delay}s,
      transform 0.5s ease ${({ $delay }) => $delay}s,
      box-shadow 0.2s ease;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }

   &:hover {
      transform: translateY(-2px);
      box-shadow:
         0 10px 15px -3px rgba(0, 0, 0, 0.05),
         0 4px 6px -2px rgba(0, 0, 0, 0.025);
   }
`;

const CardHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 1rem;
`;

const Avatar = styled.img`
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   object-fit: cover;
   background-color: var(--color-border);
   flex-shrink: 0;
`;

const UserInfo = styled.div`
   display: flex;
   flex-direction: column;
`;

const UserName = styled.span`
   font-size: 1rem;
   font-weight: 700;
   color: var(--color-text-main);
   line-height: 1.25;
   font-family: var(--inter-font);
`;

const UserRole = styled.span`
   font-size: 0.875rem;
   color: var(--color-text-secondary);
   margin-top: 0.25rem;
   font-family: var(--inter-font);
`;

const CardBody = styled.div`
   p {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.625;
      font-weight: 400;
      font-family: var(--inter-font);
   }
`;

// ── Testimonials Data ──────────────────────────────────────────

const testimonialsData = [
   {
      id: 1,
      name: "Agustín Rodríguez",
      role: "Co-founder of Tailwind Components",
      avatar:
         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI helped us to deliver high-quality results in consistent fashion while giving support to mobile layouts and RTL languages"',
   },
   {
      id: 2,
      name: "Alexandru Paduraru",
      role: "Co-founder of Creative-Tim",
      avatar:
         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI is one of the most simple, intuitive, and lightweight collections of Tailwind CSS Components. From Buttons to Cards, to Team sections, you have all the necessary elements to create a fast prototype and validate your ideas."',
   },
   {
      id: 3,
      name: "Zoltán Szőgyényi",
      role: "Co-founder of Flowbite",
      avatar:
         "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI is definitely one of the highest quality collection of components built with Tailwind CSS and the fact that it also supports RTL layouts makes it even more unique and useful."',
   },
   {
      id: 4,
      name: "Musharof Chowdhury",
      role: "Founder of Pimjo Labs",
      avatar:
         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI is one of the best open-source Tailwind libraries available in the community. I love their clean components without compromising the UX, most-likely its easily suitable with almost any kind of web projects. Highly recommended if you are looking for open-source Tailwind UI library."',
   },
   {
      id: 5,
      name: "Méschac Irung",
      role: "Creator of Tailus",
      avatar:
         "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"You don\'t just start your project with beautiful components, but you get all you may need to build a complete modern website or application, If I should recommend a free tailwindcss based UI Kit it will be Meraki UI."',
   },
   {
      id: 6,
      name: "Omair Gibreel",
      role: "Frontend Consultant at Abu Dhabi Ports",
      avatar:
         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"My first place to go when I need rtl supported tailwind component, easy to use, simple and elegant design and really it\'s increase productivity."',
   },
   {
      id: 7,
      name: "Yousuf Omer",
      role: "Software engineer at Alqimma",
      avatar:
         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"I Really love Meraki UI it helps me alot in some of my projects, really love and appreciate it 🔥 ❤️"',
   },
   {
      id: 8,
      name: "Mostafa Adil",
      role: "Software developer at Smart node",
      avatar:
         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Very Nice, Modern, and easy to work with"',
   },
   {
      id: 9,
      name: "Surjith S M",
      role: "JAMStack Web Developer",
      avatar:
         "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Tailwind CSS might be bit confusing for first-time users, But Meraki UI makes it easier for them by providing open-source components as a starting point. I love its simplicity."',
   },
   {
      id: 10,
      name: "Mosab Ibrahim",
      role: "Full Stack developer at Mazrui International",
      avatar:
         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"I always keep coming back to use Meraki UI components, it\'s really simple, elegant, easy to use, and customizable. every time I visit the site there is are new awesome set of components."',
   },
   {
      id: 11,
      name: "Munzir Mukhtar",
      role: "Software engineer at CTC Group ltd Company",
      avatar:
         "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI has been with me from day one as an integral part of My Designs"',
   },
   {
      id: 12,
      name: "John Champ",
      role: "Creator of Tailkit",
      avatar:
         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      quote: '"Meraki UI is a great starting point for your Tailwind CSS based projects. It comes packed with a neat collection of open source UI Components that can help you rocket start your ideas."',
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
         {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
         },
      );

      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });

      return () => observer.disconnect();
   }, []);

   return (
      <Section>
         <Container>
            {/* Header */}
            <SectionHeader>
               <SectionTitle>Don't take Our words for it</SectionTitle>
               <SectionSubtitle>
                  Trust The Developers from Tailwind CSS Community
               </SectionSubtitle>
            </SectionHeader>

            {/* Masonry Grid */}
            <MasonryGrid>
               {testimonialsData.map((testimonial, index) => (
                  <Card
                     key={testimonial.id}
                     $delay={index * 0.05}
                     ref={(el) => (cardRefs.current[index] = el)}
                  >
                     <CardHeader>
                        <Avatar
                           src={testimonial.avatar}
                           alt={testimonial.name}
                           loading="lazy"
                        />
                        <UserInfo>
                           <UserName>{testimonial.name}</UserName>
                           <UserRole>{testimonial.role}</UserRole>
                        </UserInfo>
                     </CardHeader>
                     <CardBody>
                        <p>{testimonial.quote}</p>
                     </CardBody>
                  </Card>
               ))}
            </MasonryGrid>
         </Container>
      </Section>
   );
};

export default TestimonialsSection;
