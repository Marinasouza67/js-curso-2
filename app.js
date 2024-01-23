let titulo = document.querySelector ("h1");
titulo.innerHTML= " Hora do desafio";

function  ExibirMensagemNoConsole(){
    console.log = ("o botão foi clicado");
}
function ExibirAlerta (){
    alert = ("Eu amo JS ");
}
  function ExibirPrompt(){
     let Nomedacidade=  prompt ("Digite o nome da cidade que você mais gosta");
      alert = ( "Estive em ${nomedacidae} e lebrei de voce");
  } 

    function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}
