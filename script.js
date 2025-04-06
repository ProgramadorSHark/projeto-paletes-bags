function atualizarTotalPaletes() {
    const area = document.getElementById("area").value;
    const totalPaletes = document.getElementById("totalPaletes");
  
    const valores = {
      "armz01-l": 1,
      "armz01-c": 2,
      "armz02-l": 3,
      "armz02-c": 4,
      "armz03-l": 5,
      "armz03-c": 6,
      "armz04-l": 7,
      "armz04-c": 8
    };
  
    totalPaletes.value = valores[area] || "";
  }
  
  function calcular() {
    const total = parseInt(document.getElementById("totalPaletes").value);
    const remover = parseInt(document.getElementById("paletesRemover").value);
    const multiplicador = parseInt(document.getElementById("multiplicador").value);
    const avulsos = parseInt(document.getElementById("bagsAvulsos").value) || 0;
  
    if (isNaN(total) || isNaN(remover) || isNaN(multiplicador)) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }
  
    const restantes = total - remover;
    const totalBags = restantes * multiplicador;
    const final = totalBags + avulsos;
  
    document.getElementById("resultadoRestantes").innerText = `Paletes restantes: ${restantes}`;
    document.getElementById("resultadoMultiplicacao").innerText = `Total de Bags (multiplicado): ${totalBags}`;
    document.getElementById("resultadoFinal").innerText = `Total Final (com bags avulsos): ${final}`;
  }
  
  function limparCampos() {
    const ids = ["area", "totalPaletes", "paletesRemover", "multiplicador", "bagsAvulsos"];
    ids.forEach(id => document.getElementById(id).value = "");
  
    ["resultadoRestantes", "resultadoMultiplicacao", "resultadoFinal"]
      .forEach(id => document.getElementById(id).innerText = "");
  }
  