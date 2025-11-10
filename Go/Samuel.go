type Samuel struct {
	Persona
}

func NuevoSamuel(id int, edad int, genero bool) *Samuel {
	return &Samuel{Persona{id, edad, genero}}
}