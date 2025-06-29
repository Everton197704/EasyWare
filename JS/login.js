document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-desenvolvimento");
    const fecharBtn = document.getElementById("fechar-popup");
  
    const botaoCriarConta = document.getElementById("botao-cadastro");
    botaoCriarConta.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.remove("oculto");
    });
  
    const botaoLogin = document.getElementById("botao-login");
    botaoLogin.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.remove("oculto");
    });
  
    const esqueciSenha = document.getElementById("esqueci-senha");
    esqueciSenha.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.remove("oculto");
    });
  
    fecharBtn.addEventListener("click", function () {
      popup.classList.add("oculto");
    });
  });