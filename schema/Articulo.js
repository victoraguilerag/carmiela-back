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
    id: Int!,
    valor: String,
    fragmento_id: Int
  }
  input FragmentoEditable {
    id: Int,
    valor: String
  }
  input ArticuloEditable {
    titulo: String,
    fecha: String,
  }
  input CuerpoEditable {
    id: Int!,
    fragmento: [FragmentoEditable]
  }
`

module.exports = Articulo
