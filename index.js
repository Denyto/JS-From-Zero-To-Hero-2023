const square = document.querySelector('.header-square');
const sidebar = document.querySelector('.sidebar');
const nav = document.querySelectorAll('.nav li');

nav.forEach((elem) => {
  elem.addEventListener('click', removeClasses);
});

square.addEventListener('click', menuToggle);

function menuToggle() {
  sidebar.classList.toggle('show');
  square.classList.toggle('rotate');
}

function removeClasses() {
  sidebar.classList.remove('show');
  square.classList.remove('rotate');
}
