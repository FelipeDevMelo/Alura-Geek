async function listaProdutos() {
	const conexao = await fetch("http://localhost:3000/produtos");
	const conecaoConvertida = await conexao.json();
	return conecaoConvertida;
}

export const conectaApi = {
	listaProdutos,
};
