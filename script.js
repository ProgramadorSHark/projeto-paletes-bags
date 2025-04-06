function atualizarTotalPaletes() {
  const areaSelecionada = document.getElementById("area").value;
  const inputPaletes = document.getElementById("totalPaletes");

  switch (areaSelecionada) {
      case "armz01-l":
          inputPaletes.value = 1;
          break;
      case "armz01-c":
          inputPaletes.value = 2;
          break;
      case "armz02-l":
          inputPaletes.value = 3;
          break;
      case "armz02-c":
          inputPaletes.value = 4;
          break;
      case "armz03-l":
          inputPaletes.value = 5;
          break;
      case "armz03-c":
          inputPaletes.value = 6;
          break;
      case "armz04-l":
          inputPaletes.value = 7;
          break;
      case "armz04-c":
          inputPaletes.value = 8;
          break;
      default:
          inputPaletes.value = "";
          break;
  }
}

function calcular() {
  const total = parseInt(document.getElementById("totalPaletes").value) || 0;
  const remover = parseInt(document.getElementById("paletesRemover").value) || 0;
  const multiplicador = parseInt(document.getElementById("multiplicador").value) || 0;
  const bagsAvulsos = parseInt(document.getElementById("bagsAvulsos").value) || 0;

  const restantes = total - remover;
  const totalBags = restantes * multiplicador;
  const resultadoFinal = totalBags + bagsAvulsos;

  document.getElementById("resultadoRestantes").innerText = `Paletes restantes: ${restantes}`;
  document.getElementById("resultadoMultiplicacao").innerText = `Total de Bags (multiplicado): ${totalBags}`;
  document.getElementById("resultadoFinal").innerText = `Total Final (com bags avulsos): ${resultadoFinal}`;
}

function limparCampos() {
  document.getElementById("area").value = "";
  document.getElementById("totalPaletes").value = "";
  document.getElementById("paletesRemover").value = "";
  document.getElementById("multiplicador").value = "";
  document.getElementById("bagsAvulsos").value = "";
  document.getElementById("resultadoRestantes").innerText = "";
  document.getElementById("resultadoMultiplicacao").innerText = "";
  document.getElementById("resultadoFinal").innerText = "";
}
