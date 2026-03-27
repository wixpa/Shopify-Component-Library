// Named export — used by registry and generateComponentCode.js
export function getFaqV4Code(config = {}) {
   const bgColor = config.bgColor || "#ffffff";
   const headingText = config.headingText || "FAQs";
   const headingColor = config.headingColor || "#1a1a1a";
   const cardBg = config.cardBg || "#ffffff";
   const borderColor = config.borderColor || "#e5e7eb";
   const questionColor = config.questionColor || "#1a1a1a";
   const answerColor = config.answerColor || "#4b5563";
   const iconColor = config.iconColor || "#1a1a1a";

   const faq1Q = config.faq1Q || "1/ What products do you offer?";
   const faq1A =
      config.faq1A ||
      "We offer a wide range of premium skincare and beauty products, specifically formulated to provide luxury results with ethical ingredients.";
   const faq2Q = config.faq2Q || "2/ Do you offer international shipping?";
   const faq2A =
      config.faq2A ||
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout.";
   const faq3Q = config.faq3Q || "3/ What is your return policy?";
   const faq3A =
      config.faq3A ||
      "We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, you can return it for a full refund or exchange.";
   const faq4Q = config.faq4Q || "4/ Do you offer product warranties?";
   const faq4A =
      config.faq4A ||
      "All our electronic beauty tools come with a 1-year limited warranty covering manufacturing defects.";

   return `<!-- FAQ V4 — Card Style Accordion | Shopify Bazzar -->
<style>
  .faq4-wrapper * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .faq4-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: ${bgColor};
    color: ${headingColor};
    padding: 50px 20px;
  }

  .faq4-section {
    max-width: 1000px;
    margin: 0 auto;
  }

  .faq4-title {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 40px;
    color: ${headingColor};
  }

  .faq4-item {
    background: ${cardBg};
    border: 1px solid ${borderColor};
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .faq4-item:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  }

  .faq4-header {
    width: 100%;
    padding: 24px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    outline: none;
  }

  .faq4-question-text {
    font-size: 18px;
    font-weight: 500;
    color: ${questionColor};
  }

  .faq4-arrow-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    opacity: 0.6;
    color: ${iconColor};
    flex-shrink: 0;
  }

  .faq4-item.active .faq4-arrow-icon {
    transform: rotate(180deg);
  }

  .faq4-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .faq4-content-inner {
    padding: 0 30px 24px 30px;
    color: ${answerColor};
    line-height: 1.6;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .faq4-title {
      font-size: 32px;
    }
    .faq4-header {
      padding: 20px;
    }
    .faq4-question-text {
      font-size: 16px;
    }
    .faq4-content-inner {
      padding: 0 20px 20px 20px;
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    .faq4-wrapper {
      padding: 32px 14px;
    }
    .faq4-title {
      font-size: 26px;
      margin-bottom: 28px;
    }
    .faq4-question-text {
      font-size: 14px;
    }
    .faq4-content-inner {
      font-size: 14px;
    }
  }
</style>

<div class="faq4-wrapper">
  <section class="faq4-section">
    <h1 class="faq4-title">${headingText}</h1>

    <div class="faq4-item">
      <button class="faq4-header">
        <span class="faq4-question-text">${faq1Q}</span>
        <svg class="faq4-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      <div class="faq4-content">
        <div class="faq4-content-inner">${faq1A}</div>
      </div>
    </div>

    <div class="faq4-item">
      <button class="faq4-header">
        <span class="faq4-question-text">${faq2Q}</span>
        <svg class="faq4-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      <div class="faq4-content">
        <div class="faq4-content-inner">${faq2A}</div>
      </div>
    </div>

    <div class="faq4-item">
      <button class="faq4-header">
        <span class="faq4-question-text">${faq3Q}</span>
        <svg class="faq4-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      <div class="faq4-content">
        <div class="faq4-content-inner">${faq3A}</div>
      </div>
    </div>

    <div class="faq4-item">
      <button class="faq4-header">
        <span class="faq4-question-text">${faq4Q}</span>
        <svg class="faq4-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      <div class="faq4-content">
        <div class="faq4-content-inner">${faq4A}</div>
      </div>
    </div>

  </section>
</div>

<script>
  document.querySelectorAll(".faq4-header").forEach(function(header) {
    header.addEventListener("click", function() {
      const item = header.parentElement;
      const content = item.querySelector(".faq4-content");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq4-item").forEach(function(otherItem) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq4-content").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — editor and card preview render via getCode() → iframe.
export default function FaqV4({ config }) {
   return null;
}
