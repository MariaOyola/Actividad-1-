class Main 
{
    static void Main(string[] args)
    {
        Animal leon = new Animal(2, "Pedro", 5);
        Console.WriteLine("El león:");
        leon.MostrarDatos();

        Animal perro = new Animal(3, "David", 4);
        perro.Comer("purina");

        Console.WriteLine("La suma es de " + leon.Sumar(2, 6));

        Console.WriteLine("JSON de Animal:");
        Console.WriteLine(leon.ToJSON());

        console.WriteLine("-----------------------"); 

        Console.WriteLine("Mostrar los datos:");

        Calculadora cacion = new Calculadora(true, true, 2);
        Calculadora cama = new Calculadora(false, false, 1);

           cacion.MostrarDatos();
            cama.MostrarDatos();
     
        Console.WriteLine("Mostrar multiplicación:");
        Console.WriteLine("La multiplicación es: " + cacion.Calcula(60, 2));

        Console.WriteLine("JSON como se usa:");
        Console.WriteLine(cama.ToJSON());
      

           Samuel samuel = new Samuel(1, 22, true);
        samuel.MostrarDatos();
        Console.WriteLine("ID desde acceso directo: " + samuel.id);

        Maria maria = new Maria(2, 11, false);
        Console.WriteLine(maria.ToJSON());

        Karol karol = new Karol(3, 33, false);
        Console.WriteLine(karol.ToJSON());

        Juan juan = new Juan(4, 22, true);
        Console.WriteLine(juan.ToJSON());

        Pauna pauna = new Pauna(5, 12, false);
        Console.WriteLine(pauna.ToJSON());
    }

}
    