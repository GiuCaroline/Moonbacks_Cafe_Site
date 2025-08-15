const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta.esquerda');
const btnDireita = document.querySelector('.seta.direita');

const larguraCard = 260; // largura + gap
let animando = false;

// Move para a direita
btnDireita.addEventListener('click', () => {
    if (animando) return;
    animando = true;

    carrossel.style.transition = 'transform 0.3s ease-in-out';
    carrossel.style.transform = `translateX(-${larguraCard}px)`;

    setTimeout(() => {
        carrossel.appendChild(carrossel.firstElementChild); // manda primeiro pro fim
        carrossel.style.transition = 'none';
        carrossel.style.transform = 'translateX(0)';
        animando = false;
    }, 300);
});

// Move para a esquerda
btnEsquerda.addEventListener('click', () => {
    if (animando) return;
    animando = true;

    carrossel.insertBefore(carrossel.lastElementChild, carrossel.firstElementChild); // último pro início
    carrossel.style.transition = 'none';
    carrossel.style.transform = `translateX(-${larguraCard}px)`;

    setTimeout(() => {
        carrossel.style.transition = 'transform 0.3s ease-in-out';
        carrossel.style.transform = 'translateX(0)';
        setTimeout(() => animando = false, 300);
    }, 10);
});
