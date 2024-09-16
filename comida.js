class Alimento extends ObjetoJogo {
    static imagens = [
        'alimento.png', 
        'balinha.png', 
        'rosquinha.png'  
    ];

    static pontuacoes = [10, 20, 30]; 
    #imagem;
    tipo;

    constructor(tipo, ...args) {
        super(args);
        this.tipo = tipo;
        this.arqImagem = Alimento.imagens[tipo];
        this.valor = Alimento.pontuacoes[tipo];
        this.#imagem = new Image();
        this.#imagem.src = this.arqImagem;
    }

    desenhar() {
        canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}