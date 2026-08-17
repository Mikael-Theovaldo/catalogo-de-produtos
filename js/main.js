/**
 * ==========================================================================
 * main.js
 * --------------------------------------------------------------------------
 * PACOTE: frontend/js
 * RESPONSABILIDADE: "colar" tudo na tela — pega os dados (products.js),
 * o estado do carrinho (cart.js) e o gerador de link (whatsapp.js), e
 * cuida do DOM: renderizar cards, abrir/fechar carrinho, filtrar categoria.
 *
 * Este é o único arquivo que manipula HTML diretamente.
 * ==========================================================================
 */

const els = {
  grid: document.getElementById("product-grid"),
  filters: document.getElementById("category-filters"),
  cartCount: document.getElementById("cart-count"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartOverlay: document.getElementById("cart-overlay"),
  whatsappBtn: document.getElementById("whatsapp-checkout"),
  emptyState: document.getElementById("cart-empty"),
  instagramTop: document.getElementById("instagram-link"),
  instagramCart: document.getElementById("instagram-cart-link"),
  cartToast: document.getElementById("cart-toast"),
  productModal: document.getElementById("product-modal"),
  productModalImage: document.getElementById("product-modal-image"),
  productModalTitle: document.getElementById("product-modal-title"),
  productModalDescription: document.getElementById("product-modal-description"),
  productModalClose: document.getElementById("product-modal-close"),
  backToTop: document.getElementById("back-to-top")
};

// Links externos e gratuitos (sem API): apenas apontam para o perfil/contato.
// Preenchidos uma única vez, no carregamento da página.
els.instagramTop.href = window.SocialLinks.buildInstagramLink();
els.instagramCart.href = window.SocialLinks.buildInstagramLink();

let activeCategory = "Todos";

function getCategories() {
  const set = new Set(window.PRODUCTS.map((p) => p.category));
  return ["Todos", ...Array.from(set)];
}

function renderFilters() {
  const categories = getCategories();
  els.filters.innerHTML = categories
    .map(
      (cat) => `
      <button class="filter-chip ${cat === activeCategory ? "is-active" : ""}" data-cat="${cat}">
        ${cat}
      </button>`
    )
    .join("");
}

function renderProducts() {
  const list =
    activeCategory === "Todos"
      ? window.PRODUCTS
      : window.PRODUCTS.filter((p) => p.category === activeCategory);

  els.grid.innerHTML = list
    .map(
      (product) => `
    <article class="product-card">
      ${product.tag ? `<span class="product-tag" data-tag="${product.tag.toLowerCase()}">${product.tag}</span>` : ""}
      <div class="product-media">
        <button class="product-image-button" type="button" data-id="${product.id}" aria-label="Ampliar imagem de ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </button>
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <ul class="product-features">
          ${product.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="product-footer">
          <span class="product-price">${window.WhatsappCheckout.formatPriceBRL(product.price)}</span>
          <button class="btn-add" data-id="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>`
    )
    .join("");
}

function renderCart() {
  const items = Cart.getItems();
  const total = Cart.getTotalPrice();

  els.cartCount.textContent = Cart.getTotalItems();
  els.cartCount.classList.toggle("is-visible", Cart.getTotalItems() > 0);

  els.emptyState.style.display = items.length === 0 ? "flex" : "none";

  els.cartItems.innerHTML = items
    .map(
      ({ product, quantity }) => `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-price">${window.WhatsappCheckout.formatPriceBRL(product.price)}</p>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec" data-id="${product.id}">−</button>
          <span>${quantity}</span>
          <button class="qty-btn" data-action="inc" data-id="${product.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${product.id}" title="Remover">✕</button>
    </div>`
    )
    .join("");

  els.cartTotal.textContent = window.WhatsappCheckout.formatPriceBRL(total);
  els.whatsappBtn.disabled = items.length === 0;
}

function openCart() {
  els.cartDrawer.classList.add("is-open");
  els.cartOverlay.classList.add("is-open");
}
function closeCart() {
  els.cartDrawer.classList.remove("is-open");
  els.cartOverlay.classList.remove("is-open");
}

function openProductModal(productId) {
  const product = window.PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  els.productModalImage.src = product.image;
  els.productModalImage.alt = product.name;
  els.productModalTitle.textContent = product.name;
  els.productModalDescription.textContent = product.description;
  els.productModal.classList.add("is-open");
  els.productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  els.productModal.classList.remove("is-open");
  els.productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateBackToTopButton() {
  const shouldShow = window.scrollY > 420;
  els.backToTop.classList.toggle("is-visible", shouldShow);
}

// ---- Eventos ---------------------------------------------------------

els.filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

els.grid.addEventListener("click", (e) => {
  const imageButton = e.target.closest(".product-image-button");
  const btn = e.target.closest(".btn-add");

  if (imageButton) {
    openProductModal(imageButton.dataset.id);
    return;
  }

  if (!btn) return;
  const product = window.PRODUCTS.find((p) => p.id === btn.dataset.id);
  if (product) {
    Cart.add(product);
    bumpCartIcon();
    showCartToast();
  }
});

// Pequena animação de "pulso": o ícone do carrinho aumenta e volta ao
// tamanho normal por um instante, só para confirmar visualmente que o
// item entrou — sem abrir o carrinho sozinho, como pedido.
function bumpCartIcon() {
  els.cartToggle.classList.remove("is-bumping"); // reinicia se clicar rápido de novo
  // Forçar um "reflow" é o truque para o navegador aceitar reiniciar a
  // mesma animação CSS mesmo que ela já tenha rodado há pouco.
  void els.cartToggle.offsetWidth;
  els.cartToggle.classList.add("is-bumping");
}

// Avisozinho no canto inferior direito: aparece ao adicionar um item e
// some sozinho depois de alguns segundos. Se o cliente clicar nele antes
// disso, abre o carrinho direto (mesmo comportamento do botão da topbar).
let toastTimer = null;
function showCartToast() {
  els.cartToast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    els.cartToast.classList.remove("is-visible");
  }, 4000);
}
function hideCartToast() {
  els.cartToast.classList.remove("is-visible");
  clearTimeout(toastTimer);
}

