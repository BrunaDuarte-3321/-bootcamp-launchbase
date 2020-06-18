/* Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260*/

const cadastro={
    nome: 'Rocketseat',
    foco:'Programação',
    endereco:{
        rua:'Rua Guilherme Gembala',
        numero:260
    }
}

/* Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260*/

console.log(`A empresa ${cadastro.nome} está localizada em ${cadastro.endereco.rua},${cadastro.endereco.numero}`)

