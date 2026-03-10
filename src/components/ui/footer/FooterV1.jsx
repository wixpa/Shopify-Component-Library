import { useEffect, useRef } from "react";

export default function FooterV1({ config }) {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const root = footerRef.current;

    // Newsletter form submit
    const form = root.querySelector(".newsletter-form");
    if (form) {
      const handler = function (e) {
        e.preventDefault();
        const input = this.querySelector(".newsletter-input");
        if (input.value) {
          const btn = this.querySelector(".newsletter-submit");
          const originalContent = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i>';
          input.value = "Thanks for subscribing!";
          input.disabled = true;
          setTimeout(() => {
            btn.innerHTML = originalContent;
            input.value = "";
            input.disabled = false;
          }, 3000);
        }
      };
      form.addEventListener("submit", handler);
    }

    // Accordion — mobile only
    function initAccordions() {
      const triggers = root.querySelectorAll(".accordion-trigger");
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", function () {
          if (window.innerWidth > 768) return;
          const bodyId = this.getAttribute("aria-controls");
          const body = root.getElementById
            ? root.getElementById(bodyId)
            : document.getElementById(bodyId);
          const isOpen = this.classList.contains("is-open");

          triggers.forEach((t) => {
            const bId = t.getAttribute("aria-controls");
            const b = document.getElementById(bId);
            t.classList.remove("is-open");
            t.setAttribute("aria-expanded", "false");
            if (b) b.classList.remove("is-open");
          });

          if (!isOpen) {
            this.classList.add("is-open");
            this.setAttribute("aria-expanded", "true");
            if (body) body.classList.add("is-open");
          }
        });
      });
    }

    function handleResize() {
      if (window.innerWidth > 768) {
        root.querySelectorAll(".accordion-trigger").forEach((t) => {
          const b = document.getElementById(t.getAttribute("aria-controls"));
          t.classList.remove("is-open");
          t.setAttribute("aria-expanded", "false");
          if (b) b.classList.remove("is-open");
        });
      }
    }

    initAccordions();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [config]);

  const css = `
    .footer-v1-wrap {
      --bg-color: ${config.bgColor};
      --text-color: ${config.textColor};
      --text-muted: ${config.textMuted};
      --border-color: ${config.borderColor};
      --accent-color: ${config.accentColor};
      --input-bg: ${config.inputBg};
      --input-text: ${config.inputText};
      --font-main: 'Inter', sans-serif;
    }

    .footer-v1-wrap * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .footer-v1-wrap .site-footer {
      background-color: var(--bg-color);
      padding: 80px 0 40px;
      width: 100%;
      font-family: var(--font-main);
      color: var(--text-color);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    .footer-v1-wrap .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .footer-v1-wrap .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
      gap: 40px;
      margin-bottom: 80px;
    }

    .footer-v1-wrap .brand-logo {
      font-size: 2rem;
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      letter-spacing: -0.5px;
      margin-bottom: 24px;
      display: inline-block;
      color: var(--text-color);
      text-decoration: none;
    }

    .footer-v1-wrap .brand-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 32px;
      max-width: 320px;
    }

    .footer-v1-wrap .social-icons {
      display: flex;
      gap: 20px;
    }

    .footer-v1-wrap .social-link {
      color: var(--text-color);
      font-size: 1.5rem;
      transition: opacity 0.2s ease;
    }

    .footer-v1-wrap .social-link:hover {
      opacity: 0.7;
    }

    .footer-v1-wrap .footer-heading {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 24px;
      color: var(--text-color);
    }

    .footer-v1-wrap .footer-links {
      list-style: none;
    }

    .footer-v1-wrap .footer-links li {
      margin-bottom: 14px;
    }

    .footer-v1-wrap .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .footer-v1-wrap .footer-links a:hover {
      color: var(--text-color);
      text-decoration: underline;
    }

    .footer-v1-wrap .newsletter-text {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .footer-v1-wrap .newsletter-form {
      position: relative;
      max-width: 100%;
    }

    .footer-v1-wrap .newsletter-input {
      width: 100%;
      padding: 14px 50px 14px 24px;
      border-radius: 50px;
      border: 1px solid transparent;
      background-color: var(--input-bg);
      color: var(--input-text);
      font-family: var(--font-main);
      font-size: 1rem;
      outline: none;
      transition: box-shadow 0.2s ease;
    }

    .footer-v1-wrap .newsletter-input:focus {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    }

    .footer-v1-wrap .newsletter-input::placeholder {
      color: #888;
    }

    .footer-v1-wrap .newsletter-submit {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      color: var(--input-text);
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
    }

    .footer-v1-wrap .newsletter-submit:hover {
      transform: translateY(-50%) translateX(3px);
    }

    .footer-v1-wrap .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-v1-wrap .copyright {
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .footer-v1-wrap .bottom-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
    }

    .footer-v1-wrap .policy-links {
      list-style: none;
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    .footer-v1-wrap .policy-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.2s ease;
    }

    .footer-v1-wrap .policy-links a:hover {
      color: var(--text-color);
    }

    .footer-v1-wrap .payment-icons {
      display: flex;
      gap: 8px;
    }

    .footer-v1-wrap .payment-icon {
      width: 38px;
      height: 24px;
      border-radius: 3px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .footer-v1-wrap .payment-icon svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .footer-v1-wrap .accordion-trigger {
      display: none;
    }

    @media (max-width: 1024px) {
      .footer-v1-wrap .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 60px 40px;
      }
      .footer-v1-wrap .brand-desc {
        max-width: 100%;
      }
    }

    @media (max-width: 768px) {
      .footer-v1-wrap .site-footer {
        padding: 40px 0 30px;
      }
      .footer-v1-wrap .container {
        padding: 0;
      }
      .footer-v1-wrap .footer-col--brand {
        padding: 0 24px 30px;
        border-bottom: 1px solid var(--border-color);
      }
      .footer-v1-wrap .footer-grid {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-bottom: 0;
      }
      .footer-v1-wrap .social-icons {
        gap: 24px;
      }
      .footer-v1-wrap .social-link {
        font-size: 1.6rem;
      }
      .footer-v1-wrap .footer-col--accordion {
        border-bottom: 1px solid var(--border-color);
      }
      .footer-v1-wrap .accordion-trigger {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px 24px;
        color: var(--text-color);
        font-family: var(--font-main);
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
      }
      .footer-v1-wrap .accordion-trigger .accordion-icon {
        font-size: 1rem;
        color: var(--text-muted);
        transition: transform 0.3s ease;
        flex-shrink: 0;
      }
      .footer-v1-wrap .accordion-trigger.is-open .accordion-icon {
        transform: rotate(180deg);
      }
      .footer-v1-wrap .accordion-body {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease, padding 0.3s ease;
        padding: 0 24px;
      }
      .footer-v1-wrap .accordion-body.is-open {
        max-height: 400px;
        padding: 0 24px 20px;
      }
      .footer-v1-wrap .footer-col--accordion .footer-heading {
        display: none;
      }
      .footer-v1-wrap .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 24px 10px;
        margin-top: 0;
      }
      .footer-v1-wrap .bottom-right {
        align-items: flex-start;
        width: 100%;
      }
      .footer-v1-wrap .policy-links {
        gap: 14px;
      }
      .footer-v1-wrap .payment-icons {
        flex-wrap: wrap;
      }
    }
  `;

  return (
    <div className="footer-v1-wrap" ref={footerRef}>
      <style>{css}</style>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-col footer-col--brand">
              <a href="#" className="brand-logo">{config.brandName}</a>
              <p className="brand-desc">{config.brandDesc}</p>
              <div className="social-icons">
                <a href={config.facebookUrl} className="social-link" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href={config.instagramUrl} className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href={config.twitterUrl} className="social-link" aria-label="X"><i className="fab fa-x-twitter"></i></a>
                <a href={config.linkedinUrl} className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href={config.threadsUrl} className="social-link" aria-label="Threads"><i className="fab fa-threads"></i></a>
              </div>
            </div>

            {/* Delivery & Returns Column */}
            <div className="footer-col footer-col--accordion">
              <h3 className="footer-heading">{config.col2Heading}</h3>
              <button className="accordion-trigger" aria-expanded="false" aria-controls="accordion-delivery">
                {config.col2Heading}
                <i className="fa-solid fa-chevron-down accordion-icon"></i>
              </button>
              <div className="accordion-body" id="accordion-delivery" role="region">
                <ul className="footer-links">
                  <li><a href="#">{config.col2Link1}</a></li>
                  <li><a href="#">{config.col2Link2}</a></li>
                  <li><a href="#">{config.col2Link3}</a></li>
                  <li><a href="#">{config.col2Link4}</a></li>
                </ul>
              </div>
            </div>

            {/* About Column */}
            <div className="footer-col footer-col--accordion">
              <h3 className="footer-heading">{config.col3Heading}</h3>
              <button className="accordion-trigger" aria-expanded="false" aria-controls="accordion-about">
                {config.col3Heading}
                <i className="fa-solid fa-chevron-down accordion-icon"></i>
              </button>
              <div className="accordion-body" id="accordion-about" role="region">
                <ul className="footer-links">
                  <li><a href="#">{config.col3Link1}</a></li>
                  <li><a href="#">{config.col3Link2}</a></li>
                  <li><a href="#">{config.col3Link3}</a></li>
                  <li><a href="#">{config.col3Link4}</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="footer-col footer-col--accordion">
              <h3 className="footer-heading">{config.newsletterHeading}</h3>
              <button className="accordion-trigger" aria-expanded="false" aria-controls="accordion-newsletter">
                {config.newsletterHeading}
                <i className="fa-solid fa-chevron-down accordion-icon"></i>
              </button>
              <div className="accordion-body" id="accordion-newsletter" role="region">
                <p className="newsletter-text">{config.newsletterText}</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="newsletter-input" placeholder={config.newsletterPlaceholder} required aria-label="Email address" />
                  <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="copyright">{config.copyrightText}</div>
            <div className="bottom-right">
              <ul className="policy-links">
                <li><a href="#">{config.policy1}</a></li>
                <li><a href="#">{config.policy2}</a></li>
                <li><a href="#">{config.policy3}</a></li>
                <li><a href="#">{config.policy4}</a></li>
              </ul>
              <div className="payment-icons">
                {/* Visa */}
                <div className="payment-icon" title="Visa">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="white"/>
                    <path d="M15.4 15.8L16.5 9.2H18.2L17.1 15.8H15.4ZM22.6 15.8L21.8 11.5C21.8 11.5 21.6 10.8 21.6 10.8C21.5 10.4 21.4 10.3 21.2 10.2C20.9 10.1 20.4 10 20.1 10H19.5L19.2 11.3L20.6 15.8H22.6ZM24.4 15.8L25.9 9.2H24.3C24 9.2 23.8 9.3 23.7 9.6L22.2 13.2L21.4 9.2H19.7L21.7 15.8H24.4ZM13.4 9.2L12.1 14.1C12 14.3 12 14.4 11.9 14.4C11.8 14.5 11.2 14.3 10.9 14.1L10.1 11.1C10.1 11.1 9.8 10 9.8 10C9.7 9.7 9.6 9.4 9.6 9.2H7.9C7.9 9.2 8.8 12.6 9.2 14.1C9.4 14.6 9.6 15.1 10.1 15.4C10.5 15.7 11.2 15.9 11.8 15.9C12.5 15.9 13.1 15.6 13.4 15.2C13.6 14.9 13.7 14.6 13.8 14.2L15.1 9.2H13.4Z" fill="#1A1F71"/>
                  </svg>
                </div>
                {/* Mastercard */}
                <div className="payment-icon" title="Mastercard">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="white"/>
                    <circle cx="14" cy="12" r="7" fill="#EB001B"/>
                    <circle cx="24" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8"/>
                    <path d="M19 16.5C17.5 16.5 16.1 15.9 15.1 14.9C14.1 13.9 13.5 12.5 13.5 11C13.5 9.5 14.1 8.1 15.1 7.1C16.1 6.1 17.5 5.5 19 5.5C20.5 5.5 21.9 6.1 22.9 7.1C23.9 8.1 24.5 9.5 24.5 11C24.5 12.5 23.9 13.9 22.9 14.9C21.9 15.9 20.5 16.5 19 16.5Z" fill="#FF5F00"/>
                  </svg>
                </div>
                {/* Amex */}
                <div className="payment-icon" title="American Express">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="#006FCF"/>
                    <path d="M5 16H8L9 14H12L13 16H16L12 7H9L5 16ZM9.5 12L10.5 9L11.5 12H9.5ZM17 7H21L22 9L23 7H27L25 11L27 16H23L22 13L21 16H17V7ZM19.5 9V10.5H21L20.5 9H19.5ZM19.5 12V14H21L21.5 12H19.5ZM28 7H34V9H30V10.5H33V12.5H30V14H34V16H28V7Z" fill="white" transform="scale(0.8) translate(4, 3)"/>
                  </svg>
                </div>
                {/* PayPal */}
                <div className="payment-icon" title="PayPal">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="white"/>
                    <path d="M12.5 7.5H16.8C19.2 7.5 20.5 8.6 20.5 10.8C20.5 12.5 19.5 13.8 17.8 14.2L17.2 14.2L16.5 18.5H13.5L14.5 12.5H12.5L12.5 7.5Z" fill="#003087"/>
                    <path d="M16.5 7.5H20.8C23.2 7.5 24.5 8.6 24.5 10.8C24.5 12.5 23.5 13.8 21.8 14.2L21.2 14.2L20.5 18.5H17.5L18.5 12.5H16.5L16.5 7.5Z" fill="#009cde" transform="translate(4,0)"/>
                  </svg>
                </div>
                {/* Diners Club */}
                <div className="payment-icon" title="Diners Club">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="white"/>
                    <circle cx="14" cy="12" r="6" fill="#004A97"/>
                    <circle cx="24" cy="12" r="6" fill="#004A97"/>
                    <path d="M14 8C11.8 8 10 9.8 10 12C10 14.2 11.8 16 14 16C16.2 16 18 14.2 18 12C18 9.8 16.2 8 14 8ZM24 8C21.8 8 20 9.8 20 12C20 14.2 21.8 16 24 16C26.2 16 28 14.2 28 12C28 9.8 26.2 8 24 8Z" fill="white"/>
                    <path d="M19 8C16.8 8 15 9.8 15 12C15 14.2 16.8 16 19 16C21.2 16 23 14.2 23 12C23 9.8 21.2 8 19 8Z" fill="#004A97"/>
                  </svg>
                </div>
                {/* Discover */}
                <div className="payment-icon" title="Discover">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" fill="white"/>
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#FF6600">DISCOVER</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
