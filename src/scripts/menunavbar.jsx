const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => {
  item.addEventListener('click', activeLink);

  // Adicione os eventos de toque para dispositivos móveis
  item.addEventListener('touchstart', function (e) {
    // Previna o comportamento padrão do toque (evita que a tela role, etc.)
    e.preventDefault();
    // Execute a função activeLink
    activeLink.call(this);
  });
});
