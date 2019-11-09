

const Events = (() => {
  const navbar = document.querySelector('.navbar');


  
  window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollTop || window.pageYOffset;

    (height > 76) ? navbar.classList.add('navbar-change')
      : navbar.classList.remove('navbar-change');
    ;

  })
  // hide preloader
  window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))
})();



