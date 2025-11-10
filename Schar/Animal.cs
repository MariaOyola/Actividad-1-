public class Animal
{
    private int id;
    public string nombre;
    protected int edad;

    public Animal(int id, string nombre, int edad)
    {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    public int GetId()
    {
        return this.id;
    }

    public string GetNombre()
    {
        return this.nombre;
    }

    public int GetEdad()
    {
        return this.edad;
    }

    public void SetId(int nuevoId)
    {
        this.id = nuevoId;
    }

    public void SetNombre(string nuevoNombre)
    {
        this.nombre = nuevoNombre;
    }

    public void SetEdad(int nuevaEdad)
    {
        this.edad = nuevaEdad;
    }

    public void MostrarDatos()
    {
        Console.WriteLine("Id: " + id + " | Nombre: " + nombre + " | Edad: " + edad);
    }

    public void Comer(string comida)
    {
        Console.WriteLine("El animal " + nombre + " come " + comida);
    }

    public int Sumar(int num1, int num2)
    {
        int suma = num1 + num2;
        return suma;
    }

    public string ToJSON()
    {
        return "{ Id: " + id + ", Nombre: " + nombre + ", Edad: " + edad + " }";
    }
}
