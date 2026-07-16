/* North & Mason - Core Application JavaScript */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
    {
        id: "campera-santa-barbara",
        name: "Campera Puffer Santa Barbara",
        category: "camperas",
        price: 3500,
        brand: "Santa Barbara",
        description: "Nuestra icónica campera puffer combina diseño contemporáneo y funcionalidad. Confeccionada con materiales impermeables de alta calidad y un acolchado térmico ultra liviano diseñado para retener la temperatura corporal. Cuenta con capucha ajustable, cierres de alta calidad a contraste de color y finos detalles en cuero en los tiradores. Un clásico versátil ideal para el invierno.",
        colors: [
            { name: "Negro", hex: "#121212", images: ["assets/jacket_black_flat.jpg", "assets/jacket_black_hang.jpg"] },
            { name: "Gris", hex: "#B2B4B2", images: ["assets/jacket_gray.jpg"] },
            { name: "Bordo", hex: "#611D29", images: ["assets/jacket_burgundy.jpg"] },
            { name: "Blanco", hex: "#FAF9F6", images: ["assets/jacket_white.jpg"] }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: true
    },
    {
        id: "shoes-airforce",
        name: "Nike Air Force 1",
        category: "calzado",
        price: 1900,
        brand: "Nike",
        description: "El calzado legendario que redefinió el estilo urbano. Confeccionado en cuero vacuno premium con un acabado totalmente blanco, incorpora la icónica amortiguación Nike Air para garantizar una comodidad insuperable durante todo el día. Su silueta de perfil bajo ofrece un look limpio y atemporal.",
        colors: [{ name: "Blanco", hex: "#FAF9F6", images: ["assets/shoes_airforce.jpg"] }],
        sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
        featured: true
    },
    {
        id: "shoes-samba",
        name: "Adidas Samba Black",
        category: "calzado",
        price: 1900,
        brand: "Adidas",
        description: "Nacido en las canchas de fútbol sala, el Samba es un ícono indiscutible del streetwear mundial. Fabricado con una parte superior de cuero negro suave, las clásicas 3 tiras a contraste en color blanco y la inconfundible suela de goma color caramelo que brinda agarre y un estilo retro distintivo.",
        colors: [{ name: "Negro", hex: "#121212", images: ["assets/shoes_samba.jpg"] }],
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        featured: true
    },
    {
        id: "shoes-campus",
        name: "Adidas Campus Grey",
        category: "calzado",
        price: 1900,
        brand: "Adidas",
        description: "Un clásico de los años 80 rediseñado para la cultura urbana actual. El Campus presenta una capellada de gamuza premium en color gris con horma ancha y cordones gruesos retro. Un calzado cómodo, robusto y versátil que complementa a la perfección outfits modernos y relajados.",
        colors: [{ name: "Gris", hex: "#B2B4B2", images: ["assets/shoes_campus.jpg"] }],
        sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
        featured: false
    },
    {
        id: "shoes-puma-mayze",
        name: "Puma Mayze Platform",
        category: "calzado",
        price: 1900,
        brand: "Puma",
        description: "Diseñado para quienes quieren destacar con altura. El Puma Mayze destaca por su suela de plataforma apilada y su capellada de cuero blanco impecable combinado con la franja clásica en color negro. Un calzado audaz que fusiona la actitud urbana con el estilo contemporáneo.",
        colors: [{ name: "Blanco/Negro", hex: "#FAF9F6", images: ["assets/shoes_puma_mayze.jpg"] }],
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        featured: false
    },
    {
        id: "shoes-jordan4",
        name: "Air Jordan 4 Retro",
        category: "calzado",
        price: 1900,
        brand: "Jordan",
        description: "Uno de los modelos más deseados de la franquicia Jordan. El Air Jordan 4 combina paneles de malla de ventilación, soporte lateral dinámico y la clásica amortiguación Air visible en el talón. Su paleta de colores neutros cemento y negro resalta su diseño robusto de alta costura deportiva.",
        colors: [{ name: "Cemento", hex: "#A5A6A5", images: ["assets/shoes_jordan4.jpg"] }],
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        featured: true
    },
    {
        id: "shoes-jordan1",
        name: "Air Jordan 1 Low Chicago",
        category: "calzado",
        price: 1900,
        brand: "Jordan",
        description: "Inspirado en el modelo original del 85, este Air Jordan 1 Low ofrece un aspecto limpio y clásico en la legendaria combinación de colores Chicago: rojo universitario, blanco y negro. Su suela tipo cupsole de goma brinda excelente tracción y soporte duradero.",
        colors: [{ name: "Chicago", hex: "#C51D2A", images: ["assets/shoes_jordan1.jpg"] }],
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        featured: false
    },
    {
        id: "shoes-airmax",
        name: "Nike Air Max 90",
        category: "calzado",
        price: 1900,
        brand: "Nike",
        description: "Nada tan cómodo, nada tan probado. El Nike Air Max 90 se mantiene fiel a sus raíces de running con la icónica suela tipo Waffle, revestimientos cosidos duraderos y detalles clásicos de plástico inyectado. La amortiguación Max Air visible añade un confort inigualable.",
        colors: [{ name: "Blanco/Gris", hex: "#FAF9F6", images: ["assets/shoes_airmax.jpg"] }],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        featured: false
    },
    {
        id: "shoes-vans-knu",
        name: "Vans Knu Skool Black",
        category: "calzado",
        price: 1900,
        brand: "Vans",
        description: "Una reedición moderna del modelo de skate clásico de los 90. El Knu Skool se caracteriza por su lengüeta acolchada sobredimensionada, cuello de tobillo mullido y su franja lateral Sidestripe moldeada en 3D súper gruesa. Fabricado en gamuza negra duradera con cordones anchos característicos.",
        colors: [{ name: "Negro", hex: "#121212", images: ["assets/shoes_vans_knu.jpg"] }],
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        featured: true
    },
    {
        id: "shoes-newbalance",
        name: "New Balance 550 White/Grey",
        category: "calzado",
        price: 1900,
        brand: "New Balance",
        description: "Un tributo a los calzados profesionales de básquet de 1989. El New Balance 550 es limpio, simple y fiel a su legado retro. Construido con una capellada de cuero blanco liso y microperforado, detalles grises tonales y una cómoda entresuela de goma para amortiguación diaria.",
        colors: [{ name: "Blanco/Gris", hex: "#EBEBEB", images: ["assets/shoes_newbalance.jpg"] }],
        sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
        featured: true
    }
];

