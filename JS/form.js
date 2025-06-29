const form = document.getElementById('orcamentoForm');
const popup = document.getElementById('popup');
const button = form.querySelector('button');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  button.disabled = true;
  button.textContent = 'Enviando...';

  setTimeout(() => {
    button.disabled = false;
    button.textContent = 'Solicitar orçamento';
    popup.classList.add('show');
  }, 2000);
});

popup.addEventListener('click', () => {
  popup.classList.remove('show');
});