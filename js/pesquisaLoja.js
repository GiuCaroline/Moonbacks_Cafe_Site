const input = document.getElementById("pesquisa");
const livros = document.querySelectorAll(".conteudo"); 


input.addEventListener("input", function () {
    const termo = this.value.toLowerCase();

    livros.forEach(livro => {
        const textoLivro = livro.innerText.toLowerCase();

        if (textoLivro.includes(termo)) {
            livro.style.display = "block";
        } else {
            livro.style.display = "none";
        }
    });
});
