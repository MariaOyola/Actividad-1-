public abstract class Persona {

    public int id;
    public int edad;
    public boolean genero;

    
    public Persona(int id, int edad, boolean genero) {
        this.id = id;
        this.edad = edad;
        this.genero = genero;
    }

  
    public int getId() {
        return this.id;
    }

    public int getEdad() {
        return this.edad;
    }

    public boolean getGenero() {
        return this.genero;
    }

    public void setId(int nuevoId) {
        this.id = nuevoId;
    }

    public void setEdad(int nuevaEdad) {
        this.edad = nuevaEdad;
    }

    public void mostrarDatos() {
        System.out.println("ID: " + id + " | Edad: " + edad + " | Género: " + (genero ? "Masculino" : "Femenino"));
    }
        public int resta (int a, int b) {
            int resultado = a - b;
            return  resultado;  

    }
    public String toJSON() {
        return "id: " + id + "edad: " + edad + "genero: " + genero; 

}
}


