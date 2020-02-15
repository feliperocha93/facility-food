{
  const botaoMenu = document.querySelector('#botaoMenu');
  const menuMobile = document.querySelector('.header-menu');
  const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function abrirMenu() {
    menuMobile.classList.add('active');
    botaoMenu.removeEventListener('click', abrirMenu);
    botaoMenu.addEventListener('click', fecharMenu);
  }

  function fecharMenu() {
    menuMobile.classList.remove('active');
    botaoMenu.removeEventListener('click', fecharMenu);
    botaoMenu.addEventListener('click', abrirMenu);
  }

  botaoMenu.addEventListener('click', abrirMenu);
  // linksInternos.forEach(linkInterno => linkInterno.addEventListener('click', fecharMenu));
}