// 2. STATE VARIABLES
let cart = [];
let currentProduct = null;
let selectedColorIndex = 0;
let selectedColorImageIndex = 0;
let selectedSize = "";
let currentCheckoutStep = 1;

// 3. DOM ELEMENTS
const dom = {
    header: document.querySelector('header'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('#theme-toggle svg'),
    cartBtn: document.getElementById('cart-btn'),
    cartBadge: document.getElementById('cart-badge'),
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartClose: document.getElementById('cart-close'),
    cartItems: document.getElementById('cart-items'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartTotal: document.getElementById('cart-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    productsGrid: document.getElementById('products-grid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    navLinks: document.querySelectorAll('.nav-link'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    mainNav: document.getElementById('main-nav'),


    
    // Detail Modal Elements
    detailModalOverlay: document.getElementById('detail-modal-overlay'),
    detailModalClose: document.getElementById('detail-modal-close'),
    detailCategory: document.getElementById('detail-category'),
    detailTitle: document.getElementById('detail-title'),
    detailPrice: document.getElementById('detail-price'),
    detailDesc: document.getElementById('detail-desc'),
    detailImage: document.getElementById('detail-image'),
    detailColorsTitle: document.getElementById('detail-colors-title'),
    detailColors: document.getElementById('detail-colors'),
    detailSizes: document.getElementById('detail-sizes'),
    addToCartBtn: document.getElementById('add-to-cart-btn'),
    galleryControls: document.getElementById('gallery-controls'),
    whatsappProductBtn: document.getElementById('whatsapp-product-btn'),

    
    // Checkout Modal Elements
    checkoutModalOverlay: document.getElementById('checkout-modal-overlay'),
    checkoutModalClose: document.getElementById('checkout-modal-close'),
    checkoutSummaryItems: document.getElementById('checkout-summary-items'),
    checkoutSubtotal: document.getElementById('checkout-subtotal'),
    checkoutTotal: document.getElementById('checkout-total'),
    checkoutSteps: document.querySelectorAll('.checkout-step'),
    checkoutNextBtn: document.getElementById('checkout-next-btn'),
    checkoutBackBtn: document.getElementById('checkout-back-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    successTracking: document.getElementById('success-tracking'),
    successDelivery: document.getElementById('success-delivery'),
    btnSuccessClose: document.getElementById('btn-success-close'),
};

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadCart();
    renderProducts('all');
    setupEventListeners();
});

// 5. THEME MANAGEMENT
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        // Sun icon
        dom.themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        `;
    } else {
        // Moon icon
        dom.themeIcon.innerHTML = `
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        `;
    }
}

// 6. EVENT LISTENERS SETUP
function setupEventListeners() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    });

    // Theme Toggle
    dom.themeToggle.addEventListener('click', toggleTheme);

    // Cart Open/Close
    dom.cartBtn.addEventListener('click', openCart);
    dom.cartClose.addEventListener('click', closeCart);
    dom.cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === dom.cartDrawerOverlay) closeCart();
    });

    // Catalog Filter Buttons
    dom.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            dom.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Sync with header nav links
            dom.navLinks.forEach(link => {
                if (link.dataset.nav === btn.dataset.category) {
                    dom.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
            
            renderProducts(btn.dataset.category);
        });
    });

    // Mobile Menu Toggle
    dom.mobileMenuBtn.addEventListener('click', () => {
        dom.mainNav.classList.toggle('open');
    });

    // Nav Links (Header)
    dom.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = link.dataset.nav;
            if (!category) return;
            
            // Close mobile menu if open
            dom.mainNav.classList.remove('open');
            
            // Trigger click on matching filter button
            const matchingFilterBtn = Array.from(dom.filterBtns).find(btn => btn.dataset.category === category);
            if (matchingFilterBtn) {
                matchingFilterBtn.click();
            }
        });
    });



    // Detail Modal Close
    dom.detailModalClose.addEventListener('click', closeDetailModal);
    dom.detailModalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.detailModalOverlay) closeDetailModal();
    });

    // Add to Cart from Modal
    dom.addToCartBtn.addEventListener('click', () => {
        if (!selectedSize) {
            alert('Por favor selecciona un talle.');
            return;
        }
        
        const colorObj = currentProduct.colors[selectedColorIndex];
        const itemImage = colorObj.images[0];
        
        addToCart(
            currentProduct.id,
            currentProduct.name,
            currentProduct.price,
            colorObj.name,
            selectedSize,
            itemImage
        );
        
        closeDetailModal();
        openCart();
    });

    // Checkout Open/Close & Navigation
    dom.checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        closeCart();
        openCheckout();
    });
    
    dom.checkoutModalClose.addEventListener('click', closeCheckout);
    dom.checkoutModalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.checkoutModalOverlay) closeCheckout();
    });

    dom.checkoutNextBtn.addEventListener('click', handleCheckoutNext);
    dom.checkoutBackBtn.addEventListener('click', handleCheckoutBack);
    dom.btnSuccessClose.addEventListener('click', closeCheckout);
}

// 7. RENDER PRODUCTS CATALOG
function renderProducts(category) {
    dom.productsGrid.style.opacity = 0;
    
    setTimeout(() => {
        dom.productsGrid.innerHTML = '';
        
        const filtered = PRODUCTS.filter(p => category === 'all' || p.category === category);
        
        filtered.forEach((product, index) => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const firstColorImage = product.colors[0].images[0];
            const formattedPrice = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(product.price);
            
            card.innerHTML = `
                <div class="product-image-container">
                    <img class="product-img" src="${firstColorImage}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="btn-quick-add" data-id="${product.id}">Ver Detalles</button>
                        <a href="https://wa.me/59892707489?text=${encodeURIComponent('¡Hola North & Mason! Me interesa saber qué otros modelos y colores tienen disponibles de: ' + product.name)}" target="_blank" class="btn-quick-wa">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 8 0a7.86 7.86 0 0 0-7.863 7.863c0 1.5.39 2.964 1.135 4.298L0 16l4.026-.957a7.86 7.86 0 0 0 3.738.938h.002c.001 0 .002 0 .003 0A7.86 7.86 0 0 0 16 7.863a7.83 7.83 0 0 0-2.399-5.537zM8 14.331c-1.411 0-2.793-.38-4.004-1.099l-.287-.17-2.38.567.584-2.31-.188-.3A6.52 6.52 0 0 1 1.742 7.86a6.52 6.52 0 0 1 6.522-6.523 6.52 6.52 0 0 1 6.522 6.522A6.52 6.52 0 0 1 8 14.331"/>
                            </svg>
                            <span>Más Modelos</span>
                        </a>
                    </div>
                    ${product.featured ? '<span class="product-badge">Destacado</span>' : ''}
                </div>
                <div class="product-details">
                    <span class="product-brand">${product.brand}</span>
                    <button class="product-name-btn" data-id="${product.id}">${product.name}</button>
                    <span class="product-price">${formattedPrice}</span>
                </div>
            `;

            
            // Add click events
            card.querySelector('.btn-quick-add').addEventListener('click', () => openDetailModal(product.id));
            card.querySelector('.product-name-btn').addEventListener('click', () => openDetailModal(product.id));
            
            dom.productsGrid.appendChild(card);
        });
        
        dom.productsGrid.style.opacity = 1;
    }, 300);
}

// 8. DETAIL MODAL MANAGEMENT
function openDetailModal(productId) {
    currentProduct = PRODUCTS.find(p => p.id === productId);
    if (!currentProduct) return;
    
    selectedColorIndex = 0;
    selectedColorImageIndex = 0;
    selectedSize = "";
    
    // Fill text content
    dom.detailCategory.textContent = currentProduct.category === 'camperas' ? 'Camperas' : 'Championes';
    dom.detailTitle.textContent = currentProduct.name;
    
    const formattedPrice = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(currentProduct.price);
    dom.detailPrice.textContent = formattedPrice;
    dom.detailDesc.textContent = currentProduct.description;
    
    // Render colors
    dom.detailColors.innerHTML = '';
    if (currentProduct.colors.length > 1) {
        dom.detailColorsTitle.style.display = 'block';
        dom.detailColors.style.display = 'flex';
        
        currentProduct.colors.forEach((color, index) => {
            const btn = document.createElement('button');
            btn.className = `color-option ${index === 0 ? 'selected' : ''}`;
            btn.title = color.name;
            
            const colorClass = `color-${color.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
            
            btn.innerHTML = `<div class="color-option-inner ${colorClass}"></div>`;
            btn.addEventListener('click', () => selectColor(index));
            dom.detailColors.appendChild(btn);
        });
    } else {
        dom.detailColorsTitle.style.display = 'none';
        dom.detailColors.style.display = 'none';
    }
    
    // Render sizes
    dom.detailSizes.innerHTML = '';
    currentProduct.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-option';
        btn.textContent = size;
        btn.addEventListener('click', () => selectSize(size, btn));
        dom.detailSizes.appendChild(btn);
    });
    
    // Update image gallery
    updateGallery();
    
    // Set WhatsApp link
    const waText = encodeURIComponent(`¡Hola North & Mason! Me interesa saber qué otros modelos y colores tienen disponibles de: ${currentProduct.name}`);
    dom.whatsappProductBtn.href = `https://wa.me/59892707489?text=${waText}`;
    
    // Open Overlay

    dom.detailModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    dom.detailModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function selectColor(index) {
    selectedColorIndex = index;
    selectedColorImageIndex = 0;
    
    // Update selected class
    const btns = dom.detailColors.querySelectorAll('.color-option');
    btns.forEach((btn, idx) => {
        if (idx === index) btn.classList.add('selected');
        else btn.classList.remove('selected');
    });
    
    updateGallery();
}

