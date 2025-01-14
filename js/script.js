// Seleciona os elementos do carousel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
let index = 0;

// Função para atualizar a posição do carousel
function updateCarousel() {
    const totalImages = images.length;
    const slideWidth = document.querySelector('.carousel-container').offsetWidth;
    slide.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Função para ir para a imagem anterior
prevButton.addEventListener('click', () => {
    const totalImages = images.length;
    index = (index === 0) ? totalImages - 1 : index - 1;
    updateCarousel();
});

// Função para ir para a próxima imagem
nextButton.addEventListener('click', () => {
    const totalImages = images.length;
    index = (index === totalImages - 1) ? 0 : index + 1;
    updateCarousel();
});

// Inicializa o carousel
updateCarousel();

// Função para avançar automaticamente o carousel a cada 3 segundos
setInterval(() => {
    const totalImages = images.length;
    index = (index === totalImages - 1) ? 0 : index + 1;
    updateCarousel();
}, 6000); // 3000 milissegundos = 3 segundos
