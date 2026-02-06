const carta = document.getElementById('carta');
const conteudo = document.getElementById('conteudo');

carta.addEventListener('click', () => {
  // gira 180° para simular abrir
  carta.style.transform = 'rotateY(180deg) scale(1.1)';

  // mostra o conteúdo suavemente após 1 segundo
  setTimeout(() => {
    conteudo.style.display = 'block';
  }, 1000);
});