function selectSize(size, btnElement) {
    selectedSize = size;
    
    const btns = dom.detailSizes.querySelectorAll('.size-option');
    btns.forEach(btn => btn.classList.remove('selected'));
    btnElement.classList.add('selected');
}

function updateGallery() {
    const colorObj = currentProduct.colors[selectedColorIndex];
    const images = colorObj.images;
    
    dom.detailImage.src = images[selectedColorImageIndex];
    dom.detailImage.alt = `${currentProduct.name} - ${colorObj.name}`;
    
    // Render gallery dot controls if there are multiple images
    dom.galleryControls.innerHTML = '';
    if (images.length > 1) {
        images.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = `gallery-dot ${idx === selectedColorImageIndex ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                selectedColorImageIndex = idx;
                updateGallery();
            });
            dom.galleryControls.appendChild(dot);
        });
    }
}

// 9. CART SYSTEM
function openCart() {
    dom.cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    dom.cartDrawerOverlay.classList.remove('open');
    if (!dom.detailModalOverlay.classList.contains('open') && !dom.checkoutModalOverlay.classList.contains('open')) {
        document.body.style.overflow = '';
    }
}

function addToCart(productId, name, price, color, size, image) {
    const cartItemId = `${productId}-${color.toLowerCase()}-${size}`;
    const existing = cart.find(item => item.id === cartItemId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            productId,
            name,
            price,
            color,
            size,
            image,
            quantity: 1
        });
    }
    
    saveCart();
    renderCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCart();
    renderCart();
}

function updateQuantity(cartItemId, amount) {
    const item = cart.find(item => item.id === cartItemId);
    if (!item) return;
    
    item.quantity += amount;
    
    if (item.quantity <= 0) {
        removeFromCart(cartItemId);
    } else {
        saveCart();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
    renderCart();
}

function renderCart() {
    const count = getCartCount();
    
    // Update Badge
    if (count > 0) {
        dom.cartBadge.textContent = count;
        dom.cartBadge.style.display = 'flex';
        dom.checkoutBtn.disabled = false;
        dom.checkoutBtn.style.opacity = 1;
    } else {
        dom.cartBadge.style.display = 'none';
        dom.checkoutBtn.disabled = true;
        dom.checkoutBtn.style.opacity = 0.5;
    }
    
    dom.cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        dom.cartItems.innerHTML = `
            <div class="cart-empty-message">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <p>Tu carrito de compras está vacío.</p>
            </div>
        `;
        dom.cartSubtotal.textContent = "$U 0";
        dom.cartTotal.textContent = "$U 0";
        return;
    }
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        
        const formattedPrice = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(item.price * item.quantity);
        
        itemEl.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-meta">Color: ${item.color} | Talle: ${item.size}</span>
                    <span class="cart-item-price">${formattedPrice}</span>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-selector">
                        <button class="quantity-btn dec-qty-btn" data-id="${item.id}">-</button>
                        <span class="quantity-val">${item.quantity}</span>
                        <button class="quantity-btn inc-qty-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="cart-item-remove-btn" data-id="${item.id}">Eliminar</button>
                </div>
            </div>
        `;
        
        // Add events
        itemEl.querySelector('.dec-qty-btn').addEventListener('click', () => updateQuantity(item.id, -1));
        itemEl.querySelector('.inc-qty-btn').addEventListener('click', () => updateQuantity(item.id, 1));
        itemEl.querySelector('.cart-item-remove-btn').addEventListener('click', () => removeFromCart(item.id));
        
        dom.cartItems.appendChild(itemEl);
    });
    
    const subtotal = getCartTotal();
    const formattedSub = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(subtotal);
    
    dom.cartSubtotal.textContent = formattedSub;
    dom.cartTotal.textContent = formattedSub; // Free shipping simulator
}

