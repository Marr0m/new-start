// ------------TEXTE UM
const imgs = document.getElementById("img");
const img = document.querySelectorAll("img");

let idx = 0; 

function carrossel (){
    idx++;
    if (idx > img.length - 1){ 
        idx = 0;
    };

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(carrossel, 1800);


//--------TEXTE DOIS 

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button'); 

let currentSlide = 0; 

function hideSlider(){ 
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){ 
    slider[currentSlide].classList.add('on')
}

function nextSlider(){ 
    hideSlider()
    if(currentSlide === slider.length -1){ 
        currentSlide = 0
    } else { 
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){ 
    hideSlider()
    if(currentSlide === 0){ 
        currentSlide = slider.length -1;
    } else { 
        currentSlide--;
    }
    showSlider();
}


//--------------TEXTE TRES

btnNext.addEventListener('click', nextSlider )
btnPrev.addEventListener('click', prevSlider )

let count = 1; 
document.getElementById("radio1").checked = true; 

setInterval( function(){
nextImage();
}, 7000)

function nextImage(){ 
    count++;
    if (count > 4){ 
        count = 1;
    } 
    document.getElementById("radio"+count).checked = true; 
}