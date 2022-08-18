

let Nombre='Facundo'

let Apellido='Mariani'

const NombreApellido={'nombre':Nombre,'Apellido':Apellido}

console.log(NombreApellido)

//sessionStorage.setItem('usuario',JSON.stringify(NombreApellido))
//localStorage.setItem('usuario',JSON.stringify(NombreApellido))

let fecha=new Date()
document.cookie='NombreCaducidad=Cookie;expires='+new Date(fecha.setMinutes(fecha.getMinutes() + 2)).toUTCString()


/*La expresion muestra la hora actual mas 2 minutos
console.log(fecha.toUTCString())

console.log(new Date(fecha.setMinutes(fecha.getMinutes() + 2)).toUTCString())
*/

