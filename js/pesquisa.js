const input = document.getElementById("pesquisa");
const receitas = document.querySelectorAll(".tudo"); 


input.addEventListener("input", function () {
    const termo = this.value.toLowerCase();

    receitas.forEach(receita => {
        const textoReceita = receita.innerText.toLowerCase();

        if (textoReceita.includes(termo)) {
            receita.style.display = "block";
        } else {
            receita.style.display = "none";
        }
    });
});
