// Named export — used by registry and generateComponentCode.js
export function getTestimonialV1Code(config = {}) {
  const bgColor      = config.bgColor      || "#ffffff";
  const cardBg       = config.cardBg       || "#ffffff";
  const borderColor  = config.borderColor  || "#f0f0f0";
  const textDark     = config.textDark     || "#333333";
  const textMuted    = config.textMuted    || "#666666";
  const starColor    = config.starColor    || "#c9a078";
  const headingText  = config.headingText  || "Customers";
  const headingItalic = config.headingItalic || "love us.";

  const slide1Image    = config.slide1Image    || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600";
  const slide1Avatar   = config.slide1Avatar   || "https://i.pravatar.cc/150?u=rachel";
  const slide1Name     = config.slide1Name     || "Rachel Nguyen";
  const slide1Tag      = config.slide1Tag      || "Verified Customer";
  const slide1Stars    = config.slide1Stars    || "★★★★★";
  const slide1Title    = config.slide1Title    || "";
  const slide1Text     = config.slide1Text     || "At Puff, your beauty journey is not just a routine; it's a luxurious escape into a realm of indulgence and self-celebration.";

  const slide2Image    = config.slide2Image    || "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600";
  const slide2Avatar   = config.slide2Avatar   || "https://i.pravatar.cc/150?u=jenny";
  const slide2Name     = config.slide2Name     || "Jenny D.";
  const slide2Tag      = config.slide2Tag      || "Verified Customer";
  const slide2Stars    = config.slide2Stars    || "★★★★★";
  const slide2Title    = config.slide2Title    || "Perfect for sensitive skin!";
  const slide2Text     = config.slide2Text     || "This is so nourishing on my sensitive, damaged skin. And the perfect size to take with me in any bag!";

  const slide3Image    = config.slide3Image    || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600";
  const slide3Avatar   = config.slide3Avatar   || "https://i.pravatar.cc/150?u=sarah";
  const slide3Name     = config.slide3Name     || "Sarah J.";
  const slide3Tag      = config.slide3Tag      || "Verified Customer";
  const slide3Stars    = config.slide3Stars    || "★★★★★";
  const slide3Title    = config.slide3Title    || "Highly Effective Serum";
  const slide3Text     = config.slide3Text     || "I've seen a noticeable reduction in fine lines after just a month. This serum is lightweight and absorbs quickly.";

  const slide4Image    = config.slide4Image    || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600";
  const slide4Avatar   = config.slide4Avatar   || "https://i.pravatar.cc/150?u=emma";
  const slide4Name     = config.slide4Name     || "Emma L.";
  const slide4Tag      = config.slide4Tag      || "Verified Customer";
  const slide4Stars    = config.slide4Stars    || "★★★★★";
  const slide4Title    = config.slide4Title    || "My Go-To Moisturizer";
  const slide4Text     = config.slide4Text     || "This moisturizer smells heavenly and leaves my skin glowing all day long. It's so gentle on my sensitive skin.";

  return `<!-- Testimonial V1 — Swiper Slider with Image | Shopify Bazzar -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<style>
  .tsv1-wrapper {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${bgColor};
    margin: 0;
    padding: 60px 0;
    color: ${textDark};
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .tsv1-wrapper * {
    box-sizing: border-box;
  }

  .tsv1-section {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
  }

  .tsv1-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .tsv1-header h2 {
    font-size: 40px;
    font-weight: 500;
    margin: 0;
    color: ${textDark};
  }

  .tsv1-header h2 span {
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-weight: 400;
  }

  .tsv1-nav-counter {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .tsv1-counter {
    font-size: 14px;
    color: ${textMuted};
    letter-spacing: 1px;
  }

  .tsv1-nav-group {
    display: flex;
    gap: 12px;
  }

  .tsv1-nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid #dcdcdc;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    outline: none;
  }

  .tsv1-nav-btn:hover {
    border-color: #999;
    background-color: #fafafa;
  }

  .tsv1-nav-btn svg {
    width: 18px;
    height: 18px;
    color: #555;
  }

  .tsv1-swiper {
    width: 100%;
    overflow: visible;
  }

  .tsv1-swiper .swiper-wrapper {
    align-items: flex-start;
  }

  .tsv1-swiper .swiper-slide {
    width: auto;
    display: flex;
    gap: 0;
    height: auto;
  }

  .tsv1-image {
    width: 250px;
    height: 400px;
    object-fit: cover;
    border-radius: 12px 0 0 12px;
    flex-shrink: 0;
  }

  .tsv1-card {
    background: ${cardBg};
    padding: 40px;
    border-radius: 0 12px 12px 0;
    width: 350px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
    border: 1px solid ${borderColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
  }

  .tsv1-card-top {
    text-align: left;
  }

  .tsv1-reviewer-info {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
  }

  .tsv1-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .tsv1-reviewer-meta {
    display: flex;
    flex-direction: column;
  }

  .tsv1-reviewer-name {
    font-weight: 600;
    font-size: 15px;
    color: ${textDark};
  }

  .tsv1-verified-tag {
    font-size: 13px;
    color: ${textMuted};
    margin-top: 3px;
  }

  .tsv1-stars {
    font-size: 18px;
    color: ${starColor};
    margin-bottom: 25px;
    letter-spacing: 3px;
  }

  .tsv1-quote-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    color: ${textDark};
  }

  .tsv1-quote-text {
    font-size: 14px;
    line-height: 1.7;
    color: ${textMuted};
    margin: 0;
  }

  @media (max-width: 1024px) {
    .tsv1-swiper .swiper-slide {
      flex-direction: column;
      gap: 15px;
    }
    .tsv1-image {
      width: 100%;
      height: 250px;
      border-radius: 12px;
    }
    .tsv1-card {
      width: 100%;
      height: auto;
      padding: 25px;
      border-radius: 12px;
    }
    .tsv1-header h2 {
      font-size: 32px;
    }
    .tsv1-quote-text {
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    .tsv1-wrapper {
      padding: 40px 0;
    }
    .tsv1-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 32px;
    }
    .tsv1-header h2 {
      font-size: 26px;
    }
    .tsv1-card {
      padding: 20px;
    }
  }
</style>

<div class="tsv1-wrapper">
  <section class="tsv1-section">

    <div class="tsv1-header">
      <h2>${headingText} <span>${headingItalic}</span></h2>
      <div class="tsv1-nav-counter">
        <span class="tsv1-counter">1 — 4</span>
        <div class="tsv1-nav-group">
          <button class="tsv1-nav-btn tsv1-btn-prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="tsv1-nav-btn tsv1-btn-next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="swiper tsv1-swiper">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <img src="${slide1Image}" class="tsv1-image" alt="Testimonial">
          <div class="tsv1-card">
            <div class="tsv1-card-top">
              <div class="tsv1-reviewer-info">
                <img src="${slide1Avatar}" alt="${slide1Name}" class="tsv1-avatar">
                <div class="tsv1-reviewer-meta">
                  <span class="tsv1-reviewer-name">${slide1Name}</span>
                  <span class="tsv1-verified-tag">${slide1Tag}</span>
                </div>
              </div>
              <div class="tsv1-stars">${slide1Stars}</div>
              ${slide1Title ? `<p class="tsv1-quote-title">${slide1Title}</p>` : ""}
              <p class="tsv1-quote-text">${slide1Text}</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <img src="${slide2Image}" class="tsv1-image" alt="Testimonial">
          <div class="tsv1-card">
            <div class="tsv1-card-top">
              <div class="tsv1-reviewer-info">
                <img src="${slide2Avatar}" alt="${slide2Name}" class="tsv1-avatar">
                <div class="tsv1-reviewer-meta">
                  <span class="tsv1-reviewer-name">${slide2Name}</span>
                  <span class="tsv1-verified-tag">${slide2Tag}</span>
                </div>
              </div>
              <div class="tsv1-stars">${slide2Stars}</div>
              ${slide2Title ? `<p class="tsv1-quote-title">${slide2Title}</p>` : ""}
              <p class="tsv1-quote-text">${slide2Text}</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <img src="${slide3Image}" class="tsv1-image" alt="Testimonial">
          <div class="tsv1-card">
            <div class="tsv1-card-top">
              <div class="tsv1-reviewer-info">
                <img src="${slide3Avatar}" alt="${slide3Name}" class="tsv1-avatar">
                <div class="tsv1-reviewer-meta">
                  <span class="tsv1-reviewer-name">${slide3Name}</span>
                  <span class="tsv1-verified-tag">${slide3Tag}</span>
                </div>
              </div>
              <div class="tsv1-stars">${slide3Stars}</div>
              ${slide3Title ? `<p class="tsv1-quote-title">${slide3Title}</p>` : ""}
              <p class="tsv1-quote-text">${slide3Text}</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <img src="${slide4Image}" class="tsv1-image" alt="Testimonial">
          <div class="tsv1-card">
            <div class="tsv1-card-top">
              <div class="tsv1-reviewer-info">
                <img src="${slide4Avatar}" alt="${slide4Name}" class="tsv1-avatar">
                <div class="tsv1-reviewer-meta">
                  <span class="tsv1-reviewer-name">${slide4Name}</span>
                  <span class="tsv1-verified-tag">${slide4Tag}</span>
                </div>
              </div>
              <div class="tsv1-stars">${slide4Stars}</div>
              ${slide4Title ? `<p class="tsv1-quote-title">${slide4Title}</p>` : ""}
              <p class="tsv1-quote-text">${slide4Text}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const tsv1Swiper = new Swiper(".tsv1-swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
      navigation: {
        nextEl: ".tsv1-btn-next",
        prevEl: ".tsv1-btn-prev",
      },
      on: {
        init: function() {
          tsv1UpdateCounter(this);
        },
        slideChange: function() {
          tsv1UpdateCounter(this);
        }
      }
    });

    function tsv1UpdateCounter(s) {
      const counter = document.querySelector(".tsv1-counter");
      if (counter) {
        const total = s.slides.length - s.loopedSlides * 2;
        counter.textContent = \`\${s.realIndex + 1} — \${total}\`;
      }
    }
  });
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — editor and card preview render via getCode() → iframe.
export default function TestimonialV1({ config }) {
  return null;
}