// Estrutura de repetição

//Funçoes

const alunosTurmaA =[
    {
        nome :"Bruna",
        nota : 7
    },
    {
        nome: "Pedro",
        nota: 5
    },
    {
        nome:"Vanessa",
        nota: 10
    },
    {
        nome : " Lucasss",
        nota : 55
    }
]

const alunosTurmaB =[
    {
        nome :"Marilia",
        nota : 5
    },
    {
        nome: "Silas",
        nota: 1
    },
    {
        nome:"Van",
        nota: 0
    },
    {
        nome : ' Novo Aluno',
        nota: 5
    },
    {   
        nome : "Alen",
        nota: 100

    }
]

function calculaMedia(alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){

        soma += alunos[i].nota
    
    }
    const media = soma / alunos.length 
    return media

}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)




 //Se a média for maior que 5, parabenizar a turma 

function enviaMensagem(media,turma){

    if ( media > 5){
        console.log(`A media da turma ${turma} e ${media}. Parabens`)
    } else {
        console.log ( `  A media da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1,' turma A')
enviaMensagem(media2, 'turma B')