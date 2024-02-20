const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
});

let cards = document.querySelectorAll(".card1")
cards.forEach((el) => observer.observe(el));