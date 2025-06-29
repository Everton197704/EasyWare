const quantidadeInput = document.getElementById('quantidade');
const pacoteSelect = document.getElementById('pacote');

quantidadeInput.addEventListener('input', () => {
  const qtd = parseInt(quantidadeInput.value);

  if (qtd > 5) {
    pacoteSelect.value = 'Corporativo';
  } else if (qtd > 1) {
    pacoteSelect.value = 'Empresarial';
  } else {
    pacoteSelect.value = 'Individual';
  }
});

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