// 10. CHECKOUT SYSTEM
function openCheckout() {
    currentCheckoutStep = 1;
    dom.checkoutModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    renderCheckoutSummary();
    showCheckoutStep(1);
    
    // Reset forms
    dom.checkoutForm.reset();
}

function closeCheckout() {
    dom.checkoutModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function renderCheckoutSummary() {
    dom.checkoutSummaryItems.innerHTML = '';
    
    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'checkout-summary-item';
        
        const formattedItemTotal = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(item.price * item.quantity);
        
        row.innerHTML = `
            <span class="checkout-summary-item-name" title="${item.name}">${item.name} (x${item.quantity})</span>
            <span>${formattedItemTotal}</span>
        `;
        dom.checkoutSummaryItems.appendChild(row);
    });
    
    const subtotal = getCartTotal();
    const formattedSub = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(subtotal);
    
    dom.checkoutSubtotal.textContent = formattedSub;
    dom.checkoutTotal.textContent = formattedSub;
}

function showCheckoutStep(step) {
    currentCheckoutStep = step;
    
    dom.checkoutSteps.forEach((stepEl, idx) => {
        if (idx + 1 === step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
    
    // Manage footer navigation buttons
    if (step === 1) {
        dom.checkoutBackBtn.style.display = 'none';
        dom.checkoutNextBtn.textContent = 'Continuar al Pago';
        dom.checkoutNextBtn.style.display = 'block';
    } else if (step === 2) {
        dom.checkoutBackBtn.style.display = 'block';
        dom.checkoutNextBtn.textContent = 'Finalizar Pedido';
        dom.checkoutNextBtn.style.display = 'block';
    } else if (step === 3) {
        dom.checkoutBackBtn.style.display = 'none';
        dom.checkoutNextBtn.style.display = 'none';
    }
}

function handleCheckoutNext() {
    if (currentCheckoutStep === 1) {
        // Validate Shipping Form
        const name = document.getElementById('checkout-name').value.trim();
        const address = document.getElementById('checkout-address').value.trim();
        const phone = document.getElementById('checkout-phone').value.trim();
        const city = document.getElementById('checkout-city').value.trim();
        
        if (!name || !address || !phone || !city) {
            alert('Por favor, completa todos los datos de envío.');
            return;
        }
        
        showCheckoutStep(2);
    } else if (currentCheckoutStep === 2) {
        // Process checkout simulated success
        processSimulatedOrder();
    }
}

function handleCheckoutBack() {
    if (currentCheckoutStep === 2) {
        showCheckoutStep(1);
    }
}

function processSimulatedOrder() {
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const city = document.getElementById('checkout-city').value.trim();
    const note = document.getElementById('checkout-note').value.trim();
    
    // Get selected payment method
    const paymentMethodEl = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'transfer';
    const paymentLabel = paymentMethod === 'transfer' ? 'Transferencia Bancaria' : 'Tarjeta de Crédito/Débito';
    
    // Generate order tracking reference code
    const trackingCode = 'NM-' + Math.floor(100000 + Math.random() * 900000);
    
    // Compile items list for message
    let itemsText = '';
    cart.forEach(item => {
        const colorLabel = item.color ? ` (${item.color})` : '';
        itemsText += `- ${item.name}${colorLabel} | Talle: ${item.size} | Cantidad: ${item.quantity} | Subtotal: $U ${item.price * item.quantity}\n`;
    });
    
    const totalAmount = getCartTotal();
    const formattedTotal = new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 0 }).format(totalAmount);
    
    // Compile full WhatsApp message
    let message = `¡Hola *North & Mason*! Me interesa confirmar mi pedido.\n\n`;
    message += `*Detalle de la Compra:*\n${itemsText}\n`;
    message += `*Total a Pagar:* ${formattedTotal}\n\n`;
    message += `*Datos del Cliente & Envío:*\n`;
    message += `- *Nombre:* ${name}\n`;
    message += `- *Teléfono:* ${phone}\n`;
    message += `- *Dirección:* ${address}, ${city}\n`;
    if (note) {
        message += `- *Nota:* ${note}\n`;
    }
    message += `- *Medio de Pago:* ${paymentLabel}\n\n`;
    message += `*Código de Referencia:* ${trackingCode}\n`;
    message += `_Enviado desde la tienda North & Mason_`;
    
    // Open WhatsApp link in a new tab
    const waUrl = `https://wa.me/59892707489?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    // Fill success modal info
    dom.successTracking.textContent = trackingCode;
    
    // Generate random delivery date (3-5 days from now)
    const today = new Date();
    const deliveryMin = new Date();
    deliveryMin.setDate(today.getDate() + 3);
    const deliveryMax = new Date();
    deliveryMax.setDate(today.getDate() + 5);
    
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateRangeStr = `Entre el ${deliveryMin.toLocaleDateString('es-UY', options)} y el ${deliveryMax.toLocaleDateString('es-UY', options)}`;
    dom.successDelivery.textContent = dateRangeStr;
    
    // Clear cart and update UI
    cart = [];
    saveCart();
    renderCart();
    
    showCheckoutStep(3);
}

