import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const StyledFooter = styled.footer`
   background-color: var(--color-bg-white);
   padding: 4rem 0 2rem;
`;

const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: var(--container-padding);
`;

// ── Footer Grid ────────────────────────────────────────────────

const FooterGrid = styled.div`
   display: grid;
   grid-template-columns: 1.5fr 1fr 1fr 1fr;
   gap: 2rem;
   margin-bottom: 4rem;

   @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
   }

   @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
   }
`;

// ── Newsletter Column ──────────────────────────────────────────

const NewsletterCol = styled.div`
   padding-right: 2rem;

   @media (max-width: 1024px) {
      grid-column: span 2;
      padding-right: 0;
      text-align: center;
   }

   @media (max-width: 640px) {
      grid-column: span 1;
   }
`;

const NewsletterTitle = styled.h2`
   font-size: 1.25rem;
   font-weight: 700;
   color: var(--color-text-main);
   margin-bottom: 1.5rem;
   font-family: var(--inter-font);
`;

const NewsletterForm = styled.form`
   display: flex;
   gap: 0.75rem;
   max-width: 400px;

   @media (max-width: 1024px) {
      margin: 0 auto;
   }

   @media (max-width: 640px) {
      flex-direction: column;
      width: 100%;
   }
`;

const NewsletterInput = styled.input`
   flex: 1;
   padding: 0.75rem 1rem;
   border: 1px solid var(--color-border);
   border-radius: var(--radius-sm);
   font-size: 0.95rem;
   color: var(--color-text-main);
   font-family: var(--inter-font);
   outline: none;
   transition: var(--transition-fast);
   background-color: var(--color-bg-white);

   &::placeholder {
      color: var(--color-text-light);
   }

   &:focus {
      border-color: var(--color-primary-purple);
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
   }
`;

const BtnSubscribe = styled.button`
   background-color: ${({ $subscribed }) =>
      $subscribed ? "var(--color-success)" : "var(--color-btn-slate)"};
   color: var(--color-text-white);
   border: none;
   padding: 0.75rem 1.5rem;
   border-radius: var(--radius-sm);
   font-weight: 600;
   font-size: 0.95rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition: background-color 0.3s ease;
   white-space: nowrap;

   &:hover {
      background-color: ${({ $subscribed }) =>
         $subscribed ? "var(--color-success)" : "var(--color-btn-slate-hover)"};
   }

   @media (max-width: 640px) {
      width: 100%;
   }
`;

// ── Link Columns ───────────────────────────────────────────────

const FooterCol = styled.div``;

const ColTitle = styled.h3`
   font-size: 0.95rem;
   font-weight: 600;
   color: var(--color-text-main);
   margin-bottom: 1.25rem;
   text-transform: capitalize;
   font-family: var(--inter-font);
`;

const ColList = styled.ul``;

const ColItem = styled.li`
   margin-bottom: 0.75rem;
`;

const ColLink = styled.a`
   color: var(--color-text-secondary);
   font-size: 0.95rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   &:hover {
      color: var(--color-text-main);
      text-decoration: underline;
   }
`;

// ── Footer Bottom ──────────────────────────────────────────────

const FooterBottom = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 2rem;
   margin-top: 2rem;
   border-top: 1px solid var(--color-border);

   @media (max-width: 640px) {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
   }
`;

const LogoLink = styled.a`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   font-family: var(--roboto-mono-font);
   font-weight: 500;
   font-size: 1.5rem;
   color: var(--color-primary-dark);
   letter-spacing: -0.5px;
`;

const LogoIcon = styled.svg`
   width: 32px;
   height: 32px;
   flex-shrink: 0;
`;

const Copyright = styled.p`
   color: var(--color-text-light);
   font-size: 0.9rem;
   font-family: var(--inter-font);

   span {
      color: var(--color-error);
   }
`;

// ── Footer Link Data ───────────────────────────────────────────

const footerColumns = [
   {
      id: 1,
      title: "Resources",
      links: [
         { label: "Components", href: "#" },
         { label: "Templates", href: "#" },
         { label: "Tutorial", href: "#" },
      ],
   },
   {
      id: 2,
      title: "Community",
      links: [
         { label: "GitHub", href: "#" },
         { label: "Twitter", href: "#" },
      ],
   },
   {
      id: 3,
      title: "Sponsor Us",
      links: [
         { label: "PayPal", href: "#" },
         { label: "Patreon", href: "#" },
         { label: "Buy me a Coffee", href: "#" },
      ],
   },
];

// ── Component ─────────────────────────────────────────────────

const Footer = () => {
   const [subscribed, setSubscribed] = useState(false);
   const [email, setEmail] = useState("");
   const timerRef = useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!email.trim()) return;

      setSubscribed(true);
      setEmail("");

      // Reset after 3 seconds
      timerRef.current = setTimeout(() => {
         setSubscribed(false);
      }, 3000);
   };

   // Cleanup timer on unmount
   useEffect(() => {
      return () => {
         if (timerRef.current) clearTimeout(timerRef.current);
      };
   }, []);

   return (
      <StyledFooter>
         <Container>
            <FooterGrid>
               {/* Newsletter */}
               <NewsletterCol>
                  <NewsletterTitle>Sign up for our newsletter</NewsletterTitle>
                  <NewsletterForm onSubmit={handleSubmit}>
                     <NewsletterInput
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                     <BtnSubscribe type="submit" $subscribed={subscribed}>
                        {subscribed ? "Subscribed! ✓" : "Subscribe"}
                     </BtnSubscribe>
                  </NewsletterForm>
               </NewsletterCol>

               {/* Link Columns */}
               {footerColumns.map((col) => (
                  <FooterCol key={col.id}>
                     <ColTitle>{col.title}</ColTitle>
                     <ColList>
                        {col.links.map((link) => (
                           <ColItem key={link.label}>
                              <ColLink href={link.href}>{link.label}</ColLink>
                           </ColItem>
                        ))}
                     </ColList>
                  </FooterCol>
               ))}
            </FooterGrid>

            {/* Footer Bottom */}
            <FooterBottom>
               <LogoLink href="#">
                  <LogoIcon
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M3 7L12 13L21 7V17H17V11.5L12 15L7 11.5V17H3V7Z"
                        fill="#2563eb"
                     />
                     <path
                        d="M3 7L12 13L21 7"
                        stroke="#2563eb"
                        strokeWidth="2"
                        strokeLinejoin="round"
                     />
                  </LogoIcon>
                  merakiui
               </LogoLink>
               <Copyright>
                  © 2020 - 2026 Meraki UI. Made with <span>❤</span> for
                  Developers.
               </Copyright>
            </FooterBottom>
         </Container>
      </StyledFooter>
   );
};

export default Footer;
