// ejercicio de  IMC

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;


var IMCLuis =pesoLuis / alturaLuis * alturaLuis;
var IMCCarlos = pesoCarlos / alturaCarlos *alturaCarlos;

var comparacion = IMCCarlos > IMCLuis;
console.log('¿El IMC de Carlos es superior al de luis? :' + comparacion);