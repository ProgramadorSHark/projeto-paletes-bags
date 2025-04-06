// Função para atualizar valor de paletes com base na área selecionada
function atualizarTotalPaletes() {
  const areaSelecionada = document.getElementById("area").value;
  const inputPaletes = document.getElementById("totalPaletes");

  switch (areaSelecionada) {
    case "armz01-l": inputPaletes.value = 1; break;
    case "armz01-c": inputPaletes.value = 2; break;
    case "armz02-l": inputPaletes.value = 3; break;
    case "armz02-c": inputPaletes.value = 4; break;
    case "armz03-l": inputPaletes.value = 5; break;
    case "armz03-c": inputPaletes.value = 6; break;
    case "armz04-l": inputPaletes.value = 7; break;
    case "armz04-c": inputPaletes.value = 8; break;
    default: inputPaletes.value = ""; break;
  }
}

// Função principal de cálculo
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

  salvarNoHistorico({ total, remover, multiplicador, bagsAvulsos, restantes, totalBags, resultadoFinal });
}

// Função para limpar todos os campos
function limparCampos() {
  document.getElementById("area").value = "";
  document.getElementById("totalPaletes").value = "";
  document.getElementById("paletesRemover").value = "";
  document.getElementById("multiplicador").value = "";
  document.getElementById("bagsAvulsos").value = "";
  document.getElementById("resultadoRestantes").innerText = "";
  document.getElementById("resultadoMultiplicacao").innerText = "";
  document.getElementById("resultadoFinal").innerText = "";
  document.getElementById("mensagemErro").innerText = "";
}

// Histórico no localStorage
function salvarNoHistorico(dados) {
  let historico = JSON.parse(localStorage.getItem("historicoPaletes")) || [];
  historico.unshift(dados);
  if (historico.length > 5) historico.pop();
  localStorage.setItem("historicoPaletes", JSON.stringify(historico));
  renderizarHistorico();
}

function renderizarHistorico() {
  const lista = document.getElementById("historico");
  lista.innerHTML = "";
  const historico = JSON.parse(localStorage.getItem("historicoPaletes")) || [];
  historico.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `#${index + 1} - Final: ${item.resultadoFinal}, Bags: ${item.totalBags}, Avulsos: ${item.bagsAvulsos}`;
    lista.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderizarHistorico);

// Exportar para PDF
function exportarPDF() {
  const resultado = document.getElementById("resultadoFinal").innerText;
  if (!resultado) {
    alert("Nada para exportar. Faça um cálculo primeiro.");
    return;
  }

  const janela = window.open("", "", "width=800,height=600");
  janela.document.write("<html><head><title>Resultado</title></head><body>");
  janela.document.write(`<h1>${document.title}</h1>`);
  janela.document.write(`<p>${document.getElementById("resultadoRestantes").innerText}</p>`);
  janela.document.write(`<p>${document.getElementById("resultadoMultiplicacao").innerText}</p>`);
  janela.document.write(`<p>${resultado}</p>`);
  janela.document.write("</body></html>");
  janela.document.close();
  janela.print();
}
