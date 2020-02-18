{
  const linkInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const id = this.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  linkInternos.forEach(linkInterno => linkInterno.addEventListener('click', scrollSuave));
}