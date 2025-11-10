type Karol struct {
	Persona
}

func NuevaKarol(id int, edad int, genero bool) *Karol {
	return &Karol{Persona{id, edad, genero}}
}
