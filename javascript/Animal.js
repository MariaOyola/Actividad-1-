class Animal {  // clase 
  
  #id; //  Atributo privado con modificadores de acceso
  race;
  color;  //  Atributos públicos
  age;     
  gender;
  name;

  //  Constructor: se ejecuta al crear el objeto
  constructor(id, name, race, color, age, gender) {
    this.#id = id;         //  binario
    this.name = name;      // texto (String)
    this.race = race;      // texto (String)
    this.color = color;    // texto (String)
    this.age = age;        // numérico
    this.gender = gender;  // texto ("Macho" o "Hembra")
  }

  // Método sin parámetro
  mostrarDatos() {
    console.log(`Animal ${this.name}, Raza: ${this.race}, Color: ${this.color}, ID: ${this.#id}, Edad: ${this.age}, Género: ${this.gender}`);
  }

  // Método con parámetro
  alimentoAnimal(comida) {
    console.log(`${this.name} está comiendo ${comida}.`);
  }

  // Método que devuelve un JSON (objeto completo)
  toJSON() {
    return {
      id: this.#id,
      name: this.name,
      race: this.race,
      color: this.color,
      age: this.age,
      gender: this.gender
    };
  }

  //  Getters (encapsulación)
  get id() {
    return this.#id;
  }

  get name() {
    return this.name;
  }

  get race() {
    return this.race;
  }

  get color() {
    return this.color;
  }

  get age() {
    return this.age;
  }

  get gender() {
    return this.gender;
  }

  // Setters (modificar valores)
  set id(newId) {
    if (newId > 0) {
      this.#id = newId;
    }
  }

  set name(newName) {
    this.name = newName;
  }

  set race(newRace) {
    this.race = newRace;
  }

  set color(newColor) {
    this.color = newColor;
  }

  set age(newAge) {
    this.age = newAge;
  }

  set gender(newGender) {
    this.gender = newGender;
  }
}

//  crear el objeto (const es una contante que declara valores  que no cambia el valor de ejecucion) 
// Objeto Gat
const gat = new Animal(1, "Gato", "Gato", "Gris", 3, "Macho");

// el metodo 

gat.mostrarDatos(); 
gat.alimentoAnimal("nada"); 

// para el join 

console.log(JSON.stringify(gat)); 
