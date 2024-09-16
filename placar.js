 const placar = {
    qtdPontos:0,
    largura:800,
    altura:60,
    nomeJogo:"IFRJ COBRA",  
    cor:"#FFFFFF",
    corFundo:"#01341D",
    desenhar(){
        canvasCtx.fillStyle= this.corFundo;
        canvasCtx.fillRect(0,0,placar.largura,placar.altura);
        canvasCtx.fillStyle= this.cor;
        canvasCtx.font= "14px Fantasy"
        canvasCtx.textBaseline = "top"
        canvasCtx.textAlign = "right"
        canvasCtx.fillText(cobra.vida + " vida(s)", 780,10);
        canvasCtx.fillText(this.qtdPontos + " pontos",780,36);
        canvasCtx.font= "20px Fantasy"
        canvasCtx.textBaseline = "middle"
        canvasCtx.textAlign = "center"
        canvasCtx.fillText(this.nomeJogo, 400,30);
    }
};


