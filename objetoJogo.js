class ObjetoJogo{
   constructor(args){
        this.tamanho = 20;    
        this.x = Math.round(this.tamanho+(tela.largura-2*this.tamanho)*Math.random());
        this.y = Math.round(placar.altura+(tela.altura-2*this.tamanho)*Math.random());
        if (args.length >= 1)  this.tamanho = args[0];
        if (args.length >= 2)  this.x = args[1];
        if (args.length >= 3)  this.y = args[2];          
   }
   teveColisao(obj){
        const distX = this.x - obj.x[0];
        const distY = this.y - obj.y[0];
        if (((distX >= 0) && (Math.abs(distX) < obj.tamanho) 
             ||(distX < 0) && (Math.abs(distX) < this.tamanho))
            &&
            ((distY >= 0) && (Math.abs(distY) < obj.tamanho) 
             ||(distY < 0) && (Math.abs(distY) < this.tamanho)))
            return true;        
        return false;
   }
}