els.cartToast.addEventListener("click", () => {
  hideCartToast();
  openCart();
});

els.cartItems.addEventListener("click", (e) => {
  const qtyBtn = e.target.closest(".qty-btn");
  const removeBtn = e.target.closest(".cart-item-remove");

  if (qtyBtn) {
    const id = qtyBtn.dataset.id;
    const current = Cart.getItems().find((i) => i.product.id === id);
    if (!current) return;
    const delta = qtyBtn.dataset.action === "inc" ? 1 : -1;
    Cart.setQuantity(id, current.quantity + delta);
  }

  if (removeBtn) {
    Cart.remove(removeBtn.dataset.id);
  }
});

els.cartToggle.addEventListener("click", () => {
  hideCartToast();
  openCart();
});
els.cartClose.addEventListener("click", closeCart);
els.cartOverlay.addEventListener("click", closeCart);
els.backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
els.productModalClose.addEventListener("click", closeProductModal);
els.productModal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close='true']")) {
    closeProductModal();
  }
});
window.addEventListener("scroll", updateBackToTopButton, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.productModal.classList.contains("is-open")) {
    closeProductModal();
  }
});

els.whatsappBtn.addEventListener("click", () => {
  const items = Cart.getItems();
  if (items.length === 0) return;
  const total = Cart.getTotalPrice();
  const link = window.WhatsappCheckout.buildWhatsappLink(items, total);
  window.open(link, "_blank");
});

els.instagramCart.addEventListener("click", (event) => {
  event.preventDefault();
  const items = Cart.getItems();
  if (items.length === 0) return;
  const total = Cart.getTotalPrice();
  const link = window.SocialLinks.buildInstagramDirectMessage(items, total);
  window.open(link, "_blank", "noopener,noreferrer");
});

Cart.onChange(renderCart);

// ---- Inicialização -----------------------------------------------------
renderFilters();
renderProducts();
renderCart();
