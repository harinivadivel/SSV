/**
 * Shri Samuthira Vilas Maligai and General Store
 * Web Application Logic & Interactions
 */

// ==========================================
// 1. Grocery Catalog Data
// ==========================================
const groceryCatalog = [
  // --- Rice & Grains ---
  {
    id: "rice-ponni-boiled",
    category: "rice",
    nameEn: "Deluxe Ponni Boiled Rice",
    nameTa: "பொன்னி புழுங்கல் அரிசி",
    desc: "Single-boiled fine grain, aged delta rice for fluffy daily meals.",
    unit: "5 kg / 25 kg Bag",
    badge: "Delta Harvest",
    icon: "fa-bowl-rice"
  },
  {
    id: "rice-raw-ponni",
    category: "rice",
    nameEn: "Raw Ponni Rice (Pacharisi)",
    nameTa: "சுத்தமான பச்சரிசி",
    desc: "Premium quality raw rice, ideal for pongal, daily meals & batter.",
    unit: "1 kg / 5 kg",
    badge: "Pure Grade-1",
    icon: "fa-seedling"
  },
  {
    id: "rice-idli",
    category: "rice",
    nameEn: "Salem Idli Rice",
    nameTa: "இட்லி புழுங்கல் அரிசி",
    desc: "Short stout grain selected for soft, spongy idlis and crisp dosas.",
    unit: "5 kg / 10 kg",
    badge: "Soft Batter",
    icon: "fa-utensils"
  },
  {
    id: "rice-basmati",
    category: "rice",
    nameEn: "Royal Long Grain Basmati",
    nameTa: "பாசுமதி அரிசி",
    desc: "Aromatic extra-long grain rice for biryani, pulao, and ghee rice.",
    unit: "1 kg Pack",
    badge: "Extra Aromatic",
    icon: "fa-bowl-rice"
  },
  {
    id: "grain-ragi-flour",
    category: "rice",
    nameEn: "Farm Fresh Ragi Flour (Kelvaragu)",
    nameTa: "நாட்டு கேழ்வரகு மாவு",
    desc: "Stone-ground finger millet flour rich in calcium & fiber.",
    unit: "500 g / 1 kg",
    badge: "Nutrient Rich",
    icon: "fa-wheat-awn"
  },
  {
    id: "grain-pottukadalai",
    category: "rice",
    nameEn: "Fried Gram (Pottukadalai)",
    nameTa: "பொட்டுக் கடலை / உடைத்த கடலை",
    desc: "Crispy roasted gram, essential for authentic coconut chutney.",
    unit: "250 g / 500 g",
    badge: "Crisp & Clean",
    icon: "fa-cookie"
  },

  // --- Dals & Pulses ---
  {
    id: "dal-toor",
    category: "pulses",
    nameEn: "Unpolished First Quality Toor Dal",
    nameTa: "துவரம் பருப்பு (முதல் தரம்)",
    desc: "Rich aroma and fast-cooking yellow toor dal for sambar and rasam.",
    unit: "500 g / 1 kg",
    badge: "Best Seller",
    icon: "fa-cubes-stacked"
  },
  {
    id: "dal-urad-whole",
    category: "pulses",
    nameEn: "Guntur Urad Dal Gundu (Whole)",
    nameTa: "உளுத்தம் பருப்பு (முழு உருண்டை)",
    desc: "Dense white urad dal offering high rise for medu vada and idli.",
    unit: "500 g / 1 kg",
    badge: "High Yield",
    icon: "fa-circle-dot"
  },
  {
    id: "dal-moong",
    category: "pulses",
    nameEn: "Yellow Moong Dal (Paasi Paruppu)",
    nameTa: "பாசிப் பருப்பு",
    desc: "Split yellow moong dal for digestive kootu, payasam, and ven pongal.",
    unit: "500 g / 1 kg",
    badge: "Protein Rich",
    icon: "fa-cubes-stacked"
  },
  {
    id: "dal-chana",
    category: "pulses",
    nameEn: "Bengal Gram / Chana Dal",
    nameTa: "கடலைப் பருப்பு",
    desc: "Wholesome dal for crunchy masala vadai, tempering, and sundal.",
    unit: "500 g / 1 kg",
    badge: "Direct Sourced",
    icon: "fa-cubes-stacked"
  },
  {
    id: "pulse-black-chana",
    category: "pulses",
    nameEn: "Native Black Chana (Kondaikadalai)",
    nameTa: "கருப்புக் கொண்டைக்கடலை",
    desc: "Country black chickpeas ideal for festival sundal and spicy curries.",
    unit: "500 g / 1 kg",
    badge: "Country Variety",
    icon: "fa-cookie-bite"
  },
  {
    id: "pulse-green-peas",
    category: "pulses",
    nameEn: "Dried White Peas (Vellai Pattani)",
    nameTa: "வெள்ளை பட்டாணி",
    desc: "Cleaned dried peas for evening beach sundal, kurma & side gravies.",
    unit: "500 g / 1 kg",
    badge: "Cleaned",
    icon: "fa-cubes-stacked"
  },

  // --- Spices & Masalas ---
  {
    id: "spice-red-chilli",
    category: "spices",
    nameEn: "Guntur Stemless Red Chillies",
    nameTa: "குண்டூர் மிளகாய் வற்றல்",
    desc: "Bright red color and spicy heat for gravies, sambar & tempering.",
    unit: "250 g / 500 g",
    badge: "Sun Dried",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-coriander",
    category: "spices",
    nameEn: "Plump Coriander Seeds (Dhaniya)",
    nameTa: "கொத்தமல்லி விதை (தனியா)",
    desc: "Fragrant whole dhaniya seeds for homemade curry powder grinding.",
    unit: "250 g / 500 g",
    badge: "Aromatic",
    icon: "fa-seedling"
  },
  {
    id: "spice-turmeric",
    category: "spices",
    nameEn: "Erode Pure Turmeric Powder",
    nameTa: "ஈரோடு சுத்தமான மஞ்சள் தூள்",
    desc: "High curcumin, 100% natural turmeric with no artificial coloring.",
    unit: "100 g / 250 g",
    badge: "Pure & Natural",
    icon: "fa-mortar-pestle"
  },
  {
    id: "spice-cumin",
    category: "spices",
    nameEn: "Unadulterated Jeera (Cumin Seeds)",
    nameTa: "சீரகம் (ஜீரகம்)",
    desc: "Intensely fragrant seed spice aiding healthy digestion.",
    unit: "100 g / 250 g",
    badge: "Grade-1 Quality",
    icon: "fa-seedling"
  },
  {
    id: "spice-mustard",
    category: "spices",
    nameEn: "Small Grain Mustard Seeds (Kadugu)",
    nameTa: "சிறிய கடுகு",
    desc: "High-pungency tiny black mustard seeds for South Indian tadka.",
    unit: "100 g / 250 g",
    badge: "Tadka Essential",
    icon: "fa-seedling"
  },
  {
    id: "spice-black-pepper",
    category: "spices",
    nameEn: "Malabar Whole Black Pepper",
    nameTa: "கருப்பு மிளகு",
    desc: "Bold pungent black peppercorns for authentic rasam and pongal.",
    unit: "100 g / 250 g",
    badge: "Bold Berries",
    icon: "fa-mortar-pestle"
  },
  {
    id: "spice-fenugreek",
    category: "spices",
    nameEn: "Fenugreek Seeds (Vendhayam)",
    nameTa: "வெந்தயம்",
    desc: "Cooling spice essential for vatha kulambu, fish curries and idli batter.",
    unit: "100 g / 250 g",
    badge: "Natural Coolant",
    icon: "fa-seedling"
  },
  {
    id: "spice-sambar-powder",
    category: "spices",
    nameEn: "Traditional Sambar & Rasam Powder",
    nameTa: "நாட்டு சாம்பார் & ரசப்பொடி",
    desc: "Authentic homemade style freshly ground aromatic masala mix.",
    unit: "200 g / 500 g",
    badge: "Heritage Taste",
    icon: "fa-bowl-rice"
  },

  // --- Cooking Oils & Ghee ---
  {
    id: "oil-gingelly",
    category: "oils",
    nameEn: "Wood-Pressed Gingelly Oil (Nallenna)",
    nameTa: "மரச்செக்கு நல்லெண்ணெய்",
    desc: "Extracted from black sesame seeds and palm jaggery. Pure traditional oil.",
    unit: "500 ml / 1 Litre",
    badge: "Cold Pressed",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-groundnut",
    category: "oils",
    nameEn: "Pure Cold-Pressed Groundnut Oil",
    nameTa: "மரச்செக்கு கடலை எண்ணெய்",
    desc: "Nutty aroma, zero chemical refining, high smoke point for crispy frying.",
    unit: "1 Litre Pouch / Bottle",
    badge: "Heart Healthy",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-coconut",
    category: "oils",
    nameEn: "Filtered Edible Coconut Oil",
    nameTa: "சுத்தமான தேங்காய் எண்ணெய்",
    desc: "Pure copra oil suited for hair nourishment and Kerala-style cooking.",
    unit: "500 ml / 1 Litre",
    badge: "100% Pure Copra",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-cow-ghee",
    category: "oils",
    nameEn: "Aromatic Pure Cow Ghee",
    nameTa: "சுத்தமான நாட்டுப் பசும் நெய்",
    desc: "Golden granulated pure cow ghee for sweets, hot rice, and dosas.",
    unit: "200 ml / 500 ml",
    badge: "Traditional Granular",
    icon: "fa-jar"
  },
  {
    id: "oil-deepam",
    category: "oils",
    nameEn: "Pancha Deepam Pooja Lamp Oil",
    nameTa: "பஞ்ச தீபம் பூஜை எண்ணெய்",
    desc: "Auspicious 5-oil blend formulated for long-lasting, soot-free lamp wicks.",
    unit: "1 Litre Bottle",
    badge: "Pooja Special",
    icon: "fa-fire"
  },

  // --- Pooja Essentials ---
  {
    id: "pooja-agarbatti",
    category: "pooja",
    nameEn: "Premium Scented Agarbatti",
    nameTa: "நறுமண ஊதுபத்தி (அகர்பத்தி)",
    desc: "Pleasant temple floral fragrance for morning prayer and serenity.",
    unit: "Economy Pack",
    badge: "Long Lasting",
    icon: "fa-fire"
  },
  {
    id: "pooja-camphor",
    category: "pooja",
    nameEn: "Pure Refined Camphor (Karpooram)",
    nameTa: "பச்சை / சுத்த கற்பூரம்",
    desc: "Smokeless, bright burning white camphor tablets for daily aarti.",
    unit: "50 g / 100 g Box",
    badge: "100% Pure",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "pooja-sambrani",
    category: "pooja",
    nameEn: "Natural Cup Dhoop & Sambrani",
    nameTa: "சாம்பிராணி & கப் தூப்",
    desc: "Traditional gum benzoin resin with authentic divine temple aroma.",
    unit: "12 Cups Pack",
    badge: "Divine Fragrance",
    icon: "fa-bell"
  },
  {
    id: "pooja-wicks",
    category: "pooja",
    nameEn: "Pure Cotton Lamp Wicks (Thiri)",
    nameTa: "சுத்தமான விளக்கு திரி",
    desc: "Evenly spun long cotton wicks for vilakku and kamatchi amman lamps.",
    unit: "Pack of 100 wicks",
    badge: "Clean Burning",
    icon: "fa-fire"
  },
  {
    id: "pooja-kumkum",
    category: "pooja",
    nameEn: "Traditional Kumkum & Chandanam",
    nameTa: "மங்கள குங்குமம் & சந்தனம்",
    desc: "Skin-friendly herbal sindoor and fragrant sandalwood powder.",
    unit: "Standard Pack",
    badge: "Traditional",
    icon: "fa-sparkles"
  },

  // --- General & Household Goods ---
  {
    id: "gen-salt",
    category: "general",
    nameEn: "Tuticorin Iodized Crystal Salt",
    nameTa: "தூத்துக்குடி கல் உப்பு",
    desc: "Sun-evaporated natural sea salt rich in trace marine minerals.",
    unit: "1 kg Pack",
    badge: "Daily Essential",
    icon: "fa-cubes"
  },
  {
    id: "gen-jaggery",
    category: "general",
    nameEn: "Traditional Mandai Vellam (Jaggery)",
    nameTa: "நாட்டு மண்டை வெல்லம்",
    desc: "Pure chemical-free cane jaggery blocks for sweets and tea.",
    unit: "1 kg Block",
    badge: "Chemical Free",
    icon: "fa-bowl-food"
  },
  {
    id: "gen-soap-bath",
    category: "general",
    nameEn: "Mysore Sandal & Herbal Bath Soaps",
    nameTa: "குளியல் சோப்புகள் (ஹெர்பல்)",
    desc: "Authentic sandalwood and neem bath soaps for gentle skin care.",
    unit: "125 g Bar",
    badge: "Skin Friendly",
    icon: "fa-soap"
  },
  {
    id: "gen-detergent",
    category: "general",
    nameEn: "Fabric Wash Detergent Powder",
    nameTa: "துணி துவைக்கும் வாஷிங் பவுடர்",
    desc: "Effective stain-removing formula suitable for bucket and machine wash.",
    unit: "1 kg Pack",
    badge: "Power Wash",
    icon: "fa-shirt"
  },
  {
    id: "gen-dishwash",
    category: "general",
    nameEn: "Lemon Dishwash Bar / Liquid",
    nameTa: "பாத்திரம் கழுவும் பார்",
    desc: "Tough on grease, gentle on vessels with refreshing lemon freshness.",
    unit: "500 g Bar",
    badge: "Grease Cut",
    icon: "fa-kitchen-set"
  },
  {
    id: "gen-tea-powder",
    category: "general",
    nameEn: "Strong Nilgiri CTC Tea Dust",
    nameTa: "நீலகிரி டீ தூள் (டீத்தூள்)",
    desc: "Rich liquor and bold brisk aroma for perfect morning tea.",
    unit: "250 g / 500 g",
    badge: "Rich Blend",
    icon: "fa-mug-hot"
  }
];

