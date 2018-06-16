var experiencia = `
  type Experiencia {
    id: Int,
  	educacion: [FragmentoEducacion],
  	profesional: [Empresa],
  	skills: Skill
  }
  type FragmentoEducacion {
  	entidad: String,
  	titulo: String,
  	periodo: String
  }
  type Empresa {
    id: Int,
  	nombre: String,
  	periodo: String,
    descripcion: String,
  	social: FragmentoURL,
    link: [FragmentoURL],
  	posiciones: [Posicion]
  }

  type FragmentoURL {
  	nombre: String,
  	url: String,
  }
  type Posicion {
  	cargo: String,
  	resumen: [FragmentoPosicion],
  	descripcion: [FragmentoDescripcion]
  }

  type FragmentoPosicion {
  	tipo: String,
  	fragmento: String,
  	nombre: String,
  	url: String
  }
  type FragmentoDescripcion {
  	tipo: String,
  	fragmento: String,
  }

  type Skill {
  	principales: [SkillFragmento],
  	secundarios: [SkillFragmento]
  }
  type SkillFragmento {
  	skill: String,
  	descripcion: String
  }
`

module.exports = experiencia
