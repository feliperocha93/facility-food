{
  const linkInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    console.log(this);
    const id = this.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  linkInternos.forEach(linkInterno => linkInterno.addEventListener('click', scrollSuave));
}