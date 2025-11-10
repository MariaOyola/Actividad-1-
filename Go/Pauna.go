type Pauna struct {
	Persona
}

func NuevaPauna(id int, edad int, genero bool) *Pauna {
	return &Pauna{Persona{id, edad, genero}}
}