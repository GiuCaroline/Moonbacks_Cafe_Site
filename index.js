const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta.esquerda');
const btnDireita  = document.querySelector('.seta.direita');

let animando = false;

function stepSize() {
  const first = carrossel.querySelector('.card');
  if (!first) return 0;
  const styles = getComputedStyle(carrossel);
  const gap = parseInt(styles.gap) || 0;
  return first.getBoundingClientRect().width + gap;
}

function next() {
  if (animando) return;
  animando = true;

  const step = stepSize();
  carrossel.style.transition = 'transform 0.3s ease-in-out';
  carrossel.style.transform = `translateX(-${step}px)`;

  setTimeout(() => {
    // manda o primeiro card pro final
    carrossel.appendChild(carrossel.firstElementChild);
    // reseta o transform sem animação
    carrossel.style.transition = 'none';
    carrossel.style.transform = 'translateX(0)';
    animando = false;
  }, 300);
}

function prev() {
  if (animando) return;
  animando = true;

  const step = stepSize();
  // coloca o último no início antes de animar
  carrossel.insertBefore(carrossel.lastElementChild, carrossel.firstElementChild);
  carrossel.style.transition = 'none';
  carrossel.style.transform = `translateX(-${step}px)`;

  // anima de volta pra posição 0
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      carrossel.style.transition = 'transform 0.3s ease-in-out';
      carrossel.style.transform = 'translateX(0)';
      setTimeout(() => { animando = false; }, 300);
    });
  });
}

btnDireita.addEventListener('click', next);
btnEsquerda.addEventListener('click', prev);

// acessibilidade: setas no teclado
carrossel.closest('.carrossel-container').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft')  prev();
});
