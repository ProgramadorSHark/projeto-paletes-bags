function calcular() {
  const area = document.getElementById("area").value;
  const totalPaletes = document.getElementById("totalPaletes").value;
  const removerCabecalho = document.getElementById("removerCabecalho").value;
  const multiplicador = document.getElementById("multiplicador").value;
  const unidadeBags = document.getElementById("unidadeBags").value;

  // Validação
  if (!area || !totalPaletes || !removerCabecalho || !multiplicador || !unidadeBags) {
    alert("Preencha todos os campos!");
    return;
  }

  const total = (parseInt(totalPaletes) - parseInt(removerCabecalho)) * parseInt(multiplicador) + parseInt(unidadeBags);

  document.getElementById("resultadoFinal").innerHTML = `
    <strong>Área:</strong> ${area} <br/>
    <strong>Total de Bags:</strong> ${total}
  `;

  // Salvar dados no localStorage
  const dados = {
    area,
    totalPaletes,
    removerCabecalho,
    multiplicador,
    unidadeBags
  };

  localStorage.setItem("dadosPaletes", JSON.stringify(dados));
}

function limparDados() {
  document.getElementById("area").value = "";
  document.getElementById("totalPaletes").value = "";
  document.getElementById("removerCabecalho").value = "";
  document.getElementById("multiplicador").value = "";
  document.getElementById("unidadeBags").value = "";
  document.getElementById("resultadoFinal").innerHTML = "";
  localStorage.removeItem("dadosPaletes");
}

// Carregar dados ao abrir a página
window.onload = () => {
  const dadosSalvos = JSON.parse(localStorage.getItem("dadosPaletes"));
  if (dadosSalvos) {
    document.getElementById("area").value = dadosSalvos.area;
    document.getElementById("totalPaletes").value = dadosSalvos.totalPaletes;
    document.getElementById("removerCabecalho").value = dadosSalvos.removerCabecalho;
    document.getElementById("multiplicador").value = dadosSalvos.multiplicador;
    document.getElementById("unidadeBags").value = dadosSalvos.unidadeBags;
  }
};
