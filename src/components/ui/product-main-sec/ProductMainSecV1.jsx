export function getProductMainSecV1Code(config = {}) {
   const bgColor = config.bgColor || "#ffffff";
   const textMain = config.textMain || "#4a4a4a";
   const textLight = config.textLight || "#888888";
   const accentColor = config.accentColor || "#6e817d";
   const accentHover = config.accentHover || "#5a6b67";
   const borderColor = config.borderColor || "#e6e6e6";
   const productTitle = config.productTitle || "Heather Gray Long Sleeve Tunic";
   const productPrice = config.productPrice || "$32";
   const colorLabel = config.colorLabel || "Heather Gray";
   const descriptionText =
      config.descriptionText ||
      "It only takes this Heather Gray PIKO Long Sleeve Tunic to jump start your outfit. Fluid in execution, this tunic has a natural carefree fit as it glides along the torso to the mid-thigh. A scooping rounded neckline adds a softness that every Original PIKO Tunic has.";
   const shippingText =
      config.shippingText ||
      "We offer free worldwide shipping on all orders over $50. Standard shipping takes 5-7 business days. Express shipping options are available at checkout.";
   const addToCartText = config.addToCartText || "Add to Cart";
   const buyNowText = config.buyNowText || "Buy it Now";
   const demoText =
      config.demoText ||
      "This is a demonstration store. You can purchase products like this from PIKO.";
   const img1 =
      config.img1 ||
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
   const img1Thumb =
      config.img1Thumb ||
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
   const img2 =
      config.img2 ||
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
   const img2Thumb =
      config.img2Thumb ||
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
   const img3 =
      config.img3 ||
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
   const img3Thumb =
      config.img3Thumb ||
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
   const facebookUrl = config.facebookUrl || "#";
   const twitterUrl = config.twitterUrl || "#";
   const pinterestUrl = config.pinterestUrl || "#";

   return `<!-- Product Main Section V1 — Classic | Shopify Bazzar -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  :root {
    --pms1-font-heading: 'Montserrat', sans-serif;
    --pms1-font-body: 'Open Sans', sans-serif;
    --pms1-color-text-main: ${textMain};
    --pms1-color-text-light: ${textLight};
    --pms1-color-border: ${borderColor};
    --pms1-color-bg: ${bgColor};
    --pms1-color-accent: ${accentColor};
    --pms1-color-accent-hover: ${accentHover};
    --pms1-color-warning: #f0ad4e;
    --pms1-color-black: #222222;
    --pms1-spacing-xs: 8px;
    --pms1-spacing-sm: 16px;
    --pms1-spacing-md: 14px;
    --pms1-spacing-lg: 40px;
  }

  .pms1-wrap * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .pms1-wrap {
    font-family: var(--pms1-font-body);
    color: var(--pms1-color-text-main);
    background-color: var(--pms1-color-bg);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .pms1-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--pms1-spacing-lg) var(--pms1-spacing-md);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--pms1-spacing-lg);
  }

  @media (min-width: 992px) {
    .pms1-container {
      grid-template-columns: 1.2fr 0.8fr;
      gap: 60px;
      padding-top: 80px;
    }
  }

  .pms1-product-gallery {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--pms1-spacing-sm);
  }

  @media (min-width: 768px) {
    .pms1-product-gallery {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }
  }

  .pms1-thumbnails {
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }

  @media (min-width: 768px) {
    .pms1-thumbnails {
      flex-direction: column;
      width: 80px;
      flex-shrink: 0;
    }
  }

  .pms1-thumb-btn {
    width: 70px;
    height: 90px;
    border: 1px solid transparent;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s ease;
    padding: 0;
    background: none;
  }

  .pms1-thumb-btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pms1-thumb-btn:hover { opacity: 1; }

  .pms1-thumb-btn.active {
    border-color: var(--pms1-color-black);
    opacity: 1;
  }

  .pms1-main-image-container {
    flex-grow: 1;
    background-color: #f9f9f9;
    position: relative;
    overflow: hidden;
  }

  .pms1-main-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .pms1-main-image-container:hover .pms1-main-image {
    transform: scale(1.02);
  }

  .pms1-product-details {
    display: flex;
    flex-direction: column;
    gap: var(--pms1-spacing-md);
  }

  .pms1-product-title {
    font-family: var(--pms1-font-heading);
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--pms1-color-text-light);
    margin-bottom: var(--pms1-spacing-xs);
  }

  .pms1-product-price {
    font-family: var(--pms1-font-body);
    font-size: 1.2rem;
    color: var(--pms1-color-text-light);
    font-weight: 300;
    margin-bottom: var(--pms1-spacing-md);
  }

  .pms1-option-group { margin-bottom: var(--pms1-spacing-md); }

  .pms1-option-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--pms1-color-text-light);
    font-family: var(--pms1-font-heading);
    gap: 10px;
  }

  .pms1-size-guide-link {
    color: var(--pms1-color-text-light);
    text-decoration: none;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .pms1-size-guide-link:hover { text-decoration: underline; }

  .pms1-size-options { display: flex; gap: 10px; }

  .pms1-size-radio { display: none; }

  .pms1-size-label {
    width: 40px;
    height: 40px;
    border: 1px solid var(--pms1-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--pms1-color-text-light);
  }

  .pms1-size-radio:checked + .pms1-size-label {
    border-color: var(--pms1-color-black);
    color: var(--pms1-color-black);
    font-weight: 600;
  }

  .pms1-size-label:hover { border-color: #999; }

  .pms1-color-display {
    border: 1px solid var(--pms1-color-black);
    padding: 10px 15px;
    display: inline-block;
    font-size: 0.85rem;
    color: var(--pms1-color-text-main);
    min-width: 120px;
    text-align: center;
  }

  .pms1-info-badges {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.8rem;
    color: var(--pms1-color-text-main);
    margin-bottom: var(--pms1-spacing-md);
  }

  .pms1-badge-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pms1-stock-dot {
    width: 8px;
    height: 8px;
    background-color: var(--pms1-color-warning);
    border-radius: 50%;
    display: inline-block;
  }

  .pms1-action-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: var(--pms1-spacing-md);
  }

  .pms1-btn {
    width: 100%;
    padding: 15px;
    text-transform: uppercase;
    font-family: var(--pms1-font-heading);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }

  .pms1-btn-outline {
    background: transparent;
    border: 2px solid var(--pms1-color-black);
    color: var(--pms1-color-black);
  }

  .pms1-btn-outline:hover {
    background: var(--pms1-color-black);
    color: white;
  }

  .pms1-btn-filled {
    background: var(--pms1-color-accent);
    border: 2px solid var(--pms1-color-accent);
    color: white;
  }

  .pms1-btn-filled:hover {
    background: var(--pms1-color-accent-hover);
    border-color: var(--pms1-color-accent-hover);
  }

  .pms1-demo-text {
    font-size: 0.75rem;
    font-style: italic;
    color: var(--pms1-color-text-light);
    margin-bottom: var(--pms1-spacing-md);
    line-height: 1.4;
  }

  .pms1-description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: var(--pms1-spacing-lg);
    line-height: 1.8;
  }

  .pms1-accordion {
    border-top: 1px solid var(--pms1-color-border);
    border-bottom: 1px solid var(--pms1-color-border);
  }

  .pms1-accordion-header {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: var(--pms1-font-heading);
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--pms1-color-text-light);
  }

  .pms1-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    font-size: 0.85rem;
    color: #666;
  }

  .pms1-accordion-content p { padding-bottom: 15px; }

  .pms1-accordion.active .pms1-accordion-content { max-height: 200px; }

  .pms1-accordion-icon { transition: transform 0.3s ease; }

  .pms1-accordion.active .pms1-accordion-icon { transform: rotate(180deg); }

  .pms1-social-share {
    display: flex;
    gap: 20px;
    margin-top: var(--pms1-spacing-lg);
  }

  .pms1-social-link {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: var(--pms1-color-text-main);
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--pms1-font-heading);
  }

  .pms1-social-link i { font-size: 1rem; }

  .pms1-social-link:hover { color: var(--pms1-color-accent); }

  @media (max-width: 480px) {
    .pms1-size-options { justify-content: space-between; }
    .pms1-size-label { width: 100%; }
  }
</style>

<div class="pms1-wrap">
  <main class="pms1-container">
    <div class="pms1-product-gallery">
      <div class="pms1-thumbnails">
        <button class="pms1-thumb-btn active" onclick="pms1ChangeImage(this, '${img1}')">
          <img src="${img1Thumb}" alt="Product View 1">
        </button>
        <button class="pms1-thumb-btn" onclick="pms1ChangeImage(this, '${img2}')">
          <img src="${img2Thumb}" alt="Product View 2">
        </button>
        <button class="pms1-thumb-btn" onclick="pms1ChangeImage(this, '${img3}')">
          <img src="${img3Thumb}" alt="Product View 3">
        </button>
      </div>
      <div class="pms1-main-image-container">
        <img id="pms1MainImage" class="pms1-main-image" src="${img1}" alt="${productTitle}">
      </div>
    </div>

    <div class="pms1-product-details">
      <h1 class="pms1-product-title">${productTitle}</h1>
      <div class="pms1-product-price">${productPrice}</div>

      <div class="pms1-option-group">
        <div class="pms1-option-header">
          <span>Size</span>
          <a href="#" class="pms1-size-guide-link">— Size Guide <i class="fa-solid fa-ruler-horizontal"></i></a>
        </div>
        <div class="pms1-size-options">
          <input type="radio" name="pms1-size" id="pms1-size-xs" class="pms1-size-radio" checked>
          <label for="pms1-size-xs" class="pms1-size-label">XS</label>
          <input type="radio" name="pms1-size" id="pms1-size-s" class="pms1-size-radio">
          <label for="pms1-size-s" class="pms1-size-label">S</label>
          <input type="radio" name="pms1-size" id="pms1-size-m" class="pms1-size-radio">
          <label for="pms1-size-m" class="pms1-size-label">M</label>
          <input type="radio" name="pms1-size" id="pms1-size-l" class="pms1-size-radio">
          <label for="pms1-size-l" class="pms1-size-label">L</label>
          <input type="radio" name="pms1-size" id="pms1-size-xl" class="pms1-size-radio">
          <label for="pms1-size-xl" class="pms1-size-label">XL</label>
        </div>
      </div>

      <div class="pms1-option-group">
        <div class="pms1-option-header"><span>Color</span></div>
        <div class="pms1-color-display">${colorLabel}</div>
      </div>

      <div class="pms1-info-badges">
        <div class="pms1-badge-item">
          <i class="fa-solid fa-globe" style="color: #888;"></i>
          <span>Free worldwide shipping</span>
        </div>
        <div class="pms1-badge-item">
          <span class="pms1-stock-dot"></span>
          <span>Low stock - 7 items left</span>
        </div>
      </div>

      <div class="pms1-action-buttons">
        <button class="pms1-btn pms1-btn-outline" id="pms1AddToCart">${addToCartText}</button>
        <button class="pms1-btn pms1-btn-filled">${buyNowText}</button>
      </div>

      <p class="pms1-demo-text">${demoText}</p>

      <div class="pms1-description">${descriptionText}</div>

      <div class="pms1-accordion" id="pms1ShippingAccordion">
        <div class="pms1-accordion-header" onclick="pms1ToggleAccordion()">
          <span>Shipping Information</span>
          <i class="fa-solid fa-chevron-down pms1-accordion-icon"></i>
        </div>
        <div class="pms1-accordion-content">
          <p>${shippingText}</p>
        </div>
      </div>

      <div class="pms1-social-share">
        <a href="${facebookUrl}" class="pms1-social-link">
          <i class="fa-brands fa-facebook-f"></i> Share
        </a>
        <a href="${twitterUrl}" class="pms1-social-link">
          <i class="fa-brands fa-twitter"></i> Tweet
        </a>
        <a href="${pinterestUrl}" class="pms1-social-link">
          <i class="fa-brands fa-pinterest-p"></i> Pin it
        </a>
      </div>
    </div>
  </main>
</div>

<script>
  function pms1ChangeImage(element, src) {
    var mainImage = document.getElementById('pms1MainImage');
    mainImage.style.opacity = '0.8';
    setTimeout(function() {
      mainImage.src = src;
      mainImage.style.opacity = '1';
    }, 150);
    var thumbnails = document.querySelectorAll('.pms1-thumb-btn');
    thumbnails.forEach(function(thumb) { thumb.classList.remove('active'); });
    element.classList.add('active');
  }

  function pms1ToggleAccordion() {
    var accordion = document.getElementById('pms1ShippingAccordion');
    accordion.classList.toggle('active');
  }

  var pms1AddToCartBtn = document.getElementById('pms1AddToCart');
  pms1AddToCartBtn.addEventListener('click', function() {
    var originalText = this.innerText;
    this.innerText = "Added!";
    this.style.backgroundColor = "#222";
    this.style.color = "#fff";
    setTimeout(function() {
      pms1AddToCartBtn.innerText = originalText;
      pms1AddToCartBtn.style.backgroundColor = "transparent";
      pms1AddToCartBtn.style.color = "#222";
    }, 2000);
  });
</script>`;
}

export default function ProductMainSecV1({ config }) {
   return null;
}
