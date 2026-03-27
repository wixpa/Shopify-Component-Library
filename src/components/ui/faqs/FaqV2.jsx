// Named export — used by registry and generateComponentCode.js
export function getFaqV2Code(config = {}) {
  const bgColor       = config.bgColor       || "#ffffff";
  const headingText   = config.headingText   || "FAQs";
  const headingColor  = config.headingColor  || "#333333";
  const borderColor   = config.borderColor   || "#e0e0e0";
  const questionColor = config.questionColor || "#333333";
  const answerColor   = config.answerColor   || "#666666";
  const iconColor     = config.iconColor     || "#444444";
  const chevronColor  = config.chevronColor  || "#999999";

  const faq1Q = config.faq1Q || "What makes your store unique?";
  const faq1A = config.faq1A || "Our uniqueness lies in our commitment to clean formulations that provide heavy-duty results without the heavy-duty feel.";
  const faq2Q = config.faq2Q || "How can I determine the right products for my needs?";
  const faq2A = config.faq2A || "You can take our 2-minute quiz on our homepage, or chat live with one of our specialists available 24/7.";
  const faq3Q = config.faq3Q || "Do you offer samples of your products?";
  const faq3A = config.faq3A || "Yes! Every order over $50 includes two complimentary deluxe samples of your choice at checkout.";
  const faq4Q = config.faq4Q || "Can I get assistance with choosing the right options?";
  const faq4A = config.faq4A || "Absolutely. Upload a photo to our tool for an instant AI recommendation or request a manual review from our team.";
  const faq5Q = config.faq5Q || "Are your products ethically made?";
  const faq5A = config.faq5A || "Yes, we are 100% certified. We never compromise on ethical standards at any stage of product development.";

  return `<!-- FAQ V2 — Chevron Accordion with SVG Icon | Shopify Bazzar -->
<style>
  .faq2-wrapper {
    margin: 0;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: ${bgColor};
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .faq2-section {
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
  }

  .faq2-title {
    text-align: left;
    font-size: 2.5rem;
    font-weight: 500;
    color: ${headingColor};
    margin-bottom: 50px;
  }

  .faq2-container {
    border-top: 1px solid ${borderColor};
  }

  .faq2-item {
    border-bottom: 1px solid ${borderColor};
  }

  .faq2-question {
    width: 100%;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    outline: none;
  }

  .faq2-question-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .faq2-icon {
    width: 32px;
    height: 32px;
    color: ${iconColor};
    flex-shrink: 0;
  }

  .faq2-question-text {
    font-size: 1.15rem;
    color: ${questionColor};
    line-height: 1.4;
  }

  .faq2-chevron {
    width: 12px;
    height: 12px;
    border-right: 2px solid ${chevronColor};
    border-bottom: 2px solid ${chevronColor};
    transform: rotate(45deg);
    transition: transform 0.3s ease;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .faq2-item.active .faq2-chevron {
    transform: rotate(-135deg);
  }

  .faq2-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .faq2-answer-content {
    padding: 0 0 24px 52px;
    color: ${answerColor};
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    .faq2-title {
      font-size: 1.8rem;
    }
    .faq2-question-text {
      font-size: 1rem;
    }
    .faq2-answer-content {
      padding-left: 0;
      padding-top: 10px;
    }
    .faq2-question-wrapper {
      gap: 12px;
    }
  }

  @media (max-width: 400px) {
    .faq2-wrapper {
      padding: 14px;
    }
    .faq2-title {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
    .faq2-question {
      padding: 18px 0;
    }
    .faq2-question-text {
      font-size: 0.95rem;
    }
    .faq2-answer-content {
      font-size: 0.9rem;
    }
  }
</style>

<div class="faq2-wrapper">
  <section class="faq2-section">
    <h1 class="faq2-title">${headingText}</h1>

    <div class="faq2-container">

      <div class="faq2-item">
        <button class="faq2-question">
          <div class="faq2-question-wrapper">
            <svg class="faq2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="faq2-question-text">${faq1Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq1A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question">
          <div class="faq2-question-wrapper">
            <svg class="faq2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="faq2-question-text">${faq2Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq2A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question">
          <div class="faq2-question-wrapper">
            <svg class="faq2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="faq2-question-text">${faq3Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq3A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question">
          <div class="faq2-question-wrapper">
            <svg class="faq2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="faq2-question-text">${faq4Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq4A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question">
          <div class="faq2-question-wrapper">
            <svg class="faq2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="faq2-question-text">${faq5Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq5A}</div>
        </div>
      </div>

    </div>
  </section>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const faq2Questions = document.querySelectorAll(".faq2-question");

    faq2Questions.forEach(function(question) {
      question.addEventListener("click", function() {
        const item = question.parentElement;
        const isOpen = item.classList.contains("active");

        document.querySelectorAll(".faq2-item").forEach(function(otherItem) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq2-answer").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("active");
          const answer = item.querySelector(".faq2-answer");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — editor and card preview render via getCode() → iframe.
export default function FaqV2({ config }) {
  return null;
}