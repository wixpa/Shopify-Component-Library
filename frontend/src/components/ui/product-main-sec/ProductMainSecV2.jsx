export function getProductMainSecV2Code(config = {}) {
   const bgColor = config.bgColor || "#ffffff";
   const colorTextMain = config.colorTextMain || "#1a1a1a";
   const colorTextLight = config.colorTextLight || "#555555";
   const colorBorder = config.colorBorder || "#e5e5e5";
   const colorBtnBg = config.colorBtnBg || "#111111";
   const colorBtnText = config.colorBtnText || "#ffffff";
   const colorAccentRed = config.colorAccentRed || "#d32f2f";

   const brandName = config.brandName || "Herbivore";
   const productTitle =
      config.productTitle || "Orchid Antioxidant Beauty Face Oil";
   const productPrice = config.productPrice || "$86.00";

   const tag1 = config.tag1 || "Jojoba";
   const tag2 = config.tag2 || "Flower Extract";
   const tag3 = config.tag3 || "Orchid Extract";

   const benefit1 = config.benefit1 || "100% Vegan and Organic";
   const benefit2 = config.benefit2 || "Deeply absorb, moisturize and nourish";
   const benefit3 = config.benefit3 || "Suitable for all skin types";

   const mainImage1Url =
      config.mainImage1Url ||
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb1Url =
      config.thumb1Url ||
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
   const thumb1Alt = config.thumb1Alt || "Product Front";
   const mainImage2Url =
      config.mainImage2Url ||
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
   const thumb2Url =
      config.thumb2Url ||
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
   const thumb2Alt = config.thumb2Alt || "Product Lifestyle";

   const descPara1 =
      config.descPara1 ||
      "A facial oil that defends against free radicals, supports natural elasticity, and provides beneficial vitamins and fatty acids to protect against premature aging.";
   const descPara2 =
      config.descPara2 ||
      "Orchid Extract: A natural humectant that draws moisture to the skin, smoothing and conditioning. It contains calcium, magnesium, and zinc which are all beneficial to the skin.";
   const howToUseText =
      config.howToUseText ||
      "Apply 3–6 drops to cleansed and toned skin morning and night. Massage in and allow to absorb for 1–3 minutes before applying makeup.";
   const ingredientsText =
      config.ingredientsText ||
      "Caprylic/Capric Triglycerides, Orchid Extract, Camellia Oleifera (Camellia) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Tocopherol (Vitamin E), Jasminum Sambac (Jasmine) Flower Extract.";
   const deliveryText =
      config.deliveryText ||
      "Free shipping on orders over $50. Returns accepted within 30 days of purchase.";

   const ritualTitle = config.ritualTitle || "Complete your beauty ritual";
   const ritual1Url =
      config.ritual1Url ||
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";
   const ritual2Url =
      config.ritual2Url ||
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";
   const ritual3Url =
      config.ritual3Url ||
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";
   const ritual4Url =
      config.ritual4Url ||
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";

   const pairedTitle = config.pairedTitle || "Frequently paired with";
   const paired1ImgUrl =
      config.paired1ImgUrl ||
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";
   const paired1Name = config.paired1Name || "Argan oil for nails";
   const paired1OldPrice = config.paired1OldPrice || "$30.00";
   const paired1NewPrice = config.paired1NewPrice || "From $19.00";
   const paired1Badge = config.paired1Badge || "-36%";
   const paired2ImgUrl =
      config.paired2ImgUrl ||
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";
   const paired2Name =
      config.paired2Name || "Aquarius Pore Purifying Clarity Cream";
   const paired2Price = config.paired2Price || "$165.00";

   return `<!-- Product Main Section V2 — Elegant Beauty | Shopify Bazzar -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  :root {
    --pms2-font-serif: 'Playfair Display', serif;
    --pms2-font-sans: 'Inter', sans-serif;
    --pms2-color-text-main: ${colorTextMain};
    --pms2-color-text-light: ${colorTextLight};
    --pms2-color-border: ${colorBorder};
    --pms2-color-bg: ${bgColor};
    --pms2-color-btn-bg: ${colorBtnBg};
    --pms2-color-btn-text: ${colorBtnText};
    --pms2-color-accent-red: ${colorAccentRed};
    --pms2-spacing-container: 1200px;
  }

  .pms2-wrap * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .pms2-wrap {
    font-family: var(--pms2-font-sans);
    color: var(--pms2-color-text-main);
    background-color: var(--pms2-color-bg);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .pms2-wrap img {
    max-width: 100%;
    display: block;
  }

  .pms2-wrap button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .pms2-container {
    max-width: var(--pms2-spacing-container);
    margin: 0 auto;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  @media (max-width: 992px) {
    .pms2-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .pms2-product-gallery {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .pms2-gallery-thumbnails {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80px;
    flex-shrink: 0;
  }

  .pms2-thumbnail {
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .pms2-thumbnail.active,
  .pms2-thumbnail:hover {
    border: 1px solid #000;
  }

  .pms2-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pms2-main-image {
    flex-grow: 1;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: auto;
  }

  .pms2-main-image img {
    max-height: 100%;
    width: auto;
    mix-blend-mode: multiply;
  }

  @media (max-width: 576px) {
    .pms2-product-gallery {
      flex-direction: column-reverse;
    }
    .pms2-gallery-thumbnails {
      flex-direction: row;
      width: 100%;
      overflow-x: auto;
    }
    .pms2-thumbnail {
      width: 70px;
    }
  }

  .pms2-product-details {
    display: flex;
    flex-direction: column;
  }

  .pms2-brand-name {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--pms2-color-text-light);
    margin-bottom: 8px;
    font-weight: 600;
  }

  .pms2-product-title {
    font-family: var(--pms2-font-serif);
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #111;
  }

  .pms2-tags {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .pms2-tag {
    font-size: 0.75rem;
    border: 1px solid #ddd;
    padding: 4px 12px;
    border-radius: 20px;
    color: var(--pms2-color-text-light);
    background: #fff;
  }

  .pms2-price {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 24px;
    font-family: var(--pms2-font-sans);
  }

  .pms2-purchase-controls {
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
    height: 50px;
  }

  .pms2-quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 0 10px;
    width: 120px;
    justify-content: space-between;
  }

  .pms2-qty-btn {
    width: 30px;
    height: 100%;
    font-size: 1.2rem;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pms2-qty-input {
    width: 40px;
    text-align: center;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: #111;
    outline: none;
  }

  .pms2-qty-input::-webkit-inner-spin-button,
  .pms2-qty-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .pms2-add-to-cart-btn {
    flex-grow: 1;
    background-color: var(--pms2-color-btn-bg);
    color: var(--pms2-color-btn-text);
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: opacity 0.2s;
  }

  .pms2-add-to-cart-btn:hover {
    opacity: 0.9;
  }

  .pms2-benefits-list {
    list-style: none;
    margin-bottom: 30px;
    font-size: 0.9rem;
    color: var(--pms2-color-text-light);
  }

  .pms2-benefits-list li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 6px;
  }

  .pms2-benefits-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #111;
  }

  .pms2-trust-icons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--pms2-color-border);
    padding-bottom: 30px;
  }

  .pms2-trust-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    color: #333;
    text-align: center;
  }

  .pms2-trust-item svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #333;
    stroke-width: 1.5;
  }

  .pms2-accordion-item {
    border-bottom: 1px solid var(--pms2-color-border);
  }

  .pms2-accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    font-family: var(--pms2-font-serif);
    font-size: 1rem;
    color: #111;
    background: #fff;
    transition: color 0.2s;
  }

  .pms2-accordion-header:hover {
    color: #555;
  }

  .pms2-accordion-icon {
    font-size: 1.2rem;
    font-weight: 300;
    transition: transform 0.3s ease;
  }

  .pms2-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    font-size: 0.9rem;
    color: var(--pms2-color-text-light);
  }

  .pms2-accordion-content p {
    padding-bottom: 20px;
  }

  .pms2-accordion-item.active .pms2-accordion-icon {
    transform: rotate(45deg);
  }

  .pms2-accordion-item.active .pms2-accordion-content {
    max-height: 500px;
  }

  .pms2-ritual-section {
    margin-top: 40px;
  }

  .pms2-section-title {
    font-family: var(--pms2-font-serif);
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: #111;
  }

  .pms2-ritual-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 40px;
  }

  .pms2-ritual-item {
    position: relative;
    aspect-ratio: 3/4;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }

  .pms2-ritual-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .pms2-ritual-item:hover img {
    transform: scale(1.05);
  }

  .pms2-play-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }

  .pms2-paired-section {
    margin-top: 20px;
    border-top: 1px solid var(--pms2-color-border);
    padding-top: 30px;
  }

  .pms2-paired-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .pms2-paired-img {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background: #f9f9f9;
  }

  .pms2-paired-info {
    flex-grow: 1;
  }

  .pms2-paired-name {
    font-size: 0.85rem;
    font-weight: 500;
    color: #111;
    display: block;
    margin-bottom: 4px;
  }

  .pms2-paired-price {
    font-size: 0.8rem;
    color: #111;
    font-weight: 600;
  }

  .pms2-paired-price .pms2-old-price {
    text-decoration: line-through;
    color: #999;
    margin-right: 5px;
    font-weight: 400;
  }

  .pms2-paired-price .pms2-sale-badge {
    color: white;
    background-color: var(--pms2-color-accent-red);
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 0.7rem;
    margin-left: 5px;
  }

  .pms2-add-link {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #111;
    padding-bottom: 2px;
    color: #111;
    transition: opacity 0.2s;
  }

  .pms2-add-link:hover {
    opacity: 0.6;
  }
</style>

<div class="pms2-wrap">
  <main class="pms2-container">

    <section class="pms2-product-gallery">
      <div class="pms2-gallery-thumbnails">
        <div class="pms2-thumbnail active" onclick="pms2ChangeImage(this, '${mainImage1Url}')">
          <img src="${thumb1Url}" alt="${thumb1Alt}">
        </div>
        <div class="pms2-thumbnail" onclick="pms2ChangeImage(this, '${mainImage2Url}')">
          <img src="${thumb2Url}" alt="${thumb2Alt}">
        </div>
      </div>
      <div class="pms2-main-image">
        <img id="pms2MainImage" src="${mainImage1Url}" alt="${productTitle}">
      </div>
    </section>

    <section class="pms2-product-details">
      <div class="pms2-brand-name">${brandName}</div>
      <h1 class="pms2-product-title">${productTitle}</h1>

      <div class="pms2-tags">
        <span class="pms2-tag">${tag1}</span>
        <span class="pms2-tag">${tag2}</span>
        <span class="pms2-tag">${tag3}</span>
      </div>

      <div class="pms2-price">${productPrice}</div>

      <div class="pms2-purchase-controls">
        <div class="pms2-quantity-selector">
          <button class="pms2-qty-btn" onclick="pms2UpdateQty(-1)">−</button>
          <input type="number" id="pms2QtyInput" class="pms2-qty-input" value="1" min="1" readonly>
          <button class="pms2-qty-btn" onclick="pms2UpdateQty(1)">+</button>
        </div>
        <button class="pms2-add-to-cart-btn" id="pms2AddToCartBtn">Add to Cart</button>
      </div>

      <ul class="pms2-benefits-list">
        <li>${benefit1}</li>
        <li>${benefit2}</li>
        <li>${benefit3}</li>
      </ul>

      <div class="pms2-trust-icons">
        <div class="pms2-trust-item">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 19H4.815a1.8 1.8 0 0 1-1.576-2.664l.825-1.5 2.935-5.336"/>
            <path d="M11 3h2.185a1.8 1.8 0 0 1 1.576 2.664l-.825 1.5-2.935 5.336"/>
            <path d="M19.185 19h-2.185l-2.935-5.336-.825-1.5a1.8 1.8 0 0 1 1.576-2.664h4.369a1.8 1.8 0 0 1 1.576 2.664l-.825 1.5z"/>
            <path d="M12 22v-3"/>
            <path d="M12 5V2"/>
          </svg>
          <span>Recyclable</span>
        </div>
        <div class="pms2-trust-item">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.929-7.071A9.97 9.97 0 0 0 12 2.03a9.97 9.97 0 0 0-7.071 2.929A9.97 9.97 0 0 0 2 12a9.97 9.97 0 0 0 2.929 7.071A9.97 9.97 0 0 0 12 22z"/>
            <path d="m4.93 4.93 14.14 14.14"/>
          </svg>
          <span>Gluten-free</span>
        </div>
        <div class="pms2-trust-item">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 22s5-2 9-10c0 0-2-5-7-5s-2 5-2 5"/>
            <path d="M11 12s2 5 9 5c0 0 2-5-2-10s-7-5-7-5"/>
          </svg>
          <span>Vegan</span>
        </div>
        <div class="pms2-trust-item">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 15c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z"/>
            <path d="M18 12c0-4-2-7-6-7s-6 3-6 7"/>
            <path d="M6 12v3c0 2 1.5 3.5 3.5 3.5"/>
            <path d="M18 12v3c0 2-1.5 3.5-3.5 3.5"/>
            <path d="M7 5l-2-3"/>
            <path d="M17 5l2-3"/>
          </svg>
          <span>Cruelty-free</span>
        </div>
      </div>

      <div class="pms2-accordions">
        <div class="pms2-accordion-item active">
          <button class="pms2-accordion-header" onclick="pms2ToggleAccordion(this)">
            Description
            <span class="pms2-accordion-icon">+</span>
          </button>
          <div class="pms2-accordion-content">
            <p>${descPara1}</p>
            <p>${descPara2}</p>
          </div>
        </div>
        <div class="pms2-accordion-item">
          <button class="pms2-accordion-header" onclick="pms2ToggleAccordion(this)">
            How to use
            <span class="pms2-accordion-icon">+</span>
          </button>
          <div class="pms2-accordion-content">
            <p>${howToUseText}</p>
          </div>
        </div>
        <div class="pms2-accordion-item">
          <button class="pms2-accordion-header" onclick="pms2ToggleAccordion(this)">
            Ingredients
            <span class="pms2-accordion-icon">+</span>
          </button>
          <div class="pms2-accordion-content">
            <p>${ingredientsText}</p>
          </div>
        </div>
        <div class="pms2-accordion-item">
          <button class="pms2-accordion-header" onclick="pms2ToggleAccordion(this)">
            Delivery and return policy
            <span class="pms2-accordion-icon">+</span>
          </button>
          <div class="pms2-accordion-content">
            <p>${deliveryText}</p>
          </div>
        </div>
      </div>

      <div class="pms2-ritual-section">
        <h3 class="pms2-section-title">${ritualTitle}</h3>
        <div class="pms2-ritual-grid">
          <div class="pms2-ritual-item">
            <img src="${ritual1Url}" alt="Ritual 1">
            <div class="pms2-play-icon"><i class="fas fa-play"></i></div>
          </div>
          <div class="pms2-ritual-item">
            <img src="${ritual2Url}" alt="Ritual 2">
            <div class="pms2-play-icon"><i class="fas fa-play"></i></div>
          </div>
          <div class="pms2-ritual-item">
            <img src="${ritual3Url}" alt="Ritual 3">
            <div class="pms2-play-icon"><i class="fas fa-play"></i></div>
          </div>
          <div class="pms2-ritual-item">
            <img src="${ritual4Url}" alt="Ritual 4">
            <div class="pms2-play-icon"><i class="fas fa-play"></i></div>
          </div>
        </div>
      </div>

      <div class="pms2-paired-section">
        <h3 class="pms2-section-title" style="font-size: 0.9rem; margin-bottom: 15px;">${pairedTitle}</h3>

        <div class="pms2-paired-item">
          <img src="${paired1ImgUrl}" alt="${paired1Name}" class="pms2-paired-img">
          <div class="pms2-paired-info">
            <span class="pms2-paired-name">${paired1Name}</span>
            <div class="pms2-paired-price">
              <span class="pms2-old-price">${paired1OldPrice}</span>
              <span>${paired1NewPrice}</span>
              <span class="pms2-sale-badge">${paired1Badge}</span>
            </div>
          </div>
          <button class="pms2-add-link">ADD</button>
        </div>

        <div class="pms2-paired-item">
          <img src="${paired2ImgUrl}" alt="${paired2Name}" class="pms2-paired-img">
          <div class="pms2-paired-info">
            <span class="pms2-paired-name">${paired2Name}</span>
            <div class="pms2-paired-price">${paired2Price}</div>
          </div>
          <button class="pms2-add-link">ADD</button>
        </div>
      </div>

    </section>
  </main>
</div>

<script>
  function pms2ChangeImage(thumbnail, src) {
    var mainImg = document.getElementById('pms2MainImage');
    mainImg.style.opacity = '0.5';
    setTimeout(function() {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 200);
    document.querySelectorAll('.pms2-thumbnail').forEach(function(thumb) {
      thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
  }

  function pms2UpdateQty(change) {
    var input = document.getElementById('pms2QtyInput');
    var newVal = parseInt(input.value) + change;
    if (newVal < 1) newVal = 1;
    input.value = newVal;
  }

  function pms2ToggleAccordion(header) {
    var item = header.parentElement;
    var isActive = item.classList.contains('active');
    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  }

  var pms2CartBtn = document.getElementById('pms2AddToCartBtn');
  pms2CartBtn.addEventListener('click', function() {
    var originalText = this.innerText;
    var qty = document.getElementById('pms2QtyInput').value;
    this.innerText = 'Added ' + qty + ' item' + (qty > 1 ? 's' : '') + '!';
    this.style.backgroundColor = '#2e7d32';
    setTimeout(function() {
      pms2CartBtn.innerText = originalText;
      pms2CartBtn.style.backgroundColor = '';
    }, 2000);
  });
</script>`;
}

export default function ProductMainSecV2({ config }) {
   return null;
}
