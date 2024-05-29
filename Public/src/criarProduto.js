import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(event) {
	event.preventDefault();
	const imagem = document.querySelector("[data-imagem]").value;
	const nome = document.querySelector("[data-nome]").value;
	const valor = document.querySelector("[data-valor]").value;
	const fileInput = document.getElementById("picture__input");
	const file = fileInput.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64Image = e.target.result;

			fetch("/api/produtos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					imagem: base64Image,
					nome: nome,
					valor: `R$${valor},00`,
				}),
			});
		};
		reader.readAsDataURL(file);
	} else {
		document.getElementById("result").innerText = "No file selected";
	}

	window.alert("Produto Adcionado com sucesso!");
}

formulario.addEventListener("submit", (event) => criarVideo(event));
