/* Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
 Essa função deve retornar um boolean true/false.*/

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  
    function verLista( usuarios){

        let a = 0;

        for ( let a = 0 ; a < usuarios.length;a++){
            console.log(`${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias}`)
      
        }
        return a
        
    }

    verLista( usuarios)


    function checaSeUsuario(usuario) {
        for (let tecnologia of usuario.tecnologias) {
            if (tecnologia == 'CSS') 
            return true
        }
    
        return false
    }
    
    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuario(usuarios[i])
    
        if(usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        }
    }
   
    
        


   


  


