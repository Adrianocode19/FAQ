const botoes = document.querySelectorAll('#button');
const informacoes = document.querySelectorAll('#info');
const imagemAberto = 'assets/images/icon-minus.svg';
const imagemFechado = 'assets/images/icon-plus.svg';

const mostraOculta = (indexBtn) => {
    informacoes.forEach((informacao, index) => {
        if(index === indexBtn) {
            botoes[indexBtn].innerHTML = '';
            if(informacao.style.display === '') {
                botoes[indexBtn].innerHTML = `<img class="image-close-open" src=${imagemAberto} />`;
                informacao.style.display = 'block';
                return;
            } else {
                botoes[indexBtn].innerHTML = `<img class="image-close-open" src=${imagemFechado} />`;
                informacao.style.display = '';
                return;
            }
           
        }
    })
    
}

botoes.forEach((botao, indexBtn) => {
    botao.addEventListener("click", () => (mostraOculta(indexBtn)));
})