// ==========================================
// 2. Application State & Storage
// ==========================================
let cart = [];
let currentCategory = "all";
let searchQuery = "";

const STORE_WHATSAPP = "919976103479"; // Store WhatsApp phone number
const STORAGE_KEY = "ssv_maligai_cart_v1";

// Load cart from localStorage
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load cart from storage", e);
    cart = [];
  }
}

// Save cart to localStorage
function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
}

// ==========================================
// 3. DOM Elements Cache
// ==========================================
const productGrid = document.getElementById("productGrid");
const grocerySearchInput = document.getElementById("grocerySearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const categoryFilterBar = document.getElementById("categoryFilterBar");
const categoryShortcutGrid = document.getElementById("categoryShortcutGrid");

// Cart UI elements
const openCartBtn = document.getElementById("openCartBtn");
const floatingCartBtn = document.getElementById("floatingCartBtn");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const drawerOverlay = document.getElementById("drawerOverlay");
const orderDrawer = document.getElementById("orderDrawer");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartEmptyState = document.getElementById("cartEmptyState");
const orderCustomerForm = document.getElementById("orderCustomerForm");
const drawerFooter = document.getElementById("drawerFooter");
const drawerTotalItems = document.getElementById("drawerTotalItems");
const clearCartBtn = document.getElementById("clearCartBtn");
const sendWhatsAppOrderBtn = document.getElementById("sendWhatsAppOrderBtn");
const browseFromEmptyBtn = document.getElementById("browseFromEmptyBtn");

// Badges & Counters
const cartCountBadge = document.getElementById("cartCount");
const floatingCartCount = document.getElementById("floatingCartCount");
const pillItemCount = document.getElementById("pillItemCount");
const viewListBtn = document.getElementById("viewListBtn");

// Modals
const customItemModal = document.getElementById("customItemModal");
const addCustomItemBtn = document.getElementById("addCustomItemBtn");
const closeCustomModalBtn = document.getElementById("closeCustomModalBtn");
const cancelCustomModalBtn = document.getElementById("cancelCustomModalBtn");
const confirmAddCustomBtn = document.getElementById("confirmAddCustomBtn");
const customItemNameInput = document.getElementById("customItemName");
const customItemQtyInput = document.getElementById("customItemQty");

const reviewModal = document.getElementById("reviewModal");
const writeReviewBtn = document.getElementById("writeReviewBtn");
const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
const cancelReviewModalBtn = document.getElementById("cancelReviewModalBtn");

// General & Contact Buttons
const shareBtn = document.getElementById("shareBtn");
const copyAddressBtn = document.getElementById("copyAddressBtn");
const heroQuickOrderBtn = document.getElementById("heroQuickOrderBtn");
const sendQuickListBtn = document.getElementById("sendQuickListBtn");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const statusNotice = document.getElementById("statusNotice");
const closeNoticeBtn = document.getElementById("closeNoticeBtn");
const groceryInquiryForm = document.getElementById("groceryInquiryForm");

// ==========================================
// 4. Render Catalog Products
// ==========================================
function renderProducts() {
  if (!productGrid) return;

  const filtered = groceryCatalog.filter(item => {
    const matchesCat = (currentCategory === "all" || item.category === currentCategory);
    const matchesSearch = !searchQuery || 
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameTa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.unit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 12px; border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 14px;"></i>
        <h3 style="font-size: 1.2rem; color: var(--dark); margin-bottom: 6px;">No groceries match your search</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px;">Try searching for "rice", "dal", "oil", or add a custom item to your list.</p>
        <button class="btn btn-outline btn-sm" onclick="clearSearchFilter()">View All Items</button>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(item => {
    const cartItem = cart.find(ci => ci.id === item.id);
    const inCart = !!cartItem;
    const qty = inCart ? cartItem.qty : 0;

    return `
      <div class="product-card" id="card-${item.id}">
        <div class="product-card-top">
          <span class="p-cat-tag">${getCategoryName(item.category)}</span>
          <span class="p-badge">${item.badge}</span>
        </div>
        <div class="product-icon-wrap">
          <i class="fa-solid ${item.icon || 'fa-basket-shopping'}"></i>
        </div>
        <h3 class="product-name-en">${item.nameEn}</h3>
        <h4 class="product-name-ta">${item.nameTa}</h4>
        <p class="product-desc">${item.desc}</p>
        <div class="product-unit-info">
          <span>Pack / Unit:</span>
          <strong>${item.unit}</strong>
        </div>
        <div class="product-action-row">
          <button 
            class="btn-add-item" 
            style="display: ${inCart ? 'none' : 'flex'};" 
            onclick="handleAddToCart('${item.id}')">
            <i class="fa-solid fa-plus"></i> Add to Order List
          </button>
          <div class="qty-control" style="display: ${inCart ? 'flex' : 'none'};" id="stepper-${item.id}">
            <button class="qty-btn" onclick="handleUpdateQty('${item.id}', -1)" title="Reduce quantity">&minus;</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="handleUpdateQty('${item.id}', 1)" title="Increase quantity">&plus;</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function getCategoryName(cat) {
  const map = {
    rice: "Rice & Grains",
    pulses: "Dals & Pulses",
    spices: "Spices",
    oils: "Cooking Oils",
    pooja: "Pooja Essentials",
    general: "General Goods"
  };
  return map[cat] || "Groceries";
}

// ==========================================
// 5. Cart Management & Drawer Render
// ==========================================
function updateCartCounters() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cartCountBadge) cartCountBadge.textContent = totalCount;
  if (floatingCartCount) floatingCartCount.textContent = totalCount;
  if (pillItemCount) pillItemCount.textContent = totalCount;
  if (drawerTotalItems) drawerTotalItems.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
}

function renderCartDrawer() {
  updateCartCounters();

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    cartEmptyState.style.display = "block";
    orderCustomerForm.style.display = "none";
    drawerFooter.style.display = "none";
    return;
  }

  cartEmptyState.style.display = "none";
  orderCustomerForm.style.display = "block";
  drawerFooter.style.display = "flex";

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <div class="ci-details">
        <h4 class="ci-name">${item.nameEn}</h4>
        <span class="ci-unit">${item.unit} ${item.nameTa ? '&bull; ' + item.nameTa : ''}</span>
      </div>
      <div class="ci-actions">
        <div class="ci-qty-stepper">
          <button class="ci-btn" onclick="handleUpdateQty('${item.id}', -1)">&minus;</button>
          <span class="ci-count">${item.qty}</span>
          <button class="ci-btn" onclick="handleUpdateQty('${item.id}', 1)">&plus;</button>
        </div>
        <button class="ci-remove-btn" onclick="handleRemoveItem('${item.id}')" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join("");
}

window.handleAddToCart = function(productId) {
  const product = groceryCatalog.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(ci => ci.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      nameEn: product.nameEn,
      nameTa: product.nameTa,
      unit: product.unit,
      qty: 1
    });
  }

  saveCart();
  renderProducts();
  renderCartDrawer();
  showToast(`Added "${product.nameEn}" to your order list!`, "success");
};

window.handleUpdateQty = function(productId, delta) {
  const existingIndex = cart.findIndex(ci => ci.id === productId);
  if (existingIndex === -1) return;

  cart[existingIndex].qty += delta;

  if (cart[existingIndex].qty <= 0) {
    const removedName = cart[existingIndex].nameEn;
    cart.splice(existingIndex, 1);
    showToast(`Removed "${removedName}" from order list`, "info");
  }

  saveCart();
  renderProducts();
  renderCartDrawer();
};

window.handleRemoveItem = function(productId) {
  const existing = cart.find(ci => ci.id === productId);
  if (existing) {
    cart = cart.filter(ci => ci.id !== productId);
    saveCart();
    renderProducts();
    renderCartDrawer();
    showToast(`Removed "${existing.nameEn}"`, "info");
  }
};

window.clearSearchFilter = function() {
  searchQuery = "";
  if (grocerySearchInput) grocerySearchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";
  currentCategory = "all";
  updateCategoryPillUI("all");
  renderProducts();
};

function openDrawer() {
  orderDrawer.classList.add("open");
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  orderDrawer.classList.remove("open");
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 6. WhatsApp Order Generator
// ==========================================
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Please add items to your list first!", "info");
    return;
  }

  const custName = document.getElementById("orderCustName")?.value.trim() || "Customer (வாடிக்கையாளர்)";
  const custAddress = document.getElementById("orderCustAddress")?.value.trim() || "Koothur / Panamangalam area";
  const custNote = document.getElementById("orderCustNote")?.value.trim() || "";

  let msg = `*வணக்கம் / NAMASTE SHRI SAMUTHIRA VILAS STORE*\n`;
  msg += `*NEW GROCERY ORDER / புதிய மளிகை ஆர்டர்*\n\n`;
  msg += `👤 *Customer Name:* ${custName}\n`;
  msg += `📍 *Delivery Location / Landmark:* ${custAddress}\n`;
  if (custNote) {
    msg += `📝 *Notes:* ${custNote}\n`;
  }
  msg += `\n*PROVISION LIST (${cart.length} items):*\n`;

  cart.forEach((item, idx) => {
    const tamilPart = item.nameTa ? ` (${item.nameTa})` : "";
    msg += `${idx + 1}. *${item.nameEn}*${tamilPart}\n    Qty: *${item.qty} pack(s)* [${item.unit}]\n`;
  });

  msg += `\n---\n`;
  msg += `*Store:* Shri Samuthira Vilas Maligai & General\n`;
  msg += `*Address:* 4/121A SVM School Road, Panamangalam, Koothur - 621216\n`;
  msg += `Kindly confirm availability and total bill amount. Thank you! 🙏`;

  const encodedUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(encodedUrl, "_blank");
}

// ==========================================
// 7. Modals: Custom Item & Review
// ==========================================
function openCustomModal() {
  customItemModal.classList.add("active");
  if (customItemNameInput) {
    customItemNameInput.value = "";
    customItemQtyInput.value = "1 pack";
    customItemNameInput.focus();
  }
}

function closeCustomModal() {
  customItemModal.classList.remove("active");
}

function handleAddCustomItem() {
  const name = customItemNameInput.value.trim();
  const qtyStr = customItemQtyInput.value.trim() || "1 unit";

  if (!name) {
    showToast("Please enter the grocery item name", "info");
    return;
  }

  const customId = "custom-" + Date.now();
  cart.push({
    id: customId,
    nameEn: name,
    nameTa: "தனிப்பயன் பொருள்",
    unit: qtyStr,
    qty: 1
  });

  saveCart();
  renderCartDrawer();
  closeCustomModal();
  openDrawer();
  showToast(`Added custom item "${name}" to your list!`, "success");
}

// ==========================================
// 8. Toast Notifications
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3000);
}

// ==========================================
// 9. Event Listeners & Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderProducts();
  renderCartDrawer();

  // Set Current Year in Footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Drawer Toggles
  if (openCartBtn) openCartBtn.addEventListener("click", openDrawer);
  if (floatingCartBtn) floatingCartBtn.addEventListener("click", openDrawer);
  if (viewListBtn) viewListBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
  if (browseFromEmptyBtn) {
    browseFromEmptyBtn.addEventListener("click", () => {
      closeDrawer();
      const catEl = document.getElementById("catalog");
      if (catEl) catEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Clear Cart
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your grocery list?")) {
        cart = [];
        saveCart();
        renderProducts();
        renderCartDrawer();
        showToast("Grocery list cleared", "info");
      }
    });
  }

  // Send WhatsApp Order
  if (sendWhatsAppOrderBtn) {
    sendWhatsAppOrderBtn.addEventListener("click", sendWhatsAppOrder);
  }

  // Hero Quick Order Button
  if (heroQuickOrderBtn) {
    heroQuickOrderBtn.addEventListener("click", () => {
      if (cart.length > 0) {
        openDrawer();
      } else {
        const catEl = document.getElementById("catalog");
        if (catEl) catEl.scrollIntoView({ behavior: "smooth" });
        showToast("Pick provisions from the catalog or click Add Custom Item!", "info");
      }
    });
  }

  if (sendQuickListBtn) {
    sendQuickListBtn.addEventListener("click", () => {
      if (cart.length > 0) {
        openDrawer();
      } else {
        openCustomModal();
      }
    });
  }

  // Search Input
  if (grocerySearchInput) {
    grocerySearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      grocerySearchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      renderProducts();
    });
  }

  // Category Filter Pills
  if (categoryFilterBar) {
    categoryFilterBar.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const filter = pill.getAttribute("data-filter");
        currentCategory = filter;
        updateCategoryPillUI(filter);
        renderProducts();
      });
    });
  }

  // Category Shortcut Grid
  if (categoryShortcutGrid) {
    categoryShortcutGrid.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", () => {
        const cat = card.getAttribute("data-cat");
        currentCategory = cat;
        updateCategoryPillUI(cat);
        renderProducts();
        const catalogSec = document.getElementById("catalog");
        if (catalogSec) catalogSec.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // Footer Category Links
  document.querySelectorAll(".footer-links a[data-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.getAttribute("data-filter");
      currentCategory = filter;
      updateCategoryPillUI(filter);
      renderProducts();
      const catalogSec = document.getElementById("catalog");
      if (catalogSec) catalogSec.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Custom Item Modal
  if (addCustomItemBtn) addCustomItemBtn.addEventListener("click", openCustomModal);
  if (closeCustomModalBtn) closeCustomModalBtn.addEventListener("click", closeCustomModal);
  if (cancelCustomModalBtn) cancelCustomModalBtn.addEventListener("click", closeCustomModal);
  if (confirmAddCustomBtn) confirmAddCustomBtn.addEventListener("click", handleAddCustomItem);

  // Review Modal
  if (writeReviewBtn) {
    writeReviewBtn.addEventListener("click", () => {
      reviewModal.classList.add("active");
    });
  }
  if (closeReviewModalBtn) closeReviewModalBtn.addEventListener("click", () => reviewModal.classList.remove("active"));
  if (cancelReviewModalBtn) cancelReviewModalBtn.addEventListener("click", () => reviewModal.classList.remove("active"));

  // Notice Dismiss
  if (closeNoticeBtn && statusNotice) {
    closeNoticeBtn.addEventListener("click", () => {
      statusNotice.style.display = "none";
    });
  }

  // ==========================================
  // Navigation & Scrollspy (Corrected Navigator)
  // ==========================================
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("section[id]");
  const navBackdrop = document.getElementById("navBackdrop");
  const menuToggleIcon = document.getElementById("menuToggleIcon");

  // Smooth scroll & instant active state on nav click
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({ behavior: "smooth" });
          
          navLinks.forEach(nl => nl.classList.remove("active"));
          link.classList.add("active");
          
          // Close mobile menu if open
          if (mainNav && mainNav.classList.contains("open")) {
            closeMobileNav();
          }
        }
      }
    });
  });

  // Scrollspy: update active link as user scrolls
  function updateScrollspy() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateScrollspy, { passive: true });

  // Mobile Menu Helpers
  function openMobileNav() {
    if (!mainNav) return;
    mainNav.classList.add("open");
    if (navBackdrop) navBackdrop.classList.add("active");
    if (menuToggleIcon) menuToggleIcon.className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (!mainNav) return;
    mainNav.classList.remove("open");
    if (navBackdrop) navBackdrop.classList.remove("active");
    if (menuToggleIcon) menuToggleIcon.className = "fa-solid fa-bars";
    document.body.style.overflow = "";
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      if (mainNav.classList.contains("open")) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMobileNav);
  }

  // Keyboard accessibility: ESC key closes open drawers & mobile menus
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileNav();
      closeDrawer();
      closeCustomModal();
      if (reviewModal) reviewModal.classList.remove("active");
    }
  });

  // GPS Navigator & Geolocation API (Current Location Navigator)
  const geoNavigatorBtn = document.getElementById("geoNavigatorBtn");
  if (geoNavigatorBtn) {
    geoNavigatorBtn.addEventListener("click", () => {
      const storeDest = "VPWF%2B28+Koothur+Tamil+Nadu";
      if ("geolocation" in navigator) {
        showToast("Locating your GPS position...", "info");
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const routeUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${storeDest}`;
            window.open(routeUrl, "_blank");
            showToast("Opening GPS Navigator with turn-by-turn route!", "success");
          },
          (err) => {
            console.warn("Geolocation denied or unavailable", err);
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${storeDest}`, "_blank");
            showToast("Opening Google Maps Navigator...", "info");
          },
          { timeout: 7000 }
        );
      } else {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${storeDest}`, "_blank");
      }
    });
  }

  // Robust Clipboard Copy Function
  function safeCopyToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, "success");
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast(successMsg, "success");
    } catch (err) {
      showToast(text, "info");
    }
  }

  // Copy Address Button
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", () => {
      const address = "4/121A SVM SCHOOL, ROAD, PANAMANGALAM, Koothur, Tamil Nadu 621216 (Plus Code: VPWF+28)";
      safeCopyToClipboard(address, "Store address copied to clipboard!");
    });
  }

  // Share Store Button
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "Shri Samuthira Vilas Maligai and General",
        text: "Check out Shri Samuthira Vilas Maligai and General in Koothur, Tamil Nadu (Rated 5.0 Stars) for fresh provisions and groceries!",
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log("Share dismissed");
        }
      } else {
        safeCopyToClipboard(window.location.href, "Website link copied to clipboard!");
      }
    });
  }

  // Contact / Inquiry Form via WhatsApp
  if (groceryInquiryForm) {
    groceryInquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("custName")?.value.trim() || "";
      const phone = document.getElementById("custPhone")?.value.trim() || "";
      const location = document.getElementById("custLocation")?.value.trim() || "";
      const notes = document.getElementById("custNotes")?.value.trim() || "";

      let msg = `*VANAKKAM SHRI SAMUTHIRA VILAS STORE*\n`;
      msg += `*ONLINE ENQUIRY / GROCERY LIST*\n\n`;
      msg += `👤 *Name:* ${name}\n`;
      msg += `📞 *Phone:* ${phone}\n`;
      if (location) msg += `📍 *Area:* ${location}\n`;
      msg += `📝 *Grocery Requirements / Message:*\n${notes}\n\n`;
      msg += `Please reply with price and stock details. Thank you!`;

      const url = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
      showToast("Opening WhatsApp to send your inquiry...", "success");
      groceryInquiryForm.reset();
    });
  }
});

function updateCategoryPillUI(activeFilter) {
  if (!categoryFilterBar) return;
  categoryFilterBar.querySelectorAll(".filter-pill").forEach(pill => {
    if (pill.getAttribute("data-filter") === activeFilter) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}
