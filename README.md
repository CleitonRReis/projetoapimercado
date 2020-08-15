Primeiro Projeto Utilizando Uma API

Tem que ser feito com html, css e js

- Não é obrigatório utilizar bootstrap;
- Não é obrigatório ter slider;
- Código precisa estar comentado para que seja fácil de entender;
- Mínimo de 15 produtos;
- Todo produto deve ter NOME, PREÇO e FOTO;

  EXEMPLO: 
  {
    "id": 1,
    "nome": "Maçã",
    "preço": "2.30",
    "foto": URL ou o caminho do arquivo no seu projeto
  }

- Precisa estar conectado com a API;
- Precisa funcionar dinamicamente adicionando produtos na tela caso eu adicione produtos no json;
  - Exemplo: Os produtos devem ser criados na tela de acordo com os produtos que vem da API;
             Quando eu criar um novo produto no json, quando eu recarregar a página, ele deve aparecer na lista;
             Para fazer isso, utilizar appendChild() e innerHTML para adicionar HTML via JS;
- Quem quiser fazer o carrinho aparecer numa janela em cima do site, utilizar Modal;
    - Dica: https://getbootstrap.com/docs/4.5/components/modal/ 

- Exemplo do json do carrinho (não precisa ser necessariamente assim)
  {
    "id": 1,
    "nome": "Maçã",
    "preço": "2.30",
    "quantidade": 10,
    "foto": URL ou o caminho do arquivo no seu projeto (OU pegar direto do produto)
  }

- Pode consultar o http://codepen.io ;
- Precisa estar no github e estar com commits por partes (não um só commit com o projeto pronto);

1. Quero acessar uma página onde consigo escolher produtos para fazer a minha compra;
  - Lista de produtos com NOME, PREÇO e FOTO;

2. Quero poder escolher a quantidade do produto e adicioná-lo ao carrinho;
  - Tem que ter um input onde o usuário digita um número e adiciona aquela quantidade ao carrinho;
  - Verificar se o usuário REALMENTE preencheu uma quantidade para adicionar o produto ao carrinho;

3. Quero poder visualizar o meu carrinho e os produtos dentro dele;
  - Pode ser uma página com os produtos no carrinho,
    onde tem uma lista com NOME, FOTO, TOTAL (preço * quantidade).

4. Quero poder remover o produto do carrinho (NÃO OBRIGATÓRIO);
  - Na mesma lista de produtos do carrinho, ter uma opção de excluir o produto do carrinho.

O que será avaliando nisso:
    - Axios / Promise;
    - Classes;
    - DOM;
    - HTML, JS, CSS;

5. Quantas pessoas?
    - 3 pessoas (quem quiser, fique a vontade para fazer sozinho, em 2 pessoas) entregar 1 site só;
    - Prazo: Quinta-feira (20/08) 20:30;
    - Apresentação: Quinta-feira (20/08) 20:30.
    