var Articulo = `
  type Articulo { 
  	id: Int,
  	portada: String,
  	titulo: String,
  	fecha: String,
  	previa: String,
  	cuerpo: [FragmentoArticulo]
  }
  type FragmentoArticulo {
  	tipo: String,
  	fragmento: [String]
  }
`

module.exports = Articulo