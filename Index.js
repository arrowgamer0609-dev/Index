function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
  }

  function closeMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.remove('show');
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });