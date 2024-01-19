//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const saldoAtual = parseFloat(1.252);
const valorDeposito = parseFloat(5450.00);
const valorRetirada = parseFloat(10000.00);

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada;
//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
console.log(`Saldo atualizado na conta: ${saldoAtualizado.toFixed(1)}`);