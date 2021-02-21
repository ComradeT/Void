/*header-burger*/

(function () {
    const menuBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const bodyLock = document.querySelector('body');
    menuBurger.addEventListener('click', () => {
        menuBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
}());


/*cases*/

const mySwiper = new Swiper('.cases__swiper-container', {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 3,
        },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: "pagination__bullet",
        bulletActiveClass: "pagination__bullet_active",
    },
})

/*clients*/

const mySwiperClients = new Swiper('.clients__swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet_active",
    },
    navigation: {
        nextEl: '.clients__swiper-button-next',
        prevEl: '.clients__swiper-button-prev',
    },
  
});

/*reviews*/

const mySwiperReviews = new Swiper('.reviews__swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet_active",
    },
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },
  
});

/*quiz*/

(function () {
    const buttonNext1 = document.querySelector('.btn1'),
          buttonNext2 = document.querySelector('.btn2'),
          buttonNext3 = document.querySelector('.btn3');
    const back1 = document.querySelector('.back1'),
          back2 = document.querySelector('.back2'),
          back3 = document.querySelector('.back3');
    const question1 = document.querySelector('.question1'),
          question2 = document.querySelector('.question2'),
          question3 = document.querySelector('.question3'),
          question4 = document.querySelector('.question4');

    buttonNext1.addEventListener('click', () => {
        question1.classList.remove('active');
        question2.classList.add('active');
    });
    back1.addEventListener('click', () => {
        question1.classList.add('active');
        question2.classList.remove('active');
    });
    buttonNext2.addEventListener('click', () => {
        question2.classList.remove('active');
        question3.classList.add('active');
    });
    back2.addEventListener('click', () => {
        question2.classList.add('active');
        question3.classList.remove('active');
    });
    buttonNext3.addEventListener('click', () => {
        question3.classList.remove('active');
        question4.classList.add('active');
    });
    back3.addEventListener('click', () => {
        question3.classList.add('active');
        question4.classList.remove('active');
    });
}());