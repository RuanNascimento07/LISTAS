const numeros = [10,50,100,202,30]
const filtro = numeros.filter ((n) => n < 100)
console.log(filtro)

lista = ["Ram", "S10", "Mustang", "F150", "F250"]
const ordenado = lista.sort()
console.log(ordenado)
const numerosOrdenados = numeros.sort((a,b) => {
  if (a < b) {
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  return 0;
})
console.log (numerosOrdenados)