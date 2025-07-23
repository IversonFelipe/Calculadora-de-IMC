function parseValor(valor, isAltura = false) {
  valor = valor.replace(",", ".").trim();
  if (!valor.includes(".") && isAltura && valor.length >= 3) {
    valor =
      valor.slice(0, valor.length - 2) + "." + valor.slice(valor.length - 2);
  }
  return parseFloat(valor);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II";
  return "Obesidade grau III (mórbida)";
}

function calcularIMC() {
  const pesoInput = document.getElementById("peso").value;
  const alturaInput = document.getElementById("altura").value;

  try {
    const peso = parseValor(pesoInput, false);
    const altura = parseValor(alturaInput, true);

    const imc = peso / (altura * altura);
    let classificacao = classificarIMC(imc);

    if (classificacao === "Obesidade grau III (mórbida)") {
      classificacao = `<span class="perigo">${classificacao}</span>`;
    }

    document.getElementById("resultado").innerHTML = `IMC: ${imc.toFixed(
      2
    )}<br>Classificação: ${classificacao}`;
  } catch (e) {
    document.getElementById("resultado").innerText =
      "Erro no cálculo. Verifique os dados.";
  }
}
