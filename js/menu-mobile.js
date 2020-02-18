{
  const botaoMenu = document.querySelector('#botaoMenu');
  const headerMenu = document.querySelector('.header-menu');
  
  function abrirMenu() {
    headerMenu.classList.add('active');
    botaoMenu.removeEventListener('click', abrirMenu);
    botaoMenu.addEventListener('click', fecharMenu);
  }
  
  function fecharMenu() {
    headerMenu.classList.remove('active');
    botaoMenu.removeEventListener('click', fecharMenu);
    botaoMenu.addEventListener('click', abrirMenu);
  }
  
  function menuMobile() {
    if (screen.width < 960) {
      botaoMenu.addEventListener('click', abrirMenu);
    } else {
      botaoMenu.removeEventListener('click', abrirMenu);
    }
  }
  
  menuMobile();
  
  window.addEventListener('orientationchange', menuMobile);
}