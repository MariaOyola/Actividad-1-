type Persona struct {
	id     int
	edad   int
	genero bool
}


func NuevaPersona(id int, edad int, genero bool) *Persona {
	return &Persona{id: id, edad: edad, genero: genero}
}


func (p *Persona) GetId() int {
	return p.id
}

func (p *Persona) GetEdad() int {
	return p.edad
}

func (p *Persona) GetGenero() bool {
	return p.genero
}


func (p *Persona) SetId(nuevoId int) {
	p.id = nuevoId
}

func (p *Persona) SetEdad(nuevaEdad int) {
	p.edad = nuevaEdad
}


func (p *Persona) MostrarDatos() {
	var g string
	if p.genero {
		g = "Masculino"
	} else {
		g = "Femenino"
	}
	fmt.Println("ID:", p.id, "| Edad:", p.edad, "| Género:", g)
}


func (p *Persona) Resta(a int, b int) int {
	resultado := a - b
	return resultado
}


func (p *Persona) ToJSON() string {
	return fmt.Sprintf("id: %d, edad: %d, genero: %t", p.id, p.edad, p.genero)
}
