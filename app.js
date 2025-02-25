function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado. você precisa digitar o nome do atleta ou esporte"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let título = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados 
    for (let dado of dados) {
        título = dado.título.toLocaleLowerCase()
        descricao = dado.título.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        // então, faça...
        if (título.includes(campoPesquisa) || descricao.includes (campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
      <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.título}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link} target="_blank">Mais informações</a>
                </div>
    `;
        }

    }

    if (!resultados) {
       resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}