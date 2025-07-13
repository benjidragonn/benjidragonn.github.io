    const btn = document.querySelector('.toggle-btn');
    const drawerDesktop = document.getElementById('drawerDesktop');
    const drawerMobile = document.getElementById('drawerMobile');
    const navbar = document.querySelector('.navbar');

    // Gérer le scroll
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      // Cacher navbar sauf tout en haut
      if (currentScroll === 0) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-70px";
      }
    });

    // Ouvrir/Fermer le drawer
    function toggleDrawer() {
      const isMobile = window.innerWidth <= 1050;
      if (isMobile) {
        drawerMobile.classList.toggle('open');
      } else {
        drawerDesktop.classList.toggle('open');
      }
    }

function toggleDrawer() {
  const isMobile = window.innerWidth <= 1050;
  const drawer = isMobile ? drawerMobile : drawerDesktop;

  drawer.classList.toggle('open');

  // Ne bloque pas le scroll du body
}

