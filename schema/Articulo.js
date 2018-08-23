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
    orden: Int,
  	tipo: String,
    valor: String,
  }
  input ArticuloEditable {
    titulo: String,
    portada: String,
    fecha: String,
    cuerpo: [CuerpoEditable]
  }
  input CuerpoEditable {
    id: Int!,
    tipo: String,
    valor: String,
  }
`

module.exports = Articulo
