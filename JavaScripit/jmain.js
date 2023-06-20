const casas=document.querySelectorAll('casa');
const disco=document.querySelector('disco');

console.log (casa);
console.log(disco);

disco.addEventListener('dragstar', comecaArrastar);
for (let i = 0; i<casas.length; i++){
const casa= casas[i];
casa.addEventListener('drop', passouPorCima);
casa.addEventListener('drop', recebeAlgo);
}

let arrastado =null;


function comecaArrastar(evento){
   
    arrastado = evento.target;

}

function recebeAlgo (evento){
    
    if(arrastado){
        evento.target.appendChild(arrastado);
        arrastado = null
    }

}

function passouPorCima (evento){
    
    evento.preventDefault();
    

}