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
    description: "Cabo magnético com encaixe seguro para iPhone e outros dispositivos compatíveis. A conexão se alinha automaticamente, oferecendo carregamento rápido e estável com acabamento durável e flexível.",
    features: ["Conexão magnética", "Carregamento rápido", "Alta durabilidade", "Compatível com USB-C"]
  },

  {
    id: "p02",
    name: "Cooler para notebook",
    category: "Computadores",
    price: 19.90,
    tag: null,
    image: "image/cooler-para-notebook.webp",
    description: "Resfriador portátil com dois ventiladores de alta vazão para reduzir a temperatura do notebook durante o uso intensivo. Possui suporte ajustável e operação tranquila, ideal para trabalho e estudos.",
    features: ["2 ventiladores", "Reduz temperatura", "Suporte ajustável", "Funcionamento silencioso"]
  },

  {
    id: "p03",
    name: "Interfone Helmet K06",
    category: "Fone/Áudio",
    price: 65.00,
    tag: null,
    image: "image/interfoneK06.webp",
    description: "Interfone para motociclistas com comunicação em duas vias e áudio nítido, perfeito para rotas em dupla ou conversa em movimento. Possui alcance de até 2 km e resistência para uso em condições externas.",
    features: ["Comunicação 2 vias", "Alcance até 2 km", "Áudio cristalino", "Resistente à água"]
  },

  {
    id: "p04",
    name: "Suporte tripé para celular",
    category: "Acessórios",
    price: 19.90,
    tag: "novidade",
    image: "image/tripe-suporte-para-celular.jpg",
    description: "Suporte versátil para celular com base estável, ajuste de altura e ângulo para gravações, videoconferências e uso diário. O design compacto facilita a mobilidade e melhora a ergonomia na mesa.",
    features: ["Base estável", "Altura ajustável", "Ângulo flexível", "Ideal para celular"]
  },

  {
    id: "p05",
    name: "Fonte Apple 20w",
    category: "Carregadores",
    price: 24.99,
    tag: "promoção",
    image: "image/fonte-apple-20w.webp",
    description: "Fonte compacta com tecnologia USB-C para carregamento rápido em iPhones, iPads e outros dispositivos compatíveis. Leve e prática, ideal para uso em casa, trabalho ou viagem.",
    features: ["USB-C Power Delivery", "Carregamento rápido", "Compacta", "Compatível com Apple"]
  },

  {
    id: "p06",
    name: "Lâmpada Dobrável",
    category: "Iluminação",
    price: 37.99,
    tag: "novidade",
    image: "image/lampadaDobravel-Oasis.jpeg",
    description: "Lâmpada dobrável com estrutura articulada e foco ajustável, ideal para iluminar bancadas, mesas ou espaços de trabalho. Seu design compacto oferece praticidade e iluminação eficiente.",
    features: ["Estrutura dobrável", "Feixe ajustável", "Leve e prática", "Iluminação funcional"]
  },

  {
    id: "p07",
    name: "Carregador Apple iphone 15 Pro Max",
    category: "Carregadores",
    price: 35.00,
    tag: "popular",
    image: "image/carregador-iphonePromax.jpg",
    description: "Carregador específico para iPhone 15 Pro Max, pensado para entrega de energia eficiente e segura. A estrutura compacta facilita o uso diário sem ocupar espaço na mochila ou mesa.",
    features: ["Compatível com iPhone 15 Pro Max", "Carregamento eficiente", "Design compacto", "Uso diário"]
  },

  {
    id: "p08",
    name: "Carregador Apple iphone X 12W",
    category: "Carregadores",
    price: 25.00,
    tag: null,
    image: "image/carregador-IphoneX-12W.jpg",
    description: "Adaptador Apple de 12W para carregamento estável do iPhone X e modelos compatíveis. Oferece energia confiável e desempenho ideal para recarga em casa, escritório ou viagem.",
    features: ["12W de potência", "Compatível com iPhone X", "Carregamento estável", "Uso versátil"]
  },

  {
    id: "p09",
    name: "Carregador Apple iphone 14 Pro Max",
    category: "Carregadores",
    price: 35.00,
    tag: "popular",
    image: "image/carregador-iphone14ProMax.png",
    description: "Carregador pensado para iPhone 14 Pro Max, com entrega rápida de energia e segurança de uso. Seu design prático combina eficiência com uma aparência moderna e funcional.",
    features: ["Compatível com iPhone 14 Pro Max", "Carregamento rápido", "Segurança de uso", "Design moderno"]
  },

  {
    id: "p10",
    name: "Carregador Xiaomi 67W",
    category: "Carregadores",
    price: 35.00,
    tag: "Mais Vendido",
    image: "image/carregador-xiaomi67w.jpg",
    description: "Carregador de alta potência para dispositivos Xiaomi e compatíveis, com carga rápida e eficiente. Ideal para usuários que precisam de recarga mais ágil no dia a dia ou em deslocamentos.",
    features: ["67W de potência", "Carga rápida", "Compatível com Xiaomi", "Alta eficiência"]
  },

  {
    id: "p11",
    name: "Fonte 45W USB-C",
    category: "Carregadores",
    price: 25.00,
    tag: "promoção",
    image: "image/fonte-45w-USB-C.jpg",
    description: "Fonte USB-C de 45W com carregamento rápido para smartphones, tablets e notebooks leves. Compacta e eficiente, oferece energia confiável para uso em casa, escritório ou viagem.",
    features: ["45W USB-C", "Carregamento rápido", "Leve e compacta", "Compatível com vários dispositivos"]
  },

  {
    id: "p12",
    name: "Isqueiro Motocicleta 45V",
    category: "Acessórios",
    price: 29.00,
    tag: null,
    image: "image/isqueiro-para-moto.webp",
    description: "Isqueiro de motocicleta com encaixe robusto e design resistente para uso diário em viagens e deslocamentos. Seu acabamento funcional combina praticidade, resistência e visual moderno.",
    features: ["Para motocicleta", "Estrutura resistente", "Uso diário", "Design robusto"]
  },

  {
    id: "p13",
    name: "Cabo USB-C Apple 1m",
    category: "Carregadores",
    price: 14.99,
    tag: "promoção",
    image: "image/caboUSB-Capple.webp",
    description: "Cabo USB-C para dispositivos Apple com 1 metro de extensão e boa flexibilidade. Perfeito para recarga e sincronização com excelente conectividade e acabamento de qualidade.",
    features: ["1 metro de comprimento", "USB-C Apple", "Flexível", "Recarga e sincronização"]
  },

  {
    id: "p14",
    name: "Fone com fio",
    category: "Fone/Áudio",
    price: 4.99,
    tag: "promoção",
    image: "image/fone-generico.jpeg",
    description: "Fone com fio compacto com áudio simples e confortável para uso cotidiano. Ideal para ouvir música, fazer ligações e aproveitar conteúdo em casa, no trabalho ou em deslocamentos.",
    features: ["Conexão com fio", "Som simples e claro", "Leve e confortável", "Uso diário"]
  }
];

// Disponibiliza o array para os outros scripts (main.js) sem precisar
// de módulos/bundlers — propositalmente simples para fins didáticos.
window.PRODUCTS = PRODUCTS;
