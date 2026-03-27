// Named export — used by registry and generateComponentCode.js
export function getFaqV3Code(config = {}) {
  const bgColor       = config.bgColor       || "#ffffff";
  const headingText   = config.headingText   || "FAQs";
  const headingColor  = config.headingColor  || "#121212";
  const borderColor   = config.borderColor   || "#e8e8e8";
  const questionColor = config.questionColor || "#121212";
  const answerColor   = config.answerColor   || "#444444";
  const iconColor     = config.iconColor     || "#121212";

  const faq1Q = config.faq1Q || "How long does an order take to arrive?";
  const faq1A = config.faq1A || "International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays.";
  const faq2Q = config.faq2Q || "How do I set up a subscription order?";
  const faq2A = config.faq2A || "Simply select the \"Subscribe & Save\" option on the product page, choose your frequency, and checkout as normal.";
  const faq3Q = config.faq3Q || "How to return my items?";
  const faq3A = config.faq3A || "Visit our Returns Portal within 30 days of purchase to generate a prepaid shipping label.";
  const faq4Q = config.faq4Q || "How can I choose the right size for me?";
  const faq4A = config.faq4A || "Check our size guide link located next to the size selection dropdown on every product page.";
  const faq5Q = config.faq5Q || "Which payment methods do you accept?";
  const faq5A = config.faq5A || "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.";
  const faq6Q = config.faq6Q || "How can I track my order?";
  const faq6A = config.faq6A || "You will receive a tracking link via email as soon as your order has been processed and shipped.";

  return `<!-- FAQ V3 — Uppercase Bold Accordion | Shopify Bazzar -->
<style>
  .faq3-wrapper * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .faq3-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    padding: 40px 20px;
    color: ${headingColor};
    background-color: ${bgColor};
    display: flex;
    justify-content: center;
  }

  .faq3-section {
    width: 100%;
    max-width: 1000px;
  }

  .faq3-title {
    text-align: left;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
    color: ${headingColor};
  }

  .faq3-item {
    border-bottom: 1px solid ${borderColor};
  }

  .faq3-item:first-of-type {
    border-top: 1px solid ${borderColor};
  }

  .faq3-header {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: opacity 0.2s;
    color: ${questionColor};
  }

  .faq3-header:hover {
    opacity: 0.7;
  }

  .faq3-header span {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-right: 20px;
    color: ${questionColor};
  }

  .faq3-icon {
    position: relative;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    color: ${iconColor};
  }

  .faq3-icon::before,
  .faq3-icon::after {
    content: '';
    position: absolute;
    background-color: currentColor;
    transition: transform 0.3s ease;
  }

  .faq3-icon::before {
    top: 6px;
    left: 0;
    width: 100%;
    height: 2px;
  }

  .faq3-icon::after {
    top: 0;
    left: 6px;
    width: 2px;
    height: 100%;
  }

  .faq3-item.active .faq3-icon::after {
    transform: rotate(90deg);
    opacity: 0;
  }

  .faq3-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .faq3-content-inner {
    padding-bottom: 25px;
    font-size: 14px;
    line-height: 1.6;
    color: ${answerColor};
    max-width: 95%;
  }

  @media (max-width: 600px) {
    .faq3-title {
      font-size: 24px;
    }
    .faq3-header span {
      font-size: 12px;
    }
    .faq3-content-inner {
      font-size: 13px;
    }
  }

  @media (max-width: 400px) {
    .faq3-wrapper {
      padding: 28px 14px;
    }
    .faq3-title {
      font-size: 20px;
      margin-bottom: 28px;
    }
    .faq3-header {
      padding: 16px 0;
    }
  }
</style>

<div class="faq3-wrapper">
  <div class="faq3-section">
    <h2 class="faq3-title">${headingText}</h2>

    <div class="faq3-item active">
      <button class="faq3-header">
        <span>${faq1Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content" style="max-height: 200px;">
        <div class="faq3-content-inner">${faq1A}</div>
      </div>
    </div>

    <div class="faq3-item">
      <button class="faq3-header">
        <span>${faq2Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content">
        <div class="faq3-content-inner">${faq2A}</div>
      </div>
    </div>

    <div class="faq3-item">
      <button class="faq3-header">
        <span>${faq3Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content">
        <div class="faq3-content-inner">${faq3A}</div>
      </div>
    </div>

    <div class="faq3-item">
      <button class="faq3-header">
        <span>${faq4Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content">
        <div class="faq3-content-inner">${faq4A}</div>
      </div>
    </div>

    <div class="faq3-item">
      <button class="faq3-header">
        <span>${faq5Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content">
        <div class="faq3-content-inner">${faq5A}</div>
      </div>
    </div>

    <div class="faq3-item">
      <button class="faq3-header">
        <span>${faq6Q}</span>
        <div class="faq3-icon"></div>
      </button>
      <div class="faq3-content">
        <div class="faq3-content-inner">${faq6A}</div>
      </div>
    </div>

  </div>
</div>

<script>
  document.querySelectorAll(".faq3-header").forEach(function(header) {
    header.addEventListener("click", function() {
      const item = header.parentElement;
      const content = item.querySelector(".faq3-content");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq3-item").forEach(function(otherItem) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq3-content").style.maxHeight = null;
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
export default function FaqV3({ config }) {
  return null;
}