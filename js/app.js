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