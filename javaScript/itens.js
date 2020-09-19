const url = 'http://localhost:3000/produtos';

let mercado;
let modalQt = 1;
let carrinho = [];
let modalKey = 0;
// let subtotal = 0;
// let desconto = 0;
// let total = 0;

// const c = (element) => {
//     return document.querySelector(element);
// };

// const cs = (element) => {
//     return document.querySelectorAll(element);
// };

/* Listagem dos Produtos */

function inicializarMercado() {

    axios.get(url)
        .then(res => {
            mercado = res.data;

            for (let i = 0; i < mercado.length; i++) {
                // console.log(mercado[i]); teste

                /* Aqui, estou clonando todos os itens/produtos e suas informações do mercado via cloneNode */

                let produtoItem = document.querySelector('.models .mercado-item').cloneNode(true);

                produtoItem.setAttribute('data-key', [i]);

                produtoItem.querySelector('.mercado-item--img img').src = mercado[i].img; /* Inseri na tela as imagens dos produtos */
                produtoItem.querySelector('.mercado-item--price').innerHTML = `R$ ${mercado[i].price.toFixed(2)}`; /* Inseri na tela o preço do mercado */
                produtoItem.querySelector('.mercado-item--name').innerHTML = mercado[i].name; /* Inseri na tela o nome do mercado */
                produtoItem.querySelector('.mercado-item--desc').innerHTML = mercado[i].desc; /* Inseri na tela a descrição do mercado */

                produtoItem.querySelector('a').addEventListener('click', (event) => {
                    event.preventDefault(); /* aqui estou tirando o comportamento pardrão da tag a que é o carregamento após o click. */

                    let key = event.target.closest('.mercado-item').getAttribute('data-key');

                    modalQt = 1;
                    modalKey = key;

                    document.querySelector('.mercadoBig img').src = mercado[key].img;
                    document.querySelector('.mercadoInfo h1').innerHTML = mercado[key].name;
                    document.querySelector('.mercadoInfo--desc').innerHTML = mercado[key].desc;
                    document.querySelector('.mercadoInfo--actualPrice').innerHTML = `R$ ${mercado[key].price.toFixed(2)}`;

                    document.querySelector('.mercadoInfo--qt').innerHTML = modalQt;

                    document.querySelector('.mercadoWindowArea').style.opacity = 0;
                    document.querySelector('.mercadoWindowArea').style.display = 'flex';

                    setTimeout(() => {
                        document.querySelector('.mercadoWindowArea').style.opacity = 1;
                    }, 500); /* Animação de abertura do MODAL */
                });

                document.querySelector('.mercado-area').append(produtoItem); /* Aqui estou mostrando na tela os produtos */
            };
        });
};

inicializarMercado();

/* Eventos do Modal */

function fecharModal() {
    document.querySelector('.mercadoWindowArea').style.opacity = 0;

    setTimeout(() => {
        document.querySelector('.mercadoWindowArea').style.display = 'none';
    }, 500);
}; /* Animação de fechamento do MODAL */

let retirar = document.querySelector('.mercadoInfo--cancelButton');
retirar.addEventListener('click', fecharModal);

document.querySelector('.mercadoInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--;
        document.querySelector('.mercadoInfo--qt').innerHTML = modalQt;
    };
}); /* Ação do botão MENOS */

document.querySelector('.mercadoInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    document.querySelector('.mercadoInfo--qt').innerHTML = modalQt;
}); /* Ação do botão MAIS */

document.querySelector('.mercadoInfo--addButton').addEventListener('click', () => {

    let identifier = mercado[modalKey].id + '@' + mercado[modalKey].id;

    let key = carrinho.findIndex((item) => {
        return item.identifier == identifier;
    });

    if (key > -1) {
        carrinho[key].quantidade += modalQt;
    } else {
        carrinho.push({
            identifier,
            id: mercado[modalKey].id,
            quantidade: modalQt,
        });
    };
    fecharModal();
    atualizarCarrinho();
});

function atualizarCarrinho() {
    if (carrinho.length > 0) {
        document.querySelector('aside').classList.add('show');

        document.querySelector('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in carrinho) {

            let produtoCarrinho = mercado.find((item) => {
                return item.id == carrinho[i].id;
            });

            subtotal += produtoCarrinho.price * carrinho[i].quantidade;

            let clonaItems = document.querySelector('.models .cart--item').cloneNode(true); /* Clonando itens do carrinho */
            // console.log(produtoCarrinho);

            clonaItems.querySelector('img').src = produtoCarrinho.img; /* Inserindo a imagem na área do carrinho*/
            clonaItems.querySelector('.cart--item-nome').innerHTML = produtoCarrinho.name; /* Inserindo o nome na área do carrinho*/
            clonaItems.querySelector('.cart--item--qt').innerHTML = carrinho[i].quantidade; /* Inserindo a quantidade na área do carrinho*/

            clonaItems.querySelector('.cart--item-qtmenos').addEventListener('click', () => {

                if (carrinho[i].quantidade > 1) {
                    carrinho[i].quantidade--;
                } else {
                    carrinho.splice(i, 1);
                };
                atualizarCarrinho(); /* Essa função está sendo responsável por fechar o carrinho caso a quantidade seja 0 */
            });

            clonaItems.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                carrinho[i].quantidade++;
                atualizarCarrinho();
            }); /* Adicionando a ação do botão de mais dentro do carrinho. */

            document.querySelector('.cart').append(clonaItems);
        };

        // desconto = subtotal * 0.1;
        total = subtotal;

        document.querySelector('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        // document.querySelector('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        document.querySelector('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        document.querySelector('aside').classList.remove('show');
    };
};