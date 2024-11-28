const array = [6, 3, 55, 49, 2, 90, 29, 42, 46, 10];

let mayor = array[0];

for(let i = 1; i < array.length; i++){
    if(mayor < array[i])
    mayor = array[i];
}

document.write('El mayor número del arreglo es: ' + mayor);