// Named export — used by generateComponentCode.js
export function getFooterV3Code(config) {
  return `
<style>
    :root {
        --bg-color: ${config.bgColor};
        --text-primary: ${config.textPrimary};
        --text-secondary: ${config.textSecondary};
        --text-light: ${config.textLight};
        --border-color: ${config.borderColor};
        --input-bg: ${config.inputBg};
        --input-border: ${config.inputBorder};
        --btn-bg: ${config.btnBg};
        --btn-hover: ${config.btnHover};
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
        color: var(--text-primary);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    /* ─── Footer Container ─── */
    .site-footer {
        width: 100%;
        padding: 80px 40px 40px;
        max-width: 1600px;
        margin: 0 auto;
        background-color: var(--bg-color);
    }

    /* ─── Top Section: Grid ─── */
    .footer-top {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 60px;
        margin-bottom: 100px;
    }

    /* ─── Brand / Newsletter Column ─── */
    .brand-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 480px;
    }

    .logo {
        font-size: 36px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -1px;
        margin-bottom: 28px;
        color: var(--text-primary);
        position: relative;
        line-height: 1;
    }

    .logo sup {
        font-size: 14px;
        font-weight: 500;
        top: -0.8em;
        position: relative;
        margin-left: 2px;
    }

    .newsletter-heading {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.02em;
        margin-bottom: 32px;
        color: var(--text-primary);
    }

    .newsletter-form {
        position: relative;
        width: 100%;
        max-width: 420px;
    }

    .form-input {
        width: 100%;
        padding: 16px 20px;
        font-size: 16px;
        font-family: inherit;
        color: var(--text-primary);
        background-color: var(--input-bg);
        border: 1px solid var(--input-border);
        border-radius: 8px;
        outline: none;
        transition: border-color 0.2s ease;
    }

    .form-input::placeholder {
        color: #a3a3a3;
        font-weight: 400;
    }

    .form-input:focus {
        border-color: var(--focus-ring);
    }

    .submit-btn {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: var(--btn-bg);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s ease;
    }

    .submit-btn:hover {
        background-color: var(--btn-hover);
    }

    .submit-btn i {
        font-size: 12px;
        color: var(--text-primary);
    }

    /* ─── Nav Columns ─── */
    .nav-column h4 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 24px;
        color: var(--text-primary);
    }

    .nav-list {
        list-style: none;
    }

    .nav-list li {
        margin-bottom: 14px;
    }

    .nav-list a {
        text-decoration: none;
        color: var(--text-secondary);
        font-size: 16px;
        font-weight: 400;
        transition: color 0.2s ease;
    }

    .nav-list a:hover {
        color: var(--text-primary);
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    /* ─── Middle Section ─── */
    .footer-middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
    }

    .social-links {
        display: flex;
        gap: 28px;
        align-items: center;
    }

    .social-links a {
        color: var(--text-primary);
        font-size: 22px;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .social-links a:hover {
        opacity: 0.7;
        transform: translateY(-2px);
    }

    .country-selector {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 700;
        color: var(--text-primary);
        padding: 8px 0;
    }

    .flag-img {
        width: 22px;
        height: auto;
        border-radius: 2px;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    }

    .chevron-icon {
        font-size: 12px;
        margin-top: 2px;
    }

    /* ─── Bottom Section ─── */
    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0;
    }

    .copyright {
        color: var(--text-light);
        font-size: 14px;
        font-weight: 400;
    }

    .payment-methods {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
    }

    /* ✅ FIX: Wider container + overflow hidden */
    .payment-card {
        width: 46px;
        height: 30px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    /* ✅ FIX: Larger icon size so brand icons render fully */
    .payment-card i {
        font-size: 40px;
        line-height: 1;
        display: block;
    }

    /* ─── Payment Brand Colors ─── */
    .fa-cc-visa        { color: #1434CB; }
    .fa-cc-mastercard  { color: #EB001B; }
    .fa-cc-amex        { color: #006FCF; }
    .fa-cc-paypal      { color: #003087; }
    .fa-cc-diners-club { color: #004A97; }
    .fa-cc-discover    { color: #FF6000; }

    /* ─────────────────────────────
       RESPONSIVE BREAKPOINTS
    ───────────────────────────── */

    @media (max-width: 1200px) {
        .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 40px;
        }
    }

    @media (max-width: 1024px) {
        .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        .brand-column {
            grid-column: span 2;
            max-width: 100%;
            margin-bottom: 20px;
        }
        .newsletter-form {
            max-width: 100%;
        }
    }

    /* ─── Tablet ─── */
    @media (max-width: 768px) {
        .site-footer {
            padding: 48px 20px 32px;
        }

        .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px 24px;
            margin-bottom: 48px;
        }

        .brand-column {
            grid-column: 1 / -1;
            max-width: 100%;
            margin-bottom: 8px;
        }

        .logo {
            font-size: 28px;
            margin-bottom: 20px;
        }

        .newsletter-heading {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.25;
        }

        .newsletter-form {
            max-width: 100%;
        }

        .form-input {
            font-size: 15px;
            padding: 14px 52px 14px 16px;
        }

        .nav-column {
            min-width: 0;
        }

        .nav-column h4 {
            font-size: 15px;
            margin-bottom: 16px;
        }

        .nav-list li {
            margin-bottom: 12px;
        }

        .nav-list a {
            font-size: 15px;
        }

        .footer-middle {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
            margin-bottom: 40px;
        }

        .social-links {
            gap: 22px;
        }

        .social-links a {
            font-size: 20px;
        }

        .country-selector {
            font-size: 14px;
        }

        .footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 20px;
        }

        /* ✅ Tablet payment fix */
        .payment-methods {
            gap: 6px;
        }

        .payment-card {
            width: 42px;
            height: 27px;
        }

        .payment-card i {
            font-size: 25px;
        }

        .copyright {
            font-size: 13px;
        }
    }

    /* ─── Mobile (small) ─── */
    @media (max-width: 480px) {
        .site-footer {
            padding: 40px 16px 28px;
        }

        .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 32px 16px;
            margin-bottom: 40px;
        }

        .brand-column {
            grid-column: 1 / -1;
        }

        .logo {
            font-size: 26px;
            margin-bottom: 18px;
        }

        .newsletter-heading {
            font-size: 20px;
            margin-bottom: 18px;
        }

        .form-input {
            padding: 13px 50px 13px 14px;
            font-size: 14px;
            border-radius: 6px;
        }

        .submit-btn {
            width: 32px;
            height: 32px;
            right: 7px;
        }

        .submit-btn i {
            font-size: 11px;
        }

        .nav-column h4 {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 14px;
        }

        .nav-list a {
            font-size: 14px;
        }

        .nav-list li {
            margin-bottom: 10px;
        }

        .footer-middle {
            gap: 24px;
            margin-bottom: 32px;
        }

        .social-links {
            gap: 18px;
        }

        .social-links a {
            font-size: 18px;
        }

        .country-selector {
            font-size: 13px;
            gap: 8px;
        }

        .flag-img {
            width: 18px;
        }

        /* ✅ Small mobile payment fix */
        .payment-card {
            width: 38px;
            height: 24px;
        }

        .payment-card i {
            font-size: 32px;
        }
    }
</style>

<footer class="site-footer">

    <!-- Top Section: Newsletter & Links -->
    <div class="footer-top">

        <!-- Brand & Newsletter -->
        <div class="brand-column">
            <div class="logo">${config.logoText}<sup>${config.logoSuperscript}</sup></div>
            <h2 class="newsletter-heading">${config.newsletterHeading}</h2>
            <form class="newsletter-form" id="newsletterForm">
                <input type="email" class="form-input" placeholder="${config.newsletterPlaceholder}" aria-label="Email address" required>
                <button type="submit" class="submit-btn" aria-label="Subscribe">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>
        </div>

        <!-- Shop Column -->
        <div class="nav-column">
            <h4>${config.shopHeading}</h4>
            <ul class="nav-list">
                <li><a href="${config.shopLink1Url}">${config.shopLink1Label}</a></li>
                <li><a href="${config.shopLink2Url}">${config.shopLink2Label}</a></li>
                <li><a href="${config.shopLink3Url}">${config.shopLink3Label}</a></li>
                <li><a href="${config.shopLink4Url}">${config.shopLink4Label}</a></li>
            </ul>
        </div>

        <!-- Collaborations Column -->
        <div class="nav-column">
            <h4>${config.collabHeading}</h4>
            <ul class="nav-list">
                <li><a href="${config.collabLink1Url}">${config.collabLink1Label}</a></li>
                <li><a href="${config.collabLink2Url}">${config.collabLink2Label}</a></li>
                <li><a href="${config.collabLink3Url}">${config.collabLink3Label}</a></li>
                <li><a href="${config.collabLink4Url}">${config.collabLink4Label}</a></li>
            </ul>
        </div>

        <!-- About Column -->
        <div class="nav-column">
            <h4>${config.aboutHeading}</h4>
            <ul class="nav-list">
                <li><a href="${config.aboutLink1Url}">${config.aboutLink1Label}</a></li>
                <li><a href="${config.aboutLink2Url}">${config.aboutLink2Label}</a></li>
                <li><a href="${config.aboutLink3Url}">${config.aboutLink3Label}</a></li>
                <li><a href="${config.aboutLink4Url}">${config.aboutLink4Label}</a></li>
            </ul>
        </div>

    </div>

    <!-- Middle Section: Socials & Country -->
    <div class="footer-middle">
        <div class="social-links">
            <a href="${config.facebookUrl}" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${config.instagramUrl}" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="${config.youtubeUrl}" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="${config.spotifyUrl}" aria-label="Spotify"><i class="fa-brands fa-spotify"></i></a>
        </div>

        <div class="country-selector" id="countrySelector">
            <img src="${config.flagImageUrl}" alt="${config.countryText} Flag" class="flag-img">
            <span>${config.countryText}</span>
            <i class="fa-solid fa-chevron-down chevron-icon"></i>
        </div>
    </div>

    <!-- Bottom Section: Copyright & Payments -->
    <div class="footer-bottom">
        <div class="copyright">
            ${config.copyrightText}
        </div>
        <div class="payment-methods">
            <div class="payment-card" title="Visa">
                <i class="fa-brands fa-cc-visa"></i>
            </div>
            <div class="payment-card" title="Mastercard">
                <i class="fa-brands fa-cc-mastercard"></i>
            </div>
            <div class="payment-card" title="American Express">
                <i class="fa-brands fa-cc-amex"></i>
            </div>
            <div class="payment-card" title="PayPal">
                <i class="fa-brands fa-cc-paypal"></i>
            </div>
            <div class="payment-card" title="Diners Club">
                <i class="fa-brands fa-cc-diners-club"></i>
            </div>
            <div class="payment-card" title="Discover">
                <i class="fa-brands fa-cc-discover"></i>
            </div>
        </div>
    </div>

</footer>

<script>
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const btn = this.querySelector('button');
        if (input.value) {
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i>';
            btn.style.backgroundColor = '#d1fae5';
            setTimeout(() => {
                alert(\`Thank you for subscribing with: \${input.value}\`);
                input.value = '';
                btn.innerHTML = originalContent;
                btn.style.backgroundColor = '';
            }, 500);
        }
    });

    document.getElementById('countrySelector').addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => { this.style.opacity = '1'; }, 200);
    });
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function FooterV3({ config }) {
  // This component only exists to satisfy the registry import.
  // The editor renders via getCode() → iframe, not this JSX directly.
  return null;
}