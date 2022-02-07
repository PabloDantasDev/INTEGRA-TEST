let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

//seta nome na div logado no site
let userLogado=JSON.parse( localStorage.getItem('userLogado'))

//let logado=document.querySelector('#logado')
logado.innerHTML= ` Olá ${userLogado.nome} ` 



if(localStorage.getItem('token')==null){
   // alert('Voce Precisa está autenticado para acessar essa pagina')
   // window.location.href='login.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='index.html'
}


/*---------CONSULTA CEP API-------------------------*/




const limpaCampos=(endereco)=>{
    document.getElementById('cep').value=''
    document.getElementById('logradouro').value =endereco=''
    document.getElementById('complemento').value =endereco=''
    document.getElementById('bairro').value =endereco=''
    document.getElementById('cidade').value =endereco=''
    document.getElementById('estado').value =endereco=''

}

const preencheFormulario=(endereco)=>{

    document.getElementById('logradouro').value =endereco.logradouro
    document.getElementById('complemento').value =endereco.complemento
    document.getElementById('bairro').value =endereco.bairro
    document.getElementById('cidade').value =endereco.localidade
    document.getElementById('estado').value =endereco.uf

    let aviso = "Sem Complemento"
    if(endereco.complemento === ''){
    document.getElementById('complemento').value = aviso;
}


}


const pesquisaCep = async() => {

    const cep = document.getElementById('numeroCep').value;
   
   
    const url = `https://viacep.com.br/ws/${cep}/json/`;
        const dados= await fetch(url);
        const endereco =await dados.json();
        preencheFormulario(endereco)
        
        
        
    }
    

document.getElementById('cepbtn').addEventListener('click',pesquisaCep);


