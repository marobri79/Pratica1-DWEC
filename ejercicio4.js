let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

// Obtener las puntuaciones filtradas
puntuaciones = puntuaciones.filter(function(cadaPuntuacion){
    return cadaPuntuacion.puntuacion > 100;
});

// Ordenar de mayor a menor
puntuaciones = puntuaciones.sort(function(elem1,elem2){
    return elem2.puntuacion-elem1.puntuacion;
});

// Imprimir en pantalla los resultados
console.log(puntuaciones);

