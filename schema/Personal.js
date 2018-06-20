var Articulo = `
  type Personal {
  	id: Int,
  	nombre: String,
  	apellido: String,
  	correo: String,
  	telefono: String,
  	redes: [Redes]
  }
  type Redes {
    id: Int,
  	nombre: String,
  	url: String
  }
`

module.exports = Articulo
