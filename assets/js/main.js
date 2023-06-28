
// AOS ACTIVATION
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
 });


// Pure Counter
new PureCounter();


// Sticky Navbar
const navBar = document.querySelector('#navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    navBar.classList.add('nav-sticky');
  } 
  else {
    navBar.classList.remove('nav-sticky');
  }
});


// Swiper JS
new Swiper('.testimonial-slider', {
  spaceBetween: 30,
  speed: 600,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Pre Loader 
let preloader = document.getElementById("preloader");
if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  });
}


// Back to Top
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 250) {
    backToTopBtn.classList.add('buttonVisible');
  } else {
    backToTopBtn.classList.remove('buttonVisible');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});










