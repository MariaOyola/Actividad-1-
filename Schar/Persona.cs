public abstract class Persona
{
    public int id;
    public int edad;
    public bool genero;

    public Persona(int id, int edad, bool genero)
    {
        this.id = id;
        this.edad = edad;
        this.genero = genero;
    }

    public int GetId()
    {  return this.id;
    }

    public int GetEdad()
    {  return this.edad;
    }

    public bool GetGenero()
    {
  return this.genero;
    }

    public void SetId(int nuevoId)
    {
 this.id = nuevoId;
    }

    public void SetEdad(int nuevaEdad)
    { this.edad = nuevaEdad;
    }

    public void MostrarDatos()
    {
 Console.WriteLine("ID: " + id + " | Edad: " + edad + " | Género: " + (genero ? "Masculino" : "Femenino"));
    }

    public int Resta(int a, int b)
    {
        int resultado = a - b;
        return resultado;
    }

    public string ToJSON()
    { return "{ id: " + id + ", edad: " + edad + ", genero: " + genero + " }";
    }
}
