import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiProduto(nome, imagem, valor) {
	const produto = document.createElement("li");
	produto.className = "card_produto";
	produto.innerHTML = `<img
    class="produto__imagem" 
    src="${imagem}"
    alt=""
    class="card_img"
/>
<p class="produto_nome">${nome}</p>
<div class="card_produto_preco_div">
    <p class="produto_preco">${valor}</p>
    <img src="/assets/icon-lixeira.svg" alt="" data-id />
</div>`;
	return produto;
}

async function listaProdutos() {
	const listaApi = await conectaApi.listaProdutos();
	listaApi.forEach((element) =>
		lista.appendChild(
			constroiProduto(element.nome, element.imagem, element.valor)
		)
	);
}

listaProdutos();
