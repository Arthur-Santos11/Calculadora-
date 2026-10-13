

alert("oi")

const visor = document.querySelector(".visor");
visor.addEventListener("input",() =>{
  
  
  visor.value = visor.value.replace(/[^0-9+\-x%.()]/g,"");
  
  
});


const botoes = document.querySelectorAll(".btn:not(#delete,#somar)")


botoes.forEach( function (botao) {
  
  botao.addEventListener("click", function(){
    
    const valor = botao.querySelector("p").textContent;
   
   visor.value += valor;
   
  });

});


const apagar = document.getElementById("delete")

apagar.addEventListener("click", function(){
  
 visor.value = " "; 
  
  
});


const igual = document.getElementById("somar");

igual.addEventListener("click", function(){
  
  let conta = visor.value;
  
  conta = conta.replace(/x/g,"*");
  conta = conta.replace(/%/g,"/");
  
  try{
    
    visor.value = eval(conta);
    
    
  } catch(error){
    
    visor.value = "Error";
    
    setTimeout(function (){
      visor.value = " "; }, 1000);
      
      
      
  }

  

  
  
});