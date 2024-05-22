async function listaProdutos() {
	const produtos = await fetch("http://localhost:3000/produtos");
	produtosConvertidos = await produtos.json();
	console.log(produtosConvertidos);
}

listaProdutos();
