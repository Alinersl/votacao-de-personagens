const botoes = document.querySelectorAll(".personagens button");
const nomes = [
    "Lyra, a Inovadora Silenciosa",
    "Kael, o Guardião Gentil",
    "Zara, a Aventureira Destemida",
    "Maisy, a Artista Sonhadora",
    "Arielly, a Inventora Sonhadora"
];

let votos = [0, 0, 0, 0, 0];
const listaRanking = document.querySelector("#lista-ranking");
function mostrarRankingIndividual() {
    listaRanking.innerHTML = "";

    const rankingOrdenado = nomes
        .map((nome, index) => ({ nome, votos: votos[index] }))
        .sort((a, b) => b.votos - a.votos);

    rankingOrdenado.forEach((item) => {
        const p = document.createElement("p");
        p.div = "#lista-ranking"; 
        p.textContent = `${item.nome}: ${item.votos} voto(s)`;
        listaRanking.appendChild(p);
    });


}

botoes.forEach((botao, index) => {
    botao.addEventListener("click", function (e) {
        e.preventDefault();

        votos[index]++;

        mostrarRankingIndividual();
    });
});
