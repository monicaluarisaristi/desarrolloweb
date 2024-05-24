var calcularScore = function(nombre,pos,neg){
    var porPos=(pos/100) *100;
    var porNeg=(neg/100) *100;
    var score ='';
  
    if(porPos > 90){
      score= 'A'; 
    }else if(porPos>=70 ){
     score = 'B';
    }else if(porPos >= 45){
     score = 'C';
    }else{
      score = 'D';
    }
    return `  ${nombre} tiene el score ${score}, Positivas:${porPos}%, Negativas:${porNeg}% `
  }
  
  var resultado = calcularScore('Pablo', 72,25);
  console.log(resultado);