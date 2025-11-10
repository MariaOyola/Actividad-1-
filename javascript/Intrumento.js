class Instrumento { 
  #id;       // privado
  #costo;    // privado
  nombre; 
  electrico;

  
  constructor(id, nombre, electrico, costo) {
    this.#id = id;            // numérico o binario
    this.nombre = nombre;     // texto
    this.electrico = electrico; // booleano
    this.#costo = costo;      // numérico
  }

  //  Método sin parámetro (void)
  mostrarInformacion() {
    console.log(`ID: ${this.#id}, Costo: ${this.#costo}, Eléctrico: ${this.electrico}, Nombre: ${this.nombre}`);
  }

  //  Método con parámetro y return
  electricos(es_electrico) {
    if (es_electrico) {
      return `${this.nombre} es un instrumento eléctrico `;
    } else {
      return `${this.nombre} no es un instrumento eléctrico `;
    }
  }

  toJSON() {
    return {
      id: this.#id,
      costo: this.#costo,
      nombre: this.nombre,
      electrico: this.electrico
    };
  }


  get id() { return this.#id; }
  get costo() { return this.#costo; }
  get nombre() { return this.nombre; }
  get electrico() { return this.electrico; }


  set id(nuevoId) { this.#id = nuevoId; }
  set costo(nuevoCosto) { this.#costo = nuevoCosto; }
  set nombre(nuevoNombre) { this.nombre = nuevoNombre; }
  set electrico(nuevoElectrico) { this.electrico = nuevoElectrico; }
}


const guitarra = new Instrumento(3, "Guitarra eléctrica", true, 5000);
const violin = new Instrumento(4, "Violin", false, 300);


guitarra.mostrarInformacion();
violin.mostrarInformacion();

console.log(violin.electricos(violin.electrico));  // usa el atributo booleano
console.log(guitarra.electricos(guitarra.electrico));

console.log(JSON.stringify(guitarra)); // ver en formato JSON


