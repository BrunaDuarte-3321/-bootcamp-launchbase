// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if ( imc >= 30 ){
    console.log(`${nome} você esta acima do peso `)
} else {
    console.log(`${nome} você não esta acima do peso`)
}

