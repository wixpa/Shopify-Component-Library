export function getProductMainSecV3Code(config = {}) {
   const bgColor = config.bgColor || "#f0f0f0";
   const colorTextMain = config.colorTextMain || "#1a1a1a";
   const colorTextSecond = config.colorTextSecond || "#595959";
   const colorTextLight = config.colorTextLight || "#888888";
   const colorBorder = config.colorBorder || "#dcdcdc";
   const colorBtnSolidBg = config.colorBtnSolidBg || "#1a1a1a";
   const colorBtnSolidTx = config.colorBtnSolidTx || "#ffffff";

   const swatchDark = config.swatchDark || "#2c2e33";
   const swatchIvory = config.swatchIvory || "#eee5d8";
   const swatchOlive = config.swatchOlive || "#8f9e8b";
   const swatchBlue = config.swatchBlue || "#aebbc5";
   const swatchBlack = config.swatchBlack || "#000000";
   const swatchCognac = config.swatchCognac || "#a0522d";

   const bestSellerLabel = config.bestSellerLabel || "Best Seller";
   const productTitle = config.productTitle || "Le Grand Nova Ivory Liégé";
   const productPrice = config.productPrice || "$450.00";
   const ratingScore = config.ratingScore || "(4.7)";
   const selectedColor = config.selectedColor || "Ivory Liégé";
   const descriptionText =
      config.descriptionText ||
      "Flap 'Box' bag in calfskin, with secure brass push clasp. Back pocket. Interior lined in suede. Long and adjustable shoulder strap included. Inside pocket with bellows.";
   const demoNoteText =
      config.demoNoteText ||
      "This is a demo store. To buy this product, visit Leo & Violette official store.";
   const addToCartText = config.addToCartText || "Add to Cart";
   const buyNowText = config.buyNowText || "Buy it Now";

   const feature1Icon = config.feature1Icon || "fa-bag-shopping";
   const feature1Text = config.feature1Text || "Shoulder bags";
   const feature2Icon = config.feature2Icon || "fa-scroll";
   const feature2Text = config.feature2Text || "Full Grain Leather";
   const feature3Icon = config.feature3Icon || "fa-sliders";
   const feature3Text = config.feature3Text || "Adjustable strap";
   const feature4Icon = config.feature4Icon || "fa-location-dot";
   const feature4Text = config.feature4Text || "Handmade in Italy";

   const accordionTitle = config.accordionTitle || "More Information";
   const accordionBody =
      config.accordionBody ||
      "<strong>Dimensions:</strong> 24cm x 19cm x 7cm<br><strong>Weight:</strong> 0.6 kg<br><strong>Material:</strong> Italian Calfskin Leather<br><strong>Hardware:</strong> Gold-tone brass<br><strong>Care:</strong> Clean with a soft, dry cloth.";

   const thumb1Url =
      config.thumb1Url ||
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
   const thumb1Full =
      config.thumb1Full ||
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb1Alt = config.thumb1Alt || "Bag Front";
   const thumb2Url =
      config.thumb2Url ||
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
   const thumb2Full =
      config.thumb2Full ||
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb2Alt = config.thumb2Alt || "Bag Side";
   const thumb3Url =
      config.thumb3Url ||
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
   const thumb3Full =
      config.thumb3Full ||
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb3Alt = config.thumb3Alt || "Bag Detail";
   const thumb4Url =
      config.thumb4Url ||
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
   const thumb4Full =
      config.thumb4Full ||
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb4Alt = config.thumb4Alt || "Model with Bag";
   const thumb5Url =
      config.thumb5Url ||
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
   const thumb5Full =
      config.thumb5Full ||
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb5Alt = config.thumb5Alt || "Lifestyle";

   return `<!-- Product Main Section V3 — Luxury Bag | Shopify Bazzar -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  :root {
    --pms3-bg-color: ${bgColor};
    --pms3-text-main: ${colorTextMain};
    --pms3-text-secondary: ${colorTextSecond};
    --pms3-text-light: ${colorTextLight};
    --pms3-border-color: ${colorBorder};
    --pms3-white: #ffffff;
    --pms3-font-heading: 'Montserrat', sans-serif;
    --pms3-font-body: 'Inter', sans-serif;
    --pms3-swatch-dark: ${swatchDark};
    --pms3-swatch-ivory: ${swatchIvory};
    --pms3-swatch-olive: ${swatchOlive};
    --pms3-swatch-blue: ${swatchBlue};
    --pms3-swatch-black: ${swatchBlack};
    --pms3-swatch-cognac: ${swatchCognac};
  }

  .pms3-wrap * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .pms3-wrap {
    font-family: var(--pms3-font-body);
    background-color: var(--pms3-bg-color);
    color: var(--pms3-text-main);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  .pms3-product-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    background-color: var(--pms3-bg-color);
  }

  .pms3-gallery-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .pms3-thumbnails {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80px;
    flex-shrink: 0;
  }

  .pms3-thumb {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border-color 0.2s;
    background-color: #fff;
  }

  .pms3-thumb:hover,
  .pms3-thumb.active {
    border-color: var(--pms3-text-main);
  }

  .pms3-main-image-container {
    flex-grow: 1;
    position: relative;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pms3-main-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 600px;
    mix-blend-mode: multiply;
  }

  .pms3-product-details {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .pms3-best-seller {
    font-family: var(--pms3-font-heading);
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--pms3-text-light);
    font-weight: 600;
  }

  .pms3-product-title {
    font-family: var(--pms3-font-heading);
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--pms3-text-main);
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .pms3-price-rating-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .pms3-price {
    font-family: var(--pms3-font-heading);
    font-size: 1rem;
    color: var(--pms3-text-secondary);
    letter-spacing: 1px;
  }

  .pms3-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: var(--pms3-text-main);
  }

  .pms3-stars {
    color: var(--pms3-text-main);
    font-size: 0.7rem;
    letter-spacing: 1px;
  }

  .pms3-review-count {
    color: var(--pms3-text-light);
    font-size: 0.75rem;
  }

  .pms3-divider {
    height: 1px;
    background-color: #e0e0e0;
    width: 100%;
    margin: 10px 0;
  }

  .pms3-color-selection {
    margin-bottom: 10px;
  }

  .pms3-color-label {
    font-size: 0.85rem;
    color: var(--pms3-text-secondary);
    margin-bottom: 10px;
  }

  .pms3-color-label span {
    color: var(--pms3-text-main);
    font-weight: 600;
  }

  .pms3-swatches {
    display: flex;
    gap: 10px;
  }

  .pms3-swatch {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.1);
    position: relative;
  }

  .pms3-swatch.selected {
    outline: 1px solid var(--pms3-text-main);
    outline-offset: 3px;
  }

  .pms3-swatch-dark    { background-color: var(--pms3-swatch-dark); }
  .pms3-swatch-ivory   { background-color: var(--pms3-swatch-ivory); }
  .pms3-swatch-olive   { background-color: var(--pms3-swatch-olive); }
  .pms3-swatch-blue    { background-color: var(--pms3-swatch-blue); }
  .pms3-swatch-black   { background-color: var(--pms3-swatch-black); }
  .pms3-swatch-cognac  { background-color: var(--pms3-swatch-cognac); }

  .pms3-description {
    font-size: 0.85rem;
    color: var(--pms3-text-secondary);
    line-height: 1.7;
    margin-bottom: 10px;
  }

  .pms3-demo-note {
    font-size: 0.8rem;
    color: var(--pms3-text-secondary);
    margin-bottom: 20px;
  }

  .pms3-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
  }

  .pms3-btn {
    width: 100%;
    padding: 16px;
    font-family: var(--pms3-font-heading);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    border-radius: 0;
  }

  .pms3-btn-outline {
    background-color: transparent;
    border: 1px solid #ccc;
    color: var(--pms3-text-main);
  }

  .pms3-btn-outline:hover {
    border-color: var(--pms3-text-main);
  }

  .pms3-btn-solid {
    background-color: ${colorBtnSolidBg};
    border: 1px solid ${colorBtnSolidBg};
    color: ${colorBtnSolidTx};
  }

  .pms3-btn-solid:hover {
    background-color: #333;
    border-color: #333;
  }

  .pms3-features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .pms3-feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    padding: 10px 15px;
    font-size: 0.7rem;
    color: var(--pms3-text-secondary);
    font-family: var(--pms3-font-body);
  }

  .pms3-feature-item i {
    font-size: 0.9rem;
    color: #999;
    width: 16px;
    text-align: center;
  }

  .pms3-accordion {
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .pms3-accordion-header {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--pms3-text-secondary);
  }

  .pms3-accordion-header:hover {
    color: var(--pms3-text-main);
  }

  .pms3-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    font-size: 0.8rem;
    color: var(--pms3-text-secondary);
  }

  .pms3-accordion-content p {
    padding-bottom: 15px;
  }

  .pms3-accordion-icon {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
  }

  .pms3-accordion.active .pms3-accordion-icon {
    transform: rotate(180deg);
  }

  .pms3-accordion.active .pms3-accordion-content {
    max-height: 200px;
  }

  @media (max-width: 900px) {
    .pms3-product-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .pms3-gallery-wrapper {
      flex-direction: column-reverse;
    }
    .pms3-thumbnails {
      flex-direction: row;
      width: 100%;
      justify-content: center;
    }
    .pms3-thumb {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    .pms3-wrap {
      padding: 10px;
    }
    .pms3-product-title {
      font-size: 1.2rem;
    }
    .pms3-features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="pms3-wrap">
  <main class="pms3-product-container">

    <div class="pms3-gallery-wrapper">
      <div class="pms3-thumbnails">
        <img src="${thumb1Url}" alt="${thumb1Alt}" class="pms3-thumb active" onclick="pms3ChangeImage(this, '${thumb1Full}')">
        <img src="${thumb2Url}" alt="${thumb2Alt}" class="pms3-thumb" onclick="pms3ChangeImage(this, '${thumb2Full}')">
        <img src="${thumb3Url}" alt="${thumb3Alt}" class="pms3-thumb" onclick="pms3ChangeImage(this, '${thumb3Full}')">
        <img src="${thumb4Url}" alt="${thumb4Alt}" class="pms3-thumb" onclick="pms3ChangeImage(this, '${thumb4Full}')">
        <img src="${thumb5Url}" alt="${thumb5Alt}" class="pms3-thumb" onclick="pms3ChangeImage(this, '${thumb5Full}')">
      </div>

      <div class="pms3-main-image-container">
        <img id="pms3MainImage" src="${thumb1Full}" alt="${productTitle}" class="pms3-main-image">
      </div>
    </div>

    <div class="pms3-product-details">
      <div class="pms3-best-seller">${bestSellerLabel}</div>

      <h1 class="pms3-product-title">${productTitle}</h1>

      <div class="pms3-price-rating-row">
        <div class="pms3-price">${productPrice}</div>
        <div class="pms3-rating">
          <div class="pms3-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span class="pms3-review-count">${ratingScore}</span>
        </div>
      </div>

      <div class="pms3-divider"></div>

      <div class="pms3-color-selection">
        <div class="pms3-color-label">Color: <span id="pms3SelectedColorName">${selectedColor}</span></div>
        <div class="pms3-swatches">
          <div class="pms3-swatch pms3-swatch-dark"   data-color="Dark Grey"    onclick="pms3SelectColor(this)"></div>
          <div class="pms3-swatch pms3-swatch-ivory selected" data-color="${selectedColor}" onclick="pms3SelectColor(this)"></div>
          <div class="pms3-swatch pms3-swatch-olive"  data-color="Olive Green"  onclick="pms3SelectColor(this)"></div>
          <div class="pms3-swatch pms3-swatch-blue"   data-color="Blue Grey"    onclick="pms3SelectColor(this)"></div>
          <div class="pms3-swatch pms3-swatch-black"  data-color="Black"        onclick="pms3SelectColor(this)"></div>
          <div class="pms3-swatch pms3-swatch-cognac" data-color="Cognac"       onclick="pms3SelectColor(this)"></div>
        </div>
      </div>

      <div class="pms3-description">
        <p>${descriptionText}</p>
      </div>

      <div class="pms3-demo-note">${demoNoteText}</div>

      <div class="pms3-actions">
        <button class="pms3-btn pms3-btn-outline" id="pms3AddToCartBtn">${addToCartText}</button>
        <button class="pms3-btn pms3-btn-solid">${buyNowText}</button>
      </div>

      <div class="pms3-features-grid">
        <div class="pms3-feature-item">
          <i class="fa-solid ${feature1Icon}"></i>
          <span>${feature1Text}</span>
        </div>
        <div class="pms3-feature-item">
          <i class="fa-solid ${feature2Icon}"></i>
          <span>${feature2Text}</span>
        </div>
        <div class="pms3-feature-item">
          <i class="fa-solid ${feature3Icon}"></i>
          <span>${feature3Text}</span>
        </div>
        <div class="pms3-feature-item">
          <i class="fa-solid ${feature4Icon}"></i>
          <span>${feature4Text}</span>
        </div>
      </div>

      <div class="pms3-accordion" onclick="pms3ToggleAccordion(this)">
        <div class="pms3-accordion-header">
          <span>${accordionTitle}</span>
          <i class="fa-solid fa-chevron-right pms3-accordion-icon"></i>
        </div>
        <div class="pms3-accordion-content">
          <p>${accordionBody}</p>
        </div>
      </div>
      <div class="pms3-divider" style="margin-top:0;"></div>

    </div>
  </main>
</div>

<script>
  function pms3ChangeImage(element, src) {
    var mainImage = document.getElementById('pms3MainImage');
    mainImage.style.opacity = '0.5';
    setTimeout(function() {
      mainImage.src = src;
      mainImage.style.opacity = '1';
    }, 150);
    var thumbs = document.querySelectorAll('.pms3-thumb');
    thumbs.forEach(function(thumb) { thumb.classList.remove('active'); });
    element.classList.add('active');
  }

  function pms3SelectColor(element) {
    var swatches = document.querySelectorAll('.pms3-swatch');
    swatches.forEach(function(swatch) { swatch.classList.remove('selected'); });
    element.classList.add('selected');
    var colorName = element.getAttribute('data-color');
    document.getElementById('pms3SelectedColorName').textContent = colorName;
  }

  function pms3ToggleAccordion(element) {
    element.classList.toggle('active');
  }

  var pms3CartBtn = document.getElementById('pms3AddToCartBtn');
  pms3CartBtn.addEventListener('click', function() {
    var originalText = this.innerText;
    this.innerText = 'Added!';
    this.style.borderColor = '#1a1a1a';
    this.style.backgroundColor = '#1a1a1a';
    this.style.color = '#fff';
    setTimeout(function() {
      pms3CartBtn.innerText = originalText;
      pms3CartBtn.style.borderColor = '';
      pms3CartBtn.style.backgroundColor = '';
      pms3CartBtn.style.color = '';
    }, 2000);
  });
</script>`;
}

export default function ProductMainSecV3({ config }) {
   return null;
}
