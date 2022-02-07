
//AÇÃO MOSTRAR SENHA ICONES OLHO

let olho = document.querySelector('.fa-eye')

olho.addEventListener('click',()=>{

    let inputSenha=document.getElementById("senha")

    if(inputSenha.getAttribute('type')=='password'){

        inputSenha.setAttribute('type','text')
        
    }else{
        inputSenha.setAttribute('type','password')
    }
})
 
  
    
function entrar(){
//pegando campos do formulario de login
let user = document.querySelector('#user')

let senha = document.querySelector('#senha')
let validSenha =false//validando campo preenchido

//pegando a div para mostrar erro de autenticação
let erro= document.querySelector('#erro')
//cria um ARRAY vazio para pega lista de usuarios cadastrado e preencher o array com os dados
let listaUser=[]


//cria um objeto para desistrutura o array preenchido e tranforma em objeto para ser lido
let userValid = {

    nome: '',
    user:'',
    senha:'',

}
//recevebdo lista de usuarios do array a cima como objeto e usando JSON.parse para um objeto
listaUser=JSON.parse(localStorage.getItem('listaUser'))

//forEach para fazer a varredura dentro da lista de usuario item por item
listaUser.forEach((item)=>{

    //apos a varredura é impregada a condição de
    //se o valor digitado no input usuario for igual ao item dentro do local storage
    //é igual ao que esta no local storage
    //e se a senha digitada é igual ao item que esta no localStorage
    if(user.value == item.nome && senha.value == item.senhaCad){

        //se os valores usuario e senha forem iguais no input e no local storage apos
        //a varredura, entao os dados ira preencher o objeto userValid que ira conter
        //os dados iguais no input e no localstorage
        userValid={
            nome: item.nome,
            senha: item.senhaCad
            
        }
        
    }

})

if (user.value == userValid.nome && senha.value == userValid.senha) {

    
        window.location.href='home.html'

     let token=Math.random().toString(25).substring(2)+Math.random().toString(25).substring(2)+Math.random().toString(25).substring(2)+Math.random().toString(25).substring(2)+Math.random().toString(25).substring(2)
     localStorage.setItem("token",token)

    //seta o nome do usuario logado na tela
    localStorage.setItem('userLogado',JSON.stringify(userValid))

} else {
    
    erro.setAttribute('style','display:block')
    erro.innerHTML='Usuario Ou Senha Incorretos'
    user.focus()
}

}