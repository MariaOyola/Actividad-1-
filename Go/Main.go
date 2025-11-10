func main() {
	
	leon := NewAnimal(2, "pedro", 5)
	fmt.Println("El leon:")
	leon.MostrarDatos()

	perro := NewAnimal(3, "david", 4)
	perro.Comer("purina")

	fmt.Println("La suma es de", leon.Sumar(2, 6))


	fmt.Println("JSON DE ANIMAL:")
	fmt.Println(leon.ToJSON())

	fmt.Println("-----------------------------------------------------")

	cacion := NuevaCalculadora(true, true, 2)
	cama := NuevaCalculadora(false, false, 1)

	cacion.MostrarDatos()
	cama.MostrarDatos()

	fmt.Println("Mostrar multiplicación")
	fmt.Println("La multiplicación es:", cacion.Calcula(60, 2))

	fmt.Println("JSON como se usa")
	fmt.Println(cama.ToJSON())


fmt.Println("------------------------------------------------------")

	samuel := NuevoSamuel(1, 22, true)
	samuel.MostrarDatos()

	fmt.Println("ID desde acceso directo:", samuel.id)

	maria := NuevaMaria(2, 11, false)
	fmt.Println(maria.ToJSON())

	karol := NuevaKarol(3, 33, false)
	fmt.Println(karol.ToJSON())

	juan := NuevoJuan(4, 22, false)
	fmt.Println(juan.ToJSON())

	pauna := NuevaPauna(5, 12, false)
	fmt.Println(pauna.ToJSON())
}
