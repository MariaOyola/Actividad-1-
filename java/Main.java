public class Main {
    public static void main(String[] args) {
        Animal leon = new Animal(2, "pedro", 5) ; 

        System.out.println("E leon");
        leon.mostrarDatos();
        

        Animal  perro  = new Animal(3, "david", 4 ); 
        perro.comer("purina");

        System.out.println("La suma es de " + leon.sumar(2, 6));

        // como se usa el Json 
        System.out.println("JSON DE ANIMAL");
        System.out.println(leon.toJSON());

        System.out.println("----------------------------------------------------------------------------------");
         
        System.out.println("Mostarr los datos");

        calculadora cacion = new calculadora(true, true, 2); 

        calculadora cama = new calculadora(false, false, 1); 

        cacion.mostrarDatos();
        cacion.mostrarDatos();

        System.out.println("mostrar   multiplicacion ");

        System.out.println("la multiplicaciones: " +  cacion.calcula(60, 2));

        System.out.println("JJSON COMO SE USA ");
        System.out.println(cama.toJSON());
System.out.println("----------------------------------------------------------------------------");
     Samuel samuel = new Samuel(1, 22, true);

        samuel.mostrarDatos();

        System.out.println("ID desde acceso directo: " + samuel.id);

        Maria maria = new Maria(2, 11, false) ; 
        System.out.println(maria.toJSON());

         karol karol = new karol(3, 33, false); 
         System.out.println(karol.toJSON());

         Juan juan = new Juan(4, 22, false); 
         System.out.println(juan.toJSON());

         Pauna pauna = new Pauna(5, 12, false); 
         System.out.println(pauna.toJSON());

            
        }
    }


    
