// Cadena de texto con nombre

let nombre = 'Patricio'

// Cadena de texto con apellido

let apellido = 'Carbone'

// Cadena de texto estudiante

let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

//  Cadena de texto en mayusculas

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

//  Cadena de texto en mayusculas

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Variable que cuenta caracteres

let estudianteCaracteres = estudiante.length
console.log(estudianteCaracteres)

// Variable con la primera letra del nombre

let letraNombre = nombre.charAt(0)
console.log(letraNombre)

// Variable ultima letra apellido

let letraApellido = apellido.charAt(6)
console.log(letraApellido)

// Variable cadena de texto sin espacio

let sinEspacio = estudiante.replace(/\s/g, '')
console.log(sinEspacio)

// Variable booleana que dice si nombre esta en estudiante

let contieneNombre = estudiante.includes(`${nombre}`)
console.log(contieneNombre)
