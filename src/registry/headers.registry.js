import HeaderV1, { getHeaderV1Code } from "../components/ui/headers/HeaderV1";
import HeaderV2, { getHeaderV2Code } from "../components/ui/headers/HeaderV2";

const headersRegistry = {
  slug: "headers",
  title: "Headers",
  variants: [
    {
      id: "header-v1",
      name: "Header — Little Pebble Mega Menu",
      description:
        "Centered logo header with full-width mega menu dropdown and mobile sidebar",
      tags: [
        "mega-menu",
        "centered-logo",
        "sticky",
        "mobile-toggle",
        "dropdown",
      ],
      component: HeaderV1,
      getCode: getHeaderV1Code,
      defaultConfig: {
        // Layout
        sidePadding: "8%",
        headerTopOffset: "25px",
        headerHeight: "75px",
        headerScrolledHeight: "85px",
        headerBorderRadius: "12px",
        headerShadow: "0 10px 30px rgba(0,0,0,0.08)",
        megaMenuShadow: "0 25px 50px rgba(0,0,0,0.1)",

        // Colors
        primaryBg: "#C8A48D",
        headerBg: "#ffffff",
        headerText: "#1a1a1a",
        headerTextHover: "#C8A48D",
        megaMenuBg: "#ffffff",
        megaMenuText: "#666666",
        megaMenuTextHover: "#C8A48D",
        mobileMenuBg: "#ffffff",
        mobileMenuText: "#1a1a1a",
        overlayColor: "rgba(0,0,0,0.4)",
        bodyBg: "#f9f9f9",

        // Logo
        logoScriptText: "little",
        logoScriptSize: "28px",
        logoScriptColor: "#1a1a1a",
        logoBoldText: "PEBBLE",
        logoBoldSize: "20px",
        logoBoldColor: "#1a1a1a",
        logoUrl: "#",

        // Navigation
        shopLinkText: "Shop",
        shopLinkUrl: "#",
        collectionsLinkText: "Collections",
        collectionsLinkUrl: "#",
        aboutLinkText: "About Us",
        aboutLinkUrl: "#",

        // Mega Menu Column 1
        megaCol1Heading: "New In",
        megaCol1Link1Text: "Winter Jackets",
        megaCol1Link1Url: "#",
        megaCol1Link2Text: "Cozy Sweaters",
        megaCol1Link2Url: "#",
        megaCol1Link3Text: "Baby Suits",
        megaCol1Link3Url: "#",
        megaCol1Link4Text: "Woolen Caps",
        megaCol1Link4Url: "#",

        // Mega Menu Column 2
        megaCol2Heading: "Shop By Age",
        megaCol2Link1Text: "0-6 Months",
        megaCol2Link1Url: "#",
        megaCol2Link2Text: "6-12 Months",
        megaCol2Link2Url: "#",
        megaCol2Link3Text: "1-3 Years",
        megaCol2Link3Url: "#",

        // Mega Menu Cards
        megaCard1Image:
          "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600",
        megaCard1Alt: "Winter",
        megaCard1Text: "Winter Collection",
        megaCard2Image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600",
        megaCard2Alt: "Toys",
        megaCard2Text: "Gift Ideas",

        // Mobile Menu
        closeMenuText: "CLOSE MENU",
        mobileLink1Text: "Shop",
        mobileLink1Url: "#",
        mobileLink2Text: "Collections",
        mobileLink2Url: "#",
        mobileLink3Text: "About Us",
        mobileLink3Url: "#",
        mobileLink4Text: "Contact",
        mobileLink4Url: "#",

        // Header Actions
        searchUrl: "#",
        cartUrl: "#",

        // Hero Section
        heroSubtitle: "Premium Kids Wear",
        heroHeading: "Winter Cuddles<br>Only For You",

        // Spacer
        spacerHeading: "Aligned For Perfection",
        spacerText:
          "Scroll down to see the header transform into full-width sticky mode.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Colors",
          subtitle: "Header, text, and menu colors",
          controls: [
            { type: "color", label: "Primary Accent", key: "primaryBg" },
            { type: "color", label: "Header Background", key: "headerBg" },
            { type: "color", label: "Header Text", key: "headerText" },
            {
              type: "color",
              label: "Header Text Hover",
              key: "headerTextHover",
            },
            { type: "color", label: "Mega Menu Background", key: "megaMenuBg" },
            { type: "color", label: "Mega Menu Text", key: "megaMenuText" },
            {
              type: "color",
              label: "Mega Menu Text Hover",
              key: "megaMenuTextHover",
            },
            {
              type: "color",
              label: "Mobile Menu Background",
              key: "mobileMenuBg",
            },
            { type: "color", label: "Mobile Menu Text", key: "mobileMenuText" },
            { type: "color", label: "Overlay Color", key: "overlayColor" },
            { type: "color", label: "Body Background", key: "bodyBg" },
          ],
        },
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Logo",
          subtitle: "Logo text and styling",
          controls: [
            { type: "text", label: "Logo Script Text", key: "logoScriptText" },
            { type: "text", label: "Logo Script Size", key: "logoScriptSize" },
            {
              type: "color",
              label: "Logo Script Color",
              key: "logoScriptColor",
            },
            { type: "text", label: "Logo Bold Text", key: "logoBoldText" },
            { type: "text", label: "Logo Bold Size", key: "logoBoldSize" },
            { type: "color", label: "Logo Bold Color", key: "logoBoldColor" },
            { type: "text", label: "Logo URL", key: "logoUrl" },
          ],
        },
        {
          id: "navigation",
          icon: "fa-bars-staggered",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Navigation",
          subtitle: "Main navigation links",
          controls: [
            { type: "text", label: "Shop Link Text", key: "shopLinkText" },
            { type: "text", label: "Shop Link URL", key: "shopLinkUrl" },
            {
              type: "text",
              label: "Collections Link Text",
              key: "collectionsLinkText",
            },
            {
              type: "text",
              label: "Collections Link URL",
              key: "collectionsLinkUrl",
            },
            { type: "text", label: "About Link Text", key: "aboutLinkText" },
            { type: "text", label: "About Link URL", key: "aboutLinkUrl" },
          ],
        },
        {
          id: "mega-menu-col1",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu - Column 1",
          subtitle: "New In links",
          controls: [
            { type: "text", label: "Column Heading", key: "megaCol1Heading" },
            { type: "text", label: "Link 1 Text", key: "megaCol1Link1Text" },
            { type: "text", label: "Link 1 URL", key: "megaCol1Link1Url" },
            { type: "text", label: "Link 2 Text", key: "megaCol1Link2Text" },
            { type: "text", label: "Link 2 URL", key: "megaCol1Link2Url" },
            { type: "text", label: "Link 3 Text", key: "megaCol1Link3Text" },
            { type: "text", label: "Link 3 URL", key: "megaCol1Link3Url" },
            { type: "text", label: "Link 4 Text", key: "megaCol1Link4Text" },
            { type: "text", label: "Link 4 URL", key: "megaCol1Link4Url" },
          ],
        },
        {
          id: "mega-menu-col2",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu - Column 2",
          subtitle: "Shop By Age links",
          controls: [
            { type: "text", label: "Column Heading", key: "megaCol2Heading" },
            { type: "text", label: "Link 1 Text", key: "megaCol2Link1Text" },
            { type: "text", label: "Link 1 URL", key: "megaCol2Link1Url" },
            { type: "text", label: "Link 2 Text", key: "megaCol2Link2Text" },
            { type: "text", label: "Link 2 URL", key: "megaCol2Link2Url" },
            { type: "text", label: "Link 3 Text", key: "megaCol2Link3Text" },
            { type: "text", label: "Link 3 URL", key: "megaCol2Link3Url" },
          ],
        },
        {
          id: "mega-cards",
          icon: "fa-image",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu Cards",
          subtitle: "Image cards in mega menu",
          controls: [
            { type: "text", label: "Card 1 Image URL", key: "megaCard1Image" },
            { type: "text", label: "Card 1 Alt Text", key: "megaCard1Alt" },
            { type: "text", label: "Card 1 Text", key: "megaCard1Text" },
            { type: "text", label: "Card 2 Image URL", key: "megaCard2Image" },
            { type: "text", label: "Card 2 Alt Text", key: "megaCard2Alt" },
            { type: "text", label: "Card 2 Text", key: "megaCard2Text" },
          ],
        },
        {
          id: "mobile",
          icon: "fa-mobile-screen",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mobile Menu",
          subtitle: "Sidebar links and text",
          controls: [
            { type: "text", label: "Close Menu Text", key: "closeMenuText" },
            {
              type: "text",
              label: "Mobile Link 1 Text",
              key: "mobileLink1Text",
            },
            { type: "text", label: "Mobile Link 1 URL", key: "mobileLink1Url" },
            {
              type: "text",
              label: "Mobile Link 2 Text",
              key: "mobileLink2Text",
            },
            { type: "text", label: "Mobile Link 2 URL", key: "mobileLink2Url" },
            {
              type: "text",
              label: "Mobile Link 3 Text",
              key: "mobileLink3Text",
            },
            { type: "text", label: "Mobile Link 3 URL", key: "mobileLink3Url" },
            {
              type: "text",
              label: "Mobile Link 4 Text",
              key: "mobileLink4Text",
            },
            { type: "text", label: "Mobile Link 4 URL", key: "mobileLink4Url" },
          ],
        },
        {
          id: "actions",
          icon: "fa-cart-shopping",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Header Actions",
          subtitle: "Search and cart URLs",
          controls: [
            { type: "text", label: "Search URL", key: "searchUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
          ],
        },
        {
          id: "hero",
          icon: "fa-star",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Hero Section",
          subtitle: "Hero text content",
          controls: [
            { type: "text", label: "Hero Subtitle", key: "heroSubtitle" },
            {
              type: "textarea",
              label: "Hero Heading (HTML allowed)",
              key: "heroHeading",
            },
          ],
        },
        {
          id: "layout",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Layout",
          subtitle: "Header dimensions and padding",
          controls: [
            { type: "text", label: "Side Padding", key: "sidePadding" },
            {
              type: "text",
              label: "Header Top Offset",
              key: "headerTopOffset",
            },
            { type: "text", label: "Header Height", key: "headerHeight" },
            {
              type: "text",
              label: "Header Scrolled Height",
              key: "headerScrolledHeight",
            },
            {
              type: "text",
              label: "Header Border Radius",
              key: "headerBorderRadius",
            },
          ],
        },
      ],
    },
    {
      id: "header-v2",
      name: "Header — Vision Smart Security",
      description:
        "Tech-focused header with mega menu, search bar, and mobile accordion",
      tags: [
        "mega-menu",
        "badge-new",
        "search-bar",
        "mobile-accordion",
        "dual-nav",
      ],
      component: HeaderV2,
      getCode: getHeaderV2Code,
      defaultConfig: {
        // Colors
        bgColor: "#f3f4f6",
        textPrimary: "#111827",
        textSecondary: "#4b5563",
        accentYellow: "#fde047",
        accentGreenBg: "#d1fae5",
        accentGreenText: "#065f46",
        searchBg: "#e5e7eb",
        navHover: "#000000",

        // Layout
        borderRadius: "8px",
        containerWidth: "1440px",
        headerPaddingTop: "24px",
        headerPaddingBottom: "16px",
        headerPaddingSides: "40px",

        // Logo
        logoPrefix: "VISI",
        logoSuffix: "N",
        logoUrl: "#",
        logoWeight: "800",
        logoSize: "28px",
        logoColor: "#000000",
        cameraBgColor: "#fef08a",
        cameraBorderColor: "#000000",
        cameraDotColor: "#000000",

        // Icons
        iconColor: "#111827",
        cartBadgeBg: "#1f2937",
        cartBadgeText: "white",
        cartBadgeCount: "0",

        // Search
        searchPlaceholder: "Search",
        searchPadding: "10px 40px 10px 16px",

        // Mega Dropdown
        megaDropdownWidth: "650px",
        megaDropdownColumns: "1fr 1fr 1.5fr",
        megaDropdownBg: "#ffffff",
        megaDropdownShadow: "0 20px 40px rgba(0,0,0,0.12)",
        dropdownHeadingColor: "#9ca3af",
        dropdownCardBg: "#f8f9fa",
        dropdownCardText: "#111827",

        // Navigation Links - Main
        featuresLinkText: "Features",
        featuresLinkUrl: "#",
        shopLinkText: "Shop",
        shopLinkUrl: "#",
        doorbellsText: "Doorbells",
        doorbellsUrl: "#",
        journalText: "Journal",
        journalUrl: "#",

        // Navigation Links - Secondary
        aboutText: "About",
        aboutUrl: "#",
        supportText: "Support",
        supportUrl: "#",

        // Badges
        shopBadgeText: "NEW",

        // Dropdown 1 (Features)
        dropdown1Heading: "Hardware",
        dropdown1Link1Text: "4K Cameras",
        dropdown1Link1Url: "#",
        dropdown1Link2Text: "Night Vision",
        dropdown1Link2Url: "#",

        dropdown2Heading: "Software",
        dropdown2Link1Text: "Mobile App",
        dropdown2Link1Url: "#",
        dropdown2Link2Text: "AI Tracking",
        dropdown2Link2Url: "#",

        dropdownCardText: "Latest Security Kit 2024",

        // Dropdown 2 (Shop)
        shopDropdownHeading: "Category",
        shopDropdownLink1Text: "Indoor",
        shopDropdownLink1Url: "#",
        shopDropdownLink2Text: "Outdoor",
        shopDropdownLink2Url: "#",
        shopDropdownCardText: "Save 20% on Bundles",

        // Account & Cart
        accountUrl: "#",
        cartUrl: "#",

        // Mobile Sidebar
        mobileSidebarBg: "#ffffff",
        sidebarOverlay: "rgba(0,0,0,0.5)",
        mobileToggleColor: "#111827",
        mobileLogoText: "VISION",
        mobileLogoColor: "#000000",
        closeIconColor: "#111827",
        mobileNavHeadColor: "#111827",
        mobileNavLinkColor: "#6b7280",

        // Mobile Navigation
        mobileFeaturesText: "FEATURES",
        mobileFeaturesLink1Text: "AI Recognition",
        mobileFeaturesLink1Url: "#",
        mobileFeaturesLink2Text: "Cloud Storage",
        mobileFeaturesLink2Url: "#",

        mobileShopText: "SHOP",
        mobileShopBadge: "NEW",
        mobileShopLink1Text: "Cameras",
        mobileShopLink1Url: "#",
        mobileShopLink2Text: "Doorbells",
        mobileShopLink2Url: "#",

        mobileSupportText: "SUPPORT",
        mobileSupportUrl: "#",
        mobileSupportColor: "#000000",

        // Demo Text
        demoText: "Scroll or Hover to see the updated badge alignment.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Colors",
          subtitle: "Background, text, and accent colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Primary", key: "textPrimary" },
            { type: "color", label: "Text Secondary", key: "textSecondary" },
            { type: "color", label: "Accent Yellow", key: "accentYellow" },
            { type: "color", label: "Accent Green BG", key: "accentGreenBg" },
            {
              type: "color",
              label: "Accent Green Text",
              key: "accentGreenText",
            },
            { type: "color", label: "Search Background", key: "searchBg" },
            { type: "color", label: "Nav Hover", key: "navHover" },
          ],
        },
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Logo",
          subtitle: "Logo text and camera icon",
          controls: [
            { type: "text", label: "Logo Prefix", key: "logoPrefix" },
            { type: "text", label: "Logo Suffix", key: "logoSuffix" },
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "text", label: "Logo Weight", key: "logoWeight" },
            { type: "text", label: "Logo Size", key: "logoSize" },
            { type: "color", label: "Logo Color", key: "logoColor" },
            { type: "color", label: "Camera BG", key: "cameraBgColor" },
            { type: "color", label: "Camera Border", key: "cameraBorderColor" },
            { type: "color", label: "Camera Dot", key: "cameraDotColor" },
          ],
        },
        {
          id: "header-layout",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Header Layout",
          subtitle: "Padding and dimensions",
          controls: [
            { type: "text", label: "Padding Top", key: "headerPaddingTop" },
            {
              type: "text",
              label: "Padding Bottom",
              key: "headerPaddingBottom",
            },
            { type: "text", label: "Padding Sides", key: "headerPaddingSides" },
            { type: "text", label: "Border Radius", key: "borderRadius" },
            { type: "text", label: "Container Width", key: "containerWidth" },
          ],
        },
        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Search Bar",
          subtitle: "Search input styling",
          controls: [
            { type: "text", label: "Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Input Padding", key: "searchPadding" },
          ],
        },
        {
          id: "icons",
          icon: "fa-cart-shopping",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Icons",
          subtitle: "Account, cart, and badges",
          controls: [
            { type: "color", label: "Icon Color", key: "iconColor" },
            { type: "color", label: "Cart Badge BG", key: "cartBadgeBg" },
            { type: "color", label: "Cart Badge Text", key: "cartBadgeText" },
            { type: "text", label: "Cart Badge Count", key: "cartBadgeCount" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
          ],
        },
        {
          id: "mega-menu",
          icon: "fa-bars-staggered",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mega Menu",
          subtitle: "Dropdown styling",
          controls: [
            { type: "text", label: "Dropdown Width", key: "megaDropdownWidth" },
            { type: "text", label: "Grid Columns", key: "megaDropdownColumns" },
            { type: "color", label: "Dropdown BG", key: "megaDropdownBg" },
            {
              type: "text",
              label: "Dropdown Shadow",
              key: "megaDropdownShadow",
            },
            {
              type: "color",
              label: "Heading Color",
              key: "dropdownHeadingColor",
            },
            { type: "color", label: "Card BG", key: "dropdownCardBg" },
            { type: "color", label: "Card Text", key: "dropdownCardText" },
          ],
        },
        {
          id: "nav-links-main",
          icon: "fa-link",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Main Navigation",
          subtitle: "Primary nav links",
          controls: [
            { type: "text", label: "Features Text", key: "featuresLinkText" },
            { type: "text", label: "Features URL", key: "featuresLinkUrl" },
            { type: "text", label: "Shop Text", key: "shopLinkText" },
            { type: "text", label: "Shop URL", key: "shopLinkUrl" },
            { type: "text", label: "Doorbells Text", key: "doorbellsText" },
            { type: "text", label: "Doorbells URL", key: "doorbellsUrl" },
            { type: "text", label: "Journal Text", key: "journalText" },
            { type: "text", label: "Journal URL", key: "journalUrl" },
            { type: "text", label: "Shop Badge Text", key: "shopBadgeText" },
          ],
        },
        {
          id: "nav-links-secondary",
          icon: "fa-link",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Secondary Navigation",
          subtitle: "About and Support links",
          controls: [
            { type: "text", label: "About Text", key: "aboutText" },
            { type: "text", label: "About URL", key: "aboutUrl" },
            { type: "text", label: "Support Text", key: "supportText" },
            { type: "text", label: "Support URL", key: "supportUrl" },
          ],
        },
        {
          id: "dropdown-content-1",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Features Dropdown",
          subtitle: "Hardware & Software links",
          controls: [
            {
              type: "text",
              label: "Hardware Heading",
              key: "dropdown1Heading",
            },
            {
              type: "text",
              label: "Hardware Link 1 Text",
              key: "dropdown1Link1Text",
            },
            {
              type: "text",
              label: "Hardware Link 1 URL",
              key: "dropdown1Link1Url",
            },
            {
              type: "text",
              label: "Hardware Link 2 Text",
              key: "dropdown1Link2Text",
            },
            {
              type: "text",
              label: "Hardware Link 2 URL",
              key: "dropdown1Link2Url",
            },
            {
              type: "text",
              label: "Software Heading",
              key: "dropdown2Heading",
            },
            {
              type: "text",
              label: "Software Link 1 Text",
              key: "dropdown2Link1Text",
            },
            {
              type: "text",
              label: "Software Link 1 URL",
              key: "dropdown2Link1Url",
            },
            {
              type: "text",
              label: "Software Link 2 Text",
              key: "dropdown2Link2Text",
            },
            {
              type: "text",
              label: "Software Link 2 URL",
              key: "dropdown2Link2Url",
            },
            { type: "text", label: "Card Text", key: "dropdownCardText" },
          ],
        },
        {
          id: "dropdown-content-2",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Shop Dropdown",
          subtitle: "Category links",
          controls: [
            {
              type: "text",
              label: "Category Heading",
              key: "shopDropdownHeading",
            },
            {
              type: "text",
              label: "Indoor Text",
              key: "shopDropdownLink1Text",
            },
            { type: "text", label: "Indoor URL", key: "shopDropdownLink1Url" },
            {
              type: "text",
              label: "Outdoor Text",
              key: "shopDropdownLink2Text",
            },
            { type: "text", label: "Outdoor URL", key: "shopDropdownLink2Url" },
            { type: "text", label: "Card Text", key: "shopDropdownCardText" },
          ],
        },
        {
          id: "mobile",
          icon: "fa-mobile-screen",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mobile Sidebar",
          subtitle: "Colors and navigation",
          controls: [
            { type: "color", label: "Sidebar BG", key: "mobileSidebarBg" },
            { type: "color", label: "Overlay", key: "sidebarOverlay" },
            { type: "color", label: "Toggle Color", key: "mobileToggleColor" },
            { type: "text", label: "Mobile Logo Text", key: "mobileLogoText" },
            {
              type: "color",
              label: "Mobile Logo Color",
              key: "mobileLogoColor",
            },
            { type: "color", label: "Close Icon Color", key: "closeIconColor" },
            {
              type: "color",
              label: "Nav Head Color",
              key: "mobileNavHeadColor",
            },
            {
              type: "color",
              label: "Nav Link Color",
              key: "mobileNavLinkColor",
            },
          ],
        },
        {
          id: "mobile-nav",
          icon: "fa-bars",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mobile Navigation",
          subtitle: "Sidebar links",
          controls: [
            { type: "text", label: "Features Text", key: "mobileFeaturesText" },
            {
              type: "text",
              label: "Features Link 1 Text",
              key: "mobileFeaturesLink1Text",
            },
            {
              type: "text",
              label: "Features Link 1 URL",
              key: "mobileFeaturesLink1Url",
            },
            {
              type: "text",
              label: "Features Link 2 Text",
              key: "mobileFeaturesLink2Text",
            },
            {
              type: "text",
              label: "Features Link 2 URL",
              key: "mobileFeaturesLink2Url",
            },
            { type: "text", label: "Shop Text", key: "mobileShopText" },
            { type: "text", label: "Shop Badge", key: "mobileShopBadge" },
            {
              type: "text",
              label: "Shop Link 1 Text",
              key: "mobileShopLink1Text",
            },
            {
              type: "text",
              label: "Shop Link 1 URL",
              key: "mobileShopLink1Url",
            },
            {
              type: "text",
              label: "Shop Link 2 Text",
              key: "mobileShopLink2Text",
            },
            {
              type: "text",
              label: "Shop Link 2 URL",
              key: "mobileShopLink2Url",
            },
            { type: "text", label: "Support Text", key: "mobileSupportText" },
            { type: "text", label: "Support URL", key: "mobileSupportUrl" },
            {
              type: "color",
              label: "Support Color",
              key: "mobileSupportColor",
            },
          ],
        },
      ],
    },
  ],
};

export default headersRegistry;
