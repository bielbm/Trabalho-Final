document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome && email) {
      adicionarLinhaTabela(nome, email);
      limparFormulario();
    }
  });

function adicionarLinhaTabela(nome, email) {
  var tabelaBody = document.getElementById("cadastroBody");
  var novaLinha = tabelaBody.insertRow();

  var celulaNome = novaLinha.insertCell(0);
  var celulaEmail = novaLinha.insertCell(1);

  celulaNome.textContent = nome;
  celulaEmail.textContent = email;
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}
