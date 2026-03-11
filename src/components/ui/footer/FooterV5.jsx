// Named export — used by generateComponentCode.js
export function getFooterV5Code(config) {
  return `
<style>
    :root {
        --color-text-main: ${config.textMain};
        --color-text-secondary: ${config.textSecondary};
        --color-text-light: ${config.textLight};
        --color-accent: ${config.accentColor};
        --color-accent-hover: ${config.accentHover};
        --color-border: ${config.borderColor};
        --color-input-border: ${config.inputBorder};
        --color-bg: ${config.bgColor};
        --font-family: 'Inter', sans-serif;
        --container-width: 1320px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
        font-family: var(--font-family);
        background-color: var(--color-bg);
        color: var(--color-text-main);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    a { text-decoration: none; color: inherit; transition: color 0.2s ease; }
    ul { list-style: none; }

    .container {
        max-width: var(--container-width);
        margin: 0 auto;
        padding: 0 40px;
    }

    /* ─── Newsletter ─── */
    .newsletter {
        padding: 60px 0;
        border-bottom: 1px solid var(--color-border);
    }

    .newsletter-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 48px;
    }

    .newsletter-text { flex: 1; min-width: 0; max-width: 520px; }

    .newsletter-text h2 {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--color-text-main);
    }

    .newsletter-text p {
        color: var(--color-text-secondary);
        font-size: 15px;
        margin-bottom: 10px;
    }

    .newsletter-text .small-print {
        font-size: 13px;
        color: var(--color-text-secondary);
        margin-top: 10px;
    }

    .newsletter-text .small-print a {
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .newsletter-form {
        flex: 1;
        min-width: 0;
        display: flex;
        gap: 12px;
        align-items: flex-start;
        justify-content: flex-end;
        max-width: 480px;
    }

    .input-group { flex-grow: 1; min-width: 0; }

    .newsletter-input {
        width: 100%;
        padding: 14px 20px;
        border: 1px solid var(--color-input-border);
        border-radius: 50px;
        font-size: 15px;
        font-family: inherit;
        outline: none;
        color: var(--color-text-main);
        transition: border-color 0.2s;
    }

    .newsletter-input:focus { border-color: var(--color-text-main); }
    .newsletter-input::placeholder { color: #999; }

    .btn-subscribe {
        background-color: var(--color-accent);
        color: white;
        border: none;
        padding: 14px 28px;
        border-radius: 50px;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .btn-subscribe:hover { background-color: var(--color-accent-hover); }

    /* ─── Footer Main ─── */
    .footer-main { padding: 60px 0; }

    .footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }

    .footer-col h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
        color: var(--color-text-main);
    }

    .footer-col ul li { margin-bottom: 12px; }

    .footer-col ul li a {
        font-size: 15px;
        color: var(--color-text-secondary);
    }

    .footer-col ul li a:hover {
        color: var(--color-text-main);
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    .footer-text {
        font-size: 15px;
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: 16px;
    }

    .footer-text a { text-decoration: underline; text-underline-offset: 3px; }

    .contact-email {
        display: block;
        font-size: 15px;
        color: var(--color-text-secondary);
        margin-bottom: 18px;
    }

    .social-icons { display: flex; gap: 16px; }

    .social-icons a {
        color: var(--color-text-main);
        font-size: 18px;
        transition: opacity 0.2s;
    }

    .social-icons a:hover { opacity: 0.7; }

    /* ─── Footer Bottom ─── */
    .footer-bottom {
        padding: 28px 0 40px;
        border-top: 1px solid var(--color-border);
    }

    .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .bottom-left {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
    }

    .selectors { display: flex; gap: 16px; flex-wrap: wrap; }

    .dropdown-trigger {
        background: none;
        border: none;
        font-family: inherit;
        font-size: 14px;
        color: var(--color-text-secondary);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0;
    }

    .dropdown-trigger:hover { color: var(--color-text-main); }
    .dropdown-trigger i { font-size: 10px; margin-top: 1px; }

    /* ✅ Payment Icons */
    .payment-icons {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
    }

    .payment-icon {
        width: 52px;
        height: 34px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        overflow: hidden;
        padding: 3px 5px;
    }

    /* ✅ Real logo image fills the card */
    .payment-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
    }

    .bottom-right {
        display: flex;
        gap: 20px;
        font-size: 13px;
        color: var(--color-text-light);
        align-items: center;
        flex-shrink: 0;
    }

    .bottom-right a:hover { color: var(--color-text-main); }

    /* ─── Back to Top ─── */
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 44px;
        height: 44px;
        background-color: #1c1b1b;
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

    .back-to-top.visible { opacity: 1; visibility: visible; }
    .back-to-top:hover { transform: translateY(-3px); background-color: #000; }

    /* ═══════════════════════════════
       RESPONSIVE BREAKPOINTS
    ═══════════════════════════════ */

    @media (max-width: 1024px) {
        .container { padding: 0 28px; }
        .newsletter-content { flex-direction: column; gap: 24px; }
        .newsletter-text { max-width: 100%; }
        .newsletter-form { justify-content: flex-start; max-width: 560px; width: 100%; }
        .input-group { max-width: 100%; flex: 1; }
        .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 36px 40px; }
    }

    @media (max-width: 768px) {
        .container { padding: 0 24px; }
        .newsletter { padding: 48px 0; }
        .newsletter-text h2 { font-size: 22px; }
        .newsletter-form { flex-direction: row; max-width: 100%; gap: 10px; }
        .input-group { flex: 1; min-width: 0; }
        .footer-main { padding: 48px 0; }
        .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 36px 28px; }
        .footer-col h3 { margin-bottom: 16px; }
        .footer-bottom { padding: 24px 0 36px; }
        .footer-bottom-content { flex-direction: column; align-items: flex-start; gap: 18px; }
        .bottom-left { flex-direction: column; align-items: flex-start; gap: 14px; width: 100%; }
        .selectors { gap: 14px; }
        .payment-icons { gap: 5px; }
        .payment-icon { width: 46px; height: 30px; }
        .bottom-right { gap: 14px; flex-wrap: wrap; }
    }

    @media (max-width: 480px) {
        .container { padding: 0 16px; }
        .newsletter { padding: 36px 0; }
        .newsletter-content { gap: 20px; }
        .newsletter-text h2 { font-size: 19px; line-height: 1.3; }
        .newsletter-text p { font-size: 14px; }
        .newsletter-text .small-print { font-size: 12px; }
        .newsletter-form { flex-direction: column; gap: 10px; max-width: 100%; width: 100%; }
        .input-group { width: 100%; }
        .newsletter-input { width: 100%; font-size: 14px; padding: 13px 18px; }
        .btn-subscribe { width: 100%; font-size: 14px; padding: 13px 20px; text-align: center; }
        .footer-main { padding: 32px 0; }
        .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
        .footer-col h3 { font-size: 14px; font-weight: 600; margin-bottom: 12px; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a, .footer-text, .contact-email { font-size: 13px; }
        .footer-bottom { padding: 20px 0 28px; }
        .footer-bottom-content { gap: 16px; }
        .bottom-left { gap: 12px; }
        .selectors { flex-direction: row; flex-wrap: wrap; gap: 8px 16px; }
        .dropdown-trigger { font-size: 12px; }
        .payment-icons { gap: 4px; flex-wrap: wrap; }
        .payment-icon { width: 40px; height: 26px; padding: 2px 3px; }
        .bottom-right { flex-direction: row; flex-wrap: wrap; gap: 8px 16px; font-size: 12px; }
        .back-to-top { bottom: 16px; right: 16px; width: 40px; height: 40px; }
    }

    @media (max-width: 375px) {
        .container { padding: 0 14px; }
        .newsletter-text h2 { font-size: 17px; }
        .footer-grid { grid-template-columns: 1fr; gap: 24px; }
        .footer-col h3 { font-size: 14px; }
        .selectors { flex-direction: column; gap: 8px; }
        .bottom-right { flex-direction: column; gap: 5px; }
    }
</style>

<footer>
    <div class="container">

        <!-- Newsletter Section -->
        <section class="newsletter">
            <div class="newsletter-content">
                <div class="newsletter-text">
                    <h2>${config.newsletterHeading}</h2>
                    <p>${config.newsletterText}</p>
                    <p class="small-print">${config.smallPrintText} <a href="${config.termsUrl}">${config.termsLabel}</a></p>
                </div>
                <form class="newsletter-form" onsubmit="event.preventDefault();">
                    <div class="input-group">
                        <input type="email" class="newsletter-input" placeholder="${config.emailPlaceholder}" aria-label="Email address" required>
                    </div>
                    <button type="submit" class="btn-subscribe">${config.subscribeButtonText}</button>
                </form>
            </div>
        </section>

        <!-- Footer Links Section -->
        <section class="footer-main">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>${config.browseHeading}</h3>
                    <ul>
                        <li><a href="${config.browseLink1Url}">${config.browseLink1Label}</a></li>
                        <li><a href="${config.browseLink2Url}">${config.browseLink2Label}</a></li>
                        <li><a href="${config.browseLink3Url}">${config.browseLink3Label}</a></li>
                        <li><a href="${config.browseLink4Url}">${config.browseLink4Label}</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>${config.helpHeading}</h3>
                    <ul>
                        <li><a href="${config.helpLink1Url}">${config.helpLink1Label}</a></li>
                        <li><a href="${config.helpLink2Url}">${config.helpLink2Label}</a></li>
                        <li><a href="${config.helpLink3Url}">${config.helpLink3Label}</a></li>
                        <li><a href="${config.helpLink4Url}">${config.helpLink4Label}</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>${config.aboutHeading}</h3>
                    <p class="footer-text">
                        ${config.aboutText} <a href="${config.aboutLinkUrl}">${config.aboutLinkLabel}</a>
                    </p>
                </div>
                <div class="footer-col">
                    <h3>${config.contactHeading}</h3>
                    <a href="mailto:${config.contactEmail}" class="contact-email">${config.contactEmail}</a>
                    <div class="social-icons">
                        <a href="${config.tiktokUrl}" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="${config.youtubeUrl}" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Bottom Section -->
        <section class="footer-bottom">
            <div class="footer-bottom-content">
                <div class="bottom-left">
                    <div class="selectors">
                        <button class="dropdown-trigger">
                            ${config.countryText} <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <button class="dropdown-trigger">
                            ${config.languageText} <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>

                    <!-- ✅ Real payment logos from GitHub CDN (aaronfagan/svg-credit-card-payment-icons) -->
                    <div class="payment-icons">
                        <div class="payment-icon">
                            <img src="${config.visaIconUrl}" alt="Visa" loading="lazy">
                        </div>
                        <div class="payment-icon">
                            <img src="${config.mastercardIconUrl}" alt="Mastercard" loading="lazy">
                        </div>
                        <div class="payment-icon">
                            <img src="${config.amexIconUrl}" alt="American Express" loading="lazy">
                        </div>
                        <div class="payment-icon">
                            <img src="${config.paypalIconUrl}" alt="PayPal" loading="lazy">
                        </div>
                        <div class="payment-icon">
                            <img src="${config.dinersIconUrl}" alt="Diners Club" loading="lazy">
                        </div>
                        <div class="payment-icon">
                            <img src="${config.discoverIconUrl}" alt="Discover" loading="lazy">
                        </div>
                    </div>
                </div>

                <div class="bottom-right">
                    <span>${config.poweredByText}</span>
                    <span>${config.copyrightText}</span>
                </div>
            </div>
        </section>
    </div>

    <button id="backToTop" class="back-to-top" aria-label="Back to top">
        <i class="fa-solid fa-chevron-up"></i>
    </button>
</footer>

<script>
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('.dropdown-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
    
    // Newsletter form feedback
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-subscribe');
            const input = form.querySelector('.newsletter-input');
            if (input.value) {
                const originalText = btn.innerText;
                btn.innerText = '${config.subscribedText}';
                btn.style.backgroundColor = '${config.accentHover}';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    input.value = '';
                }, 3000);
            }
        });
    }
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function FooterV5({ config }) {
  // This component only exists to satisfy the registry import.
  // The editor renders via getCode() → iframe, not this JSX directly.
  return null;
}