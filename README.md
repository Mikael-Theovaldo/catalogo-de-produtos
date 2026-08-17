# W&M Shop — Catálogo de Produtos

Este projeto nasceu como uma ideia prática: criar um catálogo de produtos para a loja, com visual limpo, fácil de usar e preparado para vender pelo WhatsApp ou Instagram.

A proposta é simples, mas muito útil: ter uma página onde os clientes vejam os itens, entendam o que é cada produto e possam pedir diretamente com o vendedor, sem complicar o processo.

Este projeto também serve como um espaço de estudo e evolução contínua. A ideia é começar simples, usar no dia a dia da loja, aprender ao longo do tempo e melhorar o sistema conforme o negócio cresce.

## Objetivo principal

- Apresentar produtos de forma organizada e visualmente agradável
- Facilitar a compra por contato direto com a loja
- Servir como base para futuras melhorias e aprendizado em desenvolvimento web
- Evoluir com o tempo junto com a loja e com meus estudos

## Visão do projeto

Este site foi pensado como um catálogo vivo, que pode crescer conforme a loja cresce.

No começo, ele é estático e simples. Mais tarde, pode virar:

- sistema com painel administrativo
- cadastro e edição de produtos
- controle de estoque
- pedidos por WhatsApp
- integração com banco de dados
- autenticação e gestão de vendedores
- área de administração para a loja

## Como o projeto funciona hoje

A versão atual é um catálogo frontend com:

- exibição de produtos em grid
- categorias
- carrinho de compras no navegador
- botão para finalizar pedido no WhatsApp
- imagens e descrições dos produtos
- filtro por categoria

Os dados dos produtos estão em um arquivo JavaScript centralizado, o que facilita adicionar, remover ou atualizar itens sem precisar mexer em várias partes do código.

## Estrutura do projeto

```bash
catalogo-produtos/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── cart.js
│   ├── main.js
│   ├── products.js
│   ├── social.js
│   └── whatsapp.js
├── image/
│   └── imagens dos produtos
├── backend-automation/
│   ├── README.md
│   ├── package.json
│   └── src/
└── ...
```

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. O catálogo já estará funcionando.
3. Para adicionar ou alterar produtos, edite o arquivo `js/products.js`.
4. Para trocar imagens, coloque os arquivos em `image/` e ajuste os caminhos no array de produtos.

## Como vender com esse projeto

A ideia é usar esse catálogo como ponte entre a loja e o cliente.

O cliente entra na página, vê os produtos, seleciona itens e pode finalizar no WhatsApp com a mensagem automática já montada. Isso torna o processo mais fácil e rápido.

## Importante sobre o escopo

Este é um projeto em evolução. Hoje ele funciona como uma vitrine digital e uma ferramenta de apoio à loja. A partir daqui, novas ideias podem ser implementadas conforme a necessidade real do negócio.

A proposta não é fazer tudo de uma vez, e sim aprender construindo de forma organizada.

## Roadmap de evolução

### Fase 1 — catálogo básico
- [x] listagem de produtos
- [x] imagens e descrições
- [x] filtro por categoria
- [x] carrinho de compras
- [x] compra por WhatsApp

### Fase 2 — melhorias da loja
- [ ] painel para gerenciar produtos
- [ ] edição fácil de preços e descrições
- [ ] controle de estoque
- [ ] melhor organização visual
- [ ] nova identidade visual e branding

### Fase 3 — automação e gestão
- [ ] backend para armazenar pedidos
- [ ] banco de dados
- [ ] cadastro de clientes
- [ ] integração com WhatsApp/Instagram
- [ ] gerenciamento de vendedores e atendimento

### Fase 4 — crescimento profissional
- [ ] deploy para internet
- [ ] domínio e hospedagem
- [ ] analytics e métricas
- [ ] melhor UX para mobile
- [ ] refatoração do código e organização para manutenção

## Filosofia do projeto

Este repositório representa mais do que um catálogo de produtos. Ele representa uma base para aprender desenvolvimento web na prática, criar algo útil para a loja e continuar melhorando com o tempo.

Cada mudança aqui pode ser vista como parte do processo de estudo e evolução do empreendedor e do desenvolvedor.

## Conclusão

O objetivo deste projeto é simples, mas forte: transformar a loja em uma experiência mais profissional, moderna e fácil de vender.

Com o tempo, esse catálogo pode crescer, virar uma ferramenta mais completa e se tornar uma parte importante do negócio.

O mais importante é manter o foco em evolução contínua: aprender, testar, ajustar e melhorar.

---

Desenvolvido com foco em aprendizado, produtividade e uso real na loja.

