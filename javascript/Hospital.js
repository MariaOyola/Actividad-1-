class Hospital {
    #id; 
    nombre; 
    direccion; 
    cantidad_salas; 
    tiene_planta; 

    constructor(id, nombre, direccion, cantidad_salas, tiene_planta) {
        this.#id = id;
        this.nombre; 
        this.cantidad_salas = cantidad_salas; 
        this.direccion = direccion; 
        this.tiene_planta = tiene_planta; 

    }

    mostrarDatos () {
 console.log (`Hospital ${this.#id}, nombre ${this.nombre}, cantidad de salas ${this.cantidad_salas},direcion  ${this.direccion}, tiene panel  ${this.tiene_planta}`);
}

plata(tiene_planta) {
    if (tiene_planta) {
        return `${this.nombre} este Hospital si tiene planta`; 


    } else {
        return `${this.nombre} este Hospital no tiene planta`; 
    }
}
    toJSON () {
        return {
            id: this.#id,
            nombre: this.nombre,
            direccion: this.direccion, 
            cantidad_salas: this.cantidad_salas,
            tiene_planta: this.tiene_planta
      };

    }
    get id() {
        return this.#id; 
      }
    get nombre() {
        return this.nombre; 
        
    }
      get direccion() {
        return this.direccion; 
        
    }
      get cantidad_salas() {
        return this.cantidad_salas;   
    }
       get tiene_planta() {
        return this.tiene_planta; 
        
    }
      set id(nuevoid) {
         this.nuevoid; 
        
    }
 set nombre(nuevoNombre) {
     this.nuevoNombre; 

}

 set direccion(nuevoDireccion) {
    this.nuevoDireccion; 

}
set cantidad_salas(nuevaCantidad) {
    this.nuevaCantidad; 


} 
set tiene_planta(nuevapanel ) {
    this.nuevapanel; 
}
    }

    const Canaimas = new Hospital (4, "canaimas", "Caller 43 C Sur # 23 -04", 34, true); 
    const Las_Palmas = new Hospital (6, "Las palmas", "carrera 52 lote 26", 44, false ); 

    Canaimas.mostrarDatos();
   
    console.log(Las_Palmas.plata(Las_Palmas.tiene_planta));
    console.log(JSON.stringify(Canaimas.tiene_planta)); 
