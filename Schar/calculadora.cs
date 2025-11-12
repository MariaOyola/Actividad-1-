using System;

public class Calculadora
{
    public bool Calcular { get; set; }    
    protected bool Electrica { get; set; }
    private int Id { get; set; }           
  
    public Calculadora(bool calcular, bool electrica, int id)
    {
        this.Calcular = calcular;
        this.Electrica = electrica;
        this.Id = id;
    }

 
    public bool GetCalcular()
    {
        return this.Calcular;
    }

    public bool GetElectrica()
    {
        return this.Electrica;
    }

    public int GetId()
    {
        return this.Id;
    }

    public void SetCalcular(bool nuevoCalcular)
    {
        this.Calcular = nuevoCalcular;
    }

    public void SetElectrica(bool nuevoElectrica)
    {
        this.Electrica = nuevoElectrica;
    }

    public void SetId(int nuevoId)
    {
        this.Id = nuevoId;
    }


    public void MostrarDatos()
    {
        Console.WriteLine($"Calcular: {Calcular} | Eléctrica: {Electrica} | Id: {Id}");
    }

    public int Calcula(int a, int b)
    {
        int resultado = a * b;
        return resultado;
    }

    
    public string ToJSON()
    {
        return $"{{\"calcular\": {Calcular}, \"electrica\": {Electrica}, \"id\": {Id}}}";
    }
}
