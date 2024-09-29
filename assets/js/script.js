function Enviar() {
  var nome = document.getElementById("nomeid").value;
  var fone = document.getElementById("foneid").value;
  var email = document.getElementById("emailid").value;

  if (nome.length > 3 && fone.length >= 9 && email.length >= 4 && email.includes("@")) {
      alert('Obrigado Sr(a) ' + nome + '. Os seus dados foram encaminhados com sucesso.');
  } else {
      alert('Seus dados não foram enviados, por favor reveja os dados inseridos para garantir que todos os critérios foram seguidos.');
  }
}