// Função para deletar produto
async function deletarProduto(id) {
	try {
		const response = await fetch(`http://localhost:3000/produtos/${id}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error("Não foi possível deletar o produto");
		}

		alert("Produto deletado com sucesso!");
		// Opcionalmente, remova o produto do DOM ou recarregue a lista de produtos
		document.querySelector(`.produto[data-id="${id}"]`).remove();
	} catch (error) {
		console.error(error);
		alert("Erro ao deletar produto");
	}
}

// Adicionar event listener aos botões de lixeira
document.querySelectorAll(".delete-button").forEach((button) => {
	button.addEventListener("click", (event) => {
		const id = event.target.getAttribute("data-id");
		deletarProduto(id);
	});
});
