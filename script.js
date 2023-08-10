// script.js
const car = document.querySelector('.car');

car.addEventListener('click', () => {
  car.classList.toggle('color-change');
});

@media screen and (max-width: 768px) {
    html {
      transform: scale(0.5);
    }
    /* Additional styles for smaller screens */
  }