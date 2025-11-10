package main

import (
	"fmt"
)


type Calculadora struct {
	calcular  bool
	electrica bool
	id        int
}


func NuevaCalculadora(calcular bool, electrica bool, id int) *Calculadora {
	return &Calculadora{
		calcular:  calcular,
		electrica: electrica,
		id:        id,
	}
}


func (c *Calculadora) GetCalcular() bool {
	return c.calcular
}

func (c *Calculadora) GetElectrica() bool {
	return c.electrica
}

func (c *Calculadora) GetId() int {
	return c.id
}


func (c *Calculadora) SetCalcular(nuevaCalculadora bool) {
	c.calcular = nuevaCalculadora
}

func (c *Calculadora) SetElectrica(nuevoElectrico bool) {
	c.electrica = nuevoElectrico
}

func (c *Calculadora) SetId(nuevoId int) {
	c.id = nuevoId
}


func (c *Calculadora) MostrarDatos() {
	fmt.Println("calcular:", c.calcular, "electrica:", c.electrica, "id:", c.id)
}


func (c *Calculadora) Calcula(a int, b int) int {
	resultado := a * b
	return resultado
}


func (c *Calculadora) ToJSON() string {
	return fmt.Sprintf("calcular: %t, electrica: %t, id: %d", c.calcular, c.electrica, c.id)
}
