function calcular() {
    // Pegando valores dos inputs
    let totalPaletes = Number(document.getElementById("totalPaletes").value);
    let paletesRemover = Number(document.getElementById("paletesRemover").value);
    let multiplicador = Number(document.getElementById("multiplicador").value);
    let bagsAvulsos = Number(document.getElementById("bagsAvulsos").value);

    // Validando se os valores são válidos
    if (totalPaletes <= 0 || isNaN(totalPaletes)) {
        alert("Insira um valor válido para o total de paletes.");
        return;
    }

    if (paletesRemover < 0 || paletesRemover > totalPaletes || isNaN(paletesRemover)) {
        alert("A quantidade de paletes a remover deve estar entre 0 e o total disponível.");
        return;
    }

    if (multiplicador <= 0 || isNaN(multiplicador)) {
        alert("O multiplicador deve ser maior que 0.");
        return;
    }

    if (bagsAvulsos < 0 || isNaN(bagsAvulsos)) {
        alert("As unidades de bags avulsos devem ser no mínimo 0.");
        return;
    }

    // Calculando os paletes restantes
    let paletesRestantes = totalPaletes - paletesRemover;

    // Multiplicando pelo valor informado
    let resultadoMultiplicacao = paletesRestantes * multiplicador;

    // Soma dos bags avulsos ao total final
    let resultadoFinal = resultadoMultiplicacao + bagsAvulsos;

    // Exibindo os resultados na página
    document.getElementById("resultadoRestantes").innerText = `Paletes Restantes: ${paletesRestantes}`;
    document.getElementById("resultadoMultiplicacao").innerText = `Resultado Multiplicado (x${multiplicador}): ${resultadoMultiplicacao}`;
    document.getElementById("resultadoFinal").innerText = `Total Final (Multiplicação + Bags Avulsos): ${resultadoFinal}`;
}
