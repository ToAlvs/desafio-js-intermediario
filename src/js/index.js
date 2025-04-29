const campoDeTexto = document.querySelectorAll(".campo-de-texto");
const botao = document.getElementById("botao");
const avisoDeCampoObrigatorio = document.querySelectorAll('.aviso-campo-obrigatorio');
const legendaDosCamposObrigatorios = document.getElementById('legenda');


botao.addEventListener("click", function () {
    campoDeTexto.forEach(function (campo, indice) {
        const verificacaoEspacoVazio = campo.value.trim();

        if (verificacaoEspacoVazio === "") {
            avisoDeCampoObrigatorio[indice].style.display = 'block';
            campo.classList.add('borda-erro')
            campo.classList.remove('borda-acerto')
            legendaDosCamposObrigatorios.style.top = '286px'
        }
        else if (verificacaoEspacoVazio !== "") {
            campo.classList.add('borda-acerto')
            campo.classList.remove('borda-erro')
            avisoDeCampoObrigatorio[indice].style.display = 'none';
            legendaDosCamposObrigatorios.style.top = '277px'
        }
    });
})