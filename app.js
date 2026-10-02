var  meuTitulo = document.getElementById("Titulo");
let botaoSimples = document.getElementById("simples");

let modoEscuroAtivado = false;

botaoSimples.onclick = trocaClasse

function trocaClasse() {
    if (modoEscuroAtivado == true) {
        meuTitulo.classList.add("modoClaro");
        meuTitulo.classList.remove("modoEscuro");

        modoEscuroAtivado = false;
    } else {
        meuTitulo.classList.remove("modoClaro");
        meuTitulo.classList.add("modoEscuro");

        modoEscuroAtivado = true;
    }
}