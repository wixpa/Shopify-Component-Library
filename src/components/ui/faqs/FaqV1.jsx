// Named export — used by registry and generateComponentCode.js
export function getFaqV1Code(config = {}) {
  const bgColor       = config.bgColor       || "#ffffff";
  const headingText   = config.headingText   || "FAQs";
  const headingColor  = config.headingColor  || "#111111";
  const borderColor   = config.borderColor   || "#dddddd";
  const questionColor = config.questionColor || "#111111";
  const answerColor   = config.answerColor   || "#555555";
  const iconColor     = config.iconColor     || "#111111";

  const faq1Q = config.faq1Q || "How do I make a purchase?";
  const faq1A = config.faq1A || "You can make a purchase by adding items to your cart and proceeding to checkout.";
  const faq2Q = config.faq2Q || "How do I know if my order is confirmed?";
  const faq2A = config.faq2A || "You will receive a confirmation email once your order is successfully placed.";
  const faq3Q = config.faq3Q || "Can I change my shipping address after my order is placed?";
  const faq3A = config.faq3A || "Please contact support immediately to update your shipping details.";
  const faq4Q = config.faq4Q || "Can I change my billing address after placing my order?";
  const faq4A = config.faq4A || "Billing details can only be changed before order processing begins.";

  return `<!-- FAQ V1 — Minimal Accordion | Shopify Bazzar -->
<style>
  .faq1-wrapper {
    font-family: Arial, sans-serif;
    margin: 0;
    background: ${bgColor};
    box-sizing: border-box;
  }

  .faq1-container {
    max-width: 900px;
    margin: auto;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .faq1-heading {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${headingColor};
  }

  .faq1-list {
    border-top: 1px solid ${borderColor};
  }

  .faq1-item {
    border-bottom: 1px solid ${borderColor};
  }

  .faq1-question {
    width: 100%;
    padding: 18px 0;
    background: none;
    border: none;
    font-size: 16px;
    font-family: Arial, sans-serif;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${questionColor};
  }

  .faq1-icon {
    font-size: 20px;
    color: ${iconColor};
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 12px;
  }

  .faq1-answer {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq1-answer p {
    margin: 0;
    padding-bottom: 15px;
    font-size: 14px;
    color: ${answerColor};
  }

  .faq1-item.active .faq1-answer {
    max-height: 200px;
  }

  .faq1-item.active .faq1-icon {
    transform: rotate(45deg);
  }

  @media (max-width: 768px) {
    .faq1-heading {
      font-size: 24px;
    }
    .faq1-question {
      font-size: 15px;
    }
    .faq1-answer p {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    .faq1-container {
      padding: 28px 16px;
    }
    .faq1-heading {
      font-size: 20px;
    }
    .faq1-question {
      font-size: 14px;
      padding: 14px 0;
    }
  }
</style>

<div class="faq1-wrapper">
  <div class="faq1-container">
    <h2 class="faq1-heading">${headingText}</h2>

    <div class="faq1-list">

      <div class="faq1-item">
        <button class="faq1-question">
          <span>${faq1Q}</span>
          <span class="faq1-icon">+</span>
        </button>
        <div class="faq1-answer">
          <p>${faq1A}</p>
        </div>
      </div>

      <div class="faq1-item">
        <button class="faq1-question">
          <span>${faq2Q}</span>
          <span class="faq1-icon">+</span>
        </button>
        <div class="faq1-answer">
          <p>${faq2A}</p>
        </div>
      </div>

      <div class="faq1-item">
        <button class="faq1-question">
          <span>${faq3Q}</span>
          <span class="faq1-icon">+</span>
        </button>
        <div class="faq1-answer">
          <p>${faq3A}</p>
        </div>
      </div>

      <div class="faq1-item">
        <button class="faq1-question">
          <span>${faq4Q}</span>
          <span class="faq1-icon">+</span>
        </button>
        <div class="faq1-answer">
          <p>${faq4A}</p>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  const faq1Items = document.querySelectorAll(".faq1-item");

  faq1Items.forEach(function(item) {
    const btn = item.querySelector(".faq1-question");

    btn.addEventListener("click", function() {
      item.classList.toggle("active");
    });
  });
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — editor and card preview render via getCode() → iframe.
export default function FaqV1({ config }) {
  return null;
}