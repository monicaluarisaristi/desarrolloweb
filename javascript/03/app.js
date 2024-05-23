
function calcularEdad(yearNacimiento) {
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var edad = añoActual - yearNacimiento;
    return edad;
}

function calcularTiempoJubilacion(yearNacimiento, nombre) {
    var edad = calcularEdad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log(nombre + ' le faltan ' + yearJubilacion + ' años para su jubilación.');
}

calcularTiempoJubilacion(1962, 'Monica');


