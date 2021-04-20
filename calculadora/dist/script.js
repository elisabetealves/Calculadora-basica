var primeiroValor = parseInt(prompt("Insira o primeiro valor: "))
var segundoValor = parseInt(prompt("Insira o primeiro valor: "))

var operacao = Number(prompt(" Digite 1 = divisão, 2 = multiplicação, 3 = soma, 4 = subtração"))

  if( operacao == 1){
    var resultado = primeiroValor / segundoValor
  
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
  
  } else  if( operacao == 2){
    var resultado = primeiroValor * segundoValor
  
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
  
  } else if( operacao == 3){
    var resultado = primeiroValor + segundoValor
  
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
  
  } else if( operacao == 4){
    var resultado = primeiroValor - segundoValor
  
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  
  } else {
    document.write("<h2> Opção inválida </h2>")
  }