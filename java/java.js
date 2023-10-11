// форма
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

new JustValidate('.header-authorization-form', {
    
    colorWrong: '#D52B1E',

    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20,
            errorMessage: 'Введите логин',
        },

        password: {
            required: true,
            minLength: 4,
        },
    },

    messages: {
        name: {
          required: 'Вы не ввели Логин',
          minLength: 'Введите не менее двух символов',
          maxLength: 'Введите не более двадцати символов',
      },

        password: {
          required: 'Вы не ввели пароль',
          minLength: 'Введите не менее двух символов',
        },
    },
});




// показ блоков
document.querySelector('.btn-podcasts').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts-item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts-item__active");
  }
});

document.querySelector('.btn-podcasts').addEventListener('click', function () {
  document.querySelector('.btn-podcasts').classList.toggle('podcasts__more-button--passive')
});

// список авторов подкастов

const element = document.querySelector('#porcasts-select');
const choices = new Choices(element, {
  searchEnabled: false,
});



// табы

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
    });


    // аккордеон гостей


$( function() {
  $( "#accordion" ).accordion({
      collapsible: true,
       active: false,
  });
  
} );

// свайпер

const swiper = new Swiper('.swiper', {
  
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,  
      },
      
      1440: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      
    },
    

});

// бургер меню

let burger = document.querySelector('.header-burger-btn')
let menu = document.querySelector('.header-nav')
let menuLinks = menu.querySelectorAll('.header-nav__link')
let buttomMenu = document.querySelector('.header-nav-main')

burger.addEventListener('click',

function() {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header-nav_active');
  buttomMenu.classList.toggle('header-nav-main_active');
  document.body.classList.toggle('stop-scroll');



  menuLinks.forEach(function(el) {
  el.addEventListener('click' , function() {
    burger.classList.remove('burger-active');
    menu.classList.remove('header-nav_active');
    buttomMenu.classList.remove('header-nav-main_active');
    document.body.classList.remove('stop-scroll');
  })
})
});

// что в эфире

let whatAir = document.querySelector('.what-is-air-320__button')
let airList = document.querySelector('.header-player-320__visible')

whatAir.addEventListener('click' , 

  function () {
    whatAir.classList.toggle('what-is-air-320__button_active');
    airList.classList.toggle('header-player-320__visible_active');

});


// обновление плагинов

$( ".selector" ).accordion( "refresh" );


/*плавность*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// кнопка паузы
document.querySelector('.header-player-btn-earlier-on-air').addEventListener('click', function() {

  document.querySelector('.header-player-btn-earlier-on-air .btn-pause').classList.toggle('btn-pause-active');
});

document.querySelector('.header-player-btn-on-air-now').addEventListener('click', function() {

  document.querySelector('.header-player-btn-on-air-now .btn-pause').classList.toggle('btn-pause-active');
});