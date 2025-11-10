
type Animal struct {
	id     int
	nombre string
	edad   int
}


func NewAnimal(id int, nombre string, edad int) Animal {
	return Animal{id: id, nombre: nombre, edad: edad}
}


func (a Animal) GetId() int {
	return a.id
}

func (a Animal) GetNombre() string {
	return a.nombre
}

func (a Animal) GetEdad() int {
	return a.edad
}


func (a *Animal) SetId(nuevoId int) {
	a.id = nuevoId
}

func (a *Animal) SetNombre(nuevoNombre string) {
	a.nombre = nuevoNombre
}

func (a *Animal) SetEdad(nuevaEdad int) {
	a.edad = nuevaEdad
}


func (a Animal) MostrarDatos() {
	fmt.Println("id:", a.id, "nombre:", a.nombre, "edad:", a.edad)
}


func (a Animal) Comer(comida string) {
	fmt.Println("Animal:", a.nombre, "le gusta comer", comida)
}


func (a Animal) Sumar(num1 int, num2 int) int {
	return num1 + num2
}


func (a Animal) ToJSON() string {
	return fmt.Sprintf("{id: %d, nombre: %s, edad: %d}", a.id, a.nombre, a.edad)
}