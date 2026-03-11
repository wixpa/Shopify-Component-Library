// Named export — used by generateComponentCode.js
export function getHeaderV1Code(config) {
  return `
<style>
    :root {
        --side-padding: ${config.sidePadding}; 
        --primary-bg: ${config.primaryBg};
        --font-script: 'Dancing Script', cursive;
        --font-heading: 'Poppins', sans-serif;
        --transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        
        /* Dynamic Colors */
        --header-bg: ${config.headerBg};
        --header-text: ${config.headerText};
        --header-text-hover: ${config.headerTextHover};
        --mega-menu-bg: ${config.megaMenuBg};
        --mega-menu-text: ${config.megaMenuText};
        --mega-menu-text-hover: ${config.megaMenuTextHover};
        --mobile-menu-bg: ${config.mobileMenuBg};
        --mobile-menu-text: ${config.mobileMenuText};
        --overlay-color: ${config.overlayColor};
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
        font-family: 'Inter', sans-serif; 
        background-color: ${config.bodyBg}; 
        overflow-x: hidden; 
    }

    /* --- Header Alignment Strategy --- */
    header {
        position: fixed; 
        top: ${config.headerTopOffset}; 
        left: 50%; 
        transform: translateX(-50%);
        width: calc(100% - (var(--side-padding) * 2)); 
        height: ${config.headerHeight};
        background: var(--header-bg); 
        border-radius: ${config.headerBorderRadius}; 
        display: flex; /* Flexbox for horizontal alignment */
        align-items: center; 
        justify-content: space-between;
        padding: 0 40px; 
        z-index: 1000; 
        box-shadow: ${config.headerShadow}; 
        transition: var(--transition);
    }

    header.scrolled { 
        top: 0; 
        width: 100%; 
        border-radius: 0; 
        padding: 0 var(--side-padding); 
        height: ${config.headerScrolledHeight}; 
    }

    /* --- Left Side: Nav Links --- */
    .nav-links { 
        display: flex; 
        gap: 25px; 
        align-items: center; 
        height: 100%;
        flex: 1; /* Occupies left space */
    }
    
    .dropdown-container { 
        position: static; 
        height: 100%; 
        display: flex; 
        align-items: center; 
    }
    
    .nav-item {
        text-decoration: none; 
        color: var(--header-text); 
        font-size: 14px; 
        font-weight: 600;
        display: flex; 
        align-items: center; 
        gap: 6px; 
        cursor: pointer; 
        height: 100%;
    }
    
    .nav-item:hover {
        color: var(--header-text-hover);
    }

    /* Mega Menu (Full Width Alignment) */
    .mega-menu {
        position: absolute; 
        top: 100%; 
        left: 0; 
        width: 100%; 
        background: var(--mega-menu-bg); 
        border-top: 1px solid #eee;
        box-shadow: ${config.megaMenuShadow}; 
        opacity: 0; 
        visibility: hidden;
        transform: translateY(10px); 
        transition: all 0.3s ease; 
        padding: 40px var(--side-padding);
        color: var(--mega-menu-text);
    }
    
    .dropdown-container:hover .mega-menu { 
        opacity: 1; 
        visibility: visible; 
        transform: translateY(0); 
    }

    .mega-grid { 
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        gap: 30px; 
    }
    
    .mega-col h4 { 
        font-family: var(--font-heading); 
        font-size: 15px; 
        margin-bottom: 20px; 
        color: var(--mega-menu-text); 
        text-transform: uppercase; 
        letter-spacing: 1px; 
    }
    
    .mega-col a { 
        display: block; 
        color: var(--mega-menu-text); 
        text-decoration: none; 
        font-size: 14px; 
        margin-bottom: 12px; 
        transition: 0.2s; 
        opacity: 0.8;
    }
    
    .mega-col a:hover { 
        color: var(--mega-menu-text-hover); 
        padding-left: 5px; 
        opacity: 1;
    }

    .mega-card { 
        position: relative; 
        border-radius: 12px; 
        overflow: hidden; 
        aspect-ratio: 4/5; 
    }
    
    .mega-card img { 
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
    }
    
    .mega-card span { 
        position: absolute; 
        bottom: 20px; 
        left: 20px; 
        color: white; 
        font-weight: 700; 
        z-index: 2; 
        font-size: 18px; 
    }
    
    .mega-card::after { 
        content: ''; 
        position: absolute; 
        inset: 0; 
        background: linear-gradient(transparent, rgba(0,0,0,0.6)); 
    }

    /* --- Center: Logo --- */
    .logo { 
        display: flex; 
        align-items: baseline; 
        gap: 4px; 
        text-decoration: none; 
        color: var(--header-text);
        flex: 0; /* Keeps logo in the center */
        white-space: nowrap;
    }
    
    .logo-script { 
        font-family: var(--font-script); 
        font-size: ${config.logoScriptSize}; 
        color: ${config.logoScriptColor};
    }
    
    .logo-bold { 
        font-family: var(--font-heading); 
        font-weight: 700; 
        font-size: ${config.logoBoldSize}; 
        text-transform: uppercase; 
        letter-spacing: 1px;
        color: ${config.logoBoldColor};
    }

    /* --- Right Side: Actions --- */
    .header-actions { 
        display: flex; 
        justify-content: flex-end; 
        align-items: center; 
        gap: 20px;
        flex: 1; /* Occupies right space */
    }
    
    .header-actions i { 
        font-size: 19px; 
        cursor: pointer; 
        transition: 0.3s; 
        color: var(--header-text); 
    }
    
    .header-actions i:hover { 
        color: var(--header-text-hover); 
        transform: scale(1.1); 
    }

    /* --- Mobile Toggle --- */
    .mobile-toggle { 
        display: none; 
        font-size: 22px; 
        cursor: pointer; 
        flex: 1; 
        color: var(--header-text);
    }

    /* --- Responsive View --- */
    @media (max-width: 1024px) {
        header { 
            padding: 0 20px; 
            width: calc(100% - 40px);
            display: flex;
            justify-content: space-between;
        }
        .nav-links { display: none; }
        .mobile-toggle { display: block; }
        
        /* Logo Force Center on Mobile */
        .logo { 
            position: absolute; 
            left: 50%; 
            transform: translateX(-50%); 
        }
        .header-actions { flex: 1; justify-content: flex-end; }
    }

    /* --- Mobile Sidebar --- */
    .mobile-menu {
        position: fixed; 
        top: 0; 
        left: -100%; 
        width: 300px; 
        height: 100vh;
        background: var(--mobile-menu-bg); 
        z-index: 2000; 
        padding: 40px 30px;
        display: flex; 
        flex-direction: column; 
        gap: 15px; 
        transition: 0.4s;
    }
    
    .mobile-menu.active { left: 0; }
    
    .mobile-link { 
        font-size: 18px; 
        font-weight: 600; 
        color: var(--mobile-menu-text); 
        text-decoration: none; 
        border-bottom: 1px solid #eee; 
        padding: 10px 0; 
    }
    
    .mobile-link:hover {
        color: var(--header-text-hover);
    }
    
    .close-menu {
        cursor:pointer; 
        margin-bottom: 30px; 
        font-weight: 700;
        color: var(--mobile-menu-text);
    }
    
    .overlay { 
        position: fixed; 
        inset: 0; 
        background: var(--overlay-color); 
        visibility: hidden; 
        opacity: 0; 
        z-index: 1500; 
        transition: 0.3s; 
    }
    
    .overlay.active { 
        visibility: visible; 
        opacity: 1; 
    }

    /* Hero & Spacer (for demo) */
    .hero { 
        height: 100vh; 
        background: var(--primary-bg); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        color: white; 
        text-align: center; 
        padding: 20px; 
    }
    
    .hero h1 { 
        font-family: var(--font-heading); 
        font-size: clamp(35px, 8vw, 70px); 
        line-height: 1.1; 
    }
    
    .spacer { 
        height: 100vh; 
        padding: 100px var(--side-padding); 
        background: white; 
        text-align: center; 
    }
</style>

<div class="overlay" id="overlay" onclick="toggleMenu()"></div>

<div class="mobile-menu" id="mobileMenu">
    <div class="close-menu" onclick="toggleMenu()">
        <i class="fa-solid fa-xmark"></i> ${config.closeMenuText}
    </div>
    <a href="${config.mobileLink1Url}" class="mobile-link">${config.mobileLink1Text}</a>
    <a href="${config.mobileLink2Url}" class="mobile-link">${config.mobileLink2Text}</a>
    <a href="${config.mobileLink3Url}" class="mobile-link">${config.mobileLink3Text}</a>
    <a href="${config.mobileLink4Url}" class="mobile-link">${config.mobileLink4Text}</a>
</div>

<header id="navbar">
    <div class="mobile-toggle" onclick="toggleMenu()">
        <i class="fa-solid fa-bars-staggered"></i>
    </div>

    <nav class="nav-links">
        <div class="dropdown-container">
            <a href="${config.shopLinkUrl}" class="nav-item">${config.shopLinkText} <i class="fa-solid fa-chevron-down" style="font-size: 10px;"></i></a>
            <div class="mega-menu">
                <div class="mega-grid">
                    <div class="mega-col">
                        <h4>${config.megaCol1Heading}</h4>
                        <a href="${config.megaCol1Link1Url}">${config.megaCol1Link1Text}</a>
                        <a href="${config.megaCol1Link2Url}">${config.megaCol1Link2Text}</a>
                        <a href="${config.megaCol1Link3Url}">${config.megaCol1Link3Text}</a>
                        <a href="${config.megaCol1Link4Url}">${config.megaCol1Link4Text}</a>
                    </div>
                    <div class="mega-col">
                        <h4>${config.megaCol2Heading}</h4>
                        <a href="${config.megaCol2Link1Url}">${config.megaCol2Link1Text}</a>
                        <a href="${config.megaCol2Link2Url}">${config.megaCol2Link2Text}</a>
                        <a href="${config.megaCol2Link3Url}">${config.megaCol2Link3Text}</a>
                    </div>
                    <div class="mega-card">
                        <img src="${config.megaCard1Image}" alt="${config.megaCard1Alt}">
                        <span>${config.megaCard1Text}</span>
                    </div>
                    <div class="mega-card">
                        <img src="${config.megaCard2Image}" alt="${config.megaCard2Alt}">
                        <span>${config.megaCard2Text}</span>
                    </div>
                </div>
            </div>
        </div>
        <a href="${config.collectionsLinkUrl}" class="nav-item">${config.collectionsLinkText}</a>
        <a href="${config.aboutLinkUrl}" class="nav-item">${config.aboutLinkText}</a>
    </nav>

    <a href="${config.logoUrl}" class="logo">
        <span class="logo-script">${config.logoScriptText}</span><span class="logo-bold">${config.logoBoldText}</span>
    </a>

    <div class="header-actions">
        <i class="fa-solid fa-magnifying-glass" onclick="window.location.href='${config.searchUrl}'"></i>
        <i class="fa-solid fa-cart-shopping" onclick="window.location.href='${config.cartUrl}'"></i>
    </div>
</header>

<section class="hero">
    <div>
        <p style="text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px;">${config.heroSubtitle}</p>
        <h1>${config.heroHeading}</h1>
    </div>
</section>

<div class="spacer">
    <h2 style="font-family: var(--font-heading); font-size: 32px;">${config.spacerHeading}</h2>
    <p style="margin-top: 20px; color: #666;">${config.spacerText}</p>
</div>

<script>
    function toggleMenu() {
        document.getElementById('mobileMenu').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
    }

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function HeaderV1({ config }) {
  return null;
}