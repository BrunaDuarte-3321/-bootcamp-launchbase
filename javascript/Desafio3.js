//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  // Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

  /* Carlos trabalha com HTML, CSS
    Jarmine trabalha com JavaScript, CSS
    Tuane trabalha com HTML, Node.js*/

    function verLista( usuarios){

        let a = 0;

        for ( let a = 0 ; a < usuarios.length;a++){
            console.log(`${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias}`)
      
        }
        return a
        
    }
 
    
verLista(usuarios);