

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }
   })
}) 

const elementos = document.querySelectorAll('.scroller');

elementos.forEach((element) => observer.observe(element))

