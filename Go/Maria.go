type Maria struct {
	Persona
}

func NuevaMaria(id int, edad int, genero bool) *Maria {
	return &Maria{Persona{id, edad, genero}}
