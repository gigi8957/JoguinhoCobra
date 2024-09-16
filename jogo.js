function gerarTipoAlimento() {
    return Math.floor(Math.random() * 3); 
}

let alimento = new Alimento(gerarTipoAlimento());

function jogar (){
    tela.desenhar()
    placar.desenhar()
    cobra.desenhar()
    alimento.desenhar()
    cobra.mover()
    if (alimento.teveColisao(cobra)){ 
        placar.qtdPontos+=alimento.valor;
        cobra.crescer();
        alimento = new Alimento(gerarTipoAlimento())
    }
    if (cobra.vida > 0)
        requestAnimationFrame(jogar)
    else{
        if (placar.qtdPontos > placar.recorde)
            placar.recorde = placar.qtdPontos 
        placar.nomeJogo = "Fim de Jogo";
        placar.desenhar()
    };
}

jogar();
document.addEventListener("keydown",(evento) => {
    if ((evento.key == 6 ) && (cobra.direcao== 90 || cobra.direcao== 270)) cobra.direcao=0;
    if ((evento.key == 2 ) && (cobra.direcao== 0 || cobra.direcao== 180)) cobra.direcao=90;
    if ((evento.key == 4 ) && (cobra.direcao== 90 || cobra.direcao== 270)) cobra.direcao=180;
    if ((evento.key == 8 ) && (cobra.direcao== 0 || cobra.direcao== 180)) cobra.direcao=270;
    
});
