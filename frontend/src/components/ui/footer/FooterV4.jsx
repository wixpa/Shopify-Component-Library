// Named export — used by generateComponentCode.js
export function getFooterV4Code(config) {
  return `
<style>
    :root {
        --bg-color: ${config.bgColor};
        --text-main: ${config.textMain};
        --text-secondary: ${config.textSecondary};
        --accent-green: ${config.accentGreen};
        --accent-green-hover: ${config.accentGreenHover};
        --border-color: ${config.borderColor};
        --input-bg: ${config.inputBg};
        --input-border: ${config.inputBorder};
        --focus-ring: ${config.focusRing};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-main);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: color 0.2s ease;
    }

    ul {
        list-style: none;
    }

    .site-footer {
        padding-top: 4rem;
        background-color: #fff;
        font-size: 15px;
    }

    /* Top Footer Grid */
    .footer-top {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        padding-bottom: 4rem;
    }

    .footer-col h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--text-main);
    }

    .contact-info p {
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
    }

    .social-links {
        display: flex;
        gap: 12px;
        margin: 1.5rem 0;
    }

    .social-icon {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-main);
        transition: all 0.3s ease;
    }

    .social-icon:hover {
        background-color: var(--text-main);
        color: #fff;
    }

    .special-offers {
        margin-top: 1rem;
        color: var(--text-secondary);
    }

    .link-underline {
        text-decoration: underline;
        text-underline-offset: 3px;
        font-weight: 500;
        color: var(--text-main);
    }

    .link-underline:hover {
        color: var(--accent-green);
        text-decoration-color: var(--accent-green);
    }

    .footer-links li {
        margin-bottom: 1rem;
    }

    .footer-links a {
        color: var(--text-secondary);
    }

    .footer-links a:hover {
        color: var(--accent-green);
    }

    .subscribe-text {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .subscribe-form {
        display: flex;
        gap: 10px;
        margin-bottom: 1.5rem;
        flex-wrap: nowrap;
    }

    .input-group {
        flex: 1;
        min-width: 200px;
    }

    .email-input {
        width: 100%;
        padding: 12px 20px;
        border: 1px solid var(--input-border);
        border-radius: 50px;
        font-family: inherit;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.3s;
    }

    .email-input:focus {
        border-color: var(--accent-green);
        box-shadow: 0 0 0 3px var(--focus-ring);
    }

    .btn-subscribe {
        background-color: var(--accent-green);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        font-family: inherit;
        font-size: 0.95rem;
        transition: background-color 0.3s;
        white-space: nowrap;
    }

    .btn-subscribe:hover {
        background-color: var(--accent-green-hover);
    }

    .disclaimer {
        font-size: 0.85rem;
        color: var(--text-secondary);
        font-style: italic;
        line-height: 1.5;
    }

    .disclaimer a {
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 2px;
        font-style: normal;
        color: var(--text-main);
    }

    /* Footer Bottom */
    .footer-bottom {
        border-top: 1px solid var(--border-color);
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        position: relative;
    }

    .bottom-left {
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .currency-selector {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-weight: 500;
        color: var(--text-secondary);
    }

    .currency-selector img {
        width: 20px;
        height: auto;
        border-radius: 2px;
    }

    .copyright {
        color: var(--text-secondary);
    }

    .copyright a {
        text-decoration: underline;
        text-underline-offset: 3px;
        color: var(--text-main);
    }

    .bottom-right {
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .policy-links {
        display: flex;
        gap: 1.5rem;
    }

    .policy-links a {
        color: var(--text-secondary);
    }

    .payment-icons {
        display: flex;
        gap: 8px;
    }

    .payment-icon {
        width: 38px;
        height: 24px;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }

    .payment-icon svg {
        height: 14px;
        width: auto;
    }

    /* Scroll to Top */
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        background-color: #1a1a1a;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }

    .scroll-top-btn:hover {
        background-color: var(--accent-green);
        transform: translateY(-3px);
    }

    /* =============================================
       ACCORDION TRIGGER — hidden on desktop/tablet
    ============================================= */
    .accordion-trigger {
        display: none;
    }

    /* =============================================
       TABLET
    ============================================= */
    @media (max-width: 1024px) {
        .footer-top {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* =============================================
       MOBILE
    ============================================= */
    @media (max-width: 768px) {
        .site-footer {
            padding-top: 2rem;
        }

        .container {
            padding: 0;
        }

        /* Brand/contact column — always visible, padded */
        .footer-col--brand {
            padding: 0 24px 28px;
            border-bottom: 1px solid var(--border-color);
        }

        .footer-top {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding-bottom: 0;
        }

        /* Accordion wrapper */
        .footer-col--accordion {
            border-bottom: 1px solid var(--border-color);
        }

        /* Hide desktop h3 inside accordion cols */
        .footer-col--accordion h3 {
            display: none;
        }

        /* Show accordion trigger on mobile */
        .accordion-trigger {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;
            padding: 18px 24px;
            color: var(--text-main);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            text-align: left;
        }

        .accordion-trigger .accordion-icon {
            font-size: 0.85rem;
            color: var(--text-secondary);
            transition: transform 0.3s ease;
            flex-shrink: 0;
        }

        .accordion-trigger.is-open .accordion-icon {
            transform: rotate(180deg);
        }

        /* Collapsible body */
        .accordion-body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease, padding 0.3s ease;
            padding: 0 24px;
        }

        .accordion-body.is-open {
            max-height: 500px;
            padding: 0 24px 24px;
        }

        /* Subscribe column — wider content, more max-height */
        #accordion-subscribe.is-open {
            max-height: 600px;
        }

        /* Footer bottom */
        .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 24px 16px;
        }

        .bottom-left,
        .bottom-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            width: 100%;
        }

        .policy-links {
            flex-wrap: wrap;
            gap: 1rem;
        }

        .payment-icons {
            flex-wrap: wrap;
        }

        .scroll-top-btn {
            bottom: 20px;
            right: 20px;
        }

        /* Make subscribe form stack on mobile */
        .subscribe-form {
            flex-direction: column;
        }

        .input-group {
            min-width: unset;
        }

        .btn-subscribe {
            width: 100%;
        }
    }
</style>

<footer class="site-footer">
    <div class="container">
        <div class="footer-top">

            <!-- Column 1: Help Customers — always visible -->
            <div class="footer-col footer-col--brand">
                <h3>${config.helpHeading}</h3>
                <div class="contact-info">
                    <p>${config.phoneNumber}</p>
                    <p>${config.emailAddress}</p>
                </div>
                <div class="social-links">
                    <a href="${config.instagramUrl}" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="${config.tiktokUrl}" class="social-icon" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="${config.youtubeUrl}" class="social-icon" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    <a href="${config.facebookUrl}" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="${config.snapchatUrl}" class="social-icon" aria-label="Snapchat"><i class="fa-brands fa-snapchat"></i></a>
                </div>
                <p class="special-offers">
                    ${config.specialOffersText} <a href="${config.specialOffersUrl}" class="link-underline">${config.specialOffersLinkText}</a>
                </p>
            </div>

            <!-- Column 2: Shop Categories -->
            <div class="footer-col footer-col--accordion">
                <h3>${config.shopHeading}</h3>
                <button class="accordion-trigger" aria-expanded="false" aria-controls="accordion-shop">
                    ${config.shopHeading}
                    <i class="fa-solid fa-chevron-down accordion-icon"></i>
                </button>
                <div class="accordion-body" id="accordion-shop" role="region">
                    <ul class="footer-links">
                        <li><a href="${config.shopLink1Url}">${config.shopLink1Label}</a></li>
                        <li><a href="${config.shopLink2Url}">${config.shopLink2Label}</a></li>
                        <li><a href="${config.shopLink3Url}">${config.shopLink3Label}</a></li>
                        <li><a href="${config.shopLink4Url}">${config.shopLink4Label}</a></li>
                        <li><a href="${config.shopLink5Url}">${config.shopLink5Label}</a></li>
                    </ul>
                </div>
            </div>

            <!-- Column 3: Explore Purity -->
            <div class="footer-col footer-col--accordion">
                <h3>${config.exploreHeading}</h3>
                <button class="accordion-trigger" aria-expanded="false" aria-controls="accordion-explore">
                    ${config.exploreHeading}
                    <i class="fa-solid fa-chevron-down accordion-icon"></i>
                </button>
                <div class="accordion-body" id="accordion-explore" role="region">
                    <ul class="footer-links">
                        <li><a href="${config.exploreLink1Url}">${config.exploreLink1Label}</a></li>
                        <li><a href="${config.exploreLink2Url}">${config.exploreLink2Label}</a></li>
                        <li><a href="${config.exploreLink3Url}">${config.exploreLink3Label}</a></li>
                        <li><a href="${config.exploreLink4Url}">${config.exploreLink4Label}</a></li>
                        <li><a href="${config.exploreLink5Url}">${config.exploreLink5Label}</a></li>
                    </ul>
                </div>
            </div>

            <!-- Column 4: Subscribe -->
            <div class="footer-col footer-col--accordion">
                <h3>${config.subscribeHeading}</h3>
                <button class="accordion-trigger" aria-expanded="false" aria-controls="accordion-subscribe">
                    ${config.subscribeHeading}
                    <i class="fa-solid fa-chevron-down accordion-icon"></i>
                </button>
                <div class="accordion-body" id="accordion-subscribe" role="region">
                    <p class="subscribe-text">
                        ${config.subscribeText}
                    </p>
                    <form class="subscribe-form" onsubmit="event.preventDefault();">
                        <div class="input-group">
                            <input type="email" class="email-input" placeholder="${config.emailPlaceholder}" required>
                        </div>
                        <button type="submit" class="btn-subscribe">${config.subscribeButtonText}</button>
                    </form>
                    <p class="disclaimer">
                        ${config.disclaimerText} <a href="${config.termsUrl}">${config.termsLabel}</a> and <a href="${config.privacyUrl}">${config.privacyLabel}.</a>
                    </p>
                </div>
            </div>

        </div>

        <!-- Bottom Section -->
        <div class="footer-bottom">
            <div class="bottom-left">
                <div class="currency-selector">
                    <img src="${config.flagImageUrl}" alt="${config.flagAlt}">
                    <span>${config.currencyText}</span>
                    <i class="fa-solid fa-chevron-down" style="font-size: 0.75rem;"></i>
                </div>
                <div class="copyright">
                    ${config.copyrightText1} <a href="${config.themeUrl}">${config.themeLabel}</a>. <a href="${config.poweredUrl}">${config.poweredLabel}</a>
                </div>
            </div>

            <div class="bottom-right">
                <div class="policy-links">
                    <a href="${config.policyLink1Url}">${config.policyLink1Label}</a>
                    <a href="${config.policyLink2Url}">${config.policyLink2Label}</a>
                </div>
                <div class="payment-icons">
                    <div class="payment-icon" title="ACH" style="font-size: 8px; font-weight: bold; color: #333;">${config.achText}</div>
                    <div class="payment-icon" title="American Express">
                        <i class="fa-brands fa-cc-amex" style="color: #006fcf; font-size: 20px;"></i>
                    </div>
                    <div class="payment-icon" title="Diners Club">
                        <i class="fa-brands fa-cc-diners-club" style="color: #0079be; font-size: 20px;"></i>
                    </div>
                    <div class="payment-icon" title="Discover">
                        <i class="fa-brands fa-cc-discover" style="color: #f47b20; font-size: 20px;"></i>
                    </div>
                    <div class="payment-icon" title="Mastercard">
                        <i class="fa-brands fa-cc-mastercard" style="color: #eb001b; font-size: 20px;"></i>
                    </div>
                    <div class="payment-icon" title="PayPal">
                        <i class="fa-brands fa-cc-paypal" style="color: #003087; font-size: 20px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<button class="scroll-top-btn" id="scrollTopBtn" aria-label="Scroll to top">
    <i class="fa-solid fa-chevron-up"></i>
</button>

<script>
    // Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Subscribe form feedback
    const form = document.querySelector('.subscribe-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-subscribe');
        const originalText = btn.innerText;
        btn.innerText = '${config.subscribedText}';
        btn.style.backgroundColor = '#163830';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });

    // Accordion — mobile only
    function initAccordions() {
        const triggers = document.querySelectorAll('.accordion-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function () {
                if (window.innerWidth > 768) return;

                const bodyId = this.getAttribute('aria-controls');
                const body = document.getElementById(bodyId);
                const isOpen = this.classList.contains('is-open');

                // Close all
                triggers.forEach(t => {
                    const b = document.getElementById(t.getAttribute('aria-controls'));
                    t.classList.remove('is-open');
                    t.setAttribute('aria-expanded', 'false');
                    if (b) b.classList.remove('is-open');
                });

                // Open clicked if it was closed
                if (!isOpen) {
                    this.classList.add('is-open');
                    this.setAttribute('aria-expanded', 'true');
                    body.classList.add('is-open');
                }
            });
        });
    }

    function handleResize() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.accordion-trigger').forEach(t => {
                const b = document.getElementById(t.getAttribute('aria-controls'));
                t.classList.remove('is-open');
                t.setAttribute('aria-expanded', 'false');
                if (b) b.classList.remove('is-open');
            });
        }
    }

    initAccordions();
    window.addEventListener('resize', handleResize);
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function FooterV4({ config }) {
  // This component only exists to satisfy the registry import.
  // The editor renders via getCode() → iframe, not this JSX directly.
  return null;
}