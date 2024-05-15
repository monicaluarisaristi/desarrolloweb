//ejercicio de Promedio

var promedioPablo =(14+ 8+ 16)/3;
var promedioMaria =(12+ 18+ 10)/3;

if (promedioPablo > promedioMaria){
    console.log("Pablo tiene el promedio superior");

}else if (promedioMaria> promedioPablo){
    console.log("Maria tiene el promedio superior");
}else{
    console.log("Pablo y Maria tienen promedios iguales");    
}
for(var i=1;i <=2;i++){
    if(i=== 1){
        console.log('promedio de Pablo:'+ promedioPablo);
        if(promedioPablo >13){
            console.log("Pablo esta aprobado , ");
        }else{
            console.log("Pablo esta desaprobado, ");
        }

    }else{
        console.log('Promedio de Maria: '+ promedioMaria);
        if(promedioMaria >13){
            console.log("Maria esta aprobada , "); 
        }else{
            console.log("Maria esta desaprobada, "); 
        } 
    }
}