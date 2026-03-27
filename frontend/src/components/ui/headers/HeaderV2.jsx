// Named export — used by generateComponentCode.js
export function getHeaderV2Code(config) {
  return `
<style>
    :root {
        --bg-color: ${config.bgColor}; 
        --text-primary: ${config.textPrimary};
        --text-secondary: ${config.textSecondary};
        --accent-yellow: ${config.accentYellow};
        --accent-green-bg: ${config.accentGreenBg};
        --accent-green-text: ${config.accentGreenText};
        --search-bg: ${config.searchBg};
        --border-radius: ${config.borderRadius};
        --container-width: ${config.containerWidth};
        --nav-hover: ${config.navHover};
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-primary);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    header {
        width: 100%;
        padding: ${config.headerPaddingTop} ${config.headerPaddingSides} ${config.headerPaddingBottom} ${config.headerPaddingSides};
        background-color: var(--bg-color);
        border-bottom: 1px solid rgba(0,0,0,0.05);
        position: relative;
        z-index: 1000;
    }

    .header-inner {
        max-width: var(--container-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .top-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
    }

    /* --- Logo --- */
    .logo {
        font-weight: ${config.logoWeight};
        font-size: ${config.logoSize};
        letter-spacing: -1px;
        color: ${config.logoColor};
        text-decoration: none;
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }

    .logo-camera {
        display: inline-block;
        width: 34px; height: 22px;
        background-color: ${config.cameraBgColor};
        border: 3px solid ${config.cameraBorderColor};
        border-radius: 6px;
        margin: 0 4px;
        position: relative;
    }

    .logo-camera::after {
        content: ''; position: absolute;
        width: 6px; height: 6px; background-color: ${config.cameraDotColor};
        border-radius: 50%; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
    }

    /* --- Actions & Icons --- */
    .actions { display: flex; align-items: center; gap: 24px; }
    .search-container { position: relative; width: 300px; display: flex; align-items: center; }
    .search-input { 
        width: 100%; 
        padding: ${config.searchPadding}; 
        background-color: var(--search-bg); 
        border: none; 
        border-radius: var(--border-radius); 
        font-size: 14px; 
        outline: none; 
    }
    .search-icon { 
        position: absolute; 
        right: 14px; 
        top: 50%; 
        transform: translateY(-50%); 
        color: var(--text-secondary); 
    }

    .icon-btn { 
        color: ${config.iconColor}; 
        font-size: 20px; 
        text-decoration: none; 
        position: relative; 
        display: inline-flex; 
        align-items: center; 
        justify-content: center; 
    }
    .cart-badge { 
        position: absolute; 
        top: -6px; 
        right: -8px; 
        background-color: ${config.cartBadgeBg}; 
        color: ${config.cartBadgeText}; 
        font-size: 10px; 
        font-weight: 700; 
        height: 18px; 
        width: 18px; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        border: 2px solid var(--bg-color); 
    }

    /* --- Navigation & Highlighting --- */
    .bottom-row { display: flex; justify-content: space-between; align-items: center; }
    .nav-list { list-style: none; display: flex; align-items: center; gap: 32px; }
    .nav-item { position: relative; padding-bottom: 10px; display: flex; align-items: center; }

    .nav-link {
        text-decoration: none;
        color: var(--text-secondary);
        font-weight: 600; font-size: 15px;
        display: flex; align-items: center; gap: 6px;
        transition: color 0.2s;
    }
    .nav-link:hover { color: var(--nav-hover); }

    /* --- NEW HIGHLIGHT BADGE --- */
    .badge-new {
        background-color: var(--accent-green-bg);
        color: var(--accent-green-text);
        font-size: 9px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 4px;
        margin-left: 8px; /* Link se thoda door */
        display: inline-flex;
        align-items: center;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        border: 1px solid rgba(0,0,0,0.05);
    }

    /* Mega Dropdown (Desktop) */
    .mega-dropdown {
        position: absolute; top: 100%; left: 0; 
        width: ${config.megaDropdownWidth}; 
        background: ${config.megaDropdownBg}; 
        border-radius: 12px;
        box-shadow: ${config.megaDropdownShadow}; 
        padding: 24px; 
        display: grid; 
        grid-template-columns: ${config.megaDropdownColumns}; 
        gap: 20px;
        opacity: 0; 
        visibility: hidden; 
        transform: translateY(10px);
        transition: all 0.3s ease;
    }
    .nav-item:hover .mega-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }

    .dropdown-col h4 { 
        font-size: 11px; 
        text-transform: uppercase; 
        color: ${config.dropdownHeadingColor}; 
        margin-bottom: 12px; 
    }
    .dropdown-col a { 
        display: block; 
        text-decoration: none; 
        color: var(--text-primary); 
        font-size: 14px; 
        font-weight: 500; 
        margin-bottom: 8px; 
    }
    .dropdown-col a:hover {
        color: var(--nav-hover);
    }
    
    .dropdown-card {
        background: ${config.dropdownCardBg}; 
        padding: 10px; 
        border-radius: 8px;
    }
    .dropdown-card p {
        font-size: 12px; 
        font-weight: 700; 
        color: ${config.dropdownCardText};
    }

    /* --- Mobile Sidebar --- */
    .mobile-toggle { display: none; font-size: 24px; cursor: pointer; color: ${config.mobileToggleColor}; }
    .mobile-sidebar { 
        position: fixed; 
        top: 0; 
        left: -100%; 
        width: 300px; 
        height: 100vh; 
        background: ${config.mobileSidebarBg}; 
        z-index: 2000; 
        padding: 25px; 
        transition: 0.4s; 
        overflow-y: auto; 
    }
    .mobile-sidebar.active { left: 0; }
    .sidebar-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        background: ${config.sidebarOverlay}; 
        z-index: 1500; 
        visibility: hidden; 
        opacity: 0; 
        transition: 0.3s; 
    }
    .sidebar-overlay.active { visibility: visible; opacity: 1; }

    .mobile-nav-item { border-bottom: 1px solid #f3f4f6; }
    .mobile-nav-head { 
        padding: 15px 0; 
        font-weight: 700; 
        font-size: 16px; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        cursor: pointer;
        color: ${config.mobileNavHeadColor};
    }
    .mobile-nav-body { 
        max-height: 0; 
        overflow: hidden; 
        transition: max-height 0.3s ease; 
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
    }
    .mobile-nav-body.open { max-height: 500px; padding-bottom: 15px; }
    
    .mobile-nav-body a {
        text-decoration: none; 
        color: ${config.mobileNavLinkColor}; 
        font-size: 14px;
        padding: 5px 0;
    }
    
    .close-icon {
        font-size: 24px; 
        cursor: pointer;
        color: ${config.closeIconColor};
    }
    
    .mobile-logo {
        font-weight: 800; 
        font-size: 22px; 
        color: ${config.mobileLogoColor};
    }

    @media (max-width: 1024px) {
        .nav-list, .bottom-row, .search-container { display: none; }
        .mobile-toggle { display: block; }
        header { padding: 16px 20px; }
    }
</style>

<div class="sidebar-overlay" id="overlay" onclick="toggleSidebar()"></div>

<nav class="mobile-sidebar" id="mobileSidebar">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <span class="mobile-logo">${config.mobileLogoText}</span>
        <i class="fa-solid fa-xmark close-icon" onclick="toggleSidebar()"></i>
    </div>

    <div class="mobile-nav-item">
        <div class="mobile-nav-head" onclick="toggleAccordion(this)">${config.mobileFeaturesText} <i class="fa-solid fa-plus"></i></div>
        <div class="mobile-nav-body">
            <a href="${config.mobileFeaturesLink1Url}">${config.mobileFeaturesLink1Text}</a>
            <a href="${config.mobileFeaturesLink2Url}">${config.mobileFeaturesLink2Text}</a>
        </div>
    </div>

    <div class="mobile-nav-item">
        <div class="mobile-nav-head" onclick="toggleAccordion(this)">
            ${config.mobileShopText} 
            <span class="badge-new" style="margin-left:auto; margin-right:10px;">${config.mobileShopBadge}</span> 
            <i class="fa-solid fa-plus"></i>
        </div>
        <div class="mobile-nav-body">
            <a href="${config.mobileShopLink1Url}">${config.mobileShopLink1Text}</a>
            <a href="${config.mobileShopLink2Url}">${config.mobileShopLink2Text}</a>
        </div>
    </div>

    <a href="${config.mobileSupportUrl}" style="display:block; padding:15px 0; text-decoration:none; color:${config.mobileSupportColor}; font-weight:700;">${config.mobileSupportText}</a>
</nav>

<header>
    <div class="header-inner">
        <div class="top-row">
            <a href="${config.logoUrl}" class="logo">${config.logoPrefix}<span class="logo-camera"></span>${config.logoSuffix}</a>
            <div class="actions">
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="${config.searchPlaceholder}">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
                <a href="${config.accountUrl}" class="icon-btn"><i class="fa-regular fa-user"></i></a>
                <a href="${config.cartUrl}" class="icon-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="cart-badge">${config.cartBadgeCount}</span>
                </a>
                <div class="mobile-toggle" id="openSidebar" onclick="toggleSidebar()">
                    <i class="fa-solid fa-bars-staggered"></i>
                </div>
            </div>
        </div>

        <div class="bottom-row">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="${config.featuresLinkUrl}" class="nav-link">${config.featuresLinkText} <i class="fa-solid fa-chevron-down"></i></a>
                    <div class="mega-dropdown">
                        <div class="dropdown-col">
                            <h4>${config.dropdown1Heading}</h4>
                            <a href="${config.dropdown1Link1Url}">${config.dropdown1Link1Text}</a>
                            <a href="${config.dropdown1Link2Url}">${config.dropdown1Link2Text}</a>
                        </div>
                        <div class="dropdown-col">
                            <h4>${config.dropdown2Heading}</h4>
                            <a href="${config.dropdown2Link1Url}">${config.dropdown2Link1Text}</a>
                            <a href="${config.dropdown2Link2Url}">${config.dropdown2Link2Text}</a>
                        </div>
                        <div class="dropdown-card">
                            <p>${config.dropdownCardText}</p>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="${config.shopLinkUrl}" class="nav-link">${config.shopLinkText} <i class="fa-solid fa-chevron-down"></i></a>
                    <span class="badge-new">${config.shopBadgeText}</span> 
                    <div class="mega-dropdown" style="width:400px; grid-template-columns:1fr 1fr;">
                        <div class="dropdown-col">
                            <h4>${config.shopDropdownHeading}</h4>
                            <a href="${config.shopDropdownLink1Url}">${config.shopDropdownLink1Text}</a>
                            <a href="${config.shopDropdownLink2Url}">${config.shopDropdownLink2Text}</a>
                        </div>
                        <div class="dropdown-card">
                            <p>${config.shopDropdownCardText}</p>
                        </div>
                    </div>
                </li>
                <li class="nav-item"><a href="${config.doorbellsUrl}" class="nav-link">${config.doorbellsText}</a></li>
                <li class="nav-item"><a href="${config.journalUrl}" class="nav-link">${config.journalText}</a></li>
            </ul>

            <ul class="nav-list">
                <li class="nav-item"><a href="${config.aboutUrl}" class="nav-link">${config.aboutText}</a></li>
                <li class="nav-item"><a href="${config.supportUrl}" class="nav-link">${config.supportText}</a></li>
            </ul>
        </div>
    </div>
</header>

<div style="padding: 100px; text-align: center; color: #94a3b8;">
    <p>${config.demoText}</p>
</div>

<script>
    function toggleSidebar() {
        const sidebar = document.getElementById('mobileSidebar');
        const overlay = document.getElementById('overlay');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    function toggleAccordion(el) {
        const body = el.nextElementSibling;
        const icon = el.querySelector('i');
        body.classList.toggle('open');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    }
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function HeaderV2({ config }) {
  return null;
}