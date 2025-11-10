public class calculadora {

    public boolean calcular; // suma, resta
    protected boolean electirca; 
    private int id; 

 public calculadora (boolean calculadora,boolean electirca, int id  ) {
    this.calcular = calculadora; 
    this.electirca = electirca; 
    this.id = id; 


 }
 public boolean getCalculr(  ) {
    return this.calcular; 
 }
 public boolean getelectrico(  ) {
    return this.electirca; 
  }

      public int  getid(  ) {
    return this.id; 

      }
      public void setcalcular(boolean nuevacalculadora) {
        this.calcular = nuevacalculadora;
      }
       public void setelectrico (boolean nuevoElectrico) {
        this.electirca =  nuevoElectrico; 

       }
       public void setId (int nuevoid) {
    this.id = nuevoid; 

       }

       public void mostrarDatos()  {
    System.out.println("calcular:" + calcular + "electrica" + electirca + "id " + id );

       }
       public int calcula (int a, int b) {
        int resultado = a * b;  
        return resultado; 


       }
       public String toJSON () {
        return "calcular: " + calcular + "Electrica: " + electirca + "id:  " + id; 
          }
       }
    