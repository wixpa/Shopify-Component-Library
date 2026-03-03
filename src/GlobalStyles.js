import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

    :root {
        /* ── Fonts ── */
        --inter-font: "Inter", sans-serif;
        --montserrat-font: "Montserrat", sans-serif;
        --google-sans-font: "Google Sans", sans-serif;
        --roboto-mono-font: "Roboto Mono", monospace;

        /* ── Brand Colors ── */
        --color-primary-purple: #4f46e5;
        --color-primary-blue: #2563eb;
        --color-primary-blue-light: #3b82f6;
        --color-primary-dark: #0f172a;
        --color-accent-indigo: #5850ec;
        --color-accent-indigo-hover: #4f46e5;
        --color-deep-blue: #1e3a8a;

        /* ── Text Colors ── */
        --color-text-main: #111827;
        --color-text-secondary: #4b5563;
        --color-text-light: #6b7280;
        --color-text-muted: #9ca3af;
        --color-text-white: #ffffff;

        /* ── Background Colors ── */
        --color-bg-white: #ffffff;
        --color-bg-light: #f9fafb;
        --color-bg-gray: #f3f4f6;
        --color-bg-dark: #1e1e2f;
        --color-bg-gradient-start: #eef2ff;
        --color-bg-gradient-mid: #e0f2fe;
        --color-bg-gradient-end: #ccfbf1;

        /* ── Border & UI Colors ── */
        --color-border: #e5e7eb;
        --color-border-hover: #d1d5db;
        --color-icon: #374151;
        --color-success: #10b981;
        --color-error: #ef4444;
        --color-strike: #9ca3af;

        /* ── Banner ── */
        --color-banner-bg: #1e1e2f;
        --color-banner-btn: #5850ec;
        --color-banner-btn-hover: #4f46e5;

        /* ── Highlight (Templates word) ── */
        --color-highlight-bg: #dbeafe;
        --color-highlight-text: #3b82f6;

        /* ── Tag Badges ── */
        --color-tag-app-bg: #dbeafe;
        --color-tag-app-text: #1d4ed8;
        --color-tag-mkt-bg: #ccfbf1;
        --color-tag-mkt-text: #0f766e;

        /* ── Button Colors ── */
        --color-btn-dark: #1e293b;
        --color-btn-dark-hover: #0f172a;
        --color-btn-slate: #1f2937;
        --color-btn-slate-hover: #111827;

        /* ── Shadows ── */
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

        /* ── Spacing ── */
        --container-max-width: 1280px;
        --container-padding: 0 1.5rem;
        --section-padding: 4rem 1.5rem;

        /* ── Border Radius ── */
        --radius-sm: 0.375rem;
        --radius-md: 0.5rem;
        --radius-lg: 1rem;
        --radius-xl: 1.5rem;
        --radius-full: 9999px;

        /* ── Transitions ── */
        --transition-fast: all 0.2s ease;
        --transition-normal: all 0.3s ease;

        /* ── Components Page ── */
        --color-sidebar-bg: #ffffff;
        --color-sidebar-border: #e5e8ec;
        --color-nav-text: #0a1929;
        --color-nav-text-secondary: #3e5060;
        --color-nav-text-tertiary: #6f7e8c;
        --color-nav-active: #007fff;
        --color-nav-active-bg: #f0f7ff;
        --color-nav-hover-bg: rgba(0, 0, 0, 0.04);
        --color-badge-new-bg: #e8f5e9;
        --color-badge-new-text: #1b5e20;
        --color-badge-md2-bg: #f0f7ff;
        --color-badge-md2-text: #007fff;
        --color-badge-gray-bg: #f3f6f9;
        --color-badge-gray-text: #3e5060;
        --color-vis-purple: #9c27b0;
        --color-vis-purple-light: #f3e5f5;
        --sidebar-width: 250px;

        --sidebar-width: 260px;
        --header-height: 64px
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--google-sans-font);
    }

    html, body {
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        line-height: 1.5;
        color: var(--color-text-main);
        background-color: var(--color-bg-white);
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: var(--transition-fast);
    }

    ul {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }

    /* index.css or global.css */
    html, body {
        height: 100%;
        overflow-x: hidden;
        /* DO NOT set overflow-y: hidden or overflow-y: auto here */
    }

    #root {
        min-height: 100%;
    }
`;

export default GlobalStyles;
