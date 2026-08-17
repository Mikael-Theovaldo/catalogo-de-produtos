/**
 * ==========================================================================
 * products.js
 * --------------------------------------------------------------------------
 * PACOTE: frontend/js
 * RESPONSABILIDADE: fonte única dos dados dos produtos do catálogo.
 *
 * Como isso é uma "landing page ilustrativa" (sem banco de dados), os
 * produtos ficam num array estático em memória. Para adicionar, remover
 * ou editar um produto, basta mexer neste arquivo — nada mais no projeto
 * depende de onde os dados vêm, só de que exista esse array `PRODUCTS`.
 *
 * Se um dia você quiser trocar isso por um banco de dados de verdade,
 * essa é a ÚNICA peça que precisa mudar (por ex. buscar de uma API).
 * ==========================================================================
 */

const PRODUCTS = [
  {
    id: "p01",
    name: "Cabo MagSafe",
    category: "Carregadores",
    price: 44.90,
    tag: "Mais vendido",
    image: "image/carregador-MagSafe.webp",
    description: "Cabo magnético USB-C com conexão segura e auto-alineamento. Carregamento rápido de alta performance com construção durável e flexível.",
    features: ["Conexão magnética", "Carregamento rápido", "Durável e flexível", "Compatível com USB-C"]
  },
  
  {
    id: "p02",
    name: "Cooler para notebook",
    category: "Acessórios",
    price: 19.90,
    tag: null,
    image: "image/cooler-para-notebook.webp",
    description: "Resfriador portátil com duplos ventiladores de alta performance. Reduz temperatura do notebook em até 15°C e funciona silenciosamente com suporte em altura ajustável.",
    features: ["Duplos ventiladores", "Reduz até 15°C", "Suporte ajustável", "Operação silenciosa"]
  },

  {
    id: "p03",
    name: "Interfone Helmet K06",
    category: "Computadores",
    price: 65.00,
    tag: null,
    image: "image/interfoneK06.webp",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  
];

// Disponibiliza o array para os outros scripts (main.js) sem precisar
// de módulos/bundlers — propositalmente simples para fins didáticos.
window.PRODUCTS = PRODUCTS;
