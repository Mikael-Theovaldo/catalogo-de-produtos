# Catálogo de Produtos + Automação de Vendedores (projeto de aprendizado)

Este projeto tem **duas partes independentes**:

```
catalogo-produtos/
├── frontend/              <- a landing page do catálogo (o que o cliente vê)
│   ├── index.html
│   ├── css/style.css
│   └── js/
│       ├── products.js     <- dados dos produtos (sem banco de dados)
│       ├── cart.js         <- estado do carrinho
│       ├── whatsapp.js     <- monta o link "finalizar pelo WhatsApp"
│       └── main.js         <- desenha tudo na tela e liga os eventos
│
└── backend-automation/     <- automação de rodízio de vendedores (Node/Express)
    └── (ver README.md dentro da pasta para detalhes)
```

## 1. Frontend (a landing page em si)

- **Não tem banco de dados** — os produtos ficam num array em `js/products.js`.
- O carrinho é só um estado em memória do navegador (some se recarregar a página).
- Ao clicar em "Finalizar pelo WhatsApp", o site monta uma mensagem com o
  resumo do pedido e abre `https://wa.me/...` — quem envia de fato é o
  próprio cliente, dentro do WhatsApp. **Nada é automático nessa parte.**

Para visualizar: basta abrir `frontend/index.html` no navegador
(não precisa de servidor).

## 2. Backend automation (rodízio de vendedores)

Simula a regra: *"se o vendedor não responder em 15 minutos, o pedido vai
para outro vendedor e o cliente é avisado"*. Isso já **não é mais front-end
puro** — precisa de um servidor rodando e, para funcionar de verdade, da
API oficial do WhatsApp (Cloud API da Meta). Veja
`backend-automation/README.md` para a explicação completa, incluindo por
que isso não dá pra fazer só com o WhatsApp comum.

## Como as duas partes se conectam (num cenário real)

Hoje elas são independentes (o frontend é 100% ilustrativo, como você
pediu). Para ligar de verdade:

1. O cliente finaliza o pedido pelo WhatsApp normalmente (via `wa.me`).
2. Quando essa mensagem chega no número business do vendedor, a Cloud API
   dispara um Webhook para o seu backend.
3. O backend registra o pedido (`ordersStore.js`) e liga o timer de 15 min
   (`reassignmentService.js`).
4. Se o vendedor não responder a tempo, o backend repassa a conversa e
   avisa o cliente automaticamente.


