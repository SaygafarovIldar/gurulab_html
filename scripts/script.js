const advantagesText = document.querySelector('#advantages__text');
var counter = 0;
var text = [
    "Курсы проводятся на русском и узбекском языках.Наши преподаватели – наша гордость! Стаж работы не менее 7 лет и до 20 лет стажа.",
    "Все преподаватели проходят повышение квалификации, мы следим за новинками и тенденциями в сфере красоты.Преподавательский состав ежегодно принимает участие в международных Чемпионатах. На сегодняшний день они - многократные призеры и судьи в индустрии красоты. По желанию готовим наших учеников к различным соревнованиям.",
    "У нас удобный график! Вы сможете самостоятельно выбрать время обучения – днем, утром или вечером!",
    "Мы всегда с вами на связи и готовы дать совет при работе с клиентами, даже после окончания курса! Преподаватели всегда помогут и подскажут!",
    "Гарантия результата. Вы выйдете специалистом, готовым к работе!",
    "Наша цель – помочь вам стать настоящими профессионалами в бьюти индустрии, чтобы вы могли дарить людям счастье и красоту.",
];



const elem = document.getElementById("greeting");
setInterval(change, 3000);

function change() {
    advantagesText.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}



const masters_slider = new Swiper("#masters_slider", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
     
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        576:{
            spaceBetween: 10,
            slidesPerView: 2
        },

    }
});


const form = document.querySelector('.contact-section');
const masters = document.querySelector('.masters');
const newsletter = document.querySelector('.newsletter');


window.addEventListener('scroll', () => {
    showSection();
});

function showSection() {
    const triggerBottom = window.innerHeight / 5 * 3;
    const formTop = form.getBoundingClientRect().top;
    if (formTop < triggerBottom) {
        form.classList.add('active');
    }

    let mastersTop = form.getBoundingClientRect().top;
    if (mastersTop < triggerBottom) {
        masters.classList.add('active');
    }
    let newsletterTop = form.getBoundingClientRect().top;
    if (newsletterTop < triggerBottom) {
        newsletter.classList.add('active');
    }
}

const langBtns = document.querySelectorAll('.lang__link');

langBtns.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.remove('active');
        link.classList.add('active');
    });

})