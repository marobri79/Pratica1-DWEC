class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let manzana = new Consumible('Manzana');

let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);

// Implementación Planta Curativa

class PlantaCurativa extends Consumible{

    constructor(nombre, poder) {

    super(nombre);
    this.poder=poder;
      
    }

    consumir(jugador){
        if( (this.puntosVida + this.poder) < this.maxPuntosVida){
            this.puntosVida = this.puntosVida + this.poder;
        }else{
            this.puntosVida = this.maxPuntosVida;
        }
        console.log(jugador.nombre + " consume " + this.nombre + " y se cura.");
    }

}

let menta = new PlantaCurativa('menta');

let juan = {
    nombre: 'Juan',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}

juan.consumir(menta);
