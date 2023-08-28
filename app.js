const input1 = Number(prompt("Digite o primeiro número: "));
const input2 = Number(prompt("Digite o segundo número: "));

if (!isNaN(input1) && !isNaN(input2)) {
  alert(`A soma dos dois números é: ${input1 + input2}`);
  alert(`A subtração dos dois números é: ${input1 - input2}`);
  alert(`A multiplicação dos dois números é: ${input1 * input2}`);
  alert(`A divisão dos dois números é: ${(input1 / input2).toFixed(2)}`);
  alert(`O resto da divisão dos dois números é: ${input1 % input2}`);

  if ((input1 + input2) % 2 === 0) {
    alert(`A soma dos dois números é par: ${input1 + input2}`);
  }

  if (input1 !== input2) {
    alert(`Os números inseridos são diferentes.`);
  }
}
