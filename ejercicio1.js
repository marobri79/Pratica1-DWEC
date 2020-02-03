class Jugadores {
   constructor(nombre,ocupación, puntosVida=100, faccion) {
   this.nombre = nombre;
   this.ocupacion = ocupacion;
   this.puntosVida = puntosVida
   this.faccion = faccion;
   }
  
   jugadoresToString() {
   var retorno = "El nombre del jugador " + this.nombre + " su ocupación "
   + this.ocupacion + "la puntiacion es " + this.puntosVida+ "su facción es " + t
  his.faccion;
   return retorno;
   }
  } 
let Jugador1 = new jugadores("Gabby","Oficinista","235","f2");
let Jugador2 = new jugadores("Gatita","Farmaceutica","135","f1");

