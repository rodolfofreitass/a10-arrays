const numeros = [2, -4, 9, 1, -12, 5, 20]
const strings = ['carros','motos','barcos','avioes']
const mistos = [38, 11, -23, 'youtube', 'instagram', false, true]

const numerosCopia = numeros.slice()
const stringsCopia = strings.slice()
const mistosCopia = mistos.slice()

numerosCopia.push(10)
console.log('numeros:', numeros)
console.log('numerosCopia:', numerosCopia)

stringsCopia.pop()
console.log('strings:', strings)
console.log('stringsCopia:', stringsCopia)

mistosCopia.splice(1, 1)
console.log('mistos:', mistos)
console.log('mistosCopia:', mistosCopia)



