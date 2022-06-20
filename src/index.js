import "./style.css";

const cards = document.querySelectorAll(".card");
const links = document.querySelectorAll("a");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (
      e.target.className == "card card-selected" ||
      e.target.className == "weight weight-selected" ||
      e.target.className == "weight--number" ||
      e.target.className == "weight-kg"
    ) {
      card.children[0].textContent = "Сказочное заморское яство";
    }

    if (
      e.target.className == "card" ||
      e.target.className == "card card-selected" ||
      e.target.className == "weight" ||
      e.target.className == "weight weight-selected" ||
      e.target.className == "weight--number" ||
      e.target.className == "weight-kg"
    ) {
      card.classList.toggle("card-selected");
      card.children[5].classList.toggle("weight-selected");
    }
  });

  card.addEventListener("click", (e) => {});

  card.addEventListener("mouseenter", (e) => {
    if (e.target.className != "card disabled") {
      e.target.style.filter = "brightness(1.1)";
    }

    if (e.target.className == "card card-selected") {
      card.children[0].textContent = "Котэ не одобряет?";
    }
  });

  card.addEventListener("mouseleave", (e) => {
    if (e.target.className != "card disabled") {
      e.target.style.filter = "brightness(1)";
    }

    if (e.target.className == "card card-selected") {
      card.children[0].textContent = "Сказочное заморское яство";
    }
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    link.parentNode.parentNode.children[0].classList.toggle("card-selected");
    link.parentNode.parentNode.children[0].children[5].classList.toggle(
      "weight-selected"
    );
    link.parentNode.parentNode.children[0].children[0].textContent =
      "Сказочное заморское яство";

    e.preventDefault();
  });
});
