public class Instrumento {


    private int id;
    private String tipo;
    private String categoria;
    protected boolean electrico;
    public String color;

    public Instrumento(int id, String tipo, String categoria, boolean electrico, String color) {
        this.id = id;
        this.tipo = tipo;
        this.categoria = categoria;
        this.electrico = electrico;
        this.color = color;
    }


    public int getId() {
        return this.id;
    }

    public String getTipo() {
        return this.tipo;
    }

    public String getCategoria() {
        return this.categoria;
    }

    public boolean isElectrico() {
        return this.electrico;
    }

    public String getColor() {
        return this.color;
    }

 
    public void setId(int nuevoId) {
        this.id = nuevoId;
    }

    public void setTipo(String nuevoTipo) {
        this.tipo = nuevoTipo;
    }

    public void setCategoria(String nuevaCategoria) {
        this.categoria = nuevaCategoria;
    }

    public void setElectrico(boolean nuevoElectrico) {
        this.electrico = nuevoElectrico;
    }

    public void setColor(String nuevoColor) {
        this.color = nuevoColor;
    }

    
    public void mostrarDatos() {
        System.out.println("id: " + id + " tipo: " + tipo + " categoria: " + categoria + " electrico: " + electrico + " color: " + color);
    }

    public void tocar(String cancion) {
        System.out.println("El instrumento " + tipo + " está tocando la canción " + cancion);
    }

    public String toJSON() {
        return "{" + "id: " + id + ", tipo: " + tipo + ", categoria: " + categoria + ", electrico: " + electrico + ", color: " + color + "}";
    }
}