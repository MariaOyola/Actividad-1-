public class Animal {

    private int id; 
    public  String nombre; 
    protected  int edad; 

    public Animal (int id, String nombre, int edad) {
        this.id = id; 
        this.nombre = nombre; 
        this.edad  = edad; 

    }
public int getId () {
    return this.id; 

}
public String getnombre() {
    return this.nombre; 
}
public int getEdad () {
    return this.edad; 

}
public void setId (int nuevoid) {
    this.id = nuevoid; 

}
public void setNombre (String nuevonombre) {
    this.nombre = nuevonombre; 
}
public void setEdad (int nuevoEdad ) {
    this.edad = nuevoEdad; 
}

public void mostrarDatos  () {
    System.out.println("id: " + id + "nombre: " + nombre + "edad:" + edad);
}
public void  comer (String come) {
  System.out.println("Animal: " + nombre + " le gusta comer " + come);
  
}
public int sumar (int num1, int num2) {
    int suma = num1 + num2; 
    return suma; 
}

public String toJSON() {
    return "{" + "id : " + id + " Nombre : " + nombre + "edad: " + edad + "}"; 

    
}


    
}