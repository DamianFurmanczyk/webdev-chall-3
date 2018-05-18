import styles from "./styles.styl";

(function(w) {
  const d = document,
    hero = d.querySelector("#hero"),
    nav = d.querySelector("#nav"),
    burgerMenu = nav.querySelector("#nav-icon"),
    navList = nav.querySelector(".nav-list");

  const smoothMenu = w => {
    const heroOff = hero.getBoundingClientRect().top;

    w.scrollY > heroOff
      ? nav.classList.add("triggered")
      : nav.classList.remove("triggered");
  };

  w.addEventListener("scroll", function(e) {
    smoothMenu(w);
  });

  burgerMenu.addEventListener("click", function(e) {
    this.classList.toggle("open");
    navList.classList.toggle("active");
  });
})(window);
