function alerta() {
    alert("Ocorreu um erro, estamos trabalhando para corrigi-lo!")
}

function verificarLogin() {
    // Obtém os valores de usuário e senha do formulário
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
  
    // Verifica se o usuário e a senha são válidos
    if (login === "atendimento" && senha === "atendimento") {
      alert("Login realizado com sucesso. Ótimo trabalho!");
      window.location.href = "logado.html";
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }
  