const dist = parseInt(prompt('Ingrese una distancia en números:', ''));

if(dist < 0) {
    document.write('La distancia ingresada no es válida.');
} else if(dist < 1000) {
    document.write('El medio de transporte adecuado es a pie.');
} else if(dist >= 1000 && dist < 10000) {
    document.write('El medio de transporte adecuado es la bicicleta.');
} else if(dist >= 10000 && dist < 30000) {
    document.write('El medio de transporte adecuado es el colectivo.');
} else if(dist >= 30000 && dist < 100000) {
    document.write('El medio de transporte adecuado es el auto.');
} else {
    document.write('El medio de transporte adecuado es el avión.');
}