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
    name: "Cabo Apple MagSafe",
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
    category: "Computadores",
    price: 19.90,
    tag: null,
    image: "image/cooler-para-notebook.webp",
    description: "Resfriador portátil com duplos ventiladores de alta performance. Reduz temperatura do notebook em até 15°C e funciona silenciosamente com suporte em altura ajustável.",
    features: ["Duplos ventiladores", "Reduz até 15°C", "Suporte ajustável", "Operação silenciosa"]
  },

  {
    id: "p03",
    name: "Interfone Helmet K06",
    category: "Fone/Áudio",
    price: 65.00,
    tag: null,
    image: "image/interfoneK06.webp",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p04",
    name: "Suporte tripé para celular",
    category: "Acessórios",
    price: 19.90,
    tag: "novidade",
    image: "image/tripe-suporte-para-celular.jpg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p05",
    name: "Fonte Apple 20w",
    category: "Carregadores",
    price: 24.99,
    tag: "promoção",
    image: "image/fonteUSB-C-20w.webp",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p06",
    name: "Lâmpada Dobrável",
    category: "Iluminação",
    price: 37.99,
    tag: "novidade",
    image: "image/lampadaDobravel-Oasis.jpeg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p07",
    name: "Carregador Apple iphone 15 Pro Max",
    category: "Carregadores",
    price: 35.00,
    tag: "popular",
    image: "image/carregador-iphoneProMax.jpg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p08",
    name: "Carregador Apple iphone X 12W",
    category: "Carregadores",
    price: 29,
    tag: null,
    image: "image/carregador-iphoneX-12W.jpg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p09",
    name: "Carregador Apple iphone 14 Pro Max",
    category: "Carregadores",
    price: 35.00,
    tag: "popular",
    image: "image/carregador-iphone14ProMax.png",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p10",
    name: "Carregador AXiaomi 67W",
    category: "Carregadores",
    price: 35.00,
    tag: "Mais Vendido",
    image: "image/carregador-xiaomi67W.jpg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p11",
    name: "Fonte 45W USB-C",
    category: "Carregadores",
    price: 25.00,
    tag: "popular",
    image: "image/fonte-45w-USB-C.jpg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },
  {
    id: "p12",
    name: "Isqueiro Motocicleta 45V",
    category: "Acessórios",
    price: 29.00,
    tag: "popular",
    image: "image/isqueiro-para-moto.webp",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p13",
    name: "cabo USB-C Apple 1m",
    category: "Carregadores",
    price: 15.50,
    tag: "promoção",
    image: "image/caboUSB-Capple.webp",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },

  {
    id: "p14",
    name: "fone com fio",
    category: "Fone/Áudio",
    price: 5.99,
    tag: "promoção",
    image: "image/fone-generico.jpeg",
    description: "Sistema de comunicação profissional com áudio cristalino em duas vias. Ideal para motociclistas, ciclistas e esportistas com alcance de até 2km e bateria de longa duração.",
    features: ["Comunicação 2 vias", "Alcance até 2km", "Bateria de longa duração", "Design à prova d'água"]
  },
  


];

// Disponibiliza o array para os outros scripts (main.js) sem precisar
// de módulos/bundlers — propositalmente simples para fins didáticos.
window.PRODUCTS = PRODUCTS;
