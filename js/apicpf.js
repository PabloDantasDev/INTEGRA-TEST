//--------------------------API CPF--------------------------------------------------------------   




const pesquisaCPF = async (msg)=> {
 

    const preencheformulario =(msg)=>{
  
      document.getElementById('nome').value=msg.msg.nome
      document.getElementById('sexo').value=msg.msg.sexo
      document.getElementById('nascimento').value=msg.msg.nascimento
      document.getElementById('endereco').value=msg.msg.enderecos[0].endereco
      document.getElementById('ccidade').value=msg.msg.enderecos[0].cidade
      document.getElementById('bbairro').value=msg.msg.enderecos[0].bairro
      document.getElementById('cccep').value=msg.msg.enderecos[0].cep
      document.getElementById('eestado').value=msg.msg.enderecos[0].estado
      document.getElementById('nnumero').value=msg.msg.enderecos[0].numero
    }

  
    const valorCPF= document.getElementById('Valocpf').value;
        
     $.ajax({
          url: `https://searchlock.me/api/v1/SEARCHLOCK/cpf/${valorCPF}`,
          
  
          beforeSend: function (xhr) {
            
            xhr.setRequestHeader('Authorization',
             'Bearer APP_3b69d078903e239ee5679e34cb6135a1', );     
        }, })
        
        .done(function(msg) {
          var msg =JSON.parse(msg)
          console.log(msg);
          preencheformulario(msg);
        })
      }
  
         const preencheformulario = (msg)=>{
  
        
      }
  
  document.getElementById('pcpf').addEventListener('click',pesquisaCPF);