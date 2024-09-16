const canvasElemento = document.querySelector("canvas");
const canvasCtx = canvasElemento.getContext("2d");

function setup(){
    canvasElemento.height = canvasCtx.height = screen.height
    canvasElemento.width = canvasCtx.width = screen.width
}
setup();