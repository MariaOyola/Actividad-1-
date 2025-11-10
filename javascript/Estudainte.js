class Estudiante {
     #id;  // aqui estamos  usando los modificadores de acceso ( private)
    _nombre; 
    _apellido;   // estamos usando los atributos
    _edad; 
    _genero; 

constructor ( id, nombre, apellido, edad, genero) {
    this.#id = id; 
    this._apellido = apellido; 
    this._nombre = nombre; 
    this._edad = edad; 
    this._genero = genero; 

}
//   se usa un metodo sin parametro 
mostrarDatos() {
    console.log(`Persona ${this.#id}, ${this._apellido}, ${this._nombre}, ${this._edad}, ${this._genero},`); 
        }
//   se usa un metodo con parametro 

Duerme(Duerme) {
    console.log (`${this._nombre}, Maria duerme mas que ${Duerme},`); 
}

// aqui vamos a devolver un JSON 
toJSON() {
    return {
        id: this.#id,
        nombre: this._nombre, 
        apellido: this._apellido,
        edad: this._edad, 
        genero: this._genero
    }; 
}
get id () {
    return this.#id; 

}
get nombre () {
    return this._nombre; 
}
get apellido () {
    return this._apellido; 

}
get edad() {
    return this._edad;
}
get genero() {
    return this._genero; 
}

set id (newId) {
    if (newId > 0) {
       this.#id = newId; 
    }
}
set nombre (newNombre) {
    this._nombre = newNombre; 
}

set apellido (newApellido) {
    this._apellido = newApellido;
}
set edad ( newEdad) {
    this._edad = newEdad; 

}
set genero ( newgenero) {
    this._genero =  newgenero;  
}
}

const Maria  = new Persona(1, "Juan"," Rodriguez", 17, "Femenina"); 
// usamo el metodo JSON 
console.log (JSON.stringify(Maria)); 

// usar el metodo con parametro 

Maria.mostrarDatos(); 

Maria.Duerme(" su papá")
