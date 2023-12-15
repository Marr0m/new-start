const modal = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fecharGaleria(){
    modal.style.visibility="hidden";
    iGM.style.transform="scale(0)";
}

function abrirGaleria(src){ 
    modal.style.visibility="visible";
    iGM.style.transform="scale(1)";
    iGM.src = src;
    
}
