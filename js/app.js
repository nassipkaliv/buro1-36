document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active');
  });
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('permanent-active')) {
      link.classList.remove('active');
    }
  });
});
document.querySelector('.nav-link.active')?.classList.add('permanent-active');



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  const openServicesBtn = document.getElementById('open-services');
  const backBtn = document.getElementById('back-to-main');
  const mainMenu = document.getElementById('main-menu');
  const servicesMenu = document.getElementById('services-menu');

  openServicesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.add('d-none');
    servicesMenu.classList.remove('d-none');
  });

  backBtn.addEventListener('click', () => {
    servicesMenu.classList.add('d-none');
    mainMenu.classList.remove('d-none');
  });