const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
  let login = campoLogin.value;
  let senha = campoSenha.value;
  let mensagem = "Erro: login ou senha incorretos";
  let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

  if (bancoDeDados === null) {
    mensagem = "Nenhum cadastro encontrado";
  } else {
    for (let usuario of bancoDeDados) {
      if (usuario.login === login && usuario.senha === senha) {
        mensagem = "Login bem-sucedido";
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        localStorage.setItem(usuario.login, JSON.stringify(usuario.anotacoes));
        window.location.href = "home.html";
        break;
      }
    }
  }
  alert(mensagem);
}

function cadastra() {
  if (campoNovaSenha.value === campoRepSenha.value) {
    const usuario = {
      login: campoNovoLogin.value,
      senha: campoNovaSenha.value,
      anotacoes: ""
    };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados === null) {
      bancoDeDados = [];
    }

    bancoDeDados.push(usuario);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

    alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
    window.location.href = "index.html";
  } else {
    alert("Confirmação de senha incorreta. Por favor, tente novamente.");
  }
}

function carregarAnotacoes() {
    const campoAnotacoes = document.getElementById("campoAnotacoes");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
    if (usuarioLogado !== null && usuarioLogado.anotacoes !== undefined) {
      campoAnotacoes.value = usuarioLogado.anotacoes;
    }
  }
  
  function salvarAnotacoes() {
    const campoAnotacoes = document.getElementById("campoAnotacoes");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado !== "") { 
      usuarioLogado.anotacoes = campoAnotacoes.value;
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
      alert("Anotações salvas com sucesso!");
    }
    atualizaCampo()
  }

function registro() {
  window.location.href = "registro.html";
}

function redirecionarParaAnotacoes() {
  window.location.href = "anotacoes.html"
}
function atualizaCampo(){
  const campoAnotacoes = document.getElementById("campoAnotacoes");
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  campoAnotacoes.value = usuarioLogado.anotacoes;
}


  