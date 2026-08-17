/**
 * ==========================================================================
 * cart.js
 * --------------------------------------------------------------------------
 * PACOTE: frontend/js
 * RESPONSABILIDADE: gerenciar o estado do carrinho (adicionar, remover,
 * alterar quantidade, calcular total). Não conhece HTML nem WhatsApp —
 * só cuida dos DADOS do carrinho. Quem desenha a tela é o main.js.
 *
 * Isso é o padrão "separar responsabilidades": cada arquivo faz UMA coisa.
 * ==========================================================================
 */

const Cart = (() => {
  // Estado privado: só existe em memória (recarregou a página, zera).
  // Chave = id do produto | Valor = { product, quantity }
  const items = new Map();

  function add(product) {
    const current = items.get(product.id);
    if (current) {
      current.quantity += 1;
    } else {
      items.set(product.id, { product, quantity: 1 });
    }
    _emitChange();
  }

  function remove(productId) {
    items.delete(productId);
    _emitChange();
  }

  function setQuantity(productId, quantity) {
    const current = items.get(productId);
    if (!current) return;
    if (quantity <= 0) {
      remove(productId);
      return;
    }
    current.quantity = quantity;
    _emitChange();
  }

  function clear() {
    items.clear();
    _emitChange();
  }

  function getItems() {
    return Array.from(items.values());
  }

  function getTotalItems() {
    return getItems().reduce((sum, i) => sum + i.quantity, 0);
  }

  function getTotalPrice() {
    return getItems().reduce((sum, i) => sum + i.quantity * i.product.price, 0);
  }

  // Sistema simples de "eventos" para o main.js saber quando redesenhar
  // a tela do carrinho, sem precisar de um framework como React/Vue.
  const listeners = [];
  function onChange(callback) {
    listeners.push(callback);
  }
  function _emitChange() {
    listeners.forEach((cb) => cb());
  }

  // API pública do módulo (o que o resto do app pode usar)
  return { add, remove, setQuantity, clear, getItems, getTotalItems, getTotalPrice, onChange };
})();

window.Cart = Cart;
