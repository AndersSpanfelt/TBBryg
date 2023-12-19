/*
  JavaScript-funktioner for TrøjbrogBrygs hjemmeside
*/

// Funktion til at styre responsivt design af navigationen
function myFunction() {
  var x = document.getElementById("mynavmenu");
  if (x.className === "navmenu") {
    x.className += " responsive";
  } else {
    x.className = "navmenu";
  }
}

// Funktion til at rulle til toppen af siden med en glidende animation
document.getElementById("toTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Funktion til at vise eller skjule knappen for at rulle til toppen baseret på scroll-position
window.onscroll = function () {
  var scrollBtn = document.getElementById("toTopBtn");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Funktion til at filtrere øl efter kategori ved hjælp af en dropdown-menu
document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.getElementById('filterSelect');
  const beers = document.querySelectorAll('.beer');

  filterSelect.addEventListener('change', function () {
    const category = this.value;
    // Implementer filtrering af øl baseret på valgt kategori
  });
});
