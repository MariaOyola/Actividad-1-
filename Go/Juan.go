type Juan struct {
	Persona
}

func NuevoJuan(id int, edad int, genero bool) *Juan {
	return &Juan{Persona{id, edad, genero}}
}