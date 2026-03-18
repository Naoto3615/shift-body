const target = document.querySelector('#year');
if (target) {
  target.textContent = String(new Date().getFullYear());
}

const cards = document.querySelectorAll('.cards article');
cards.forEach((card, index) => {
  card.animate(
    [
      { opacity: 0, transform: 'translateY(24px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    {
      duration: 500,
      delay: 200 + index * 140,
      easing: 'ease-out',
      fill: 'forwards',
    },
  );
});
