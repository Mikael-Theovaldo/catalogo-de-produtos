/**
 * ==========================================================================
 * whatsapp.js
 * --------------------------------------------------------------------------
 * PACOTE: frontend/js
 * RESPONSABILIDADE: montar o link "https://wa.me" com a mensagem do pedido
 * já formatada, para o cliente finalizar a compra direto no WhatsApp.
 *
 * IMPORTANTE (didático):
 * - Isso NÃO envia mensagem sozinho. Ele só abre o WhatsApp (Web ou App)
 *   com o texto pronto; quem envia é o próprio cliente, clicando em enviar.
 * - Por isso essa página é só "ilustrativa": a finalização de fato acontece
 *   dentro do WhatsApp, fora do site.
 * - O link "https://wa.me" é público e gratuito — não usa nenhuma API paga
 *   da Meta. A API paga só seria necessária se você quisesse AUTOMATIZAR
 *   respostas/rodízio (ver backend-automation/, que é opcional).
 * - O número do vendedor "atual" pode ser trocado dinamicamente pela
 *   automação de rodízio (ver backend-automation/), então aqui a função
 *   sempre lê o número mais atualizado a partir de `SELLER_CONFIG`.
 * ==========================================================================
 */

// Troque pelo número real do vendedor (formato internacional, só dígitos).
// Ex.: 55 (Brasil) + DDD + número
const SELLER_CONFIG = {
  currentNumber: "5562993245955" // <-- edite aqui o número padrão de contato
};

function formatPriceBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buildOrderMessage(cartItems, total) {
  const lines = [];
  lines.push("Olá! Vim pelo catálogo online e quero fazer o seguinte pedido:");
  lines.push("");
  cartItems.forEach(({ product, quantity }) => {
    lines.push(`• ${quantity}x ${product.name} — ${formatPriceBRL(product.price * quantity)}`);
  });
  lines.push("");
  lines.push(`Total estimado: ${formatPriceBRL(total)}`);
  lines.push("");
  lines.push("Podem confirmar disponibilidade e forma de pagamento/entrega?");
  return lines.join("\n");
}

function buildWhatsappLink(cartItems, total, phoneNumber = SELLER_CONFIG.currentNumber) {
  const message = buildOrderMessage(cartItems, total);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}

window.WhatsappCheckout = { SELLER_CONFIG, buildWhatsappLink, formatPriceBRL };
