
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    const informacoesSelecionada = document.querySelector(".informacoes.selecionado");
    informacoesSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacoes-${aba.id}`

    const informacoesASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacoesASerMostrada.classList.add("selecionado")
}
