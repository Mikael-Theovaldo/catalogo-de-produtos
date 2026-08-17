/**
 * ==========================================================================
 * social.js
 * --------------------------------------------------------------------------
 * PACOTE: frontend/js
 * RESPONSABILIDADE: montar links externos gratuitos para redes sociais
 * (hoje: Instagram). Assim como o whatsapp.js, isso NÃO usa nenhuma API
 * paga — é um link que abre o Direct no Instagram e copia o pedido para
 * a área de transferência.
 * ==========================================================================
 */

// Troque pelo @ real do perfil da loja (sem o "@")
const INSTAGRAM_CONFIG = {
  username: "wm_shop001" // <-- edite aqui o usuário do Instagram
};

function buildInstagramLink(username = INSTAGRAM_CONFIG.username) {
  return `https://instagram.com/${username}`;
}

function buildInstagramDirectMessage(cartItems, total, username = INSTAGRAM_CONFIG.username) {
  const normalizedUsername = String(username).replace(/^@/, "");
  const lines = [];
  lines.push("Olá! Vim pelo catálogo online e quero fazer o seguinte pedido:");
  lines.push("");
  cartItems.forEach(({ product, quantity }) => {
    const itemTotal = (product.price * quantity).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    lines.push(`• ${quantity}x ${product.name} — ${itemTotal}`);
  });
  lines.push("");
  lines.push(`Total estimado: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
  lines.push("");
  lines.push("Podem confirmar disponibilidade e forma de pagamento/entrega?");

  const message = lines.join("\n");

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(message).catch(() => {
      console.log("Mensagem:", message);
    });
  } else {
    console.log("Mensagem:", message);
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://ig.me/m/${normalizedUsername}?text=${encodedMessage}`;
}

window.SocialLinks = { INSTAGRAM_CONFIG, buildInstagramLink, buildInstagramDirectMessage };
