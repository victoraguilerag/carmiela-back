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
    id: Int,
  	tipo: String,
  	fragmento: [Fragmento]
  }
  type Fragmento{
    id: Int,
    valor: String,
    fragmento_id: Int
  }
`

module.exports = Articulo
