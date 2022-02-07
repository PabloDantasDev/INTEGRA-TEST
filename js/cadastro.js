let user = document.querySelector("#inputUsuario")
let validUser =false//validando campo preenchido

let senha = document.querySelector("#inputSenha")
let validSenha =false//validando campo preenchido

let repitaSenha = document.querySelector("#inputRepitaSenha")
let validRepitaSenha =false//validando campo preenchido
let instru =document.querySelector('#instrucao')

let erro=document.querySelector('#erro')
let sucesso=document.querySelector('#sucesso')



//VALIDAÇÃO CAMPO USUARIO
user.addEventListener('keyup',()=>{
if(user.value.length <=5){

   inputUsuario.setAttribute('style','color:red') 
   instrucao.setAttribute('style','color:red')
    instrucao.innerHTML=("Insira no minimo 5 Caracteres")
    validUser =false//validando campo preenchido

}else{
    inputUsuario.setAttribute('style','color:green') 
    instrucao.setAttribute('style','display:none')
    instrucao.innerHTML=("")
    validUser =true//validando campo preenchido
}


})

//VALIDAÇÃO CAMPO SENHA
senha.addEventListener('keyup',()=>{
    if(senha.value.length <=6){
    
       inputSenha.setAttribute('style','color:red') 
       instrucao.setAttribute('style','color:red')
        instrucao.innerHTML=("Insira no minimo 7 Caracteres")
        validSenha =false//validando campo preenchido
    
    }else{
        inputSenha.setAttribute('style','color:green') 
        instrucao.setAttribute('style','display:none')
        instrucao.innerHTML=("")
         validSenha =true//validando campo preenchido
    }
    
    
    })

//VALIDAÇÃO CAMPO SENHA
repitaSenha.addEventListener('keyup',()=>{
    if(inputRepitaSenha.value!=inputSenha.value){
    
        inputRepitaSenha.setAttribute('style','color:red') 
        instrucao.setAttribute('style','color:red')
        instrucao.innerHTML=("Senha Diferente")
        validRepitaSenha =false
    }else{
        
        inputRepitaSenha.setAttribute('style','color:green') 
        instrucao.setAttribute('style','display:hidde',)
        instrucao.setAttribute('style','color:green')
        instrucao.innerHTML=("Senha Autenticada")
        validRepitaSenha=true
    }
    
    
    })


//FUNÇÃO CADASTRAR USUARIO---------------------------------------
function cadastrar(){

if(validUser&&validSenha&&validRepitaSenha ){
 //CADASTRANDO USUARIO: 
 let listaUser=JSON.parse(localStorage.getItem('listaUser') || '[]')
 // listaUser transforma dados dos inputs em json e dentro do localStorage incrementa 
 //a uma lista existente de usuario ou insere em uma lista vazia se nao tiver usuario cadastrado

 listaUser.push(
    {
        nome: user.value,
        senhaCad: senha.value,
        repitaSenhaCad: repitaSenha.value

    }

        //criando um objeto para da o push dentro do local storage
 )

         //salvando objeto com valores dentro do localstorage

    localStorage.setItem('listaUser',JSON.stringify(listaUser))
    //localStorage coloca os itens adicionado dentro da lista de usuario no formato json.





    sucesso.setAttribute('style','display: block')
    sucesso.innerHTML='Cadastrando Usuário....'

    erro.setAttribute('style','display:none')
    erro.innerHTML=''

    setTimeout(()=>{
        sucesso.innerHTML='Cadastrado com Sucesso'
        
    },3000)

    setTimeout(()=>{
        window.location.href='index.html'
    },4000)
    

}else{
    erro.setAttribute('style','display:block')
    erro.innerHTML='Preencha os dados corretamente'

    sucesso.setAttribute('style','display: none')
    sucesso.innerHTML=''
   
   
}
    
}









//AÇÃO MOSTRAR SENHA ICONES OLHO

let olho = document.querySelector('.fa-eye')


olho.addEventListener('click',()=>{

    let inputSenha=document.querySelector(".senha")

    if(inputSenha.getAttribute('type')=='password'){

        inputSenha.setAttribute('type','text')
        
    }else{
        inputSenha.setAttribute('type','password')
    }
})
 //VER SENHA REPITA SENHA
let rsenha= document.querySelector('.eyee')
    rsenha.addEventListener('click',()=>{

    let inputSenha=document.querySelector(".rsenha")

    if(inputSenha.getAttribute('type')=='password'){

        inputSenha.setAttribute('type','text')
        
    }else{
        inputSenha.setAttribute('type','password')
    }
})


