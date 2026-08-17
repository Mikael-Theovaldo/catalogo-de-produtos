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
  // Reutiliza a mesma formatação de mensagem do WhatsApp
  const lines = [];
  lines.push("Olá! Vim pelo catálogo online e quero fazer o seguinte pedido:");
  lines.push("");
  cartItems.forEach(({ product, quantity }) => {
    const price = product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const itemTotal = (product.price * quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    lines.push(`• ${quantity}x ${product.name} — ${itemTotal}`);
  });
  lines.push("");
  const totalFormatted = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  lines.push(`Total estimado: ${totalFormatted}`);
  lines.push("");
  lines.push("Podem confirmar disponibilidade e forma de pagamento/entrega?");
  const message = lines.join("\n");
  
  // Copia para a área de transferência e abre o Direct
  navigator.clipboard.writeText(message).catch(() => {
    // Fallback se clipboard não estiver disponível
    console.log("Mensagem:", message);
  });
  
  return `https://instagram.com/direct/t/${username}`;
}

window.SocialLinks = { INSTAGRAM_CONFIG, buildInstagramLink, buildInstagramDirectMessage };
