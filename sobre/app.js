// --------------------------- CARD DA SEGUNDA SECTION /////////////////////////////

const listaSelecaoDeItens = document.querySelectorAll('.iten')
const itenCard = document.querySelectorAll('.iten-card')

listaSelecaoDeItens.forEach(iten => {
    
    iten.addEventListener('click', () => {
        const cartaoItenAberto = document.querySelector('.open')  

        cartaoItenAberto.classList.remove('open')

        const idItenSelecionado = iten.attributes.id.value
        const idDoCartaoItenParaAbrir = idItenSelecionado  + '-card'
        const cartaoItenParaAbrir = document.getElementById(idDoCartaoItenParaAbrir)

        cartaoItenParaAbrir.classList.add('open')

        const itenAtivoNaListagem = document.querySelector('.ativo')

        itenAtivoNaListagem.classList.remove('ativo')

        const itenSelecionadoNaListagem = document.getElementById(idItenSelecionado)

        itenSelecionadoNaListagem.classList.add('ativo')

    })
})

// --------------------------- CARD DA TERCEIRA SECTION /////////////////////////////

const selecaoDeItens = document.querySelectorAll('.card')
const iteCard = document.querySelectorAll('.card-iten')

selecaoDeItens.forEach(item => {
    
    item.addEventListener('click', () => {
        const cartaoItemAberto = document.querySelector('.open2')  

        cartaoItemAberto.classList.remove('open2')

        const idItemSelecionado = item.attributes.id.value
        const idDoCartaoItemParaAbrir = idItemSelecionado  + '-iten'
        const cartaoItemParaAbrir = document.getElementById(idDoCartaoItemParaAbrir)

        cartaoItemParaAbrir.classList.add('open2')

        const itemAtivoNaListagem = document.querySelector('.ativo2')

        itemAtivoNaListagem.classList.remove('ativo2')

        const itemSelecionadoNaListagem = document.getElementById(idItemSelecionado)

        itemSelecionadoNaListagem.classList.add('ativo2')

    })
})

// --------------------------- CARROUSSEL /////////////////////////////

const wrapper = document.querySelector('.wrapper'); 
const carousel = document.querySelector('.carousel'); 
const arrowsBtns = document.querySelectorAll('.wrapper i'); 
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

// obtenha o número de cards que cabem no carrossel de uma só vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

//insirir cópias dos últimos cards no início do carrossel para scroll infinito
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

//insirir cópias dos primeiros cards no final do carrossel para scroll infinito
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});

// add event listener para as botões de seta scrollar para direita e esquerda
arrowsBtns.forEach( btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id ==="left" ? - firstCardWidth: firstCardWidth, timeoutId; 
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //registra o cursor inicial e a posição do scroll do carrossel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging =  (e) => {
    if(!isDragging) return; // se isDragging for false retorna 
    //atualize a posição de rolagem do carrossel com base no movimento do cursor
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 800) return; //retornar se a janela for menor que 800px
    // autoplay o carrossel a cada 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3000);
}
autoPlay();

const infiteScroll = () => { 
    //se o carrossel estiver no início, scrolle para o final
    if(carousel.scrollLeft === 0) { 
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");

     //se o carrossel estiver no final, scrolle para o inicio
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // limapr o timeout existente e começar o autoplay se o mouse não estiver por cima do carrossel 
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);